// Scroll products left or right
function scrollProducts(direction) {
    const container = document.querySelector('.scrolling-wrapper');
    const scrollDistance = 300; // Adjust scroll distance as needed

    if (direction === 'left') {
        container.scrollBy({
            left: -scrollDistance,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        container.scrollBy({
            left: scrollDistance,
            behavior: 'smooth'
        });
    }
}
