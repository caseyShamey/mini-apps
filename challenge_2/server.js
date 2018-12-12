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
  res.send(convertToCsv(JSON.parse(req.body.formData)))
})

var convertToCsv = (data) => {
  var results = [];
  var keys = [];
  //use recursion to flatten into array of objects
  var arr = flatten(data)
  arr.forEach(el => {
    delete el.children
  })
  //get titles of csv table from object keys
  for (var key in arr[0]) {
    keys.push(key)
  }
  results.push(
    function() {
      var keyStr = ''
      keys.forEach(el => {
        keyStr += ',' + el
      })
      return keyStr.substr(1)
    }()
  )
  //for each element get properly formatted list
  arr.forEach(el => {
    reduceObj(el, results);
  })
  return results;
}

var reduceObj = (obj, resultsArr) => {
  var str = "";
  for (var el in obj) {
    str += ',' + obj[el]
  }
  resultsArr.push(str.substr(1))
}

var flatten = (data, results = []) => {
  console.log('data', typeof data)
  results.push(data);
  if (data.children.length > 0) {
    data.children.forEach(child => {
      flatten(child, results)
    })
  }
  return results;
}



app.listen(port, () => console.log(`app listening on port ${port}`))

