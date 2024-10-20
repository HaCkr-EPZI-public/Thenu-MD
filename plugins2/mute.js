const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "mute",	
    alias: ["lock"],
    react: "🔒",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   
    
    if (!isGroup) return reply('This command can only be used in a group❗.')
        if (!isBotAdmins) return reply('Uba Admin newei Pakaya nowi idapan* ❗.')
        if (!isAdmins) return reply('Uba Epzi neweine Pakayo.. ❌.')
 

     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '🔒 GROUP IS CLOSED EPZI ! Prashana Thiyenwada ?' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*Admin Dipan pako botata.. ❗❗*')    
} 
})
