const { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command')

cmd(
  {
    pattern: 'ownermenu',
    desc: 'get bot owner cmd.',
    category: 'owner',
    react: '📩',
    filename: __filename,
  },
  async (
    bot,
    message,
    client,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const env = await readEnv();
      const commandList = {};

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          commandList[commands[i].category] =
            (commandList[commands[i].category] || '') +
            `${env.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let ownerMenuMessage =
        `\n👋 Hello ${pushname}\n\n> 👨‍💻 🇱🇰\n\n👨🏻‍💻⚙️ *Bot Name*: Queen D 💋\n👨🏻‍💻⚙️ *Creator*: Asᴍᴏᴅᴇᴜs Eᴘᴢɪ 🐱‍👤\n👨🏻‍💻⚙️ *Version*: 1.2.0 (Added features)💫\n👨🏻‍💻⚙️ *Insta*: https://www.instagram.com/yuren.sasanka/ 💫\n\n┌───────────────\n│📑 OWNER COMMANDS\n│───────────────\n${commandList.owner}\n└───────────────`;

      await bot.sendMessage(
        from,
        {
          audio: {
            url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0233.mp3',
          },
          mimetype: 'audio/mp4',
          ptt: true,
        },
        { quoted: message }
      );

      await bot.sendMessage(
        from,
        {
          image: { url: 'https://i.ibb.co/Pr4BfhZ/1500x1500.png' },
          caption: ownerMenuMessage,
        },
        { quoted: message }
      );
    } catch (error) {
      console.log(error);
      reply(`${error}`);
    }
  }
);
