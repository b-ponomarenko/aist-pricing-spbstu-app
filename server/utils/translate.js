const fetch = require('node-fetch');
const config = require('../config');

module.exports = {
  async translate(text = '') {
    return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${config.translateApiKey}&lang=ru-en`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `text=${text.toLowerCase()}`
    })
      .then(res => res.json())
  }
};