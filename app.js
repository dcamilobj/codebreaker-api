var express = require('express');
var CodeBreaker = require('./main')

var app = express();
app.set('port',(process.env.PORT || 3000));

app.get('/setsecret/:secret', function(req,res )
{
  number = req.params.secret
  CodeBreaker.setSecret(number)
  res.send({
    message: 'ok, let the game begin'
  })
});


app.get('/guess/:secret', function(req,res )
{
  number = req.params.secret
  res.send({
    response: CodeBreaker.guess(number)
  })
});

app.listen(app.get('port'), function(){
  console.log("NodeJs app listen on port", app.get('port'));
})
