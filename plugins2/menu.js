const { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command')

cmd(
  {
    pattern: 'menu',
    react: '🗃️',
    alias: ['panel'],
    desc: "Get bot's command list.",
    category: 'main',
    use: '.menu',
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
      let menuMessage =
        `\n👋 Hello ${pushname}\n\n> 👨‍💻 🇱🇰\n\n👨🏻‍💻⚙️ *Bot Name*: Queen D 💋\n👨🏻‍💻⚙️ *Creator*: Asᴍᴏᴅᴇᴜs Eᴘᴢɪ 🐱‍👤\n👨🏻‍💻⚙️ *Version*: 1.2.0💫\n👨🏻‍💻⚙️ *Insta*: https://www.instagram.com/yuren.sasanka/ 💫\n\n*🔗 Click on the following commands to get full menu..*\n\n/////////////////////////////////////////////////////////\n\n> 📩 Get Download commands..\n\n*.downloads*\n\n> 💻 To Get MAIN commands..\n\n*.main*\n\n> 💎 To Get Group Commands..\n\n*.groupmenu*\n\n> ⚙️ To Get Owner Command..\n\n*.ownermenu*\n\n> 📢 To Get All Commands..\n\n*.panel*\n\n> 🤖 To Get AI COMMANDS...\n\n*.aimenu*\n\n> 🧰 To Get Tools Commands..\n\n*.tools*\n\n> 🛠️ To Get Convert Commands..\n\n*.convert*\n\n> 💥 To Get Search Commands..\n\n*.search*\n\n> To GET ECONOMY COMMANDS..\n\n*.economy*\n\n> 💕 To Get FUN COMMANDS..\n\n*.fun*\n\n> ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ ..\n`;

      await bot.sendMessage(
        from,
        {
          audio: {
            url: 'https://github.com/VajiraTech/IZUMI-AUTO-VOICER/raw/main/hi.mp3',
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
          caption: menuMessage,
        },
        { quoted: message }
      );
    } catch (error) {
      console.log(error);
      reply(`${error}`);
    }
  }
);
