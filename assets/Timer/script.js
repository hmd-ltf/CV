const conutToDate = "1 January 2022"
const TimerName = "New Year Timer"

Name = document.getElementsByTagName("h1");
Name[0].innerHTML = TimerName

function countDown(){
    
    countDate = new Date(conutToDate);
    currentDate = new Date();

    secondsLeft = (countDate - currentDate)/1000;

    days = Math.floor((secondsLeft / 3600) / 24);
    hours = Math.floor((secondsLeft / 3600) % 24);
    minutes = Math.floor((secondsLeft / 60) % 60);
    seconds = Math.floor((secondsLeft % 60));
 
    daysElement = document.getElementById("day_el");
    hoursElement = document.getElementById("hour_el");
    minutesElement = document.getElementById("min_el");
    secondsElement = document.getElementById('sec_el');

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

}
countDown();
setInterval(countDown , 1000);