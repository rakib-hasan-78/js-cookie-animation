const tl = gsap.timeline({defaults:{duration:1, ease: "power2.out"}});
tl.fromTo('.cookie-container',{scale:0}, {scale:1, ease: "elastic.out(1,0.4)", duration:1.5});
tl.fromTo('.cookie',{opacity:0, x:-50, rotation:'-45deg'}, {opacity:1 , x:0, rotation:'0deg'}, '<50%');
tl.fromTo('.text', {x:30, opacity:0}, {x:0, opacity:1}, '<');

// cookie jump 
tl.fromTo('.cookie', {y:0, rotation:0}, {y:-20, rotation:'-20deg', yoyo:true, repeat:-1})
tl.fromTo('#crums', {y:0, rotation:0}, {y:-20, yoyo:true, repeat:-1},'>')
// event

const btn = document.getElementById('btn-cookie');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to('.cookie-container', {opacity:0, duration:.75, y:40, ease: "power3.out"})
})

// footer

document.getElementById('footer').innerHTML=`
    <div class="container d-flex text-center align-items-center justify-content-center flex-column mt-5 pt-5">
        <span class="text-black pt-5 mt-5">&copy; ${new Date().getFullYear()} All The Rights Reserved.</span>
        <span class="text-black text-capitalize footer-font">mini project by <span class="text-uppercase clr top-weight">md rakib hasan</span>.</span>
    </div>
`