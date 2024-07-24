document.addEventListener('DOMContentLoaded', (ev) => {
if (window.innerHeight > 1480 && window.innerWidth > 920) {
document.querySelector('.main').style.height = `calc(${window.innerHeight/2.05}px + 2vh)`;
document.querySelector('.right-content').style.height = `calc(${window.innerHeight/2}px + 4vh)`;
document.querySelector('.main-content').style.height = `calc(${window.innerHeight/2.5}px + 4vh)`;
let mainCont = document.querySelector('.main-content');
let computedStyle = window.getComputedStyle(mainCont);
let mainContChildHeight = (parseFloat(computedStyle.height)/6);
document.querySelector('.main-content .footerMain').style.height = `${mainContChildHeight}px`;
document.querySelector('.main-content .footerMain').style.padding = `8px 16px`;
document.querySelector('.navigation').style.height = `calc(${window.innerHeight/2.5}px + 4vh)`;
}
});

var theme = 'light';

function applyViewTransition(view) {
// Add exit transition classes
view.classList.add('view-transition-exit');
view.classList.add('view-transition-exit-active');
// Add event listener for transition end
view.addEventListener('transitionend', () => {
// Remove exit transition classes
view.classList.remove('view-transition-exit');
view.classList.remove('view-transition-exit-active');
// Add enter transition classes
view.classList.add('view-transition-enter');
// Force reflow to apply the new styles (necessary for the transition)
view.getBoundingClientRect();
// Add enter active class to start the enter transition
view.classList.add('view-transition-enter-active');
// Clean up enter transition classes after the transition ends
view.addEventListener('transitionend', () => {
view.classList.remove('view-transition-enter');
view.classList.remove('view-transition-enter-active');
}, { once: false });
}, { once: false });
}

document.getElementById('theme').addEventListener('click', (ev) => {
let view = document.querySelector('.container');
if (theme === 'light') {
view.classList.remove('light')
theme = 'dark';
applyViewTransition(view);
} else {
theme = 'light'
view.setAttribute("class", "container light");
}
});