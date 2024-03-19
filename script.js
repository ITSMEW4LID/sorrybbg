function showHeart() {
    alert("LETS GOOOOOOOOO (i love you)❤️");
    playAudio(); // Play audio when YES button is clicked
}

function confirmRed() {
    var apologyText = document.getElementById("apology-text");
    apologyText.innerText = "ARE YOU SURE?";
    var response = confirm("Are you sure?");
    if (!response) {
        // Keep showing the "ARE YOU SURE?" message
        confirmRed();
    }
}

function playAudio() {
    var audio = document.getElementById("audio");
    audio.play(); // Play the audio
}
