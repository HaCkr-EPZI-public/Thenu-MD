const { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'economy',
    desc: 'get bot economy cmd.',
    category: 'economy',
    react: '\uD83D\uDCE9',
    filename: __filename,
  },
  async (
    _0x2c0763,
    _0x2618ae,
    _0x548a8c,
    {
      from: _0x56ff42,
      quoted: _0x1f5e22,
      body: _0x30ed72,
      isCmd: _0x28b998,
      command: _0x56c2e5,
      args: _0x3d24e1,
      q: _0x596020,
      isGroup: _0x395630,
      sender: _0x33d0a1,
      senderNumber: _0x1263d7,
      botNumber2: _0xaf6b5d,
      botNumber: _0x1a0ce2,
      pushname: _0x341384,
      isMe: _0xa02936,
      isOwner: _0x808d61,
      groupMetadata: _0x2b5ad6,
      groupName: _0xca898f,
      participants: _0x1ee055,
      groupAdmins: _0x50992b,
      isBotAdmins: _0x154be2,
      isAdmins: _0x420215,
      reply: _0x2d19d7,
    }
  ) => {
    try {
      const _0x1b3262 = await readEnv()
      for (let _0x3341b2 = 0; _0x3341b2 < commands.length; _0x3341b2++) {
        commands[_0x3341b2].pattern &&
          !commands[_0x3341b2].dontAddCommandList &&
          (_0x1bee29[commands[_0x3341b2].category] +=
            '' + _0x1b3262.PREFIX + commands[_0x3341b2].pattern + '\n')
      }
      let _0x4ba8af =
        '\n*\uD83D\uDC4B Hello ' +
        _0x341384 +
        '*\n\n> \uD83D\uDC68‍\uD83D\uDCBB \u200B\uD83C\uDDF9\u200B\u200B\uD83C\uDDED\u200B\u200B\uD83C\uDDEA\u200B\u200B\uD83C\uDDF3\u200B\u200B\uD83C\uDDFA\u200B-\u200B\uD83C\uDDF2\u200B\u200B\uD83C\uDDE9\u200B \u200B\uD83C\uDDF2\u200B\u200B\uD83C\uDDEA\u200B\u200B\uD83C\uDDF3\u200B\u200B\uD83C\uDDFA\u200B\uD83D\uDC68‍\uD83D\uDCBB\n\n\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB\u269F *ɴᴀᴍᴇ ʙᴏᴛ* : Epzige cudu Nona🔮\n👨‍💻✨ *ᴄʀᴇᴀᴛᴏʀ* : ʙʏ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ 🐱‍👤\n👨‍💻✨*ᴠᴇʀsɪᴏɴs* : 1.0.0 \uD83D\uDCAB\n\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB\u269F *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 \uD83D\uDCAB\n\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n\u2502\uD83D\uDCDC ECONOMY COMMANDS\n\u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n' +
        _0x1bee29.economy +
        '\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n  '
      await _0x2c0763.sendMessage(
        _0x56ff42,
        {
          audio: {
            url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0236.mp3',
          },
          mimetype: 'audio/mp4',
          ptt: true,
        },
        { quoted: _0x2618ae }
      )
      await _0x2c0763.sendMessage(
        _0x56ff42,
        {
          image: { url: 'https://i.ibb.co/Pr4BfhZ/1500x1500.png' },
          caption: _0x4ba8af,
        },
        { quoted: _0x2618ae }
      )
    } catch (_0x383c76) {
      console.log(_0x383c76)
      _0x2d19d7('' + _0x383c76)
    }
  }
)
