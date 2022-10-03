require('dotenv').config();
const { Discord, ActivityType, clientUser, Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('FSLTL Traffic Injector', { type: ActivityType.Playing });


});

client.on('messageCreate', async function (msg) {
    // if (msg.author.bot) return;
    // console.log(msg)

    if (msg.content.toLocaleLowerCase().includes('.faq')) {

        let faqEmbed = new EmbedBuilder()
            .setTitle('Frequently Asked Questions')
            .setDescription(
                'Please make sure to fully read through the <#1023141370690551918> before you create a support topic in <#1022978356616118423>.'
            );

        await msg.channel.send({ embeds: [faqEmbed] });
    }

    if (
        msg.content.toLocaleLowerCase().includes('.rules') ||
        msg.content.toLocaleLowerCase().includes('.rule')

    ) {
        let ruleEmbed = new EmbedBuilder()
            .setTitle('Rules')
            .setDescription(
                'Your presence in this server implies accepting these rules, including all further changes. These changes might be done at any time without notice, it is your responsibility to check for them.'
            )
            .setColor('#fffff')
            .addFields([
                {
                    name: 'Be respectful',
                    value: 'You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.',
                },
                {
                    name: 'No Inappropriate Language',
                    value: 'The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.',
                },
                {
                    name: 'No pornographic/adult/other NSFW material',
                    value: "Just don't.",
                },
                {
                    name: 'No piracy',
                    value: 'Sharing of the pirated content, including mods, partially or fully, is strictly prohibited. Discussions of means of obtaining pirated content are also prohibited. Content from unknown source, links to it, discussions of means of obtaining are also prohibited. ',
                },
                {
                    name: 'No advertisements',
                    value: 'This server is not meant for self-advertising or advertising someone/something else.',
                },
                {
                    name: 'Direct & Indirect Threats',
                    value: 'Any threats are absolutely prohibited and disallowed.',
                },
                {
                    name: '\u200B',
                    value: '**The Admins and Mods will Kick/Ban per discretion.** ',
                },
            ]);
        if (msg.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
            msg.channel.send({ embeds: [ruleEmbed] });
        } else {
            msg.reply('you do not have permission to use this')
        }

    }
});

client.login(process.env.TOKEN); 