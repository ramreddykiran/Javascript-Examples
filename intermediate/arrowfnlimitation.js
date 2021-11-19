const cameras = {
    price: 10000,
    weight: 200,
    description : function() {
        return `this is a sony cybershot digital camera . price is ${this.price} INR`
    },
    description2 : () => {
        return `this is a sony cybershot digital camera . price is ${this.price} INR` 
    }
} 

console.log(cameras.description())
console.log(cameras.description2()) // this is incorrect implementation. Arrow implementation would not help