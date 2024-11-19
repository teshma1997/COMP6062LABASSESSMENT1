console.log('scripts loaded!')
const myFullname = "Teshma";
const myStudentNumber = "1516513";
const result = myFullname & myStudentNumber;

console.log(result)
let headerContent = document.querySelector('h1');
headerContent.innerHTML = myFullname + myStudentNumber;
headerContent.add(headerContent);

console.log(headerContent)
