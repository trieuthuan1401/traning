// Đầu tiên ta khởi tạo biến có tên panels sau đó lấy tất cả div có class panels
const panels = document.querySelectorAll('.panel');
// // console.log(panels);

for (let index = 0; index < panels.length; index++) {
  // Bắt sự kiện click
    panels[index].onclick = function () {
    // toggle add +  remove
    panels[index].classList.toggle('open');
    panels[index].classList.toggle('open-active');
  }
}

// function toggleOpen(){
//   this.classList.toggle('open');
//   this.classList.toggle('open-active');
// }

// panels.forEach( item => item.addEventListener('click' , toggleOpen));
