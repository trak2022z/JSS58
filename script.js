let button1 = document.getElementById("button1");
button1.addEventListener("click",
namedFunction); 
button1.addEventListener("click",
namedFunction); 
button1.addEventListener("click",
namedFunction); 

function namedFunction() {
  console.log("ouch you clicked me");
}


let button2 = document.getElementById("button2");

button2.addEventListener("click", function() {
  console.log("ouch you clicked me");
});
button2.addEventListener("click", function() {
  console.log("ouch you clicked me");
});
button2.addEventListener("click", function() {
  console.log("ouch you clicked me");
});
