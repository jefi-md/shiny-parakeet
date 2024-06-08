/*
File: bot.js
Author: jefi
Description: Jefi-md is a WhatsApp bot created with love by Jefi
*/

// Import required modules
const { Client } = require('whatsapp-web.js');

// Create a new WhatsApp client
const client = new Client();

// Required Variables
global.audio = "";
global.video = "";
global.port = process.env.PORT || 3000;
global.appUrl = process.env.APP_URL || "http://yourappurl.com";
global.email = "saimsamsun789@gmail.com";
global.location = "Lahore, Pakistan";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/mydatabase";

// Bot Settings
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ BY jefi-ᴍᴅ";
global.devs = "27722416548"; // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "true";
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "722416548";

// Other Settings
global.style = process.env.STYLE || '1';
global.flush = process.env.FLUSH || "true";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false";
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "true";
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,722xxxxxxxx";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "true";
global.menu = process.env.MENU || "menu"; // Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomly Picks One Of Them Each time
global.HANDLERS = process.env.PREFIX || ".";
global.BRANCH = process.env.BRANCH || "main";
global.VERSION = process.env.VERSION || "1.3.7";
global.author = process.env.PACK_AUTHER || "jefi";
global.packname = process.env.PACK_NAME || "shiny";
global.botname = process.env.BOT_NAME || "shiny-parakeet";
global.ownername = process.env.OWNER_NAME || "It'x jefi";
global.errorChat = process.env.ERROR_CHAT || "";
global.KOYEB_API = process.env.KOYEB_API || "false";
global.REMOVE_BG_KEY = process.env.REMOVE_BG_KEY || "";
global.OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
global.HEROKU_API_KEY = process.env.HEROKU_API_KEY || "";
global.HEROKU_APP_NAME = process.env.HEROKU_APP_NAME || "";
global.antilink_values = process.env.ANTILINK_VALUES || "all";
global.HEROKU = process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY;
global.WORKTYPE = process.env.WORKTYPE || process.env.MODE || "public";
global.LANG = (process.env.THEME || "SUHAIL").toUpperCase();
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID || "37";

// Initialize WhatsApp client
client.initialize();

// Event: QR Code Generated
client.on('qr', qr => {
    console.log('Scan the QR code to log in.');
});

// Event: Ready
client.on('ready', () => {
    console.log('WhatsApp bot is ready.');
});

// Event: Message Received
client.on('message', message => {
    console.log(`Received message: ${message.body}`);
    
    if (message.from === `${ownerNumber}@c.us`) {
        client.sendMessage(message.from, 'Hello Owner! How can I assist you?');
    } else {
        client.sendMessage(message.from, defaultMessage);
    }
});

//
