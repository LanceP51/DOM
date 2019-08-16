// const mainHeading = document.querySelector("#main-heading")
// mainHeading.innerHTML = "My Awesome Website"

// // ------------- Lightning Exercise 2 ------------------------------//
// // Refactor the following functions as fat arrow functions:

// // function checkIfEven(number){
// //     if(number%2===0){
// //         return true
// //     } else {
// //         return false
// //     }
// // }

// const checkIfEven=(number) => {
//     if(number%2===0){
//         return true
//     } else {
//         return false
//     }
// }

//     const Q1 = checkIfEven(5)
//     console.log(Q1)

// // function addTwoNumbers(num1, num2){
// //     return num1 + num2
// // }

// const addTwoNumbers=(num1, num2) =>
//      num1+num2

//     const Q2 = addTwoNumbers(2,5)
//     console.log(Q2)

// // function makeASandwich(breadType, toppings){
// //     return `Here's your ${toppings} sandwich on ${breadtype}`
// // }

// const makeASandwich=(breadType, toppings) =>
//      `Here's your ${toppings} sandwich on ${breadType}`

//     const Q3 = makeASandwich("wheat","chicken")
//     console.log(Q3)

// PRACTICES

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// function to build student components
const createStudentComponent = (students, className) =>  
        `<div class="student">
            <h1 class="xx-large ${className}">${students.name}</h1>
            <section class="bordered dashed section--padded">${students.subject}</section>
            <aside class="pushRight">${students.info}</aside>
        </div>`


// iterate through students to build html list
for (let i = 0; i < students.length; i++) {
    let student = students[i]
    let studentComponent = ""
    if (students[i].score >= 60) {
        studentComponent=createStudentComponent(student,"passing")
    }
    else {studentComponent=createStudentComponent(student, "failing")
    }
    const studentContainer = document.querySelector("#container")
    studentContainer.innerHTML += studentComponent
}


// loop for styling for passing or failing
// for (let i = 0; i < students.length; i++) {
//     let student = students[i]
//     let studentComponent = ""

//     if (students[i].score >= 60) {
//         studentComponent = `<div class="student">
//         <h1 class="xx-large passing">${student.name}</h1>
//         <section class="bordered dashed section--padded">${student.subject}</section>
//         <aside class="pushRight">${student.info}</aside>
//     </div>`
//     }
//     else {
//         studentComponent = `<div class="student">
//         <h1 class="xx-large failing">${student.name}</h1>
//         <section class="bordered dashed section--padded">${student.subject}</section>
//         <aside class="pushRight">${student.info}</aside>
//     </div>`   
// }
// // document.querySelector("#container").innerHTML += studentComponent
// }
