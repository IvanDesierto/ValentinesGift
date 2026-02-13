const mainHeart = document.getElementById('mainHeart');
const container = document.querySelector('.container');

// 1. Function to create a floating heart
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    
    // Randomize position
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Randomize animation duration
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    // Randomize size
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.getElementById('hearts-container').appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// 2. The Main Click Event (Animation + Music)
container.addEventListener('click', () => {
    
    // --- MUSIC PART STARTS HERE ---
    const audio = document.getElementById('music-player');
    
    // Check if audio exists and isn't already playing
    if (audio && audio.paused) {
        audio.volume = 0.5; // Set volume to 50%
        audio.play().catch(error => {
            console.log("Audio play failed: ", error);
            // This usually happens if the user hasn't interacted enough, 
            // but clicking the heart should satisfy the browser.
        });
    }
    // --- MUSIC PART ENDS HERE ---

    // Burst effect: create 15 hearts at once
    for(let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// 3. Background hearts appearing slowly automatically
setInterval(createHeart, 800);