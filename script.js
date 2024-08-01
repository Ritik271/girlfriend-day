// Function to generate flying hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    document.querySelector('.background').appendChild(heart);

    // Remove heart after animation completes
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Create multiple hearts
function generateHearts(num) {
    for (let i = 0; i < num; i++) {
        setTimeout(createHeart, i * 500);
    }
}

// Open popup function
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.querySelector('.popup-content').classList.add('show');
}

// Close popup function
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.querySelector('.popup-content').classList.remove('show');
}

// Event listeners
document.getElementById('openBox').addEventListener('click', openPopup);
document.getElementById('closePopup').addEventListener('click', closePopup);

// Initialize heart generation on page load
document.addEventListener('DOMContentLoaded', () => {
    generateHearts(5);
});
