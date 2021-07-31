


var hours = document.getElementById("hors");
var secs = document.getElementById("secs");
var mins = document.getElementById("mins");
var btnStart = document.getElementById("btnStart")
var btnStop = document.getElementById("btnStop")
var btnReset = document.getElementById("btnReset")

var seconds = 1;
var minuts = 1;
var num;

var startfunc = () =>{
    /* When I Started This Function Clicking Again & Again On 
     On The Start Button The Function Was Running Again & Again Then I Used
     The clearInterval() Before Start Interval On The Same Variable in Which 
     setInterval Was Runnning. In Such a Manner That Variable is Declared Globally
    and When The Fuction Runs It clears The before Set Interval.
    When I Did Ths Assignment Before I was Disabeling The Start Button On Just One Click*/
    clearInterval(num)
num = setInterval(() =>{    
    seconds++
    secs.innerText = seconds
    if(seconds == 60){
        seconds = 1
        mins.innerText = minuts++
    }
},10)
}

var stopFunc = () =>{
    clearInterval(num)
}

// btnReset.onclick(() => {
    // clearInterval(num)
    // seconds = 0;
    // minuts = 0;
// }))

function  reset(){
    clearInterval(num)
    seconds = '00';
    minuts = '00';
    secs.innerText = seconds;
    mins.innerText = minuts;
}