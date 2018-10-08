
import axios from "axios";

export default {

  searchArticle: function (searchterm, startdate, enddate) {
    const apikey = "cc1913c437914798b4d395d468749111";
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchterm + "&begin_date=" + startdate + "&end_date=" + enddate + "&api-key=" + apikey);
  },


  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },

  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  },

  getSavedArticle: function () {
    return axios.get("/api/articles");
  },
};
