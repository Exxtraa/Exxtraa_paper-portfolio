const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to(".page1",{
    y:"100vh",
    scale:0.5,
    duration:0
})

tl.to(".page1",{
    y:"0vh",
    duration:1.7,
    dealy:0.4
})

tl.to(".page1",{
    rotate:360,
    scale:1,
    duration:0.8
})
