const color = ['crimson', 'springgreen', 'darksalmon', 'darkslateblue', 'plum']
const container = document.getElementsByClassName('container');
const colorCode = document.getElementById('color-code');

const change = () => {
    const index = Math.ceil(Math.random()*4);
    container[0].style.background = color[index];
    colorCode.innerHTML = color[index];
}