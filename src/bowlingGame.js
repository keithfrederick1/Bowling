const calcScore = (rolls) => {

  //-----converting string to array for functionality
//take a string
//create a rolls array to push into
//iterate thru string
//create an array from each string
//if a character is x,  push 10, 0
//if a character is /,  push (10 - roll before)




  let score = 0;
  let frameIndex = 0;

  for(let frame = 0; frame < 10; frame++) {
    const firstRoll = rolls[frameIndex];

    if(firstRoll === 'X') {
      //strike
      score += 10 + rolls[frameIndex + 1] + rolls[frameIndex + 2];
      frameIndex++;
    } else {
      const secondRoll = rolls[frameIndex + 1];
      score += firstRoll + secondRoll;
      if(secondRoll === '/') {
      //spare
      score += rolls[frameIndex + 2];
    }
    frameIndex = frameIndex + 2;
   }
  }
  return score;
}

export { calcScore };