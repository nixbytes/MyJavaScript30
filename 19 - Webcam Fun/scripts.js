const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })

        .catch(err => {
            console.error(`Need Access for Web Cam`, err);
        })
}

function paintToCanavas() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;


    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}


function takePhoto() {
    //play sound effect
    snap.currentTime = 0;
    snap.play();

    // collect the data
    const data = canvas.toDateURL('image/jpeg');
    console.log(data);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; //red color
        pixels.data[i + 500] = pixels.data[i + 1]; //green color
        pixels.data[i - 550] = pixels.data[i + 2]; //blue color

    }
    return pixels;
}




getVideo();


video.addEventListener('canplay', paintToCanavas);