const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome to the Hub, ${member.user}! :smile:`);
});

//client.on("message", message => {
   // if (message.author.bot) return;
    //if (message.content && ("fuck")) {
      //  message.channel.sendMessage(`${client.user} don't swear!`);
    //}
//});

client.on('message', message => {
    
    if (!message.content.startsWith(config.prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    
    let args = message.content.split(" ").slice(1);
    var argresult = args.join('');
    
        //says something through the bot
    
    
        //client.channels.get('193495594789109761')
        //shows what commands the bot uses
    
    if (command === "help") {
    message.channel.sendMessage('```Unavailable```');
    } else
        
        //sets the playing status of the bot
        
    if (command == "setgame") {
        if (message.author.bot) return;
        let adminRole = message.guild.roles.find("name", "Admin Power");
        if(!message.member.roles.has(adminRole.id)) {
            return message.channel.sendMessage("You are not authorised to use this command!");
        } 
            client.user.setGame(argresult).then(member => {
            message.channel.sendMessage(`*Playing Status has been changed!*`).catch(console.error);
        });
        }
        
    if (command == "dsize") {
		message.channel.sendMessage(`${client.user} 8====D`));
	} else
        
  
});

client.login(process.env.BOT_TOKEN);
