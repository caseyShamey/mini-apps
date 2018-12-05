const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('mysql');
var hook;




const connection = db.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1212',
  database: 'checkout'
});


app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())


connection.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!')
  }
})


app.get('/confirm', (req, res) => {
  var qString = 'select * from user where email = ?';
  connection.query(qString, [hook], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Request Sent', result)
      res.send(result)
    }
  })
  //res.send(result)
})

app.post('/F', (req, res) => {
  var info = req.body;
  delete info.current
  delete info.location
  delete info.next
  hook = info.email
  //console.log('info', info)
  var queryString = 'insert into user (firstName, lastName, email, password, streetAddress, cityStateZip, phoneNum, ccNum, expirDate, zip) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(queryString, [info.firstName, info.lastName, info.email, info.password, info.streetAddress, info.cityStateZip, info.phoneNum, info.ccNum, info.expirDate, info.zip], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Done!', result)
    }
  })
  res.send('Successfully posted')
})

/*

*/

app.listen(port, () => {
  console.log('Checkout app listening on port ' + port);
});

