let myCourse = {
    name: "JavaScriptBasics",
    author: "Kiran",
    description: "Javascript basics examples",
    price: 500, // adding comma here is optional

}

console.log(`this is the ${myCourse.name} book by ${myCourse.author}. Price INR ${myCourse.price}`);

let meeting = {
    name: "javascript meeting",
    day: "Monday",
    scheduled: 5,
    attended: 3,

    summary: ()=> {
        console.log(`meetings scheduled on ${this.day} are ${this.scheduled}`);
        console.log(`meetings attended on ${this.day} are ${this.attended}`);
    }

}

meeting.summary()
