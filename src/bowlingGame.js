const stringConverter = (string) => {
  let throws = string.split('');
  let rolls = [];

  for (let i = 0; i  < throws.length; i++) {
    if(!isNaN(throws[i])) {
      rolls.push(parseInt(throws[i]))
    } else if(throws[i] === '/') {
      rolls.push(10 - (parseInt(throws[i - 1])))
    } else if (throws[i] === 'X') {
      rolls.push(10);
    }  
  }
  return rolls;
}




const calcScore = (rolls) => {
  //works for both string inputs and array inputs

  if(typeof rolls === 'string') {
    rolls = stringConverter(rolls);
  }
  
  let score = 0;
  let frameIndex = 0;

  for(let frame = 0; frame < 10; frame++) {
    const firstRoll = rolls[frameIndex];

    if(firstRoll === 10) {
      //strike
      score += 10 + rolls[frameIndex + 1] + rolls[frameIndex + 2];
      frameIndex++;
    } else {
      const secondRoll = rolls[frameIndex + 1];
      score += firstRoll + secondRoll;
      if(firstRoll + secondRoll === 10) {
      //spare
      score += rolls[frameIndex + 2];
    }
    frameIndex = frameIndex + 2;
   }
  }
  return score;
}




export { calcScore, stringConverter };