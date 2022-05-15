const discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');


const Client = new discord.Client({
intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES, discord.Intents.FLAGS.GUILD_INTEGRATIONS, discord.Intents.FLAGS.GUILD_MEMBERS, discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, discord.Intents.FLAGS.GUILD_MESSAGE_TYPING],
allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
  });

  Client.commands = new discord.Collection();
Client.aliases = new discord.Collection();
Client.events = new discord.Collection();
Client.SlachCmds = new discord.Collection();
   module.exports.Client = Client




 // command Handler
fs.readdirSync('./commands/').forEach(dir => {

fs.readdir(`./commands/dir`, (err, files) => {



var jsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
if (jsFiles.length <= 0) return console.log('Kan ikke finde nogen kommandoer!');
jsFiles.forEach(file => {
var fileget = require(`./commands/${file}`);
console.log(`${file} blev loaded`)
 try{
Client.commands.set(fileget.help.name, fileget);
fileget.help.aliases.forEach(alias => {
Client.aliases.set(alias, fileget.help.name);
 })
  }catch (err) {
return console.log(err)
}
 })
})
})

// event handler
  fs.readdirSync('./events/').forEach(dir => {
     fs.readdir(`./events/dir`, (err, files) => {
var jsFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
if (jsFiles.length <= 0) return console.log('Kan ikke finde nogen Events!');
  jsFiles.forEach(file => {
const eventget = require(`./events/${file}`);
console.log(`${file} blev loaded`)
   try{
Client.events.set(eventget.name, eventget);
 }catch (err) {
return console.log(err)
}
})
})
})



Client.login(config.Token)