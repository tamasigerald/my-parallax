// PARALLAX
const parallax = (e) => {
    const parallaxContainer$$ = document.querySelector('[data-parallax]');
    // const parallax$$ = parallaxContainer$$.children;

    const parallax$$ = document.querySelectorAll('[data-parallax-layer]');
    for (let n = 0; n < parallax$$.length; n++) {
        let element = parallax$$[n];
        const depthIndex = element.getAttribute('data-depth');
        const speedIndex = element.getAttribute('data-speed');
        const halfX = (window.innerWidth / 2);
        const halfY = (window.innerHeight / 2);
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const initialX = -element.offsetWidth / 2;
        const initialY = -element.offsetHeight / 2;
        let posX = (halfX - mouseX) * depthIndex / 100;
        let posY = (halfY - mouseY) * depthIndex / 100;

        if (depthIndex) {
            element.style.transform = `translate(${posX + initialX}px,${posY + initialY}px)`;
            element.style.transition = `transform ${speedIndex}s ease-out`;
        }
    }
}

// FIX HEIGHT ON MOBILE DEVICES
const fixHeight = () => {
    const queryElements = ['.bg__container', '.container'];
    const elements = [];
    queryElements.map(query => {
        let element = document.querySelector(`${query}`);
        elements.push(element);
    })
    elements.map(element => {
        let height = window.innerHeight;
        element.style.height = `${height}px`;
    })
}

// CALL FIX ON WINDOW RESIZE
window.addEventListener('resize', () => {
    fixHeight();
})

window.addEventListener('mousemove', parallax);

// CALL FUNCTIONS ON LOAD
window.onload = () => {
    fixHeight();
}