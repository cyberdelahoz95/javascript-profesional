import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    private player: MediaPlayer;
    constructor() {
        this.threshold = 0.25;
        this.player = null;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player) {
        this.player = player;
        const config = {
            threshold: this.threshold,
        };
        const observer = new IntersectionObserver(this.handleIntersection, config);
        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const media = entries[0];
        const appearing = media.intersectionRatio >= this.threshold;
        if (appearing) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
    private handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;
