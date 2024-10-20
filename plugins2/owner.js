const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭───────────────◎◎▷
👋𝐇𝐄𝐋𝐋𝐎 ........................🔰

> Queen D Whatsapp Bot ~ By Epzi V 1.2 💋

Is Here. 

> ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ Asᴍᴏᴅᴇᴜs Eᴘᴢɪ 

> GitHub: https://github.com/HaCkr-EPZI-public/CuduNona

> Insta: https://www.instagram.com/yuren.sasanka/

> YouTube: https://www.youtube.com/@EPZi

Queen D Kauda kiyla ahanna mn danneth nh kauda kiyla :)



> Botge Codes oni nm Msg ekak dapan dennam

 https://wa.me/+94759554531?text=_Epzi_Pako_Queen_D_Ge_Codes_tika_Dipan👻👋_

> Epzi Mage Mn Epzige <3 ~ Queen D
╰───────────────◎◎▷
`
    await conn.sendMessage(from, {
        audio: { url: 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/raw/refs/heads/main/plugins/bgm/AUD-20221018-WA0235.mp3'},
        mimetype: 'audio/mp4',
        ptt: true
    }, { quoted: mek });
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/Pr4BfhZ/1500x1500.png`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
