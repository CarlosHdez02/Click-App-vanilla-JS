const addButton = document.getElementById('addButton');
const subButton = document.getElementById('subButton');
const displayText = document.getElementById('result');

let count =0;
const addCounter = ()=>{
    count++;
    displayText.textContent = `count is: ${count}`
}
const subCounter = ()=>{
    count--
    displayText.textContent = `count is: ${count}`
}

addButton.addEventListener('click',addCounter);
subButton.addEventListener('click',subCounter);