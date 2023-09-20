document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
    const circleText = document.querySelector('.circle-text');
    
    // Spin the circle for 1 second
    circle.style.animation = 'spin 1s linear';

    setTimeout(() => {
        // Stop the spin and start typing
        circle.style.animation = '';
        typeText("Welcome to TalentVyne!", circleText);
    }, 1000);
});

function typeText(text, element) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(type, 100);
        }
    }

    type();
}
