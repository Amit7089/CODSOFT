var timer = 20;
var score = 0;
var hitrn=0;

function makebubble(){
var calc_bubble = " ";

for(var i=1;i<=136;i++){
    num=Math.floor(Math.random()*10)
    calc_bubble += `<div class="bubble">${num}</div>`;
    
}
document.querySelector("#btmbubble").innerHTML = calc_bubble;
}

function runtimer(){
  var timerprint=  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerprint);
          complete =  document.querySelector("#btmbubble").innerHTML =`<h1> Game Over </h1>     Your score  ${score}`;
        }

    },1000)
}

 function getNewhit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
 }

 function incraseacoce(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    
 }

 document.querySelector("#btmbubble").addEventListener("click",function(dets) {
  var clicknum = Number(dets.target.textContent)
  if(clicknum == hitrn){
    incraseacoce();
    makebubble();
    getNewhit();

  }

 })
runtimer();
makebubble();
getNewhit();
// incraseacoce();

