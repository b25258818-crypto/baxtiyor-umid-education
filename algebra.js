function checkTest(){

let score = 0;

let a1 = document.getElementById("q1").value;
let a2 = document.getElementById("q2").value;
let a3 = document.getElementById("q3").value;

if(a1 == 3) score++;
if(a2 == 4 || a2 == -4) score++;
if(a3 == 5) score++;

document.getElementById("result").innerText =
"Sizning natijangiz: " + score + " / 3";
}