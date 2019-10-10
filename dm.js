const Discord = require("discord.js");
const client = new Discord.Client();
const guild = new Discord.Guild();
const config = require("./config.json");
 
client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    if (!["176476272980000768", "189835256273043456", "151490253692076032"].includes(message.author.id)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "new"){
        let [roleName, template, catagoryName, textChannelName, voiceChannelName] = args;
        let templateRole = message.guild.roles.find(role => role.name === template);
        const colors = [
            'AQUA',
            'GREEN',
            'BLUE',
            'PURPLE',
            'LUMINOUS_VIVID_PINK',
            'GOLD',
            'ORANGE',
            'RED',
            'NAVY',
            'DARK_AQUA',
            'DARK_GREEN',
            'DARK_BLUE',
            'DARK_PURPLE',
            'DARK_VIVID_PINK',
            'DARK_GOLD',
            'DARK_ORANGE',
            'DARK_RED',
            'DARK_NAVY',
          ]
        const n = Math.floor(Math.random() *colors.length);
        const newRole = await message.guild.roles.create({
            data: {
                    name: roleName,
                    permissions: templateRole.permissions,
                    color : colors[n],
                    mentionable : templateRole.mentionable,
                    hoist : templateRole.hoist
            }
            })
        .catch(console.error);
        const everyone = message.guild.id;
        const catagory = await message.guild.channels.create(catagoryName, {type : 'category',
        permissionOverwrites : [{
            id: everyone,
            deny : ['VIEW_CHANNEL'],
        },
        {
            id : newRole.id,
            allow : ['VIEW_CHANNEL']

        }]
    })
        console.log(newRole);
        message.guild.channels.create(textChannelName, {type : 'text', parent : catagory.id});
        message.guild.channels.create(voiceChannelName, {type : 'voice', parent : catagory.id});
        message.channel.send(`Successfully created ${newRole.toString()} and the channels to go with it`);
    }
  });
 

client.login(config.token);

