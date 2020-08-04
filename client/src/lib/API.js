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

  // Expense Routes
  Expense: {
    // Get all expenses
    getAll: function (authToken) {
      return axios.get('/api/expense', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    // Add new expense
    post: function (authToken, expense) {
      return axios.post('/api/expense', expense, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
        });
    },
    // Delete expense
    delete: function (authToken, expensesid) {
      return axios.delete(`/api/expense/${expensesid}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  // Income Routes
  Income: {
    // Get all income
    getAll: function (authToken) {
      return axios.get('/api/income', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    // Add new income
    post: function (authToken, income) {
      return axios.post('/api/income', income, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    delete: function (authToken, incomesid) {
      return axios.delete(`/api/income/${incomesid}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
        });
    },
  },
  
  // Savings Routes
  Savings: {
    // Get all savings
    getAll: function (authToken) {
      return axios.get('/api/savings', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    // Add new savings
    post: function (authToken, savings) {
      return axios.post('/api/savings', savings, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
        });
    },
    // delete savings
    delete: function (authToken, savingsid) {
      return axios.delete(`/api/savings/${savingsid}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
        });
    },
  },
  
  // Get stock data
  Stock: {
    get:function(){
      return axios.get('/api/stock')
    }
  }
}

