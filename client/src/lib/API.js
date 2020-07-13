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
      return axios.get('/api/expense', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    post: function (authToken,expense) {
      return axios.post('/api/expense', expense, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
        });
    }
  
  },

  // Get all income
  Income: {
    getAll: function (authToken) {
      return axios.get('/api/income', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    post: function (authToken,income) {
      return axios.post('/api/income', income, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },
  
  // Get all savings
  Savings: {
    getAll: function (authToken) {
      return axios.get('/api/savings', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    post: function (authToken,savings) {
      return axios.post('/api/savings', savings, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
        });
    }
  },
  Stock: {
    get:function(){
      return axios.get('/api/stock')
    }
  }
}

