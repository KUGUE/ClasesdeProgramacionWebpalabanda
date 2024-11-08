document.addEventListener('DOMContentLoaded', function () {
    const playImage = document.getElementById('playImage');
    const audio = document.getElementById('audio');
  function toggleAudioAndImage() {
    if (audio.paused) {
      audio.play();
      playImage.src = '/assets/img/stop.png';
    } else {
      audio.pause();
      audio.currentTime = 0;  
      playImage.src = '/assets/img/play.png';
    }
  }
  playImage.addEventListener('click', toggleAudioAndImage);
  audio.addEventListener('ended', () => {
    playImage.src = '/assets/img/play.png';
  });
});