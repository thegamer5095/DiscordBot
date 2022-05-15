const Client = require('../index').Client
const config = require('../config.json')
const discord = require('discord.js');
Client.on('ready', async () => {
console.log(`${Client.user.tag} Er online!`)
Client.user.setStatus('dnd')
Client.user.setActivity(` Arcadia Roleplay`, {
type: 'WATCHING'
})
})