// 1)
let myArry = [1, 2, 2, 9, 3,];
console.log(myArry)
let  arr_1 = myArry[0]
let  arr_2 = myArry[1]
let  arr_3 = myArry[2]
let  arr_4 = myArry[3]
let  arr_5 = myArry[4]

let sum = (arr_1 + arr_2 + arr_3 + arr_4 + arr_5);

let myArrlength =myArry.length;

let avg = sum / myArrlength;

console.log(arr_1);
console.log(arr_2);
console.log(arr_3);
console.log(arr_4);
console.log(arr_5);
console.log(sum);
console.log(myArrlength);
console.log(avg);


// 2)
let myObjArr=[

    user1= {
        name: "mariami",
        age: 20,

    },
    user2= {
        name: "nino",
        age: 20,

    },
    user3= {
        name: "lika",
        age: 20,

    },
    user4= {
        name: "nika",
        age: 20,

    },
    user5= {
        name: "gio",
        age: 20,

    },

]
console.log(myObjArr)

// 3)

let myObjArry = {
    firstName:"mariami",
    lastName: "barbakadze",
    address : [ "rustavi,Georgia", "Tbilisi,Georgia"],
    age: 20,
    phoneNumbers:[555-55-55-55, 555-555-555 ],
}
console.log(myObjArry)


// 4)console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)", My age is 
// (#3 დავალების age-ის მნიშვნელობა)",
//  "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"


let myInformation = console.log`my name is ${myObjArry.firstName}, i am ${myObjArry.age} years old, my address is ${myObjArry.address[0]}`;

console.log(myInformation)
