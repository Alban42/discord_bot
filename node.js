const Discord = require('discord.js');
const bot = new Discord.Client();

const Team = require('./commands/team');

bot.login("MzIwMjU1NTI3MDE4MDM3MjQ4.DBM8vg.rCFTw5J5t_jcjILtjtTwoJw1x5E");

bot.on("message", function (message){
    Team.parse(message);
})