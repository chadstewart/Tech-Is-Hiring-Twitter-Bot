## TechIsHiring Reweet Bot 

Likes and retweets the latest tweet using the **"#TechIsHiring"** hashtag. 

### Install dependencies

```bash
npm install
```
 
### Connecting to Twitter 

 - Create a Twitter App on Twitter Developers : [https://apps.twitter.com/app/new ](https://apps.twitter.com/app/new). 
 
 - Next you'll see a screen with a "Details" tab. Setup the App and "Application Type", choose "Read and Write". 

Create a `'config.env'` file in the config folder. The config.env must contain:

```.env
API_KEY=*Your API Key*
API_SECRET_KEY=*Your API Secret Key*
ACCESS_TOKEN=*Your Access Token*
ACCESS_TOKEN_SECRET=*Your Access Token Secret*
```

In the appropriate section, paste the appropriate info from the Details page.

### Run the app

Now type the following in the command line.
 
```bash
node bot.js
``` 

### Note

App is built to be deployed on heroku. Ensure to set the environment variables on the heroku server this is deployed to.

### Thanks

Thanks to [Maye Edwin](https://github.com/mayeedwin) and [Deven Rathore](https://github.com/Dunebook) for the resources they shared that was used to create this bot.