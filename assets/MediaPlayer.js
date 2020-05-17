class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
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
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.paure(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            },
        };
        this.plugins.forEach((plugin) => {
            plugin.run(player);
        });
    }
}
export default MediaPlayer;
