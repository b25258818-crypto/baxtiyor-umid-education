function openCourse(name){
alert(name + " kursiga xush kelibsiz!");
}

function calculate(){
let n1=parseFloat(document.getElementById("num1").value);
let n2=parseFloat(document.getElementById("num2").value);

if(isNaN(n1) || isNaN(n2)){
document.getElementById("result").innerText="Iltimos son kiriting!";
return;
}

let sum=n1+n2;
document.getElementById("result").innerText="Yig‘indi: " + sum;
}