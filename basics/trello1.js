const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

console.log('formal for loop');

for (let index = 0; index < days.length; index++) {
    const element = days[index];
    //console.log(`day ${element}`)
}

console.log('forEach with function approach');
days.forEach(function(day, index) {
    console.log(`day ${index + 1} = ${day} `)
})

console.log('forEach with lambda expression');
days.forEach((d, i) => {
    console.log(`day ${i+1} is ${d}`);
})



