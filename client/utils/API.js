import axios from "axios";

module.exports = {
  // Get all saved articles
  getArticles: () => {
    return axios.get("/api/articles");
  },
  
  // Get the article with a specific id
  getArticle: (id) => {
    return axios.get(`/api/articles/${id}`);
  },

  // Save an article
  saveArticle: (articleData) => {
    return axios.post("/api/articles", articleData);
  },

  // Delete an article
  deleteArticle: (id) => {
    return axios.delete(`/api/articles/${id}`);
  }
};