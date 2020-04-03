const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))


app.use(express.static('dist'))
// app.use('/tracemon', express.static('dist'))

app.listen(2345, () => console.log('Example app listening on port 2345!'))