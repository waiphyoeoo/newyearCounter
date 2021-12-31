const counter = document.getElementsByClassName("counter")[0];
const startButton = document.getElementsByClassName("start")[0];
const pauseButton = document.getElementsByClassName("pause")[0];
const continueButton = document.getElementsByClassName("continue")[0];
const restartButton = document.getElementsByClassName("restart")[0];
const newyear = document.getElementsByClassName("newyear")[0];

let seconds = 59;

const startTime = () => {
    seconds -= 1;
    if ( seconds == 0 ){
        seconds = clearInterval(setintervalId);
        newyear.classList.add("add");
      }
    const secondsText = seconds <10 ? "0" + seconds.toString() : seconds;
    counter.textContent = secondsText;
}

let setintervalId;
startButton.addEventListener("click",()=>{
    if ( setintervalId){
        clearInterval(setintervalId);
        seconds = 59;
    }
    newyear.classList.remove("add");
    setintervalId = setInterval(startTime,1000);
})
pauseButton.addEventListener("click",()=>{
    clearInterval(setintervalId);
})
continueButton.addEventListener("click",()=>{
    clearInterval(setintervalId);
    setintervalId = setInterval(startTime,1000);
})
restartButton.addEventListener("click",()=>{
    clearInterval(setintervalId);
    seconds = 59;
    setintervalId = setInterval(startTime,1000);
    newyear.classList.remove("add");
})