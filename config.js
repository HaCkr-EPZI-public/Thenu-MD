const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "jNcFiTwZ#vUlZyyhB92QiI_1X4_xOL5GlP6pATs_RhqH7KYK_AiE",
MONGODB: process.env.MONGODB || "mongodb+srv://epzi:e1IX5RIPcfb0aT2t@epzi0.taajc.mongodb.net/",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "Queen D",
BOT_NUMBER: process.env.BOT_NUMBER || "94759554531",
AUTO_AI: process.env.AUTO_AI || "true",
LANG: process.env.LANG || "EN"

};
