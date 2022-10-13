
const deadline= document.querySelector('.deadline');
const items= document.querySelectorAll('.item h3');
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
const currentDate= new Date();


const giveAwayDate= new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() +10, 11, 30,0);

deadline.innerHTML=`Giveaway Ends On ${weekdays[giveAwayDate.getDay()]}, ${giveAwayDate.getDate()} ${months[giveAwayDate.getMonth()]} ${giveAwayDate.getHours()}:${giveAwayDate.getMinutes()}am`

const futureTime = giveAwayDate.getTime();
function getRemaindingTime(){
    const today= new Date().getTime();
    const t= futureTime-today;
    const oneDay= 24 *60 *60 *1000;
    const oneHour= 60 *60 *1000;
    const oneMin= 60 *1000;
    let days =Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMin);
    let seconds = Math.floor((t % oneMin) / 1000);
    const values = [days, hours, minutes, seconds];
    function format(item) {
    if (item < 10) {
        return (item = `0${item}`);
    }
    return item;
    }

    items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
    });
}

let countdown = setInterval(getRemaindingTime, 1000);
