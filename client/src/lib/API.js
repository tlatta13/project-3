import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (email, password) {
      return axios.post('/api/users', { email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get('/api/secrets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  // Get all expenses
  Expense: {
    getAll: function (authToken) {
      return axios.getAll('/api/expense', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    post: function (authToken,expense) {
      return axios.post('/api/expense', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        expense
        });
    }
  
  },

  // Get all income
  Income: {
    getAll: function (authToken) {
      return axios.getAll('/api/income.getAll', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    post: function (authToken,income) {
      return axios.post('/api/income', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        income
        });
    }
  },
  
  // Get all savings
  Savings: {
    getAll: function (authToken) {
      return axios.getAll('/api/savings', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    post: function (authToken,savings) {
      return axios.post('/api/savings', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        savings
        });
    }
  }
}

// axios({
//   "method":"GET",
//   "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary",
//   "headers":{
//   "content-type":"application/octet-stream",
//   "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
//   "x-rapidapi-key":"REACT_APP_API_KEY",
//   "useQueryString":true
//   },"params":{
//   "region":"US",
//   "lang":"en"
//   }
//   })
//   .then((response)=>{
//     console.log(response)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })

