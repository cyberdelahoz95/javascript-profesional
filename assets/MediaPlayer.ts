class MediaPlayer {
	media: HTMLMediaElement;
	plugins: Array<any>;
	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins || [];
		this.initPlugins();
	}
	play() {
		this.media.play();
	}
	pause() {
		this.media.pause();
	}
	paused() {
		return this.media.paused;
	}
	mute() {
		this.media.muted = true;
	}
	unmute() {
		this.media.muted = false;
	}
	private initPlugins() {
		this.plugins.forEach((plugin) => {
			plugin.run(this);
		});
	}
}
export default MediaPlayer;
