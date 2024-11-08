var track = document.getElementById("track");

var controlBtn = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    controlBtn.className = "pause";
  } else {
    track.pause();
    controlBtn.className = "play";
  }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  controlBtn.className = "play";
});

// abecedario

function playAudio(letra) {
    var audio = document.getElementById('track');
    audio.src = `../assets/Audios/Abecedario/${letra}.mp3`;
    audio.play();
  }