var row = document.querySelector('#row');
var column = document.querySelector('#column');
var header = document.querySelector('.header');
var input = document.querySelectorAll('input');
function show() {
    var array = [];
    for (let index = 0; index < row.value; index++) {
        array.push(`<div class= "column-header">${index}</div>`); 
    }8
    var string = array.join(' ');
    header.innerHTML = string;
    let aray = []
    for(let i = 0; i < row.value*column.value; i++){
        let random = Math.floor(Math.random()*1001)
        aray.push(<div class="column-header">${random}</div>)
    }
    let y = aray.join(' ')
    content.innerHTML = y;
}
input.forEach(item => item.addEventListener('click', show));


