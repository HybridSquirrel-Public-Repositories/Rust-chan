
module.exports = {
    name: 'ping',
    desciption: 'Ping commmand',
    execute(message){
        message.channel.send('Pong!');
    }
}