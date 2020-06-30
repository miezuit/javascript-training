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

POST /contact HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 53

email=scott@mail.com&name=Scott&message=Let us meet!

const express = require('express');
const bodyParser = require('body-parser');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));