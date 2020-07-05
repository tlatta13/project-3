import axios from "axios";

const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
const APIKEY = "&apikey=YBQ1L57XJM2SZTUN";

export default {
    getStocks: function() {
      return axios.get("api/stocks", "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=&apikey=YBQ1L57XJM2SZTUN");
    }
};

