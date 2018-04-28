function timer(seconds) {

    const now = Date.now();

    const then = now + seconds * 1000;


    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Data.now())/1000);

    // check if stop it
    if(secondsLeft <= 0){
        clearInterval(countdown);
        return;
    }
        
    },1000);
    console.log({
        now,
        then
    });

}
