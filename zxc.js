var click=0;
var counter=document.getElementById("counter");

function addClick(){
  click +=1;
  counter.textContent='clicks:'+ click;
}