// let nav=document.querySelector("nav");
// nav.addEventListener("mouseenter",function(){
//    let tl=gsap.timeline()
//     tl.to("#nav-bottom",{
//         height:"19vh"
//     })
//     tl.to(".nav-part2 h5",{
//         display:"block"
//     })

//     })


// nav.addEventListener("mouseleave",function(){
//     let tl=gsap.timeline()

//      tl.to(".nav-part2 h5",{
//         display:"none",
//         duration:0.08
//     })

//      tl.to("#nav-bottom",{
//         height:0,
//         duration:0.1
//     })
// })
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

let toaster=document.querySelector(".toaster");
setTimeout(function(){
    toaster.style.display="none";
},10000)