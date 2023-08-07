// Add click event listeners for the buttons
document.getElementById("kick").addEventListener("click", function() { playSound("kick") });
document.getElementById("snare").addEventListener("click", function() { playSound("snare") });
document.getElementById("tom").addEventListener("click", function() { playSound("tom") });
document.getElementById("ride").addEventListener("click", function() { playSound("ride") });
document.getElementById("openhat").addEventListener("click", function() { playSound("openhat") });
document.getElementById("clap").addEventListener("click", function() { playSound("clap") });
document.getElementById("boom").addEventListener("click", function() { playSound("boom") });
document.getElementById("tink").addEventListener("click", function() { playSound("tink") });
document.getElementById("hihat").addEventListener("click", function() { playSound("hihat") });

// Add event listener for keydown event
document.addEventListener("keydown", onKeyDown);


// Function to play the sound
function playSound(soundFileName) {
    let audio = new Audio("sounds/" + soundFileName + ".wav");
    audio.play();
}

// Function to handle the keydown event
function onKeyDown(event) {
    const key = event.key;

    // Check which key was pressed and play the corresponding sound
    if (key === "a") {
        playSound("kick");
    } else if (key === "s") {
        playSound("snare");
    } else if (key === "d") {
        playSound("tom");
    } else if (key === "f") {
        playSound("ride");
    } else if (key === "g") {
        playSound("openhat");
    } else if (key === "h") {
        playSound("clap");
    } else if (key === "j") {
        playSound("boom");
    } else if (key === "k") {
        playSound("tink");
    } else if (key === "t") {
        playSound("hihat");
    }
}




