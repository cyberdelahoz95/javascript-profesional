class AutoPause {
	constructor() {
		this.treshold = 0.25;
		this.player = null;
		this.handleIntersection = this.handleIntersection.bind(this);
	}
	run(player) {
		this.player = player;
		const config = {
			treshold: this.treshold,
		};
		const observer = new IntersectionObserver(
			this.handleIntersection,
			config
		);
		observer.observe(this.player.media);
	}
	handleIntersection(entries) {
		const media = entries[0];
		const appearing = media.intersectionRatio >= this.treshold;
		if (appearing) {
			this.player.play();
		} else {
			this.player.pause();
		}
	}
}

export default AutoPause;
