const { readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');

cmd(
  {
    pattern: 'alive',
    desc: 'Check if the bot is online.',
    category: 'main',
    react: '💗',
    filename: __filename,
  },
  async (
    botInstance,
    message,
    argsUsed,
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
      const envData = await readEnv();
      return (
        await botInstance.sendMessage(
          from,
          {
            audio: {
              url: 'https://github.com/ravindu01manoj/Sew-Queen/raw/refs/heads/master/VoiceClip/alive.mp3',
            },
            mimetype: 'audio/mp4',
            ptt: true,
          },
          { quoted: message }
        ),
        await botInstance.sendMessage(
          from,
          {
            image: { url: envData.ALIVE_IMG },
            caption: envData.ALIVE_MSG,
          },
          { quoted: message }
        )
      );
    } catch (error) {
      console.log(error);
      reply('' + error);
    }
  }
);
