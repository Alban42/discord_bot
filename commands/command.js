module.exports = class Command {
    
    static parse (message) {
        var resultat = false;
        if(this.match(message)){
            this.action(message);
            resultat = true;
        }
        
        return resultat;
    }
        
    static match (message){
        return false;
    }
    
    static action (message){
        
    }
}