const Discord = require('discord.js');
const bot = new Discord.Client();

const Team = require('./commands/team');

bot.login(process.env.DISCORD_KEY);

bot.on("message", function(message) {
	Team.parse(message);
})

var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.end();
}).listen(process.env.PORT || 5000);