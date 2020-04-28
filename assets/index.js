import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const button = document.querySelector('button');

const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause()],
});

button.onclick = () => {
	player.paused() ? player.play() : player.pause();
};
