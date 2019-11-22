const triggers = document.querySelectorAll('a');
// console.log(triggers);
// Tạo một thẻ trong html
const highlight = document.createElement('span');
// Addclass highlight vào thẻ span
highlight.classList.add('highlight');
// Thêm thẻ đó vào body
document.body.append(highlight);


function highlightLink() {
    
    const linkCoords = this.getBoundingClientRect();
    // console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  }


triggers.forEach( item => item.addEventListener('mouseenter', highlightLink));




// for (let index = 0; index < triggers.length; index++) {
//     triggers[index].addEventListener('mouseenter', function () {
//         highlightLink();
//     });
// }

// var numbers = [1,4,5,5,6];
// var total = [];
// numbers.forEach( (number,index) => ( total[index] = number*number));
// console.log(total);