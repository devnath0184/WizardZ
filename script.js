function navAnim(){
    var tl  = gsap.timeline();
    tl.from("nav h1, nav h4, nav button",{
        y: -40,
        duration: .3,
        opacity: 0,
        stagger: .1
    })
    tl.from(".left1 h5, .left1 p, .left1 button",{
        x: -100,
        duration: .3,
        stagger: .1,
        opacity: 0
    })
    tl.from(".right1 img",{
        x: 100,
        duration: .3,
        opacity: 0
    }, "-=.5")
}
navAnim();
function page2Anim(){
    gsap.from(".page2 img",{
        y: 50,
        duration: .3,
        stagger: .1, 
        opacity: 0,
        scrollTrigger:{
            trigger: ".page",
            markers: "true",
            // scrub: 2,
    
        }
    })
}
page2Anim();

function page4Anim(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".page4",
            scroller: "body",
            scrub: 2,
            // markers: true,
            start: "top 100%",
            end: "top 16%"
        }
    })
    tl2.from(".a.left",{
        x: -300,
        duration: .3,
        opacity: 0
    },"anim1")
    
    tl2.from(".b.right",{
        x: 300,
        duration: .3,
        opacity: 0
    },"anim1")
    tl2.from(".c.left",{
        x: -300,
        duration: .3,
        opacity: 0
    },"anim2")
    tl2.from(".d.right",{
        x: 300,
        duration: .3,
        opacity: 0
    },"anim2")
}
page4Anim();