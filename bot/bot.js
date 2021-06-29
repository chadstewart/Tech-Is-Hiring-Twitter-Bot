// Our Twitter library
const Twit = require("twit");

// We need to include our configuration file...
const twit = new Twit(require("./config.js"));

const stream = twit.stream('statuses/filter', {track: '#TechIsHiring'});

function responseCallback (err, data, response) {
  console.log(err);
 }

 stream.on('tweet', tweet => {
  // retweet
 twit.post('statuses/retweet/:id', {id: tweet.id_str}, responseCallback);
 // like
 twit.post('favorites/create', {id: tweet.id_str}, responseCallback);
});