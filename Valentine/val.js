const noButton = document.querySelector('.No');
let yesorno = 0;
const initialNobuttonX = noButton.style.left;
const initialNobuttonY = noButton.style.top;

noButton.addEventListener('click', () => {
    // Disable scrolling

    document.body.style.overflow = 'hidden';

    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calculate maximum X and Y positions within the viewport
    const maxX = bodyWidth - buttonWidth;
    const maxY = bodyHeight - buttonHeight;

    // Generate random positions within the viewport
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Set the button's position
    if(yesorno == 0){
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }
    

});




document.body.addEventListener('click', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    console.log(`Mouse coordinates: X=${mouseX}, Y=${mouseY}`);
});
    
document.querySelector('.Yes').addEventListener('click', () => {
    document.querySelector('.heart').style.display = 'block';
    document.querySelector(".bear").style.display="none";
    yesorno = 1;
    noButton.style.left = initialNobuttonX;
    noButton.style.top = initialNobuttonY;
});