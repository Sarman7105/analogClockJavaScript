setInterval(setClock, 1000);

const hourHand=document.getElementsByClassName('hour');
// console.log(hourHand);
const minuteHand=document.getElementsByClassName('minute');
const secondHand=document.getElementsByClassName('second');

function setClock() {
    const currentDate = new Date();
    
    const secondRatio=currentDate.getSeconds()/60;
    const minuteRatio=(secondRatio+currentDate.getMinutes())/60;
    const hourRatio=(minuteRatio+currentDate.getHours())/12;
    setRotation(secondHand[0],secondRatio);
    setRotation(minuteHand[0],minuteRatio);
    setRotation(hourHand[0],hourRatio);
    // console.log(secondRatio);
    // console.log(minuteRatio);
    // console.log(hourRatio);
}

function setRotation(element,rotationRatio){
    element?.style.setProperty("--rotation",rotationRatio*360);
}
setClock();