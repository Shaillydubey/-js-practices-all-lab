let subject1 = 85;
let subject2 = 78;
let subject3 = 92;

let attendance = 80;

let total = subject1 + subject2 + subject3;
let average = total / 3;

let grade = average >= 90 ? "A" :
            average >= 75 ? "B" :
            average >= 40 ? "C" : "F";

let isEligibleForScholarship =
    average >= 85 && attendance >= 75;

console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);
console.log("Average data type:", typeof average);
console.log("Scholarship Eligible:", isEligibleForScholarship);

console.log(
    "Total: " + total +
    ", Average: " + average.toFixed(2) +
    ", Grade: " + grade
);