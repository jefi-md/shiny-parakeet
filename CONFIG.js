const fs = require('fs-extra');
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname + '/.env' });

//═══════[Required Variables]════════\\
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || ""; // put your app url here,
global.email = "jefitutadavid@gmail.com";
global.location = "Pretoria, South Africa";

global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";

global.timezone = process.env.TZ || process.env.TIME_ZONE || "Your/Timezone";
global.github = process.env.GITHUB || "https://github.com/jefi-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacHjJmKWEKoty7AC508";
global.website = process.env.WEBSITE || "https://www.facebook.com/NetScorefootball/";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || "https://image.online-convert.com/convert-to-jpg"; // SET LOGO FOR IMAGE
global.caption = process.env.CAPTION || "shiny-parakeet";
global.devs = "+27 722416549"; // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "true";
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+27722416548";

//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE || '1'; // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH || "false"; // Make it "true" if bot not responded
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false"; // Make it "false" for disable WELCOME

global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false"; // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG || "true"; // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages = process.env.USER_IMAGES || ""; // "text" // set Image/video urls here
global.waPresence = process.env.WAPRESENCE || "null"; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'

//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,277xxxxxxxx";

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null,277xxxxxxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "27722416548,277xxxxxxxx";

module.exports = {
    menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomly Pick One Of Them Each time **/

    HANDLERS: process.env.PREFIX || ".",
    BRANCH: process.env.BRANCH || "main",
    VERSION: process.env.VERSION || "1.3.7",
    caption: global.caption || "```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ jefi 』```", //*『sᴜʙsᴄʀɪʙᴇ • shiny parakeet』

    author: process.env.PACK_AUTHER || "jefi",
    packname: process.env.PACK_NAME || "roro",
    botname: process.env.BOT_NAME || "shiny-parakeet",
    ownername: process.env.OWNER_NAME || "Jefi",

    errorChat: process.env.ERROR_CHAT || "",
    KOYEB_API: process.env.KOYEB_API || "false",

    REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
    HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
    antilink_values: process.env.ANTILINK_VALUES || "all",
    HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

    WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
    LANG: (process.env.THEME || "SHINY").toUpperCase(),

};

global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID || "37";
