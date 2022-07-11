const axios = require("axios").default;
require('dotenv').config();

const message = 'Message Goes Here';

const botToken = process.env.BOT_TOKEN;
const postToChatId = process.env.CHAT_ID;

const options = {
  method: 'POST',
  url: 'https://api.telegram.org/bot' + botToken + '/sendMessage',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  data: {
    text: message,
    parse_mode: 'Markdown',
    disable_web_page_preview: false,
    disable_notification: false,
    reply_to_message_id: null,
    chat_id: postToChatId
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
