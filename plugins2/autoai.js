const fs = require('fs'),
  path = require('path'),
  { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command'),
  { fetchJson } = require('../lib/functions');

cmd(
  { on: 'body' },
  async (
    message,
    chat,
    replyFunction,
    { from: sender, body: messageBody, isOwner: isUserOwner }
  ) => {
    try {
      const environmentVariables = await readEnv();
      if (environmentVariables.AUTO_AI === 'true') {
        if (isUserOwner) {
          return;
        }
        let response = await fetchJson(
            'https://chatgptforprabath-md.vercel.app/api/gptv1?q=' + messageBody
          ),
          replyMessage = response.data;
        await replyFunction.reply(replyMessage);
      }
    } catch (error) {
      console.log(error);
      await replyFunction.reply('Error: ' + error.message);
    }
  }
);
