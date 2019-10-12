module.exports = async (client, member) => {
    newChannel = await member.guild.channels.create(member.user.username + "s-dm-secrets", {type : 'text', parent : '632418237237166098'});
    newChannel.send(`Hey ${member.toString()} this channel is your direct line of communication with DM's`);

}