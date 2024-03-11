const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', function() {
    navigation.classList.toggle('active'); 
    toggleHamburger(); 
});

function toggleHamburger() {
    const bars = document.querySelectorAll('.hamburger__bar');
    bars.forEach(bar => {
        bar.classList.toggle('active-bar'); 
    });
    hamburger.classList.toggle('active-hamburger'); 
}