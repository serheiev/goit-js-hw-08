import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(updateTime, 1000));

function updateTime() {
  player.getCurrentTime().then(second => {
    console.log(second);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(second));
  });
}

const startTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
player.setCurrentTime(startTime);
