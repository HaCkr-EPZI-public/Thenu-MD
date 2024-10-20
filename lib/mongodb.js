const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/Pr4BfhZ/1500x1500.png' },
    { key: 'ALIVE_MSG', value: '👨‍💻 Hello ${pushname}*\n⚡𝗛𝗘𝗟𝗟𝗢𝗪 ┇ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ⚡\n\n*💗 Nice to meat you*\n*►Oyage CuduNona Innawa Patiyo*\n\n*🔖We welcome the new arrivals of the digital world_►*\n\n\n> *➣ ᴏᴡɴᴇʀ : Asᴍᴏᴅᴇᴜs Eᴘᴢɪ*\n> *➣ ᴜᴘ ᴛɪᴍᴇ :* _${runtime(process.uptime())}_\n> *➣ ʀᴀᴍ ᴜꜱᴇɢᴇ :* _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_ \n> *➣ ᴠᴇʀꜱɪᴏɴ : 1.2.0 v*\n\n*┇Always smile and life will be beautiful💗*' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'false' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'AUTO_AI', value: 'true' },



];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
