const express = require('express')
const app = express()
const port = 2000

app.use(express.static('client'))

app.post('/csv', (req, res) => {
  res.send('Got post')
})

app.listen(port, () => console.log(`app listening on port ${port}`))

