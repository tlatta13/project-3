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
  Expense: {
    getAll: function (authToken) {
      return axios.get('/api/expense', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },
  Income: {
    getAll: function (authToken) {
      return axios.get('/api/income', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },
  Savings: {
    getAll: function (authToken) {
      return axios.get('/api/savings', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  }
}

