const { cmd, commands } = require('../command')

cmd(
  {
    pattern: 'list',
    react: '📃',
    alias: ['panel'],
    desc: "Get bot's command list.",
    category: 'main',
    use: '.menu',
    filename: __filename,
  },
  async (
    bot,
    message,
    chat,
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
      let responseText = `
      *👋 Hello ${pushname}*

      🤖 *Bot Name*: Thenux-MD✨
      👨‍💻 *Creator*: 𝐓𝐡𝐞𝐧𝐮𝐱 𝐃𝐞𝐯✨
      🔢 *Version*: 6.0.0 (Added hidden features)✨
      📞 *Contact*: https://wa.me/94757096717 ✨

      *⭒⭐📥 DOWNLOADER ⭐⭒*
      ➤ .fb <url>
      ➤ .ig <url>
      ➤ .gdrive <url>
      ➤ .twitter <url>
      ➤ .tiktok <url>
      ➤ .mediafire <url>
      ➤ .song <query>
      ➤ .video <query>
      ➤ .apkdl <link>

      *⭒🔍 SEARCH 🔍⭒*
      ➤ .yts <text>
      ➤ .wiki <text>
      ➤ .dog
      ➤ .animegirl
      ➤ .define
      ➤ .githubstalk
      ➤ .img
      ➤ .usanews
      ➤ .business
      ➤ .movie2
      ➤ .weather1
      ➤ .horoscope
      ➤ .google
      ➤ .couplepp
      ➤ .snumber
      ➤ .tech
      ➤ .weather
      ➤ .yts

      *⭒🧠 AI 🧠⭒*
      ➤ .ai <text>
      ➤ .gpt <text>
      ➤ .lamda <text>
      ➤ .remini <text>
      ➤ .lalaland <text>
      ➤ .copilot <text>
      ➤ .gpt4 <text>
      ➤ .obfus <text>

      *⭒👨‍💻 OWNER 👨‍💻⭒*
      ➤ .restart
      ➤ .block
      ➤ .unblock
      ➤ .jid
      ➤ .gjids
      ➤ .shutdown
      ➤ .clearchats
      ➤ .broadcast
      ➤ .setpp <reply with photo>
      ➤ .setbio
      ➤ .update

      *⭒👥 GROUP 👥⭒*
      ➤ .del <reply to the message you want to delete>
      ➤ .add
      ➤ .setdesc <text>
      ➤ .promote
      ➤ .demote
      ➤ .hidetag
      ➤ .tagall
      ➤ .tagadmin
      ➤ .invite
      ➤ .kick
      ➤ .leave
      ➤ .link

      *⭒📄 INFO 📄⭒*
      ➤ .menu
      ➤ .allmenu
      ➤ .script
      ➤ .ping
      ➤ .system
      ➤ .runtime
      ➤ .alive
      ➤ .repo

      *⭒⚙️ CONVERTER ⚙️⭒*
      ➤ .tomp3
      ➤ .tourl
      ➤ .convert
      ➤ .sticker
      ➤ .cconvert

      *⭒📂 OTHER 📂⭒*
      ➤ .joke
      ➤ .support
      ➤ .fact
      ➤ .quote
      ➤ .hack
      ➤ .define
      ➤ .about
      ➤ .owner
      ➤ .news
      ➤ .weather
      ➤ .gpass
      ➤ .fact
      ➤ .githubstalk
      ➤ .dare
      ➤ .truth
      ➤ .fact
      ➤ .question
      ➤ .rvideo

      > *Queen D WhatsApp Bot*
      `

      await bot.sendMessage(
        from,
        {
          audio: {
            url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/main/plugins/bgm/alan-faded.mp3',
          },
          mimetype: 'audio/mp4',
          ptt: true,
        },
        { quoted: message }
      )

      await bot.sendMessage(
        from,
        {
          image: { url: 'https://i.ibb.co/Pr4BfhZ/1500x1500.png' },
          caption: responseText,
        },
        { quoted: message }
      )
    } catch (error) {
      console.log(error)
      reply(`${error}`)
    }
  }
)
