const express = require('express')
const app = express()

app.get('/2', (req, res) => res.send('2'))

// /3?order=sometext
app.get('/3', (req, res) => {
    res.send(req.query.order);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))