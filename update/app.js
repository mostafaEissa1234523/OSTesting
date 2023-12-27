var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello new update!\n');
});

app.listen(8080, function () {
  console.log('Example app  on port 8080!');
});

