var counter = {
    val: 0,
    toString: function(params) {
        return this.val;
    },
    msToTime: function() {
    var milliseconds = parseInt((this.val%1000)/1)
        , seconds = parseInt((this.val/1000)%60)
        , minutes = parseInt((this.val/(1000*60))%60)
        , hours = parseInt((this.val/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
};

var step = 7;
var timerId;
var breakCondition = false;

  var startButton = document.getElementById('start');
  startButton.onclick = runTimer;
  
  var pauseButton = document.getElementById('pause');
  pauseButton.onclick = pause;
  
  var stopButton = document.getElementById('stop');
  stopButton.onclick = stop;
//    = runTimer();
  
  function runTimer() {
      startButton.style = "display: none;"
      pauseButton.style = "display: inline-block;"
    breakCondition = false;
    timerId = setTimeout(function run() {
        if (breakCondition) {
            clearTimeout(timerId);
    } else {
            timer(counter);
            setTimeout(run, step);
        }
    }, step);        
        console.log('timerId',timerId);
  }

function timer(counter) {
    console.log('run');
    counter.val += step;
    document.getElementById('time').innerHTML = counter.msToTime();
}

function pause() {
    startButton.style = "display: inline-block;"
    pauseButton.style = "display: none;"
    breakCondition = true;
    // console.log('timerId',timerId);
}

function stop() {
    startButton.style = "display: inline-block;"
    pauseButton.style = "display: none;"
    breakCondition = true;    
    counter.val = 0;
    document.getElementById('time').innerHTML = counter.msToTime();
    // console.log('timerId',timerId);
}

