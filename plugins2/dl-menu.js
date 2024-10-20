const { readEnv } = require('../lib/database'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'download',
    desc: 'get bot download cmd.',
    category: 'download',
    react: '\uD83D\uDCBB',
    filename: __filename,
  },
  async (
    _0xc138b,
    _0x5412e3,
    _0x26ba8c,
    {
      from: _0x10c755,
      quoted: _0x4441ce,
      body: _0x478e22,
      isCmd: _0x16844d,
      command: _0x13e68f,
      args: _0xed82dc,
      q: _0x56310b,
      isGroup: _0x228863,
      sender: _0x4547eb,
      senderNumber: _0x375290,
      botNumber2: _0xd91824,
      botNumber: _0x5cbc85,
      pushname: _0x176727,
      isMe: _0x4a98d3,
      isOwner: _0x3ecb0e,
      groupMetadata: _0x54cc6c,
      groupName: _0x349eb9,
      participants: _0x176cae,
      groupAdmins: _0x304017,
      isBotAdmins: _0x9d4b6c,
      isAdmins: _0x1c33fc,
      reply: _0x428d81,
    }
  ) => {
    try {
      const _0x4e6497 = await readEnv()
      for (let _0x57f625 = 0; _0x57f625 < commands.length; _0x57f625++) {
        commands[_0x57f625].pattern &&
          !commands[_0x57f625].dontAddCommandList &&
          (_0xb4fba[commands[_0x57f625].category] +=
            '' + _0x4e6497.PREFIX + commands[_0x57f625].pattern + '\n')
      }
      let _0x4fb0bf =
        '\n*\uD83D\uDC4B Hello ' +
        _0x176727 +
        '*\n\n> \uD83D\uDC68‍\uD83D\uDCBB \u200B\uD83C\uDDF9\u200B\u200B\uD83C\uDDED\u200B\u200B\uD83C\uDDEA\u200B\u200B\uD83C\uDDF3\u200B\u200B\uD83C\uDDFA\u200B-\u200B\uD83C\uDDF2\u200B\u200B\uD83C\uDDE9\u200B \u200B\uD83C\uDDF2\u200B\u200B\uD83C\uDDEA\u200B\u200B\uD83C\uDDF3\u200B\u200B\uD83C\uDDFA\u200B\uD83D\uDC68‍\uD83D\uDCBB\n\n\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB\u269F *ɴᴀᴍᴇ ʙᴏᴛ* : Epzige cudu Nona🔮\n👨‍💻✨ *ᴄʀᴇᴀᴛᴏʀ* : ʙʏ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ 🐱‍👤\n👨‍💻✨*ᴠᴇʀsɪᴏɴs* : 6.0.0 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)\uD83D\uDCAB\n\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBB\u269F *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94757096717 \uD83D\uDCAB\n\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n\u2502\uD83D\uDCDC DOWNLOAD COMMANDS\n\u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n' +
        '' +
        '\n\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n  '
      await _0xc138b.sendMessage(
        _0x10c755,
        {
          audio: {
            url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0231.mp3 ',
          },
          mimetype: 'audio/mp4',
          ptt: true,
        },
        { quoted: _0x5412e3 }
      )
      await _0xc138b.sendMessage(
        _0x10c755,
        {
          image: { url: 'https://i.ibb.co/Pr4BfhZ/1500x1500.png' },
          caption: _0x4fb0bf,
        },
        { quoted: _0x5412e3 }
      )
    } catch (_0x5c3172) {
      console.log(_0x5c3172)
      _0x428d81('' + _0x5c3172)
    }
  }
)
