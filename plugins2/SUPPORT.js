const config = require('../config'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'support',
    desc: 'To get the bot informations.',
    react: '\uD83D\uDC68‍\uD83D\uDE80',
    category: 'main',
    filename: __filename,
  },
  async (
    _0x4a1be3,
    _0x54ef6a,
    _0x277493,
    {
      from: _0x1e279a,
      quoted: _0x8dc33f,
      body: _0x344f11,
      isCmd: _0x5e9990,
      command: _0x391c4f,
      args: _0x33a92b,
      q: _0x4aff84,
      isGroup: _0x550377,
      sender: _0x4cc861,
      senderNumber: _0x5a400f,
      botNumber2: _0x2c2dfc,
      botNumber: _0x476f1d,
      pushname: _0x2f90fc,
      isMe: _0x4d50bd,
      isOwner: _0x5ba0dc,
      groupMetadata: _0x1b2510,
      groupName: _0x19e366,
      participants: _0x3bf47a,
      groupAdmins: _0x1d5604,
      isBotAdmins: _0x3bbd34,
      isAdmins: _0x3d3533,
      reply: _0x19803d,
    }

   ) => {
    try {
      let greetingMessage =
        ' *👋 Hello ' +
        userName +
        '*\n\n*⚙️ Epzi V1 Support⚙️*\n\n*Whatsapp Group Link:* https://chat.whatsapp.com/C4uV5P7ZvrS85lUzCoZzx7\n\n> ➞➞ ◦●◉ ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ ◉●◦ ➡'
    } catch (error) {
      console.log(error)
      sendErrorMessage('' + error)
    }
  }

)
