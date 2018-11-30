const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');


app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   var list = ["item1", "item2", "item3"];
//   res.json(list);
//   console.log('Send list of items');
// });

/*

*/

app.listen(port, () => {
  console.log('Checkout app listening on port ' + port);
});

