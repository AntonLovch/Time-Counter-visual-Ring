let timer = setInterval(timerFunction, 1000),
  time = 60,
  procent =  100 / time,
  per = 0;
const timerBlock = document.querySelector(".timer");
const timerMask = document.querySelector(".timer-mask");

function timerFunction() {
  per += procent;
  hour = Math.floor(time / 3600);
  hour = hour < 10 ? "0" + hour : hour;
  minute = Math.floor((time - hour * 3600) / 60 - 1);
  minute = minute < 10 ? "0" + minute : minute;
  second = time % 60;
  second = second < 10 ? "0" + second : second;

  timerMask.innerHTML = hour + ":" + (minute) + ":" + second;
  time++;
  timerBlock.style.cssText = 
      "background: conic-gradient(hsla(180, 100%, 50%, 0.5) " + per +
      "%, transparent 0 " + (100 - per) + "%)";
  
  if (minute == 1) clearInterval(timer);
}