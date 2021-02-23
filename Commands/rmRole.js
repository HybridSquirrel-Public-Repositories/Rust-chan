//Fix remove command clean up polsih later 
module.exports = {
    name: 'rmRole',
    desciption: 'removing role',
    execute(message, args){
        let { cache } = message.guild.roles;
        let role = cache.find(role => role.name.toLowerCase() === args);
        if(role){
            if(message.member.roles.cache.has(role.id)){
                message.member.roles.remove(role)
                .then(member => message.channel.send(`Role: ${role.name} has been removed`))
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