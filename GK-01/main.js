const Input1 = document.getElementById('a');
const Input2 = document.getElementById('b');
const result = document.getElementById('result');

///SUM
const sumBTN = document.getElementById('sum');
sumBTN.addEventListener('click', () => {
    const a = parseInt(Input1.value);
    const b = parseInt(Input2.value);
    if (isNaN(a) || isNaN(b)) {
        result.textContent= 'Nhập số -_-\' ';
        return;
    }
    result.textContent = a + b;
});

///SUB
const subBTN = document.getElementById('sub');
subBTN.addEventListener('click', () => {
    const a = parseInt(Input1.value);
    const b = parseInt(Input2.value);
    if (isNaN(a) || isNaN(b)) {
        result.textContent= 'Nhập số -_-\' ';
        return;
    }
    result.textContent = a - b;
});

///MUL 
const mulBTN = document.getElementById('mul');
mulBTN.addEventListener('click', () => {
    const a = parseInt(Input1.value);
    const b = parseInt(Input2.value);
    if (isNaN(a) || isNaN(b)) {
        result.textContent= 'Nhập số -_-\' ';
        return;
    }
    result.textContent = a * b;
});

///DIV
const divBTN = document.getElementById('div'); 
divBTN.addEventListener('click', () => {
    const a = parseInt(Input1.value);
    const b = parseInt(Input2.value);
    if (isNaN(a) || isNaN(b)) {
        result.textContent= 'Nhập số -_-\' ';
        return;
    }
    if (b===0) {
    result.textContent = 'Chia thế nào được cho 0, chịu ní đấy -_-\' ';
    return;
    }
    result.textContent = a / b;
});

//CLEAR
const clearBTN = document.getElementById('reset');
clearBTN.addEventListener('click', () => {
    Input1.value = '';
    Input2.value = '';
    result.textContent = '';
});
