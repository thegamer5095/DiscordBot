const Discord = require('discord.js');
const config = require('../config.json')
module.exports.run = async (Client, message, args, prefix) => {

    const AnsøgningEmbed = new Discord.MessageEmbed()
        .setAuthor(`${config.EmbedTitle}  - Ansøgnings system`)
        .setColor(config.color)
        .setDescription(`Velkommen til ${config.EmbedTitle} Ansøgnings systen, her har du mulighed for at tilgå alle vores ansøgninger\n\n **Hvordan bruger jeg systemet?** \n\n For at bruge dette system, trykker du bare på en af knapperne neden under, og du vil derfter blive ledt til den valgte ansøgning`)

        const embedlinks = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
                .setURL('https://docs.google.com/forms/d/e/1FAIpQLScBO2CLWpWWdikDXCTKLAVMUnE_rSp-7xcG4iLKVBaQLIfVpw/viewform')
                .setLabel('👮‍♀️ Politi Ansøgning')
                .setStyle('LINK'),
    
                new Discord.MessageButton()
                .setURL('https://docs.google.com/forms/d/e/1FAIpQLSdnEPhdzWn9M_LY_OMW5Htzv-StqCpCn4ZZxdw-lwJqla6kbw/viewform')
                .setLabel('👨‍⚕️ Læge Ansøgning')
                .setStyle('LINK'),

                new Discord.MessageButton()
                .setURL('https://docs.google.com/forms/d/e/1FAIpQLSfbp8i7jWnB411Ox5Wdjkjv6qECV4WuWITbwBaAYtEYb5NfwA/viewform')
                .setLabel('⚖️ Advokat Ansøgning')
                .setStyle('LINK'),

                

        )
        const embedlinks2 = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLScrYJXNhtatlfj2oRraZvc68WkxK3yJv_o0_1rVNBoJh6iwCQ/viewform')
            .setLabel('🏠 Ejendomsmægler Ansøgning')
            .setStyle('LINK'),

            new Discord.MessageButton()
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLScw29WCPBSTXbGFZoi44VIBnKmw_jgZcQYygDae6RIU8ds2BQ/viewform')
            .setLabel('🔫 Bande Ansøgning')
            .setStyle('LINK'),

            new Discord.MessageButton()
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLSddwVaGLfbINc37W059941LCcXZuebejO3zbZBnTHy8IW-vhQ/viewform')
            .setLabel('🔧 Mekaniker Ansøgning')
            .setStyle('LINK')
        )
        const embedlinks3 = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLSeri-dIiQLq860Sdg96WeR_7pTUyhPCWyJBJvdh4LrZviJfbw/viewform')
            .setLabel('💀 CK Ansøgning')
            .setStyle('LINK'),
            
            new Discord.MessageButton()
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLSfj1CYq8DITpZ0d5pHf1QyEkde0B1ZDeezOj71XS-f6ppjerg/viewform')
            .setLabel('👷 Staff Ansøgning')
            .setStyle('LINK'),

            new Discord.MessageButton()
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLSdF8mBSgumMrKAfRVA0QK4-BkMCWUfSlvKtUDhJ-R5n_txZGQ/viewform')
            .setLabel('🚗 Bilforhandler Ansøgning')
            .setStyle('LINK')
        )
        const embedlinks4 = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setURL('https://docs.google.com/forms/d/e/1FAIpQLSeneOxO_A0D6V3QVNryIvBbmMp9NqGc8m0b4t16X6FOGMkwBQ/viewform')
            .setLabel('❌ Unban Ansøgning')
            .setStyle('LINK')
        )

    
    
        message.channel.send({ embeds: [AnsøgningEmbed], ephemeral: true, components: [embedlinks, embedlinks2, embedlinks3, embedlinks4] })



}



module.exports.help = {
    name: "ans",
    aliases: ['a']
}