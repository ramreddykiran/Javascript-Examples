var student = {
    name: 'Student1',
    age: 20,
    isActive: true,
}

console.log(typeof student);
console.log(student.isActive); 

var studentString = JSON.stringify(student); // converting json to string
console.log(typeof studentString);
//console.log(studentString.age); // it will be undefined

studentJson = JSON.parse(studentString);
console.log(typeof studentJson);
console.log(studentJson.name);
