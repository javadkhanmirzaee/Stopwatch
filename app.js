const hours = document.querySelector('.hours')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const container = document.querySelector('.container')

let hh = 0; let mm = 0; let ss = 0;

let Interval;

function stop() {
    clearInterval(Interval)
    container.style.animationPlayState = 'paused'
}
function less10(val , elm) {
    if (val < 10) {
        elm.innerHTML = '0' + val;
    } else {
        elm.innerHTML = val;
    }
}
function start() {
    Interval = setInterval(() => {
      container.style.animationPlayState = 'running';
      if (ss < 59) {
          ss += 1;
          less10(ss , second)
      } else {
          if (mm < 59) {
              mm += 1;
              less10(mm , minute)
          } else {
              hh += 1;
              less10(hh , hours)
          }
      }
    }, 1000);
    
}