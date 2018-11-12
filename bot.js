const Discord = require('discord.js');
const client = new Discord.Client();
console.log("scrpit By Golden");


client.on("ready", () => {
let channel =     client.channels.get("511485036508479507")
setInterval(function() {
channel.send(`كيكي دو يو لوف مي`);
}, 25)
})
 
 
client.login('NTEwODc2NzYyOTM5NTg4NjE5.DsrkSg.syisFZ-eOJL9wxMajSLshAIr2d4');
