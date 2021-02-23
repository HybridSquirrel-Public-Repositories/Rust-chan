module.exports = {
    name: 'toggleActivity',
    desciption: 'toggles rust activity',
    execute(message){
        const trusted_ID = '731210931488555119';
        const trusted_a_ID = '718921118357913631';
        const weakling_ID = '731173799277363250';
        const weak_a_ID = '731241684960149586';
        if(message.member.roles.cache.has(trusted_ID)){

            addRole(trusted_a_ID);
            rmRole(trusted_ID);
            message.channel.send('Activity has been toggled');

        }else if(message.member.roles.cache.has(trusted_a_ID)){

            addRole(trusted_ID);
            rmRole(trusted_a_ID);
            message.channel.send('Activity has been toggled');

        }else if(message.member.roles.cache.has(weakling_ID)){

            addRole(weak_a_ID);
            rmRole(weakling_ID);
            message.channel.send('Activity has been toggled');

        }else if(message.member.roles.cache.has(weak_a_ID)){

            addRole(weakling_ID);
            rmRole(weak_a_ID);
            message.channel.send('Activity has been toggled');

        }

        function addRole(role){
            message.member.roles.add(role)
            .catch(err =>{
            console.log(err)
            message.channel.send('Oops! Something went wrong!')
            })
        }

        function rmRole(role){
            message.member.roles.remove(role)
            .catch(err =>{
                console.log(err)
                message.channel.send('Oops! Something went wrong!')
            })
        }
    }
}












