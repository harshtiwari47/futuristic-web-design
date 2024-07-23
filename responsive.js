document.addEventListener('DOMContentLoaded', (ev) => {
if (window.innerHeight > 1480 && window.innerWidth > 920) {
document.querySelector('.main').style.height = `${window.innerHeight/2}px`;
document.querySelector('.right-content').style.height = `${window.innerHeight/2}px`;
document.querySelector('.navigation').style.height = `${window.innerHeight/2.5}px`;
}
})