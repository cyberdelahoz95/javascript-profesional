const video = document.querySelector('video');
const button = document.querySelector('button');   
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
const player = new MediaPlayer({el:video});
button.onclick = () => {
  player.paused()
  ? player.play()
  : player.pause()
} 