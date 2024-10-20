const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

cmd(
  {
    pattern: 'panel',
    desc: 'get bot command list.',
    category: 'main',
    react: '😒',
    filename: __filename,
  },
  async (
    botInstance,
    message,
    argsObject,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      query,
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
      isBotAdmin,
      isAdmin,
      reply,
    }
  ) => {
    try {
      const envConfig = await readEnv();
      const commandCategories = {
        download: '',
        main: '',
        group: '',
        tools: '',
        convert: '',
        search: '',
        economy: '',
        fun: '',
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          commandCategories[commands[i].category] +=
            `${envConfig.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let menuMessage = `==🪐  ●● Queen D Menu ●● ✨==\n\n§§§§§§§§§§§§§§§§§§§§§§§§§§====================\n**Hello ${pushname}**\n\n| ● *Queen D Wa Bot is Here.* 👾\n<□□□□□□□□□□□=====================\n\n◙◙➔\n🕵️‍♂️ ● Download Command\n────────\n ${commandCategories.download}\n◙◙➔\n\n◙◙➔\n📜 MAIN COMMANDS\n────────\n ${commandCategories.main}\n◙◙➔\n\n◙◙➔\n💎 ● Group Commands\n────────\n ${commandCategories.group}\n◙◙➔\n\n◙◙➔\n⚙️Owner Commands\n────────\n \n◙◙➔\n\n◙◙➔\n🤖AI COMMANDS\n────────\n \n◙◙➔\n\n◙◙➔\n🔧 Tools Commands\n────────\n ${commandCategories.tools}\n◙◙➔\n\n◙◙➔\n🛠️Convert Commands\n────────\n ${commandCategories.convert}\n◙◙➔\n\n◙◙➔\n💣Search Commands\n────────\n ${commandCategories.search}\n◙◙➔\n\n◙◙➔\n💰ECONOMY COMMANDS\n────────\n ${commandCategories.economy}\n◙◙➔\n\n◙◙➔\n❤️FUN COMMANDS\n────────\n ${commandCategories.fun}\n◙◙➔\n\n> Powered By Asᴍᴏᴅᴇᴜs Eᴘᴢɪ... 🔧`;

      await botInstance.sendMessage(
        from,
        {
          audio: {
            url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0251.mp3',
          },
          mimetype: 'audio/mp4',
          ptt: true,
        },
        { quoted }
      );

      await botInstance.sendMessage(
        from,
        {
          image: { url: 'https://i.ibb.co/Pr4BfhZ/1500x1500.png' },
          caption: menuMessage,
        },
        { quoted }
      );
    } catch (error) {
      console.log(error);
      reply(`Error: ${error}`);
    }
  }
);
