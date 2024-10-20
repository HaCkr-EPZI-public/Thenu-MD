const { dare, truth, random_question } = require('../lib/truth-dare.js'),
  axios = require('axios'),
  { cmd, commands } = require('../command')
cmd(
  {
    pattern: 'question',
    desc: 'Random Question.',
    category: 'fun',
    filename: __filename,
  },
  async (_0xbb4549, _0x586add) => {
    return await citel.reply('' + random_question())
  }
)
cmd(
  {
    pattern: 'truth',
    desc: 'truth and dare(truth game.).',
    category: 'fun',
    filename: __filename,
  },
  async (_0x11e8e5, _0x135e19, _0x43f93b) => {
    return await _0x135e19.reply('' + truth())
  }
)
cmd(
  {
    pattern: 'dare',
    desc: 'truth and dare(dare game.).',
    category: 'fun',
    filename: __filename,
  },
  async (_0x2d9b7d, _0x344aae, _0x36545c) => {
    return await _0x344aae.reply('' + dare())
  }
)
cmd(
  {
    pattern: 'fact',
    desc: 'Sends fact in chat.',
    category: 'fun',
    filename: __filename,
  },
  async (_0x5782d5, _0xda6808, _0x2d786e) => {
    const { data: _0x167d84 } = await axios.get(
      'https://nekos.life/api/v2/fact'
    )
    return _0xda6808.reply(
      '*Fact:* ' + _0x167d84.fact + '\n\n*Powered by Epzi*'
    )
  }
)
cmd(
  {
    pattern: 'quotes',
    desc: 'Sends quotes in chat.',
    category: 'fun',
    filename: __filename,
  },
  async (_0x278150, _0x298115, _0xfe5178) => {
    var _0x3291ed = await axios.get('https://favqs.com/api/qotd')
    const _0x5eaba1 =
      '\n\u2554\u2550\u2550\u2550\u2550\u25C7\n\u2551 *\uD83C\uDF97️Content:* ' +
      _0x3291ed.data.quote.body +
      '\n\u2551 *\uD83D\uDC64Author:* ' +
      _0x3291ed.data.quote.author +
      '\n\u2551    \n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D '
    return _0x298115.reply(_0x5eaba1)
  }
)
