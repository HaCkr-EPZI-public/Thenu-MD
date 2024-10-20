const { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'convert',
    desc: 'get bot convert cmd.',
    category: 'convert',
    react: '\uD83D\uDCE9',
    filename: __filename,
  },
  async (
    _0xbc8d30,
    _0x5aad1b,
    _0x3497b9,
    {
      from: _0xc65ab8,
      quoted: _0x2a156f,
      body: _0x2b877c,
      isCmd: _0xa31223,
      command: _0x24b18e,
      args: _0x2e3042,
      q: _0x4787d2,
      isGroup: _0xf662bb,
      sender: _0x435f96,
      senderNumber: _0x2c11ec,
      botNumber2: _0x51dd71,
      botNumber: _0x29a438,
      pushname: _0x1731e8,
      isMe: _0x6f4725,
      isOwner: _0x2dfe19,
      groupMetadata: _0x200f22,
      groupName: _0x5aeb75,
      participants: _0x1deef4,
      groupAdmins: _0x4e3c1e,
      isBotAdmins: _0x2bf5f9,
      isAdmins: _0x3d2518,
      reply: _0xc3ce45,
    }
  ) => {
    try {
      const _0x23f94e = await readEnv()
      for (let _0x4765a3 = 0; _0x4765a3 < commands.length; _0x4765a3++) {
        commands[_0x4765a3].pattern &&
          !commands[_0x4765a3].dontAddCommandList &&
          (_0x3026f9[commands[_0x4765a3].category] +=
            '' + _0x23f94e.PREFIX + commands[_0x4765a3].pattern + '\n')
      }
      let _0x47c109 =
        '\n*\uD83D\uDC4B Hello ' +
        _0x1731e8 +
        '*\n\n> \uD83D\uDC68‍\uD83D\uDCBB \u200B\uD83C\uDDF9\u200B\u200B\uD83C\uDDED\u200B\u200B\uD83C\uDDEA\u200B\u200B\uD83C\uDDF3\u200B\u200B\uD83C\uDDFA\u200B-\u200B\uD83C\uDDF2\u200B\u200B\uD83C\uDDE9\u200B \u200B\uD83C\uDDF2\u200B\u200B\uD83C\uDDEA\u200B\u200B\uD83C\uDDF3\u200B\u200B\uD83C\uDDFA\u200B\uD83D\uDC68‍\uD83D\uDCBB\n\n\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB\u269F *ɴᴀᴍᴇ ʙᴏᴛ* : Epzige Cudu Nona🔮\n👨‍💻✨ *ᴄʀᴇᴀᴛᴏʀ* : ʙʏ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ 🐱‍👤\n👨‍💻✨*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)\uD83D\uDCAB\n\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB\u269F *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94759554531 \uD83D\uDCAB\n\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n\u2502\uD83D\uDCDC CONVERT COMMANDS\n\u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n' +
        _0x3026f9.convert +
        '\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n  '
      await _0xbc8d30.sendMessage(
        _0xc65ab8,
        {
          audio: {
            url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0208.mp3',
          },
          mimetype: 'audio/mp4',
          ptt: true,
        },
        { quoted: _0x5aad1b }
      )
      await _0xbc8d30.sendMessage(
        _0xc65ab8,
        {
          image: { url: 'https://i.ibb.co/Pr4BfhZ/1500x1500.png' },
          caption: _0x47c109,
        },
        { quoted: _0x5aad1b }
      )
    } catch (_0x5c7f04) {
      console.log(_0x5c7f04)
      _0xc3ce45('' + _0x5c7f04)
    }
  }
)
