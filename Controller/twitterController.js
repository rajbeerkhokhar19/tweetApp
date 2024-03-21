// twitterController.js
const TwitterModel = require("../Model/twitterModel");

class TwitterController {
  constructor() {
    this.twitterModel = new TwitterModel();
  }

  async createTweet(text) {
    try {
      // Append a timestamp to make the tweet unique
      const uniqueText = `${text} ${new Date().toISOString()}`;
      await this.twitterModel.tweet(uniqueText);
      return "Tweet created successfully";
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TwitterController;