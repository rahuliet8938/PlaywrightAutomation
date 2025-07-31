const axios = require('axios');
const settings = require('../config/settings.json');

const apiClient = axios.create({
  headers: {
    Authorization: `Bearer ${settings.secret}`
  }
});

module.exports = apiClient;