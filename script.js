let buttonSolid = document.getElementById('btn-solid');
let buttonGradient = document.getElementById('btn-gradient');
let dispCode = document.getElementById('color-code');
let color;
let color1, color2;

let randomColor = () => {
    let hex = '0123456789ABCDEF';
    let randomHex = () => hex[Math.floor(Math.random() * 16)];

    if (color === 'solid') {
        return '#' + Array.from({ length: 6 }, randomHex).join('');
    } else if (color === 'gradient') {
        color1 = '#' + Array.from({ length: 6 }, randomHex).join('');
        color2 = '#' + Array.from({ length: 6 }, randomHex).join('');
        return `linear-gradient(to right, ${color1}, ${color2})`;
    }
};

buttonSolid.addEventListener('click', () => {
    color = 'solid';
    document.body.style.background = randomColor();
    dispCode.innerHTML = randomColor();
});

buttonGradient.addEventListener('click', () => {
    color = 'gradient';
    document.body.style.background = randomColor();
    dispCode.innerHTML = `${color1} - ${color2}`;
});
