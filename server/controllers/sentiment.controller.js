

const Sentiment = require('sentiment');
const sentiment= new Sentiment();

exports.analyzeSentiment = (req, res) => {

    const {text} = req.body;
    //perform sentiment analsysis using you chosen algorythm
    //...here VADER algorythm is used from the sentiment library
    const result = sentiment.analyze(text);
    const sentimentScore = result.score;

    //sent the sentiment score back to the client as a json object
    res.json({ score: sentimentScore});
};