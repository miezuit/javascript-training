const express = require('express')
const app = express()
const port = 3000
const serverUri = `http://localhost:${port}`

const redis = require("redis");
const client = redis.createClient();

function shortify(longUri) {
    const shortKey = Math.random().toString(16).substr(2, 8)
    client.set(shortKey, longUri, redis.print)
    console.log(shortKey)
    console.log(longUri)
    const shortUri = serverUri + '/' + shortKey
    return {shortUri}
}

function getLongUri(shortKey, res) {
    console.log(shortKey)
    client.get(shortKey, (err, longUri) => res.send({longUri}))
}

app.use(express.json())

app.post('/', (req, res) => res.send(shortify(req.body.longUri)))
app.get('/:shortKey', (req, res) => getLongUri(req.params.shortKey, res))

app.listen(
    port, 
    () => console.log(`Example app listening at http://localhost:${port}`)
)

{
    "shortUri": "http://localhost:3000/abc123"
}