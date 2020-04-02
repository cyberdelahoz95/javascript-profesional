function MediaPlayer(config){
    this.media = config.el
}
MediaPlayer.prototype.play = function () {
    this.media.play();
}
MediaPlayer.prototype.pause = function() {
  this.media.pause()
}
MediaPlayer.prototype.paused = function() {
  returnthis.media.paused
}

export default MediaPlayer;