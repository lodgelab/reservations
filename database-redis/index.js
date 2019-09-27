var redis = require(‘redis’);
const details = require('./index.config.js');

var redisHost = details.host;
var redisPort = details.port;
var redisAuth = details.password;

var client = redis.createClient ({
  port : redisPort,
  host : redisHost
});

client.auth(redisAuth, function(err, response){
  if(err){
    throw err;
  }
});

client.set(‘foo’,’bar’);
client.get(‘foo’, function(err, response){
if(err) {
  throw err;
}   else{
  console.log('connected to redis', response);
}
});