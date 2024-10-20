const { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'fun',
    desc: 'get bot fun cmd.',
    category: 'fun',
    react: '\uD83D\uDCE9',
    filename: __filename,
  },
  async (
    _0x4f09a4,
    _0x432604,
    _0x2ab794,
    {
      from: _0x158be1,
      quoted: _0x48259d,
      body: _0x165a66,
      isCmd: _0x460ed5,
      command: _0x33eda9,
      args: _0x59eaea,
      q: _0x369a9f,
      isGroup: _0xa155a3,
      sender: _0x193b9e,
      senderNumber: _0x28421f,
      botNumber2: _0x1109a7,
      botNumber: _0x4ba01f,
      pushname: _0x3226f3,
      isMe: _0x25c905,
      isOwner: _0x5c831c,
      groupMetadata: _0x181c87,
      groupName: _0x3cd111,
      participants: _0x934c1e,
      groupAdmins: _0x5a93a3,
      isBotAdmins: _0x314c2b,
      isAdmins: _0x147a11,
      reply: _0x37327b,
    }
  ) => {
    try {
      const _0x3b232c = await readEnv()
      for (let _0x4f7080 = 0; _0x4f7080 < commands.length; _0x4f7080++) {
        commands[_0x4f7080].pattern &&
          !commands[_0x4f7080].dontAddCommandList &&
          (_0x4da8b5[commands[_0x4f7080].category] +=
            '' + _0x3b232c.PREFIX + commands[_0x4f7080].pattern + '\n')
      }
      let _0x49c5c9 =
        '\n*\uD83D\uDC4B Hello ' +
        _0x3226f3 +
        '*\n\n> \uD83D\uDC68‍\uD83D\uDCBB \u200B\uD83C\uDDF9\u200B\u200B\uD83C\uDDED\u200B\u200B\uD83C\uDDEA\u200B\u200B\uD83C\uDDF3\u200B\u200B\uD83C\uDDFA\u200B-\u200B\uD83C\uDDF2\u200B\u200B\uD83C\uDDE9\u200B \u200B\uD83C\uDDF2\u200B\u200B\uD83C\uDDEA\u200B\u200B\uD83C\uDDF3\u200B\u200B\uD83C\uDDFA\u200B\uD83D\uDC68‍\uD83D\uDCBB\n\n\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB\u269F *ɴᴀᴍᴇ ʙᴏᴛ* : Epzige cudu Nona🔮\n👨‍💻✨ *ᴄʀᴇᴀᴛᴏʀ* : ʙʏ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ 🐱‍👤\n👨‍💻✨*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)\uD83D\uDCAB\n\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB\u269F *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 \uD83D\uDCAB\n\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n\u2502\uD83D\uDCDC FUN COMMANDS\n\u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n' +
        '' +
        '\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n  '
      await _0x4f09a4.sendMessage(
        _0x158be1,
        {
          audio: {
            url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0236.mp3',
          },
          mimetype: 'audio/mp4',
          ptt: true,
        },
        { quoted: _0x432604 }
      )
      await _0x4f09a4.sendMessage(
        _0x158be1,
        {
          image: { url: 'https://i.ibb.co/Pr4BfhZ/1500x1500.png' },
          caption: _0x49c5c9,
        },
        { quoted: _0x432604 }
      )
    } catch (_0x4ee9dd) {
      console.log(_0x4ee9dd)
      _0x37327b('' + _0x4ee9dd)
    }
  }
)
