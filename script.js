let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursorBlur");

document.addEventListener("mousemove",function(mouseDetails){
    cursor.style.left = mouseDetails.x+30+"px";
    cursor.style.top = mouseDetails.y+"px";
    cursorBlur.style.left = mouseDetails.x-250+"px";
    cursorBlur.style.top = mouseDetails.y-250+"px";

    
});
// ===============================================================

// scroll trigger

gsap.to("#nav",{
    backgroundColor: "#455646",
    height: "60px",
    duration:0.5,
    scrollTrigger : {
        trigger:"#nav",
        scroller: "body",
        // markers:true,
        start:"top -10%",
        scrub:true,
        end:"top -11%"
    }
});


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller:"body",
        // markers:true
        start:"top -20vh",
        end: "top -70%",
        scrub:2
    }
});


gsap.from("#about img,#aboutus-content",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        markers:false,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
});


gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
});


gsap.from("#signup",{
    scale:3,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#signup",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
});

gsap.from("#colonOne",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#colonOne",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 45%",
        scrub: 4
    }
});

gsap.from("#colonTwo",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#colonTwo",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 45%",
        scrub: 4
    }
});

gsap.from ("#pageFour h1",{
    y:50,
    scrollTrigger:{
        trigger:"#pageFour h1",
        scroller: "body",
        markers: false,
        start: "top 95%",
        end: "top 80%",
        scrub: 3

    }
})

// ==========================================================


let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(h4Elem){
    h4Elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 2;
        cursor.style.border = "1px solid red";
        cursor.style.backgroundColor = "transparent";
    });

    h4Elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #96c11e2b";
        cursor.style.backgroundColor = "#96c11e2b";
    });

});
















