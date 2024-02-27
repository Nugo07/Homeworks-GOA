// 1) davaleba

function StudentID(name, lastName, score) {
    this.name = name;
    this.lastName = lastName;
    this.score = score;
}


const student1 = new StudentID("Nugzar", "Turmanishvili", 100)



console.log(student1.name)     
console.log(student1.lastName)  
console.log(student1.score)  



// 2) davaleba

const goaStudent = new StudentID("Vano", "Motiashvili", 100);

const goaStudent1 = new StudentID("Davit", "Janashia", 100);

const goaStudent2 = new StudentID("Mate", "Giorgelashvili", 100);

const goaStudent3 = new StudentID("Nugzar", "Turmanishvili", 100);

const goaStudent4 = new StudentID("Davit", "Mgeladze", 100);