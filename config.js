const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xzdGczL3RadHR2OGlYdWNzQXo1K010ZUcwNVU1MjBtTWVkSzZuQmtWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3VkT015WUpEZ2tsY2gwdjVQVm1XRVNYYS8yRWJtanJEZXRjRVBhNVhnQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSDZyUmRmcDVnZzR2dFBuaHY4L1BEOWtxVXhMUVlEdVpXZm5jWXFNczBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtN0hET3hQMXkvdldlY3NKdW1lY0pXa1RCUUZWQkdDcUQ0T2JvWWpnODI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlKYnJWMVFUK2FnSUxveHJkdkcxblRIRXhMTXRSck42c2hvbldUSlZYVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndvYUlzeS9IU2oveXJacjdNK011U21ic3ZLUU1iVUdiZE9wWjNURE1wd1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZab1FvdkZ1aGFWWThNSG9id3BOREowV3Z2QnNiWkV6bk5WVUtWdVozaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGoyK1orS0lDYWdVeTRRUExtaWVLaytyVjcvRW5zYWhTYXZSYWNxaXpDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJtcCsvNFdIVTNBa20yaFVsbks4RmVHOU8zeFB2SFljTmFpekxwSkxYdUdjUFBOK2V5VG1IRDA4OEZVTFpZWE1IbDRjbGkwTjgrVzc2SzI1T0RJdmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJtVWxBeUNMYTEvQStybTVVeHBwajZGQnVWcDdCMlhzTFZtY05sd0RURWxBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwZVY4WndLSFR1dWlXQ3dEUUtCTmFnIiwicGhvbmVJZCI6IjViOWU1NzRjLWQ2MDAtNGIyMS1iMWI2LTE4OTU5MDE1ZjEwOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3aU1uRVdLakNPQmZCVzNYWUdzZ2RUVDVpMnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWx1NDZ4ZlYrdlkyYVZ0ZU4wTnMweXN4T2hzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNFSDIxMlFIIiwibWUiOnsiaWQiOiIyNjM3ODU3OTE3MzQ6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xYNHR2UUVFT2FObE1BR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImM5Q3RSTGMvQ0xjZkg2M3A5ZDlTQ00yd0FQRHhKTUo0aHp6NEpHS3RhSG89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilh2UTczbW1nL3A0UlExREd5Z09YYU5lWWFzWXFBVnpTdERDdzhyUFgvMXBSQjRLQm0zc0hhZ21NQXZxVkxBdW1FNVNsY0VJWGxTeVBEZnNYRVBVTENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQVHlEYlNmSjhvNUJPdGE5SDNyOW9raFkzd3N4dGRtVjNYZEU3OSt6NGNhdGdxV2xOZlgwRGtqZU5EM2pvRFBrMW5OTi9BT0h6OUJ0K3ZWc3J5QnJpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4NTc5MTczNDoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYUFFyVVMzUHdpM0h4K3Q2ZlhmVWdqTnNBRHc4U1RDZUljOCtDUmlyV2g2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1MTU5OTIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZMMCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PRINCE-MDX *",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PRINCE MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263785791734",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kzfne8.jpeg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
// menu image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "237677224245",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
