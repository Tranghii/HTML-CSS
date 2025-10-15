// // console.log("Hi, guy");
// // let fisrtName, lastName;
// // console.log(fisrtName, lastName);
// // let fullName = "Lee";
// // console.log(typeof fullName);


// // let person = {
// //     name: 'Trang',
// //     age: 18
// // };
// // person.name= 'Ly'
// // let selection = "name";
// // person['name'] = 'Mai';
// // console.log(person.name);

// //arrays
// let selectionColors=['red', 'blue'];
// selectionColors[2]='green';
// console.log(selectionColors);

// // function
// function calcu(number) {
//     return  number * number ;
// }
// calcu(3);
// let number = calcu(3);


// console.log(number);


// function
// function name(params) {
    
// }

// const infor = {
//     name: 'Linh',
//     age: 18,
//     mail: 'fi25dgs3@gmail.com',
//     address: {
//         stress: 'Le Duc Tho',
//         city: 'Ha Noi'
//     },
//     hobby: ['sleep', 'read book', 'trip to Ha Noi'],

// }

// const { name, age, hobby ,address:{city}  } = infor;
// // console.log(hobby[2])
// console.log(infor);


// const todos = [
//     {
//         id:1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {

//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// }).map(function (todo) {
//     console.log(todo.text);
// });
// console.log(todoCompleted);


// let todo = todos.id;
// for (let key in todo) {
//     console.log(todos.key);
    
// }

// for (let todo of todos) {
//     console.log(todo.text);
    
// }
// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);


// const todoText = todos.map(function (todo) {
//     return todo.text;
// });
// console.log(todoText);

// todos.forEach(function (todo) {
//     console.log(todo.id);
    
// }); 

// for (let todo of todos) {
//     console.log(todo.text);
//     ;
    
// }

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// console.log(todos);

// let i = 0
// while ( i < 10) {
//     console.log(`While Loop Number is:${i}`);
//     i++;
// }

// const user = { name: 'Linh', age: 18 };

// for (let key of user) {
//   console.log(key); // ❌ Lỗi: user is not iterable
// }

// for (let key in user) {
//   console.log(key, user[key]);
// }

const x = 10; 
const color = x 