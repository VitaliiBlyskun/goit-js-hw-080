import throttle from "lodash.throttle";
import vimeoPlayer from "@vimeo/player";

const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}

setCurrentTime();

function setCurrentTime() {
    const savedTime =  localStorage.getItem(LOCALSTORAGE_KEY);
    if(savedTime) {
        player.setCurrentTime(savedTime);
    };
}

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

