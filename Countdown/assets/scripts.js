var dateLaunch = new Date('December 31, 2022 23:59:00')
var day = document.getElementById("day")
var hour = document.getElementById("hour")
var minute = document.getElementById("minute")
var second = document.getElementById("second")


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function countdown(){

  var date = new Date()

  if(date >= dateLaunch ){
    clearInterval(myInterval)
  }

  //converte o timestamp em segundos
  let secondsToGo = (dateLaunch - date) / 1000;
  let days = Math.floor(secondsToGo / 3600 / 24);
  let hours = Math.floor(secondsToGo/ 3600) % 24;
  let minutes = Math.floor(secondsToGo / 60) % 60;
  let seconds = Math.floor(secondsToGo) % 60;

  day.innerHTML = days;
  hour.innerHTML = formatTime(hours);
  minute.innerHTML = formatTime(minutes);
  second.innerHTML = formatTime(seconds);


}

setInterval(countdown,1000) //chama a função a cada 1000ms
