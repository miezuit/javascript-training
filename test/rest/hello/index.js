const express = require('express')
const app = express()
const port = 3000

response = {message: 'Hello World!'}
app.get('/', (req, res) => res.send(response))

app.listen(
    port, 
    () => console.log(`Example app listening at http://localhost:${port}`)
)