const daysItem = document.getElementById("days");
const hoursItem = document.getElementById("hours");
const minutesItem = document.getElementById("minutes");
const secondsItem = document.getElementById("seconds");

const newYears = "January 01, 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate-currentDate) / 1000;

  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const days = Math.floor(totalSeconds / 3600 / 24);

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minutesItem.innerHTML = minutes;
  secondsItem.innerHTML =  seconds;

}

countdown();

setInterval(countdown,1000);
