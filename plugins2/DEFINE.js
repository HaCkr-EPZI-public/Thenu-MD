const axios = require('axios'),
  { cmd } = require('../command')
cmd(
  {
    pattern: 'define',
    desc: '\uD83D\uDCDA Get the definition of a word',
    react: '\uD83D\uDD0D',
    category: 'search',
    filename: __filename,
  },
  async (
    _0x271d43,
    _0x33b7d7,
    _0x2db1c5,
    { from: _0x2508f6, q: _0x1f742c, reply: _0x573c9b }
  ) => {
    try {
      if (!_0x1f742c) {
        return _0x573c9b(
          '\u2757 Please provide a word to define. Usage: .define [word]'
        )
      }
      const _0x5beed6 = _0x1f742c,
        _0x48a5a5 =
          'https://api.dictionaryapi.dev/api/v2/entries/en/' + _0x5beed6,
        _0x39c7e6 = await axios.get(_0x48a5a5),
        _0x235d65 = _0x39c7e6.data[0],
        _0x4facb8 = _0x235d65.meanings[0].definitions[0].definition,
        _0x2dedb7 =
          _0x235d65.meanings[0].definitions[0].example ||
          'No example available',
        _0x6051e =
          _0x235d65.meanings[0].definitions[0].synonyms.join(', ') ||
          'No synonyms available',
        _0x49c4a6 =
          '\n\uD83D\uDCDA *Word*: ' +
          _0x235d65.word +
          '\n\uD83D\uDD0D *Definition*: ' +
          _0x4facb8 +
          '\n\uD83D\uDCDD *Example*: ' +
          _0x2dedb7 +
          '\n\uD83D\uDD17 *Synonyms*: ' +
          _0x6051e +
          '\n\n> \u276F\u276F ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ \u27A3'
      return _0x573c9b(_0x49c4a6)
    } catch (_0x575790) {
      console.log(_0x575790)
      if (_0x575790.response && _0x575790.response.status === 404) {
        return _0x573c9b(
          '\uD83D\uDEAB Word not found. Please check the spelling and try again.'
        )
      }
      return _0x573c9b(
        '\u26A0️ An error occurred while fetching the definition. Please try again later.'
      )
    }
  }
)
