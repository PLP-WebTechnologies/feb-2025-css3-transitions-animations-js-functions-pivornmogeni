// DOM Elements
const themeSelect = document.getElementById('theme');
const speedSelect = document.getElementById('animation-speed');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');
const animateBtn = document.getElementById('animate-btn');
const bounceBtn = document.getElementById('bounce-btn');
const animatedBox = document.getElementById('animated-box');

// Load saved preferences
function loadPreferences() {
    const savedTheme = localStorage.getItem('themePreference');
    const savedSpeed = localStorage.getItem('animationSpeed');
    
    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }
    
    if (savedSpeed) {
        speedSelect.value = savedSpeed;
        applyAnimationSpeed(savedSpeed);
    }
}

// Apply selected theme
function applyTheme(theme) {
    document.body.className = ''; // Clear all theme classes
    document.body.classList.add(`${theme}-theme`);
}

// Apply animation speed
function applyAnimationSpeed(speed) {
    animatedBox.className = 'animated-box'; // Reset classes
    animatedBox.classList.add(`${speed}-speed`);
}

// Save preferences to localStorage
function savePreferences() {
    const selectedTheme = themeSelect.value;
    const selectedSpeed = speedSelect.value;
    
    localStorage.setItem('themePreference', selectedTheme);
    localStorage.setItem('animationSpeed', selectedSpeed);
    
    applyTheme(selectedTheme);
    applyAnimationSpeed(selectedSpeed);
    
    // Show confirmation animation
    saveBtn.textContent = 'Saved!';
    saveBtn.style.backgroundColor = '#27ae60';
    
    setTimeout(() => {
        saveBtn.textContent = 'Save Preferences';
        saveBtn.style.backgroundColor = '#2ecc71';
    }, 1500);
}

// Reset preferences
function resetPreferences() {
    localStorage.removeItem('themePreference');
    localStorage.removeItem('animationSpeed');
    
    themeSelect.value = 'light';
    speedSelect.value = 'normal';
    
    applyTheme('light');
    applyAnimationSpeed('normal');
    
    // Show confirmation animation
    resetBtn.textContent = 'Reset!';
    resetBtn.style.backgroundColor = '#c0392b';
    
    setTimeout(() => {
        resetBtn.textContent = 'Reset Preferences';
        resetBtn.style.backgroundColor = '#e74c3c';
    }, 1500);
}

// Animate box with slide animation
function animateBox() {
    // Reset any ongoing animations
    animatedBox.style.animation = 'none';
    void animatedBox.offsetWidth; // Trigger reflow
    
    // Apply the animation
    animatedBox.style.animation = 'slideRight 1s ease-in-out forwards';
    
    // Reset after animation completes
    setTimeout(() => {
        animatedBox.style.animation = 'none';
        animatedBox.style.transform = 'translateX(200px)';
    }, 1000);
}

// Bounce box animation
function bounceBox() {
    // Reset any ongoing animations
    animatedBox.style.animation = 'none';
    void animatedBox.offsetWidth; // Trigger reflow
    
    // Apply the bounce animation
    animatedBox.style.animation = 'bounce 1s ease';
    
    // Add pulse effect after bounce
    setTimeout(() => {
        animatedBox.style.animation = 'pulse 1s ease';
    }, 1000);
}

// Event Listeners
saveBtn.addEventListener('click', savePreferences);
resetBtn.addEventListener('click', resetPreferences);
animateBtn.addEventListener('click', animateBox);
bounceBtn.addEventListener('click', bounceBox);

// Add hover effect to animated box
animatedBox.addEventListener('mouseenter', () => {
    animatedBox.style.transform = 'scale(1.05)';
    animatedBox.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
});

animatedBox.addEventListener('mouseleave', () => {
    animatedBox.style.transform = 'scale(1)';
    animatedBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    
    // Add initial fade-in animation to main content
    document.querySelector('.main-content').style.animation = 'fadeIn 1s ease-out';
});