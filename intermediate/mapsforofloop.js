var Apple = {
    name:'I am apple',
    price: 20,
    isAvailable: true
}
var Guava = {
    name:'I am guava',
    price: 5,
    isAvailable: true
}
var CustardApple = {
    name:'I am custardapple',
    price: 10,
    isAvailable: false
}
var Papaya = {
    name:'I am papaya',
    price: 40,
    isAvailable: false, //keeping , at the end of the json is optional.
}

let fruits = new Map()

//console.log(typeof fruits);

fruits.set('Apple', Apple)
fruits.set('Guava', Guava)
fruits.set('CustardApple', CustardApple)
fruits.set('Papaya', Papaya)

console.log(fruits);
console.log(`total fruits ${fruits.size}`);
console.log('CustardApple data');

console.log(fruits.get('CustardApple'));

console.log("keys iteration using for of loop");
for (const key of fruits.keys()) {
    console.log(key);
}

console.log("values iteration using for of loop");
for (const value of fruits.values()) {
    console.log(value);
}

console.log("fruits price using for of loop");
for (const [key, value] of fruits) {
    console.log(`${key} price = ${value.price}`);
}

console.log("fruits price using forEach loop");
fruits.forEach((value, key) => {
    console.log(`${key} price = ${value.price}`);
})

var arrOfArr = [['one', 1], ['two', 2], ['three',3], ['four',4]]
console.log(arrOfArr);
console.log('converting into map');
var mapFromArrOfArr = new Map(arrOfArr)
console.log(mapFromArrOfArr);
