function playMessage() {
    alert("♫ currently playing: my favourite song ♫")

}

// Find the audio player
const music = document.getElementById("playbutton");

// play / pause music
const playbutton = document.getElementById("playbutton");
playbutton.addEventListener("click", function () {

    if (music.paused) {
        music.play();
        playbutton.textContent = "❚❚";
    } else {
        music.pause();
        playbutton.textContent = "▶";
    }
});