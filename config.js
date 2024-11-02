//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348114139554";
global.sudo = process.env.SUDO || "2348114139554";
global.owner = process.env.OWNER_NUMBER || "2348101411274";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERyVHlFSzdkZGhGdy9VZi9VVm5hem5aemRrbW5JQ0M3Wm1BSlV1SHZWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2NIem05czIrWU9jR1NESHdYNWpoTGNhVHdSY3dGNGljUXFXY29ob2traz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSVJVY0N6dkIySjE5amRoUjhQRjRCU0pub21PdmVaUVFMUVBQNVBGSG1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT3ZkVEpvQWlyRGFWZ0JqZGY0VnQvaVFURjhUZjRYNUl4OFZlS2lwQkM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVHZmhGQ0Z1UFRZbDc5ZVIvQkl2ODBucmtCaktmd3lZT3Arcy9SR0wvR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxPMS9jQWlBL1FOWi82VEhIdWlyOVVCa2E1dmVCTDZneGdDeDFXbUMzUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUk4WE53cEFQMnVtSWRzU212bHAyMm9HOU14cEs3Ny85VHl0a29zcG5Xdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHY1YTNQTXp0dkNhM2tnWmRxZ3BhL0V0YjE4RDh0dFYxSGs5djlxYXhSZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino3Mm9UU1h2ZWplN0NOd0VPKzcwN0dJQm5hUVhqenVYb1hQakN2ejlwRFkvODM3S08rSTQ4aUJGL3lxcEkza0RyM09GTThWSXNSWGRWTTdUS2RZMURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJZb2VMVURKcGFGcFAvSG9GWURCZGthRkh1eHVqQ0hWaVVERFFtVElKdTJ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwN3lrTDlMSVN0MnhTQV83UTM5bVZBIiwicGhvbmVJZCI6IjU3NjA4MDE1LWQ0Y2YtNGRlMC05NmMxLWU2ODY3M2ZjMjljOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2UXU5ZXNXb01kVE9RbFlwdFJKSERKU1ViakU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGJCNnBuWTllWEhrUis0MSswKzh3THFLekJZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVNSllYUzJWIiwibWUiOnsiaWQiOiIyMzQ4MTAxNDExMjc0OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ29hY2hNIEFjYWRlbXkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01IdmdiUUhFTkN6bDdrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJoKytaWFk0d3pYcUNpa1hnamFyeGxoWFNvQ0tSK3E0bkxpT0JYT1A4MVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijc4aXU4aW1XWXF0U1V4MU5LaEY2dEh1bFQwakV6dUpuMXhMT09YRVg1VSs3SFZMM0NaWDNBR1kzN05vSUFiV040TVJ4dHcyMWZybzFrTWVPVEpSU0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyeTE0TjFkZkVIempJamM0MCttOW80T0txVjVtUjJvZWVCaXpFRkdrNE9KMCtueWFTRU4xWE9vRXNzTmcxYVdOeUpmMG5BVEM1R0V5N0NKL3VxbkhCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDE0MTEyNzQ6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhNGZ2bVYyT01NMTZnb3BGNEkycThaWVYwcUFpa2ZxdUp5NGpnVnpqL05XIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNTMzODU0fQ==";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0tpNVZjZXpXSWN4OW9tUVpYd2gyYVVrOGwxbGQ0TmZjU0pEa3A5dnNrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUdGb09JcjJETVlXV0U4RGlRdGh5TjdIV1Uwbi8zQmxBSnZUM2ptbUcwVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTkFMc0k3MmNNL2pnWCtKaHFGazJsY1UwVHFmMmdHcXllYkdSYVUzM1VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2OFA0TmwxekkyMzVWamRJWm5zT3d1ZmEyZ1BqTVVGUi95YUU5R1FvSFNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLSWJnUjhDMDU2LzRnOHk4cXdBK3ljNFJMZHcxSTIrV3FhZ3BXVEMrR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxxS0tnYkVhU05uOG9VNDJvVWU5cWU0ZXdERTArZlRhOGdjOUdRdmVwU1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERyV1ROc3huQ1FaTERUemc1Q2Mxbk1MWEtvLzhoUjUwaHoxdlhuSnVGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFdMSERqaGZORFpubDBGcGRjeC9TS2xibVdQTTNpOTI4N1JjdndFMXFXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhHdzZkMUVNOVlLQUMxL3U1L0lJYld3WVJZTzAvMEdlUkMxS0RHTzBoVUlZUDhSS09JNktZYjBPdHc5SnpUVXIxR2ZxQWlYSndneVlXSFZwSFBVRWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6IkYrc1lPbFBlMEg4aUk4VnhYMkdMaVc4V2dYYXp2SHFCRHB6S0R4NytTa3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRHdGRvLUdDUUh5T3ltcWxRdEw1TmciLCJwaG9uZUlkIjoiYmMzY2JlMzQtZWI2Yi00MjgxLWEzMDItM2JjMWVjNWE1N2JjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ZZ0ozRmsvaTlURzdlQ2M0TTNuMmFJMVNJVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiSkhtUldxLy8yeVJQRHNsM3NSYzBKTjhhTVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREE0WEREMlQiLCJtZSI6eyJpZCI6IjIzNDgxMTQxMzk1NTQ6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnlKa0s4QkVLMjFtcmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK0JEckNab1hOcDVYV3h1QkVZZDJvTmNtUmhwOC9ZUlM4dUovdkdoVHJIUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoieDZKNXhteUtWTkduMWt6UWhVSzdyTUNBajV3ME1IZS8rdm9nWVNnZC9FaXNha0grRWN3LzlEeFVhZkd1MkNNY0hxVVNFeWJ1aW9oYXFTdEFyVW5hQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InkzOVlVdlE1OFhpZVdlcDdkWjFKQXVxcWtLMkgyd0ZCWUdqUlF4R0YrL3NRSTREK0pwTS84QjNBQUJBemp1ZVcyN3AvNE9ueDhZelcvZ1kwL2FjaGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODExNDEzOTU1NDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZnUTZ3bWFGemFlVjFzYmdSR0hkcURYSmtZYWZQMkVVdkxpZjd4b1U2eDAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA1ODMyMjZ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
