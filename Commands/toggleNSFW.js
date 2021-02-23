
//needs working on
module.exports = {
    name: 'toggleNSFW',
    desciption: 'toggles NSFW for members',
    execute(message){
        const trusted_ID = '731210931488555119';
        const activetrusted_ID = '718921118357913631';
        let { cache } = message.guild.roles;
        let role = cache.find(role => role.name.toLowerCase() === 'nsfw');
        if(role){
            if(message.member.roles.cache.has(trusted_ID) || message.member.roles.cache.has(activetrusted_ID)){
                if(message.member.roles.cache.has(role.id)){
                    message.member.roles.remove(role)
                    .then(member => message.channel.send('Role: NSFW has been removed'))
                    .catch(err =>{
                        console.log(err)
                        message.channel.send('Oops! Something went wrong!');
                    })
                }
                else{
                    message.member.roles.add(role)
                        .then(member => message.channel.send('Role: NSFW has been added'))
                        .catch(err =>{
                            console.log(err)
                            message.channel.send('Oops! Something went wrong!');
                    })
                }
            }
            else{
                message.channel.send('You dont have premission to toggle NSFW');
            }
        }
    }  
}
