// Create an array of sounds 
const sounds = ['shield', 'default', 'downed', 'storm', 'chest', 'battlebus'];

// For each sound, create a button, add a class 'btn', update the text, append to DOM
sounds.forEach((sound) => {
    // Create a button 
    const btn = document.createElement('button');

    // Add a class of 'btn' to the button 
    btn.classList.add('btn');

    // Set the button label text to be the same as the string value in the sounds array
    btn.innerText = sound;

    //add event listener to this button
    btn.addEventListener('click', () => {
        // stop all sounds first
        stopSounds();
        document.getElementById(sound).play(); 
    })

    //add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});

//helper function
function stopSounds() {
    sounds.forEach((sound) => {
        const snd = document.getElementById(sound);

        snd.pause();
        snd.currentTime = 0;
    });
}