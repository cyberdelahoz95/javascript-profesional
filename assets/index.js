import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector('video');
const button = document.querySelector('button');
const muteButton = document.querySelector('#muteButton');

const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause()],
});

button.onclick = () => {
	player.paused() ? player.play() : player.pause();
};

muteButton.onclick = () => {
	if (player.media.muted) {
		player.unmute();
	} else {
		player.mute();
	}
};

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch((err) => {
		console.log(err.message);
	});
}
