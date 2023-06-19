const para = document.getElementById('paragraph');
const numElements = Number(prompt("How many elements are in the array?"));
let array= [];


for(let i=0; i<numElements; i++){
    array[i] = Number(prompt(`Enter the ${i}th index element`));
}

function squareRoot(array) {
    let sum = 0;
    let root;

    array.forEach((item) => {
        sum += item*item;
    })

    root = Math.sqrt(sum);
    return root;
}
para.innerHTML = squareRoot(array);