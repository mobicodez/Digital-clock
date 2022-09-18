const myLabel = document.getElementById("myLabel");

// to invoke the update function below "see line 10"
update();

// to make the time update every second, with a delay of 1s
setInterval(update, 1000);

// this function is the parent function thats nests other functions needed to provide the desired result
function update(){

  // function expression for current date 
  let date = new Date();
  myLabel.innerHTML = formatTime(date); 

  // to format the time above
  function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

  // to change from 24H to 12H

    hours = (hours % 12) || 12;

  // to format the time to precede single digits with 0. "see line 35" for its function
    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);

  // prints result
    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }

  // function needed to precede single digits with 0 "see line 27" for call back
  function formatZeroes(time){
    // converts a # to a string
    time = time.toString();
    return time.length < 2 ? "0" + time:time;
  }
}