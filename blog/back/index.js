const mysql = require("mysql")
const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bearerToken = require('express-bearer-token')
const port = 8000
const uri = `http://localhost:${port}`
const secret = 'wadc43298923wufwuiasdasadas'

const app = express()
app.use(express.json())
app.use(cors())
app.use(bearerToken())

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "blog"
})

con.connect((err) => {
    if (err) throw err
    console.log("Connected to MySQL")
})

// genereaza un token de login
function generateToken(email) {
    let data = {
        email: email
    }
    return jwt.sign(data, secret)
}
// verificam ca utilizatorul este logat
// adica are un token valid
function verifyLogin(req, res) {
   try {
        jwt.verify(req.token, secret)
   } catch(err) {
        res.sendStatus(401)
        return false
   }
   return true
}

// inregistreaza rutele

// sign-up
app.post("/user", (req, res) => {
    con.query(
        'INSERT INTO users VALUES(NULL, ?, ?, sha1(?))',
        [req.body.email, req.body.name, req.body.password]
    )
    res.sendStatus(200)
})
app.get("/user/login", (req, res) => {
    let email = req.query.email
    let password = req.query.password

    con.query(
        'SELECT * FROM users WHERE email = ? AND password = sha1(?)',
        [email, password],
        (err, result) => {
            if (result.length > 0) {
                res.status(200)
                   .send({
                        token: generateToken(email),
                        name: result[0].name,
                        email: result[0].email
                })
            }
            else res.sendStatus(400)
        }
    )
})
app.post("/posts", (req, res) => {
    if (!verifyLogin(req, res)) {
        return
    }
    con.query(
        'INSERT INTO posts VALUES(NULL, ?, ?, NOW())',
        [req.body.title, req.body.content]
    )
    res.sendStatus(200)
})
app.get("/posts/:id", (req, res) => {
    if (!verifyLogin(req, res)) {
        return
    }
    con.query(
        'SELECT * FROM posts WHERE id = ?',
        [req.params.id],
        (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result)
        }
    )    
})
app.delete("/posts/:id", (req, res) => {
    if (!verifyLogin(req, res)) {
        return
    }
    con.query(
        'DELETE FROM posts WHERE id = ?',
        [req.params.id],
        (err, result) => {
            if (err) {
                res.sendStatus(500)
                throw err
            }
            res.sendStatus(200)
        }
    )
})
app.get("/posts", (req, res) => {
    if (!verifyLogin(req, res)) {
        return
    }
    con.query(
        'SELECT * FROM posts',
        [],
        (err, result) => {
            if (err) {
                throw err
            }
            res.status(200).send(result)
        }
    )
})
app.put("/posts/:id", (req, res) => {
    if (!verifyLogin(req, res)) {
        return
    }
    con.query(
        'UPDATE posts SET title = ?, content = ? WHERE id = ?',
        [req.body.title, req.body.content, req.params.id],
        (err, result) => {
            if (err) {
                throw err
            }
            res.sendStatus(200)
        }
    )
})

// porneste aplicatia server
app.listen(
    port, () => console.log(`Server started on ${uri}`)
)

