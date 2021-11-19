//coersion is a process of automatic/implicit convertion of converting values from one datatype to another.
console.log('5' - 5); // 0

console.log('5' + 5); // 55
console.log(typeof ('5' + 5))

const num_bool_add_1 = 7 + false;
console.log(num_bool_add_1); // 7

const num_bool_sub_1 = 7 - true;
console.log(num_bool_sub_1); // 6 

const loginDetails = []
const loginId = loginDetails[0]

//if(loginId != undefined) {
 if(loginId) {
    console.log("login successful");
} else {
    console.log("unauthorized login");
}

//values interpret as false
/*
false
0
''
null
undefined
*/