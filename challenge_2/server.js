const express = require('express')
const app = express()
const port = 2000
const bodyParser = require('body-parser')
const jsdom = require("jsdom");
const $ = require("jquery")(new jsdom.JSDOM().window)
const ObjectsToCsv = require('objects-to-csv')



app.use(express.static('client'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.post('/csv', (req, res) => {
  //console.log('req.body', req.body)
  var arrayData = [req.body]
  printCsv(arrayData)
})

var convertToCsv = (data) => {
  //use recursion to flatten into array of objects
  //create an array of keys
  //set each key equal to an object with single key value pair key and array
  //if the value is equal to

  var keys = [];
  var values = [];
  for (var i in data) {

    this[i] = {i: [data[i]]}
    keys.push(this[i])
  }
  return keys
}


app.listen(port, () => console.log(`app listening on port ${port}`))

