// Khai báo kiểu mảng nhưng trong 1 giá trị phần tử của mảng là kiểu đối tượng

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Example fillter function giống như 1 bộ lọc nó kiểm tra nếu thoã hết các điều kiện
// //thì lấy


// var number = [1, 2, 3, 4];
// var evenNumbers = number.filter(function (x) {
//     return x % 2 === 0;
// })
// console.log(evenNumbers);

// var evenNumbers = numbers.filter(x => (x%2 ===0 ));


// // Lấy những người sinh năm 1500 và bé hơn 1600
// const fifteen = inventors.filter(function(inventor){
//     if (inventor.year >= 1500 && inventor.year < 1600){
//         return true; // Lấy nó
//     }
//     else{
//         return false; //Không lấy nó
//     }
// })

// Nếu các nhà phát minh có năm sinh từ 1500 đến 1600 thì dùng hàm filer lọc để lấy
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
// console.table(fifteen);




// map function kiểu giống như ta đưa 1 mãng dữ liệu vào nó sẽ đổi ra mãng dữ liệu khác theo
//điều kiện mà mình đã đặt
//Example
// -- Bỏ một mảng đổi ra thành 1 mãng bình phương
// var numbers = [1,3,4,5,6];
// var squaredNumbers = numbers.map(number =>(number*number));
// console.log(squaredNumbers);


const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(fullName);



// sort function 
// --- Nếu như giá trị của a bé hơn 0 thì giá trị của a sẽ sắp xếp trước b 
// --- Nếu như giá trị của a lớn hơn 0 thì giá trị của a sẽ sắp xếp sau b
// --- Nếu như giá trị của a bằng 0 thì sẽ không hoán đổi vị trí cho nhau

// Examples 
// --- Sắp xếp thứ tự tăng dần
var numbers = [4, 3, 1, 2, 9];
// giả sử a = 9 , b = 2;
var ascendingNumbers = numbers.sort((a, b) => b - a);
// console.log(ascendingNumbers);


// --- Nếu như giá trị của a bé hơn 0 thì giá trị của a sẽ sắp xếp trước b 
// --- Nếu như giá trị của a lớn hơn 0 thì giá trị của a sẽ sắp xếp sau b
// --- Nếu như giá trị của a bằng 0 thì sẽ không hoán đổi vị trí cho nhau


// Lấy ra những người có năm sinh lớn nhất
const ordered = inventors.sort((inventor1, inventor2) => inventor2.year - inventor1.year);
// console.table(ordered);


// reduce function nó sẽ nhận vào 2 đầu vào
// Đầu tiên a là 1 và b là 2
// Sau đó a = 3 và b lúc này bằng 5
// Tiếp theo a = 8 và b lúc này là 2 
// Và kết quả là 10
var numbers = [1,4,5,2];
var total = numbers.reduce((a,b) => ( a + b ));


// Đầu tiên ta khởi tạo biến total = 0
// Còn inventor là biến ta đưa vào sau đó ta cộng biến total và invertor rồi tiến trình cứ như vậy
const totalYears = inventors.reduce( (total, inventor) => ( total + inventor.passed - inventor.year),0);
// console.log(totalYears);



const oldest = inventors.sort((a,b) => {
    // Tìm tuổi của 2 đầu truyền vào
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    
    // --- Nếu như giá trị của a bé hơn 0 thì giá trị của a sẽ sắp xếp trước b 
    // --- Nếu như giá trị của a lớn hơn 0 thì giá trị của a sẽ sắp xếp sau b
    // --- Nếu như giá trị của a bằng 0 thì sẽ không hoán đổi vị trí cho nhau

    // Sử dụng toán tử 3 ngôi kiểm tra thằng nào lớn tuổi hơn
    // return lastGuy > nextGuy ? -1 : 1;
    return nextGuy - lastGuy;
});

// console.log(oldest);


const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


const alpha  = people.sort((a,b) =>{
    // const parts = a.split(',');
    // split hàm này gọt bỏ thứ mà ta k muốn
    const [last , first ] = a.split(',');
    // console.log(last, first);
});