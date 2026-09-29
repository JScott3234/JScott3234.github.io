// Injecting the header creates significant performance issues

// Inject Footer
var footer = `<footer class="footer">
        <h3>Jase Scott</h3>
        <p class="contactInfo"><a href="mailto:jase.s.5273@gmail.com" target="_blank">jase.s.5273@gmail.com</a> | <a
                href="https://github.com/JScott3234" target="_blank">JScott3234/Github.com</a></p>

    </footer>`;

document.getElementById("footer").innerHTML = footer;

// Carousel Click-and-Drag Scrolling
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.proj-carousel-track');
    
    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Prevent default image drag behavior which interferes with click-and-drag
        carousel.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            // Temporarily disable scroll snapping for smooth dragging
            carousel.style.scrollSnapType = 'none';
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.classList.remove('active');
            carousel.style.scrollSnapType = '';
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.classList.remove('active');
            carousel.style.scrollSnapType = '';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            carousel.scrollLeft = scrollLeft - walk;
        });
    });
});