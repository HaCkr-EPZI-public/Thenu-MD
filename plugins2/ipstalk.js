const config = require('../config'),
  { cmd, commands } = require('../command'),
  path = require('../Thenu_MD/autovoice.json'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions')
cmd(
  {
    pattern: 'ipstalk',
    alias: ['ipstalk', 'sip', 'searchip', 'ip-locator'],
    react: '\uD83C\uDF10',
    category: 'search',
    use: '.ipstalk 112.134.193.130',
    filename: __filename,
  },
  async (
    _0x670dde,
    _0x54dbb8,
    _0x526665,
    {
      from: _0x47df77,
      l: _0x3691a6,
      quoted: _0xbd2616,
      body: _0xe388d6,
      isCmd: _0x1b268e,
      command: _0x20edc8,
      args: _0x39192d,
      q: _0x5bc0ac,
      isGroup: _0x2ce6c1,
      sender: _0x67bf3b,
      senderNumber: _0x29189d,
      botNumber2: _0x49ab2d,
      botNumber: _0x53285b,
      pushname: _0x3c1684,
      isMe: _0xafdd91,
      isOwner: _0x4e4817,
      groupMetadata: _0x5a5f97,
      groupName: _0x5b65a0,
      participants: _0x4c7e42,
      groupAdmins: _0x1fc5d1,
      isBotAdmins: _0x2e74ce,
      isAdmins: _0x197be9,
      reply: _0x5bc85e,
    }
  ) => {
    try {
      if (!_0x5bc0ac) {
        return _0x5bc85e(
          '*Give Vaild IP ADRESS.*\n\nEX: .ipstalk 112.134.193.130 '
        )
      }
      if (!_0x5bc0ac.includes('.')) {
        return _0x5bc85e(needus)
      }
      const _0x1acdf1 = 'IP :',
        _0x3f32c9 = 'CONTINENT :',
        _0x169c88 = 'REGIONNAME :',
        _0x33fb5b = 'CITY :',
        _0x1a44d7 = 'ZIP :',
        _0x44449d = 'CURRENCY :',
        _0x50ade1 = 'ISP :',
        _0x462ffe = 'MOBILE :',
        _0x1f86bf = 'PROXY :',
        _0x5406b4 = await fetchJson(
          'https://api.techniknews.net/ipgeo/' + _0x5bc0ac
        ),
        _0x347844 =
          '[*Asmodeus Epzi*]\n\n    *IP STALKER*\n    \n*\uD83D\uDD34 ' +
          _0x1acdf1 +
          '* ```' +
          _0x5bc0ac +
          '```\n' +
          '*\u2705' +
          'STATUS :' +
          '* ```' +
          _0x5406b4.status +
          '```\n' +
          '*\uD83C\uDF10' +
          _0x3f32c9 +
          '* ```' +
          _0x5406b4.continent +
          '```\n' +
          '*\uD83D\uDDFA' +
          'COUNTRY :' +
          '* ```' +
          _0x5406b4.country +
          '```\n' +
          '*\uD83D\uDD22' +
          'COUNTRYCODE :' +
          '* ```' +
          _0x5406b4.countryCode +
          '```\n' +
          '*\uD83C\uDF0D' +
          _0x169c88 +
          '* ```' +
          _0x5406b4.regionName +
          '```\n' +
          '*\uD83D\uDEA9' +
          _0x33fb5b +
          '* ```' +
          _0x5406b4.city +
          '```\n' +
          '*\uD83C\uDFDB' +
          _0x1a44d7 +
          '* ```' +
          _0x5406b4.zip +
          '```\n' +
          '*\uD83D\uDCB8' +
          _0x44449d +
          '* ```' +
          _0x5406b4.currency +
          '```\n' +
          '*\uD83D\uDCE1' +
          _0x50ade1 +
          '* ```' +
          _0x5406b4.isp +
          '```\n' +
          '*\uD83D\uDEE1' +
          _0x1f86bf +
          '* ```' +
          _0x5406b4.proxy +
          '```\n' +
          '*\uD83D\uDCF1' +
          _0x462ffe +
          '* ```' +
          _0x5406b4.mobile +
          '```\n\n' +
          '\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C9'
      await _0x670dde.sendMessage(
        _0x47df77,
        { text: _0x347844 },
        { quoted: _0x54dbb8 }
      )
    } catch (_0x21f642) {
      console.log(_0x21f642)
      _0x5bc85e('' + _0x21f642)
    }
  }
)
