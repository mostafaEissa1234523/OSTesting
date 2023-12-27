var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello from update 2!\n');
});

app.get('/update', function (req, res) {
    res.send('Hello new update1!\n');
  });
  
app.listen(8080, function () {
  console.log('Example app  on port 8080!');
});

