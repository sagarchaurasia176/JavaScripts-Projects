const dots = document.querySelector('.dots');
const pointer = document.querySelector('.pointer');

window.addEventListener('mousemove', (e) => {
    const mouseMoveXDirection = e.clientX;
    const mouseMoveYDirection = e.clientY;
    //for dots only....
    dots.style.left = `${mouseMoveXDirection}px`;
    dots.style.top = `${mouseMoveYDirection}px`;
    //for pointer only...
    pointer.style.left = `${mouseMoveXDirection}px`;
    pointer.style.top = `${mouseMoveYDirection}px`;


    pointer.animate({
        left: `${mouseMoveXDirection}px`,
        top: `${mouseMoveYDirection}px`
    }, { duration: 500, fill: "forwards" })

})