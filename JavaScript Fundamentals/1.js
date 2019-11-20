let age = 100;
let age2 = age;
// console.log(age ,age2);
age2= 200;
// console.log(age,age2);


let name = "lieutrieuthuan";
let name2 = name;
// console.log(name , name2);
name2 = "NguyenNhatThien";
// console.log(name , name2);



const players = ['thuan', 'thien' ,'khue' , 'chung' ];
const team = players;
// console.log(players, team);

team[3] = "long";
// console.log(team);



// array.splice (index, howmany, item1, item2 ,...)
// index là vị trí bắt đầu thay thế 
// how many là số phần tử sẽ bị loại bỏ tính từ phần tử index bao gồm cả phần tử index nếu howmany mang giá
//trí số 0 thì sẽ không có phần tử nào bị loại bỏ
//item1 và item2 các phần tử được thêm vào vị trí index


team.splice(0,0,'lllieutrieuthuan');
// console.log(team);


const person = {
    name : "lllieutrieuthuan",
    age : 23,
}
const student = person;
person.age = 21;
console.log(person);

const wes = {
    name: "thuan",
    age: 100,
    social : {
        twitter : "@lllieutrieuthuan",
        facebook : "llllieutrieuthuan",
    },
};

// JSON.stringify lấy về một đối tượng  và chuyển đổi thành một chuỗi json
const devFE = JSON.stringify(wes);
// console.log(devFE);

// JSON.parse nhận vào một chuỗi json và đổi chuỗi đó thành kiểu đối tượng
const defBE = JSON.parse(devFE);
// console.log(defBE); 





// const dev2 = JSON.parse(JSON.stringify(wes));
// console.log(dev2);
// const devFE = Object.assign({},wes);
// var studentt = wes;
// console.log(studentt);
// const devBE = Object.assign({}, wes);   
// console.log(devBE);
// Object assign được sử dụng để sao chép các giá trị của tất cả thuộc tính
// có thể liệt kê từ một hoặc nhiều đối tượng nguồn đến mối đối tượng đích. Nó
// sẽ trả về đối tượng đích đó


// Examples : 
let o1 = { a : 21 , b : 22 , c : 33};
let o2 = { b : 25 , c : 29};
let o3 = { c : 30};
// Các thuộc tính được lặp lại bên trong các đối tượng nguồn thì trong đối tượng mới
// các thuộc tính nó sẽ bỏ qua và chúng chỉ nhận được các thuộc tính duy nhất trên đối
//tượng đích và giá trị của chúng sẽ được cập nhật giá trị mới từ trái sang phải

// let finalObject = Object.assign({},o1,o2,o3);
// console.log(finalObject);

// const dev = Object.assign({},wes);
// console.log(dev);







const frontend = {
    name : 'lieutrieuthuan',
    age : 20,
    social : {
        facebook : 'lllieutrieuthuan14',
        gmail: 'lieutrieuthuan14@gmail.com',
    }
}

// Lấy về kiểu đối tượng và chuyển đổi về kiểu json
const typeJSON = JSON.stringify(frontend);
console.log(typeJSON);

//Lấy về kiểu json và chuyển về kiểu đối tượng
const typeOOP = JSON.parse(typeJSON);
console.log(typeOOP);