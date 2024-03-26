function cursoreffect(){

var pageContent = document.querySelector(".page-containt" );
var cursor = document.querySelector( ".cursor" )

pageContent.addEventListener("mousemove",function(dets){
// cursor.style.left = dets.x + "px"
// cursor.style.top = dets.y + "px"
gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
})
})

 pageContent.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

 pageContent.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}

cursoreffect();

function page2Animation(){
    gsap.from(".elem h1",{
        y:120,
        stagger:0.25,
        duration:1,
        ScrollTrigger:{
            trigger:".page2",
            scroller:".main",
            start:"top 40%",
            end:"top 37%",
        }
    })
 } 
 page2Animation();


 function scrollAnimations() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });

 }
scrollAnimations() 


  
 function scrollAnimations() {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
          });
    
     }
    scrollAnimations()
    
     var tl = gsap.timeline()
    
     tl.from(".loader h3",{
        x:40,
        opacity:0,
        duration:0.3,
        stagger:0.1
     })
    
     tl.to(".loader ",{
        opacity:0,
        x:-10,
        duration:3,
        stagger:0.1
     })
    
     tl.to("loader h3",{
        opacity:0
     })
     tl.to("loader h3",{
        display:"none"
     })
    
     tl.from(".page-containt h1 span",{
        y:100,
        opacity:0,
        stagger:0.1
     }) 


