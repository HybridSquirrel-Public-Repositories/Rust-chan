//continue tomorrow
module.exports = {
    name:'team',
    description: 'setting up a team for a server with opt in and creating channels for the server',
    execute(message, client){
        switch(message){

            case('create'):
                    Create(client);
                break;

            case('remove'):

                break;

            case('invite'):

                break;

            case(''):

                break;
            
        }

        function Create(client){
            const filter = m => m.author.id === message.author.id;
            message.author.send(`Over here ${message.author}`)
            message.author.send(embedSetup)
            client.user

        }





        const embedSetup = new discord.MessageEmbed()
        .setTitle('Setup Configuration: ')
        .setDescription('!teamSetup {Server-name} {ip} {length-of-wipe} {desciption-of-wipe}')


    }
}
            
           

