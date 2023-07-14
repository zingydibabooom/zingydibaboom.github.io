const tooltips = document.querySelectorAll('.all-tooltips .tooltip');
const fullDiv = document.querySelector('section');
const container = document.querySelector('.container');
let timeoutId;

window.addEventListener('DOMContentLoaded', contentPosition);
window.addEventListener('resize', contentPosition);

function contentPosition() {
    tooltips.forEach(tooltip => {
        const pin = tooltip.querySelector('.pin');
        const content = tooltip.querySelector('.tooltip-content');
        content.style.left = pin.offsetLeft - content.offsetWidth / 2 + 'px';
        content.style.top = pin.offsetTop + 40 + 'px';
    })
}

tooltips.forEach(tooltip => {
    const pin = tooltip.querySelector('.pin');
    const content = tooltip.querySelector('.tooltip-content');
    pin.addEventListener('mousemove', () => {
        tooltip.classList.add('active');
    })
    pin.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            tooltip.classList.remove('active');
        }, 1000)
    })
    content.addEventListener('mousemove', () => {
        clearTimeout(timeoutId);
        tooltip.classList.add('active');
    })
    content.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            tooltip.classList.remove('active');
        }, 1000)
    })
})

contentPosition();