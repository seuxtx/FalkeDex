
// have a reference on top level to the "audio" var so it will be 
// correctly played and paused. 
var audio

function playStop() {

    // check wether the audio was already created and do so if not.
    // also show the playcontrol on creation.
    if (!audio) {
        audio = new Audio('images/Pokémon_Theme_Song.mp3');
        document.getElementById('playControl').style.visibility = 'visible';
        audio.volume = 0.3;
        audio.loop = true;
    }

    // use audio.paused prop for being more consistent. The content of the play button 
    // could be changed without breaking the code now. 
    if (audio.paused) {
        audio.play();
        document.getElementById('playbtn').innerHTML = "❚❚";
    } else {
        document.getElementById('playbtn').innerHTML = "▷";
        audio.pause();
    }

}