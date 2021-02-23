//Clean up and polish later 
module.exports = {
    name: 'GetRole',
    desciption: 'Getting a role',
    execute(message, args){
        let { cache } = message.guild.roles;
        let role = cache.find(role => role.name.toLowerCase() === args);
        if(role){
            if(message.member.roles.cache.has(role.id)){
                message.channel.send('You already have this role');
                return;
            }
            if(role.permissions.has('ADMINISTRATOR') || 
                role.permissions.has('KICK_MEMBERS') ||
                role.permissions.has('BAN_MEMBERS') ||
                role.permissions.has('MANAGE_CHANNELS') ||
                role.permissions.has('MANAGE_GUILD') ||
                role.permissions.has('PRIORITY_SPEAKER') ||
                role.permissions.has('SEND_TTS_MESSAGES') ||
                role.permissions.has('MANAGE_MESSAGES') ||
                role.permissions.has('VIEW_GUILD_INSIGHTS') ||
                role.permissions.has('MUTE_MEMBERS') ||
                role.permissions.has('DEAFEN_MEMBERS') ||
                role.permissions.has('MOVE_MEMBERS') ||
                role.permissions.has('MANAGE_NICKNAMES') ||
                role.permissions.has('MANAGE_ROLES') ||
                role.permissions.has('MANAGE_WEBHOOKS') ||
                role.permissions.has('MANAGE_EMOJIS')){
                    message.channel.send('You cannot add yourself to this role')
            }
            else{
                message.member.roles.add(role)
                    .then(member => message.channel.send(`Role: ${role.name} has been added`))
                    .catch(err =>{
                        console.log(err)
                        message.channel.send('Oops! Something went wrong!')
                    })
            }
        }
        else{
            message.channel.send('Role not found!')
        }
    }
}