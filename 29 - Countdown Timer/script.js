let countdown;

const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {

    const now = Date.now();

    const then = now + seconds * 1000;

    displayTimeLeft(seconds);

    countdown = setInterval(() => {

        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // check if stop it

        if (secondsLeft <= 0) {

            clearInterval(countdown);

            return;
        }
        // console.log({
        //     now,
        //     then
        // });
        displayTimeLeft(secondsLeft)

    }, 1000);
}

function displayTimeLeft(seconds) {

    const minutes = Math.floor(seconds / 60);

    const remainderSeconds = seconds % 60;

    const display = `${minutes}:${remainderSeconds}`;

    timerDisplay.textContent = display;


        console.log({
            minutes,
            remainderSeconds
        });

}


//     const end = end Date(timestamp);

//     const hour = end.getHous();

//     const adjustedHour = hour > 12 ? hour -12 : hour;

//     const minutes = end.getMintues();



// }
