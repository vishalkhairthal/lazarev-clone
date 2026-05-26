//first page
let nav = document.querySelector("nav");
let navBottom = document.querySelector("#nav-bottom");
let navText = document.querySelectorAll(".nav-part2 h5");

nav.addEventListener("mouseenter", function () {
    navBottom.style.height = "16vh";
    navText.forEach(function (item) {
        item.style.display = "block";
    });
});



nav.addEventListener("mouseleave", function () {
    navBottom.style.height = "0vh";
    navText.forEach(function (item) {
        item.style.display = "none";
    });
});

//toaster notification
let toaster=document.querySelector(".toaster");
setTimeout(function(){
    toaster.style.display="none";
},10000)

//page two
let rightElems=document.querySelectorAll(".right-elem")


    rightElems.forEach(function(elem){

        elem.addEventListener("mouseenter", function(){
            gsap.to( elem.childNodes[3],{
                opacity:1,
                scale:1

            })

        })


        elem.addEventListener("mouseleave", function(){
            gsap.to( elem.childNodes[3],{
                opacity:0,
                scale:0

            })
            
        })

        elem.addEventListener("mousemove", function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x-elem.getBoundingClientRect().x-70,
                y:dets.y-elem.getBoundingClientRect().y-150
            })
            

        })
    })

    //page three
    var sections=document.querySelectorAll(".section-right")

    sections.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            elem.childNodes[3].style.opacity=1;
            elem.childNodes[3].play();

        })
        elem.addEventListener("mouseleave",function(){
            elem.childNodes[3].style.opacity=0;
            elem.childNodes[3].load();

        })
    })


//page five
// gsap.from("#btm5-part2 h4", {
//     x: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#btm5-part2",
//         scroller: "#main",
//         // markers:true,
//         start: "top 80%",
//         end: "top 10%",
//         scrub: true
//     }
// })
const cards = document.querySelectorAll("#btm5-part2 h4");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if(entry.isIntersecting){

            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 1050);

        }

    });

}, {
    threshold: 0.3
});

cards.forEach((card) => {
    observer.observe(card);
});

