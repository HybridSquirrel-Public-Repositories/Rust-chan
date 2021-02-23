'use strict';
//Setup Discord Bot
const discord = require('discord.js');
const client = new discord.Client();
const config = require('./Config/config.json')



//Setup importing commands from external files
const fs = require('fs');
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
}





//Logs bot being activated
client.on('ready', () => {
    console.log(`${client.user.tag} on FIRE!`);
    client.user.setActivity('Rust kids get REKT!',{type: 'WATCHING'}).then(() =>{

    })

});

//Logging channel activity to console
client.on('message', (message) => {
    console.log( `${message.author.id}|${message.author.username}: ${message.content} ~ Channel: ${message.channel.name}`);
});


client.on('message', (message) => {
    if(message.content.startsWith(config.Rust_chan.Prefix)){
        //Configuring Inputs for Commands and Flags
        let msg = message.content.toLowerCase();
        let args = msg.substring(config.Rust_chan.Prefix.length).split(" ");



        //Commands
        switch (args[0])
        {
            case('ping'):
                client.commands.get('ping').execute(message);
                break;

            case('getrole'):
                client.commands.get('GetRole').execute(message, args[1]);
                break;

            case('togglensfw'):
                client.commands.get('toggleNSFW').execute(message);
                break;

            case('rmrole'):
                client.commands.get('rmRole').execute(message, args[1]);
                break;

            case('toggleactivity'):
                client.commands.get('toggleActivity').execute(message);
                break;

            case('fetch'):
                message.guild.roles.fetch('731210931488555119')
                    .then(role => console.log(`There are ${role.members.size} members in Trusted.`))
                    .catch(console.error);
                break;

            /*case('rust-chan'):
                    client.commands.get('rust-chan').execute(message, args[1], neko);
                break;*/


        }
    }

});

//added a comment
//Login in to discord bot
client.login(config.Rust_chan.Token).then(() =>{
    console.log('Logged in!')
});