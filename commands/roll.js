exports.run = (client, message, args) => {
    let [amount, dice, modifier = 0] = args;
        let resultArray = []
        for (i = 0; i < parseInt(amount); i++){
            resultArray.push(Math.floor(Math.random()* dice.match(/\d+/)[0] +1))
             }
             console.log(resultArray);
             let result = resultArray.reduce((a, b) => a + b)
             result += parseInt(modifier);
             message.channel.send(`You rolled: ${resultArray} total roll is: ${result}`);
           
        
        }
        