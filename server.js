
var express = require('express');
var app = express();
var path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
