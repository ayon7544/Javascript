window.onload = function(){
const student = {
  fullName: "Ayon Ghosh",
  age: 22,
  cgpa: 3.4,
  isPass: true,
};

console.log(student); // Logs to the console
document.getElementById('ayon').innerHTML = student.fullName; // Updates the HTML content
};