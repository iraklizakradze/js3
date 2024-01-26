'use strict';

/*===== HOMEWORK 3 =====*/

// ----- 1 ----- //
function sumNumbers(...numbers){
    let numberSum = 0
    for(let item of numbers){
        // numberSum = numbers + item;
        numberSum += item;
    }
    return numberSum
}

let resultNumbers = sumNumbers(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(resultNumbers)


// -----
let num = function(...numbers){
    let numSum = 0;
    for(let item of numbers){
        numSum += item;
    }
    return numSum
}

let resultnumSum = num(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultnumSum)


// ----- 2 ----- //
function userLogin(user){
    if(user.isloggedin === true) {
        return `${user.firstname} ${user.lastname}`;
    }else{
        return 'user is not logged in';
    }
}


let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
};

let resultLogin = userLogin(user)
console.log(resultLogin);


// ----- 3 ----- //
function mathMax (...numbers){
    return (Math.max(...numbers));
}

let resultMax = mathMax(15, 50, 35 , 85, 100, 105);
console.log(resultMax);


// ----- 4 ----- //
function checkNum(num){
    /*if(num % 2 === 0){
        return 'this number is even'
    }else{
        return 'this number is odd'
    }*/

    let resultcheck = num % 2 === 0 ? 'this number is even' : 'this number is odd';
    console.log(resultcheck)
}
checkNum(10);

/*let resultCheck = checkNum(10);
console.log(resultCheck)*/


// ----- 5 ----- //
let array = [1,2,3,4,5];

for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    console.log(element)
}


// ----- 6 ----- //
function userAge2(age2){
    if(age2 >= 18){
        console.log('სრულწლოვანი')
    }else {
        console.log('არასრულწლოვანი')
    }
}
userAge2(18);


// -----
let userAge3 = (age3) => age3 >= 18 ? 'სრულწლოვანი' : 'არასრულწლოვანი';

let userStatus = userAge3(17);
console.log(userStatus);
// ======================================================================= //