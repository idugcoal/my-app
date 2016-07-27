var express = require('express');
var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

var api = require('../secret');
console.log(api);

app.post('/', (req, res) => {
  console.log('req.params', req.body, req.params);
  res.send('hello world');

});

app.listen(3001, () => {
  console.log('listening on port 3001');
});