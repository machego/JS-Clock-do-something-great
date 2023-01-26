const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  //console.log("hi date");
  const timeNow = new Date();

  const seconds = timeNow.getSeconds();
  const secondsDegrees = ((seconds / 60)*360)+90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //console.log(seconds)
  
  const minutes = timeNow.getMinutes();
  const minutesDegrees = ((minutes / 60)*360)+90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = timeNow.getHours();
  const hoursDegrees = ((hours / 12)*360)+90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)
