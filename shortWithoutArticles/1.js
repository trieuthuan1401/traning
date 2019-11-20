const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];



// Phương thức str.trim() sẽ loại bỏ các khoảng trắng ở đầu và cuối chuỗi phương thức sẽ trả về 
// chuỗi mà bị loại bỏ khoảng trắng đầu và cuối chuỗi

// x.replace ("Từ cần tìm kiếm" , "Từ cần thay thế")

function strip(name) {
  // Khi những từ mà có a , an the ... sẽ bị thay thế bằng khoảng trắng và trim sẽ cắt khoảng trắng đó đi
  return name.replace(/^(a |the |an | )/i, '').trim();
}



// a lớn hơn b nếu đúng trả về 1 sai trả về -1 là sắp xếp tăng dần còn ngược lại là sắp xếp giảm
const sortedBands = bands.sort((a , b) => strip(a) > strip(b) ? 1 : -1 );
// console.log(sortedBands);


// document.querySelector('#bands').innerHTML 
// document.querySelector('.demo').innerHTML = "liễu triệu thuậnnnnn";


// map function kiểu giống như ta đưa một mãng dữ liệu vào nó sẽ đổi ra một mảng dữ liệu khác

// Đầu tiên ta sử dụng hàm map biến đổi các phần tử trong mảng bands thành 1 mảng khác sau đó
// sử dụng join nối các phần tử trong 1 mảng thành chuỗi rồi in ra html


// innerHTML 
document.querySelector("#bands").innerHTML = 
sortedBands
.map( band => `<li>${band}</li>`)
.join('');


// console.log(sortedBands);

// Phương thức join tạo ra một chuỗi bằng các phần tử trong mảng ngăn cách chúng bằng dấu phẩy hoặc
// bằng chuỗi kí tự xác định
// const elements = ['Fire', 'Air' , 'Water'];
// console.log(elements.join());
// console.log(elements.join(''));



























