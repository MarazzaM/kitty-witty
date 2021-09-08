 /*==================== NAVBAR ==================== */
const navSlider = () => {
    const fry = document.querySelector(".fry");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    
    //this toggles the nav bar with translateX 0
    fry.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");

        //this should animate the LINKS
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        }
     })
     //fry fry
     fry.classList.toggle("toggle");


    });
    
}
navSlider();

 /*==================== ANIME JS ==================== */
anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });
  /*==================== SWIPPER JS ==================== */

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    //autoplay
    autoplay: {
        delay: 3000,
      },
      //zoom
      zoom: {
        maxRatio: 5,
      },
          // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
  });


 /*==================== RANDOM FACTS ==================== */
  async function fetchcat(){
    const response = await fetch("https://some-random-api.ml/facts/cat") ;
    const cat = await response.json();
    return cat.fact }

fetchcat() .then(cat => {
    console.log(cat);
});

/*async function async() {
    document.getElementById("parrafo").innerHTML=(await fetchpanda())
  }
  */
  const cliky = async () => {
    document.getElementById("parrafo").innerHTML= await fetchcat()
  };
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'rigth',
  distance: '50px',
  duration: 2000,
  reset: true
});

sr.reveal(`.k1`, {
  interval: 200
})

const sr2 = ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 2000,
  reset: true
});

sr2.reveal(`.k2`, {
  interval: 200
})

const sr3 = ScrollReveal({
  origin: 'right',
  distance: '50px',
  duration: 2000,
  reset: true
});

sr3.reveal(`.k3`, {
  interval: 200
})
//reveal silloutte
const sil = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 2000,
  reset: true
});

sil.reveal(`.imgmoment`, {
  interval: 200
})
 /*==================== RANDOM IMAGE  ==================== */
 async function fetchimg(){
  const response = await fetch("https://some-random-api.ml/img/cat") ;
  const img = await response.json();
  return img.link }
  

fetchimg() .then(img => {
  console.log(img);
});

const clikimg = async () => {
  document.getElementById("catmp").src= await fetchimg()
};