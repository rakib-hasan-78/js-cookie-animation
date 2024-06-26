const tl = gsap.timeline({defaults:{duration:1, ease: "power2.out"}});
tl.fromTo('.cookie-container',{scale:0}, {scale:1, ease: "elastic.out(1,0.4)", duration:1.5});
tl.fromTo('.cookie',{opacity:0, x:-50, rotation:'-45deg'}, {opacity:1 , x:0, rotation:'0deg'}, '<50%');
tl.fromTo('.text', {x:30, opacity:0}, {x:0, opacity:1}, '<');

// event

const btn = document.getElementById('btn-cookie');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to('.cookie-container', {opacity:0, duration:.75, y:40, ease: "power3.out"})
})