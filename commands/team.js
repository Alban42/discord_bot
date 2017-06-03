const Command = require('./command');

module.exports = class Team extends Command {
      
    static match (message){
        return message.content.startsWith("!team");
    }
    
    static action (message){
        let args = message.content.split(" ");
        // args[0] -> la commande
        // args[1] -> nom du channel où se trouve les joueurs
        let channelNumero = args[1];
        // args[2] -> nombre d'équipes
        let nbEquipes = args[2];
        
        if(channelNumero && nbEquipes){
            if (nbEquipes < 1) {
                message.reply("Gros malin, tu peux pas faire moins d'une équipe ;)");
            }
            
            let channels = message.guild.channels.array();
            let channel = channels[channelNumero - 1];
            
            if(channel){
                let memberNames = channel.members.map(function (x) {
                    return x.displayName;
                });
                
                if (nbEquipes > memberNames.length) {
                    message.reply("Gros malin, tu peux pas faire plus d'équipe qu'il n'y a de joueurs !");
                } else {
                    for (let i = memberNames.length; i; i--) {
                        let j = Math.floor(Math.random() * i);
                        [memberNames[i - 1], memberNames[j]] = [memberNames[j], memberNames[i - 1]];
                    }
    
                    var quotient = Math.floor(memberNames.length/nbEquipes);
                    var retour = "";
                    for(var i = 1; i <= nbEquipes; i++) {
                        let debut = quotient * (i-1);
                        let end = debut + quotient;
                        
                        if(i == nbEquipes) {
                            end = memberNames.length;
                        }
                        
                        let slice = memberNames.slice(debut, end);
                        retour += "Equipe " + i + " : \n";
                        slice.forEach(function(x) {
                            retour += "  - " + x + "\n";
                        });
                    }
                    message.channel.send(retour);
                }
            } else {
                message.reply("Le channel numéro" + channelNumero + " n'existe pas, déso pas déso");
            }
        } else {
            message.reply("Une petite aide ? -> !team [numéro du channel] [nb d'équipes]");
            let retour = "Numéro des channels : \n";
            let channels = message.guild.channels.array();
            for(var i = 1; i <= channels.length; i++) {
                retour += "  - " + i + " : " + channels[i-1] + " avec " +  channels[i-1].members.array().length + " personne(s)\n";
            }
            message.channel.send(retour);
        }
    }
    
};