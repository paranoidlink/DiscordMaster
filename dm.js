const Discord = require("discord.js");
const client = new Discord.Client();
const guild = new Discord.Guild();
const config = require("./config.json");
 
client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
   
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "new"){
        let [roleName, template, catagoryName, textChannelName, voiceChannelName] = args;
        let templateRole = message.guild.roles.find(role => role.name === template);

        const newRole = await message.guild.createRole({
        name: roleName,
        permissions: templateRole.permissions
    })
       .then(role => console.log(`created new role with name ${role.name} and copied permissions from ${template}`))
        .catch(console.error);
        const everyone = message.guild.id;
        let newRoles =  message.guild.roles.find(vrole => vrole.name === roleName);
        const catagory = await message.guild.createChannel(catagoryName, {type : 'category',
        permissionOverwrites : [{
            id: everyone,
            deny : ['VIEW_CHANNEL'],
        },
        {
            id : newRoles.id,
            allow : ['VIEW_CHANNEL']

        }]
    })
        message.guild.createChannel(textChannelName, {type : 'text', parent : catagory.id});
        message.guild.createChannel(voiceChannelName, {type : 'voice', parent : catagory.id});
    }
  });
 

client.login(config.token);

