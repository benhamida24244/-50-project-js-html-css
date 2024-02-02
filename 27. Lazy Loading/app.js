const background = document.querySelector('.background1');
const loadText = document.querySelector('.loding-text');

let load = 0;
let int = setInterval(blurring , 30 );

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load , 0 , 100 , 1 , 0);
    background.style.filter = `blur(${scale(load, 0 , 100 , 30 , 0)}px)`;

}

function scale(value , valuein , valueout , newin , newout)
{
    return (value - valuein) * (newout - newin) / (valueout - valuein) + newin;
}