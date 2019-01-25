const axios = require("axios");
const dotenv= require("dotenv").config();

// const dotenv = require("dotenv").config();
if (dotenv.error) {
  throw dotenv.error;
}

const nytKey = process.env.NYT_APIKEY;
const apiBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
// console.log(apiBase);

module.exports = {
  getNYTArticles: (req, res) => {
    var searchString = `${apiBase}?q=${req.params.searchTerm}&api-key=${nytKey}`
    console.log(searchString);
    
    axios.get(searchString)
      .then( (result) => {
        var articles = result.data.response.docs;
        var articleData = [];
        for (article of articles) {
          articleData.push({
            title: article.headline.main,
            date: article.pub_date,
            url: article.web_url
          });
        }
        res.json(articleData);
      })
      .catch((error) => {
        res.json(error);
      })
  }
}


