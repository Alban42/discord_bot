const Discord = require('discord.js');
const bot = new Discord.Client();

const Team = require('./commands/team');

bot.login(process.env.DISCORD_KEY);

bot.on("message", function (message){
    Team.parse(message);
})