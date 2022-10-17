const { Client, Message, MessageEmbed, Collection, ThreadChannel, Partials } = require('discord.js')
const fs = require('fs')
const client = new Client({
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
    intents: 32767,
});

module.exports = client;

const config = require('./config.json')
const token = config.token


client.on("ready", () => {
    console.log(`${client.user.tag} is ready!`)
    
    let guild = client.guilds.cache.get('1019104037158781029')

    // make a function
    function statusCount() { 
        
         test = client.channels.cache.get('1030992613760831579')
         test.setName(`🟢 ${guild.members.cache.filter(m => m.presence?.status == 'online').size} 🔴 ${guild.members.cache.filter(m => m.presence?.status == 'dnd').size} 🌙 ${guild.members.cache.filter(m => m.presence?.status == 'idle').size} ⚫ ${guild.members.cache.filter(m => m.presence?.status == 'offline' || !m.presence).size}`)    } statusCount() // run the function

    setInterval(() => { // run the function every one minutes
        statusCount()
    },600000) // don't set the time too low, it won't work sometimes
});

client.login(token)