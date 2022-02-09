const Twit = require("twit");
const banned = require("./banned/banned.js");
const twit = new Twit(require("./config/config.js"));

const stream = twit.stream("statuses/filter", { track: "#TechIsHiring" });

function responseCallback(err, data, response) {
  console.log(err);
}

stream.on("tweet", (tweet) => {
  console.log(tweet);

  const isNotBanned = checkIfBanned(tweet);

  if (isNotBanned) {
    // retweet
    twit.post("statuses/retweet/:id", { id: tweet.id_str }, responseCallback);
    // like
    twit.post("favorites/create", { id: tweet.id_str }, responseCallback);
  } else {
    console.log(`${tweet.user.name} is banned!`);
  }
  
});

function checkIfBanned(tweet) {
  if("retweeted_status" in tweet) {
    return !(banned.includes(tweet.user.id_str) || banned.includes(tweet.retweeted_status.user.id_str));
  }

  return !banned.includes(tweet.user.id_str);
}