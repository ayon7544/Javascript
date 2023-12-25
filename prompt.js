let x = prompt("Enter Your Score : ");
if (x<=100 && x>=80){
    console.log("A");
}
else if (x<=89 && x>=70){
    console.log("B");
}
else if (x<=60 && x>=60){
    console.log("C");
}
else if (x<=59 && x>=50){
    console.log("D");
}
else{
    console.log("F");
}

window.print(x);