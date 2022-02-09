const Twit = require("twit");
const banned = require("./banned/banned.js");
const twit = new Twit(require("./config/config.js"));

const stream = twit.stream("statuses/filter", { track: "#TechIsHiring" });

function responseCallback(err, data, response) {
  console.log(err);
}

stream.on("tweet", (tweet) => {
  const isNotBanned = !banned.includes(tweet.user.id_str);

  if (isNotBanned) {
    // retweet
    twit.post("statuses/retweet/:id", { id: tweet.id_str }, responseCallback);
    // like
    twit.post("favorites/create", { id: tweet.id_str }, responseCallback);
  } else {
    console.log(`${tweet.user.name} is banned`);
  }
  
});