function timer(seconds) {

    const now = Date.now();

    const then = now + seconds * 1000;


    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/1000);

    // check if stop it
    if(secondsLeft <= 0){
        clearInterval(countdown);
        return;
    }
    console.log({
        now,
        then
    });

        
    },1000);
}

function displayTimeLeft(second){
const minutes = Math.floor(seconds/60);

const remainderSeconds = seconds % 60;
console.log({minutes,remainderSeconds});

}
