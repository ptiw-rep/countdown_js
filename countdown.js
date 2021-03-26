var dateToEnd = new Date(2022,0,04,00,00,00).getTime();
var dateNow = new Date().getTime();
var timeFlag = 1;
var flag,days,hours,minutes,seconds;
flag=dateToEnd-dateNow;
setInterval(function(){
  var dateNow = new Date().getTime();
  flag=dateToEnd-dateNow;
  if( flag > 0 ){
  days = Math.floor(flag / (1000 * 60 * 60 * 24));
  hours = Math.floor((flag % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((flag % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((flag % (1000 * 60)) / 1000);
  document.getElementsByClassName("days")[0].innerHTML = days;
  document.getElementsByClassName("hours")[0].innerHTML = hours;
  document.getElementsByClassName("minutes")[0].innerHTML = minutes;
  document.getElementsByClassName("seconds")[0].innerHTML = seconds;
  }
  else{
    days = "XX";
    hours = "XX";
    minutes = "XX";
    seconds = "XX";
    document.getElementsByClassName("days")[0].innerHTML = days;
    document.getElementsByClassName("hours")[0].innerHTML = hours;
    document.getElementsByClassName("minutes")[0].innerHTML = minutes;
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;
    if(timeFlag)
      {
        alert("Time Over !");
        timeFlag=0;
      }
  }
},1000);
