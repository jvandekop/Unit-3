let array = [];

function update() {
    const outputParagraph = document.getElementById('output');
    outputParagraph.innerHTML = '';
    array.reduce((acc, item, index) => {
        outputParagraph.innerHTML += `${index + 1}. ${item}<br>`;
    }, '');
}

function pushToArray() {
    const input = document.getElementById('input').value;
    array.push(input);
    update();
}

function popFromArray() {
    array.pop();
    update();
}

function shiftFromArray() {
    array.shift();
    update();
}

function unshiftToArray() {
    const input = document.getElementById('input').value;
    array.unshift(input);
    update();
}

function arrMap() {
    const input = document.getElementById('input').value;
    array = array.map(item => input + item);
    update();
}