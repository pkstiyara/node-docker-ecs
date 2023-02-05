const express = require('express')
const app = express()
const port = 3300

app.get('/', (req, res) => res.send('Well Done Priyanshu'))
app.listen(port, () => console.log('Example app listing on port ${port} ! '))