


// const playButton = document.querySelector('.c2');
// const audioPlayer = document.getElementById('audio-player');
// const playIcon = playButton.querySelector('img'); // The play icon inside the button
// const progressSlider = document.getElementById('progress');

// // Paths to the play and pause images
// const playImageSrc = 'play-solid.svg';  // Update this with your actual play image path
// const pauseImageSrc = 'pause-solid.svg'; // Update this with your actual pause image path

// // Add click event listener for play/pause functionality
// playButton.addEventListener('click', () => {
//     if (audioPlayer.paused) {
//         // Play the audio
//         audioPlayer.play();
//         // Change the play image to pause image
//         playIcon.src = pauseImageSrc;
//     } else {
//         // Pause the audio
//         audioPlayer.pause();
//         // Change the pause image back to play image
//         playIcon.src = playImageSrc;
//     }
// });

// // Update the progress slider as the audio plays
// audioPlayer.addEventListener('timeupdate', () => {
//     // Calculate the percentage of the audio that has been played
//     const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
//     progressSlider.value = progressPercent;
// });

// // Update the audio current time when the progress slider is changed
// progressSlider.addEventListener('input', () => {
//     // Calculate the new current time based on the slider value
//     const newTime = (progressSlider.value / 100) * audioPlayer.duration;
//     audioPlayer.currentTime = newTime;
// });



const playButton = document.querySelector('.c2');
const audioPlayer = document.getElementById('audio-player');
const playIcon = playButton.querySelector('img'); 
const progressSlider = document.getElementById('progress');

// Paths to the play and pause images
const playImageSrc = 'play-solid.svg';  // Update this with your actual play image path
const pauseImageSrc = 'pause-solid.svg'; // Update this with your actual pause image path

// Add click event listener for play/pause functionality
playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        // Play the audio
        audioPlayer.play();
        // Change the play image to pause image
        playIcon.src = pauseImageSrc;
        // Add the "paused" class to indicate it's playing
        playButton.classList.add('paused');
    } else {
        // Pause the audio
        audioPlayer.pause();
        // Change the pause image back to play image
        playIcon.src = playImageSrc;
        // Remove the "paused" class to indicate it's paused
        playButton.classList.remove('paused');
    }
});

// Update the progress slider as the audio plays
audioPlayer.addEventListener('timeupdate', () => {
    // Calculate the percentage of the audio that has been played
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressSlider.value = progressPercent;
});

// Update the audio current time when the progress slider is changed
progressSlider.addEventListener('input', () => {
    // Calculate the new current time based on the slider value
    const newTime = (progressSlider.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
});
