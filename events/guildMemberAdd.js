module.exports = async (client, member) => {
    const everyone = member.guild.id
    newChannel = await member.guild.channels.create(member.user.username + "s-dm-secrets", {type : 'text', parent : '612980624692609044', permissionOverwrites : [{
        id : everyone,
        deny : ['VIEW_CHANNEL'],
    },
    {
        id : member.id,
        allow : ['VIEW_CHANNEL'],
    },
    {
        id : '612954822907396096',
        allow : ['VIEW_CHANNEL']
    }]
    });
    newChannel.send(`Hey ${member.toString()} this channel is your direct line of communication with DM's`);

}