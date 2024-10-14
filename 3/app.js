let grades = [];

for (let i = 1; i <= 5; i++) {
    let grade = parseFloat(prompt(`Enter grade ${i}:`));
    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
        grades.push(grade);
    } else {
        console.log(`Invalid input for grade ${i}. Enter a number between 0 and 100.`);
        i--;
    }
}

let total = grades.reduce((sum, grade) => sum + grade, 0);
let average = total / grades.length;

console.log("Grades: ", grades.join(", "));
console.log("Average Grade: " + average.toFixed(2));