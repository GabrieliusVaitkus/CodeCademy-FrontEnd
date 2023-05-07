let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegStatus = true;
let runnerAge = 18;

if (runnerRegStatus && runnerAge >= 18) {
  raceNumber += 1000;
}

if (runnerRegStatus && runnerAge > 18) {
  console.log(`You will start racing at 9:30am, your race number will be ${raceNumber}`);
} else if (runnerRegStatus === false && runnerAge > 18) {
  console.log(`You will start racing at 11:00am, your race number will be ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`You will start racing at 12:30pm, your race number will be ${raceNumber}`);
} else {
  console.log('Please see the registration desk');
}
