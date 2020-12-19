const express = require('express')
const config = require('config')
const PORT = config.get('port')
const app = express()

app.get('/', (req, res) => {
    console.log('Recieved a GET request')
    res.status(200).send()
})

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})