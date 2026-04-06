export const initCarousel = () => {
    const carousel = document.getElementById('product-carousel');
    const prevBtn = document.getElementById('prev-product-btn');
    const nextBtn = document.getElementById('next-product-btn');

    if (!carousel || !prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', () => {
        // Skip over to the previous slide
        const itemWidth = carousel.firstElementChild?.clientWidth || 300;
        const gap = window.innerWidth >= 640 ? 24 : 16; // gap-6 (24px) on sm+, gap-4 (16px) on mobile
        carousel.scrollBy({ left: -(itemWidth + gap), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        // Skip over to the next slide
        const itemWidth = carousel.firstElementChild?.clientWidth || 300;
        const gap = window.innerWidth >= 640 ? 24 : 16;
        carousel.scrollBy({ left: (itemWidth + gap), behavior: 'smooth' });
    });

    // Optional: Hide buttons if not scrollable or at ends
    const updateButtons = () => {
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        if (scrollLeft <= 0) {
            prevBtn.disabled = true;
            prevBtn.classList.add('opacity-50');
        } else {
            prevBtn.disabled = false;
            prevBtn.classList.remove('opacity-50');
        }

        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
            nextBtn.disabled = true;
            nextBtn.classList.add('opacity-50');
        } else {
            nextBtn.disabled = false;
            nextBtn.classList.remove('opacity-50');
        }
    };

    carousel.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    
    // Initial check
    setTimeout(updateButtons, 100);
};
