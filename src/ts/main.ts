let burger: HTMLDivElement = document.getElementById("burger") as HTMLDivElement;
let drawer: HTMLDivElement = document.getElementById("drawer") as HTMLDivElement;
let overlay: HTMLDivElement = document.getElementById("overlay") as HTMLDivElement;

burger?.addEventListener('click', () => {
    burger?.classList.toggle('is-active');
    drawer?.classList.toggle('visible');
    overlay?.classList.toggle('visible')
    
});