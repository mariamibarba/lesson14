// 1)
let myArry = [1, 2, 2, 9, 3];
// console.log((myArry[0] + myArry[1] + myArry[2] + myArry[3] + myArry[4])/myArry.length)
let sumi=(myArry[0] + myArry[1] + myArry[2] + myArry[3] + myArry[4]);
console.log(sumi)
let lengthi=myArry.length
console.log(lengthi);
console.log(sumi/lengthi);


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

// console.log(myObjArr)

// 3)

let myObjArry = {
    firstName:"mariami",
    lastName: "barbakadze",
    address : [ "rustavi,Georgia", "Tbilisi,Georgia"],
    age: 20,
    phoneNumbers:[555-55-55-55, 555-555-555 ],
}
// console.log(myObjArry)


// 4)console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)", My age is 
// (#3 დავალების age-ის მნიშვნელობა)",
//  "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"


let myInformation = console.log(`my name is ${myObjArry.firstName}, i am ${myObjArry.age} years old, my address is ${myObjArry.address[0]}`);

// console.log(myInformation)
