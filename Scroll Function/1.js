const h1 = document.querySelector('h1');
console.log(h1);
// Tính vị trí của h1 so với top
var offset = h1.offsetTop;
console.log(offset);

window.addEventListener("scroll",function(){
    // Tính vị trí người dùng khi cuộn chuột
    var vitri = window.pageYOffset;
    console.log(vitri);
});


// CODE cho jquery
// Tính vị trí từ class scroll đến vị trí top
// var offset = $('.scroll').offset().top;
// console.log(offset);
// $(window).scroll(function () {
//     // Tính vị trí người dùng cuộn chuột 
//     var vitri = $('html').scrollTop();
// });