const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
    }

    if (message.content === 'coinflip') {
        var coin_bool = Math.random() < 0.5;
        if(coin_bool) {
            message.reply('heads');
        }
        else {
            message.reply('tails');
        }
     }
});