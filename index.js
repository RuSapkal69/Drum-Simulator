var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var InnerHTML = this.innerHTML;

        makeSound(InnerHTML);
        Animation(InnerHTML);

    })
}


document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    Animation(event.key);
})

function makeSound (key) {

    switch (key) {

        case "w":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "a":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "s":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
            
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

            
        default: console.log(InnerHTML);


            }

}

function Animation(currentkey) {
    var active = document.querySelector("."+ currentkey);
    active.classList.add("pressed");

    setTimeout(function() {
        active.classList.remove("pressed");

    }, 100);
}

const bubbleColors = [
    '#3494E6',   // Blue
    '#EC6EAD',   // Pink
    '#DA0463',   // Deep Pink
    '#DBEDF3',   // Light Blue
    '#404B69',   // Dark Blue
    '#FF6B6B',   // Soft Red
    '#4ECDC4',   // Teal
    '#45B7D1'    // Sky Blue
];

function createFallingBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('falling-bubble');
    
    // Random size between 10 and 40 pixels
    const size = Math.random() * 30 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random color from the palette
    bubble.style.backgroundColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
    
    // Random position at the top of the page
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.top = '0px';
    
    // Random fall duration between 2 and 5 seconds
    bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    document.body.appendChild(bubble);
    
    // Remove bubble after animation ends
    setTimeout(() => {
        document.body.removeChild(bubble);
    }, 5000);
}

// Add event listeners to drums
const drums = document.querySelectorAll('.drum');
drums.forEach(drum => {
    drum.addEventListener('click', () => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createFallingBubble(), i * 100);
        }
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    const drum = document.querySelector(`.drum.${key}`);
    
    if (drum) {
        drum.style.transform = 'scale(0.95)';
        setTimeout(() => drum.style.transform = '', 100);
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createFallingBubble(), i * 100);
        }
    }
});