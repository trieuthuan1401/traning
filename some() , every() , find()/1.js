const comments = [
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
    { text: 'Love this!', id: 523423 },
    // { text: 'aaa', id: 523423 },

];
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];


// var string = "Liễu Triệu Thuận";
// var fixString = string.split(' ');
// console.log(fixString);

// some() kiểm tra xem ít nhất một phần tử của mảng thoã điều kiện ở hàm
// được truyền vào hay không . Kết quả trả về kiểu boolean
// Example về phương thức some 
const numbers = [1, 2, 3, 4, 5];
// Phương thức filter nó giống như 1 chú bảo vệ nó kiểm tra học sinh nếu thoã điều kiện thì mới cho vào trường =))
const evenNumbers = numbers.filter(number => (number % 2 == 0));
// console.log(evenNumbers);


// some trả về kiểu true false
const isAdult = people.some(person => {
    // let year = new Date();
    // // Lấy số năm hiện tại trong máy
    // let currentYear = year.getFullYear();
    // // Kiểm tra xem có đủ 19 tuổi chưa

    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
})
// console.log(isAdult);




// Hàm find sẽ trả về giá trị của phần tử đầu tiên trong mãng thoã với điều kiện mà chúng ta cho
//(được truyền vào như một hàm)

const comment = comments.find(idComment => {
    return idComment.id === 523423;
})
// console.log(comment);



// Hàm này tìm ra vị trí index của mảng
const index = comments.findIndex(comment => comment.id === 523423);
// console.log(index);



// Xoá tại vị trí index và xoá đi 1 phần tử
comments.splice(index, 1);
// Thêm phần tử vào mảng commnets ở vị trí số 0 
comments.splice(0, 0, { text: 'You are the besttttt', id: 2039842 });
console.table(comments);



// array.splice (index, howmany, item1, item2 ,...)
// index là vị trí bắt đầu thay thế 
// how many là số phần tử sẽ bị loại bỏ tính từ phần tử index bao gồm cả phần tử index nếu howmany mang giá
//trị 0 thì sẽ không có phần tử nào bị loại bỏ
//item1 và item2 các phần tử được thêm vào vị trí index


