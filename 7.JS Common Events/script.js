const mousePara = document.getElementById('mousePara');
const image = document.getElementById('image');

function mousePointer(event) {
    let x = event.clientX;
    let y = event.clientY;
    console.log(x);
    console.log(y);
    mousePara.innerHTML = `X cord: ${x} and Y cord: ${y}`
}

function keyCode(event) {
    alert(event.code)
}

function over() {
    image.src = './asset/img_lights.jpg' ;
}

function out() {
    image.src = './asset/img_forest.jpg';
}