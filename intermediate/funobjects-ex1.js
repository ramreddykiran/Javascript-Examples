let courses = [
    { name: 'HTML basics',
      isDone: true
},{ name: 'HTML advanced',
    isDone: false
},{ name: 'Javascript Basics',
    isDone: true
},{ name: 'Javascript advanced',
    isDone: false
},{ name: 'CSS basics',
    isDone: true
},{ name: 'CSS advanced',
    isDone: false
},{ name: 'React basics',
isDone: false
},{ name: 'React advanced',
isDone: false
},
]
/*
console.log('formal function approach')

courses.forEach(function(course, index) {
    console.log(course.name);
})
*/

/*
console.log('----------- lambda expression approach 1 ----------------')
courses.forEach(course => {
    console.log(course.name)
})
*/

/*
console.log('----------- lambda expression approach 2 ----------------')
courses.forEach(course => console.log(course.name) )
*/

console.log(("Get names of the incompleted courses"));
const incompletedCourses = courses
                    .filter(course => (course.isDone === false))
                    .map(course => course.name)
                    
console.log(incompletedCourses);