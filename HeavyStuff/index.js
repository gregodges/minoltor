const toggleFaq=()=>{let e=document.querySelectorAll(".faq-item"),t=document.querySelectorAll(".reponse-block"),a=document.querySelectorAll(".plus-icon");e.forEach(e=>{e.addEventListener("click",()=>{t[e.id-1].classList.toggle("opened"),a[e.id-1].classList.toggle("opened")})}),e.forEach(e=>{e.addEventListener("keydown",i=>{("Enter"===i.key||13===i.keyCode)&&(t[e.id-1].classList.toggle("opened"),a[e.id-1].classList.toggle("opened"))})})},accessNavbar=()=>{let e=document.querySelectorAll("a");e.forEach(e=>{e.addEventListener("focus",()=>{let e=document.querySelector(".navbar");e.classList.add("visible")})})},navbarOnScroll=()=>{document.addEventListener("scroll",()=>{let e=document.querySelector(".navbar");window.scrollY>=400?e.classList.add("visible"):e.classList.remove("visible")})},lazyLoadImg=()=>{let e=document.querySelectorAll(".lazy-image"),t=(e,t)=>{let[a]=e;a.isIntersecting&&(a.target.src=a.target.dataset.src,t.unobserve(a.target),console.log("isIn"))},a=new IntersectionObserver(t,{root:null,threshold:.5});e.forEach(e=>a.observe(e))},openFaq=()=>{let e=document.querySelector(".overlay"),t=document.querySelector(".faq-link"),a=document.querySelector(".close"),i=document.querySelector(".section-faq"),r=i.querySelectorAll(".faq-item"),l=document.querySelector(".navbar");e.addEventListener("click",()=>{i.classList.remove("open"),e.classList.remove("open")}),i.addEventListener("keydown",t=>{if(9===t.keyCode){let a=document.activeElement;if(6===a.tabIndex){i.classList.remove("open"),e.classList.remove("open");for(let l=0;l<r.length;l++)r[l].setAttribute("aria-hidden","true"),r[l].setAttribute("tabindex","");for(let s=0;s<navbarItems.length;s++)item.setAttribute("aria-hidden","true"),item.setAttribute("tabindex",s+1)}}}),i.addEventListener("keydown",t=>{if(27===t.keyCode){i.classList.remove("open"),e.classList.remove("open");for(let a=0;a<r.length;a++)r[a].setAttribute("aria-hidden","true"),r[a].setAttribute("tabindex","");for(let l=0;l<navbarItems.length;l++)item.setAttribute("aria-hidden","true"),item.setAttribute("tabindex",l+1)}}),t.addEventListener("click",()=>{let t=l.querySelectorAll("a");t.forEach(e=>{e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex","")}),i.classList.add("open"),e.classList.add("open"),a.setAttribute("aria-hidden","false"),a.setAttribute("tabindex",1);for(let s=0;s<r.length;s++)r[s].setAttribute("aria-hidden","false"),r[s].setAttribute("tabindex",s+2)}),t.addEventListener("keydown",t=>{if("Enter"===t.key||13===t.keyCode){let s=l.querySelectorAll("a");s.forEach(e=>{e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex","")}),i.classList.add("open"),e.classList.add("open"),a.setAttribute("aria-hidden","false"),a.setAttribute("tabindex",1);for(let n=0;n<r.length;n++)r[n].setAttribute("aria-hidden","false"),r[n].setAttribute("tabindex",n+2)}}),a.addEventListener("click",()=>{i.classList.remove("open"),e.classList.remove("open");for(let t=0;t<r.length;t++)r[t].setAttribute("aria-hidden","true"),r[t].setAttribute("tabindex","");for(let a=0;a<navbarItems.length;a++)item.setAttribute("aria-hidden","false"),item.setAttribute("tabindex",a+1)}),a.addEventListener("keydown",t=>{if("Enter"===t.key||13===t.keyCode){i.classList.remove("open"),e.classList.remove("open");for(let a=0;a<r.length;a++)r[a].setAttribute("aria-hidden","true"),r[a].setAttribute("tabindex","");for(let l=0;l<navbarItems.length;l++)item.setAttribute("aria-hidden","false"),item.setAttribute("tabindex",l+1)}})},graphikLine=()=>{let e=document.body.getBoundingClientRect().left,t=document.querySelector(".subtitle-wrap").getBoundingClientRect().left,a=e-t,i=document.querySelector(".floating");i.style.transform=`translateX(${a}px)`},handleNavBar=()=>{if(window.matchMedia("(min-width: 700px)").matches)navbarOnScroll();else{let e=document.querySelector(".navbar");e.classList.add("visible")}},animIntro=()=>{setTimeout(()=>{let e=document.querySelector(".title"),t=e.querySelectorAll("path"),a=document.querySelector(".subtitle"),i=document.querySelector(".floating"),r=document.querySelector(".home-image");t.forEach((e,t)=>{e.style.transform="rotate(20deg) translateY(100px)",e.style.animation="textReveal 0.6s forwards",e.style.animationTimingFunction="cubic-bezier(.33,.55,.17,.94)",e.style.animationDelay=`${.03*t}s`}),a.style.animation="subtitleReveal 0.7s forwards",a.style.animationDelay=`${.08*t.length}s`,window.matchMedia("(min-width: 1101px)").matches&&(i.style.animation="floatingLine 0.7s forwards",i.style.animationDelay=`${.08*t.length}s`),window.matchMedia("(max-width: 1100px)").matches&&(i.style.animation="floatingLineDown1100 0.7s forwards",i.style.animationDelay=`${.08*t.length}s`),window.matchMedia("(max-width: 700px)").matches&&(i.style.animation="floatingLineDown700 0.7s forwards",i.style.animationDelay=`${.08*t.length}s`),r.style.animation="homeImage 0.7s forwards",r.style.animationDelay=`${.08*t.length}s`},600)};animIntro(),graphikLine(),openFaq(),lazyLoadImg(),accessNavbar(),handleNavBar(),toggleFaq();
// const toggleFaq = () => {
//  const faqItems = document.querySelectorAll('.faq-item');
//  const reponses = document.querySelectorAll('.reponse-block');
//  const plusIcons = document.querySelectorAll('.plus-icon')
//   faqItems.forEach(item => {
//     item.addEventListener('click' , ()=> {
//       reponses[item.id - 1].classList.toggle('opened')
//       plusIcons[item.id - 1].classList.toggle('opened')
//     });
//  })
//   faqItems.forEach(item => {
//     item.addEventListener('keydown' , (event)=> {
//       if (event.key === 'Enter' || event.keyCode === 13){
//         reponses[item.id - 1].classList.toggle('opened')
//         plusIcons[item.id - 1].classList.toggle('opened')
//          }
//        });
//   })
// }

// const accessNavbar = () => {
//   const navbarItems = document.querySelectorAll('a')
//   navbarItems.forEach((item) => {
//     item.addEventListener('focus' , () => {
//       const navbar = document.querySelector('.navbar');
//       navbar.classList.add('visible')
//     })

//   })
// }
// const navbarOnScroll =() => {
// document.addEventListener('scroll', ()=>{
//   const navbar = document.querySelector('.navbar');

//   if(window.scrollY >= 400 ){

//     navbar.classList.add('visible')
//   }else{
//     navbar.classList.remove('visible')
//   }
// })
// }

// const lazyLoadImg = () => {

// const imgTargets = document.querySelectorAll('.lazy-image');
// const loadImg = (entries, observer) => {
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;
//     entry.target.src = entry.target.dataset.src;
//     observer.unobserve(entry.target);
//     console.log('isIn')
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//     root: null,
//     threshold: 0.5,
// })

// imgTargets.forEach(img => imgObserver.observe(img));
// }

// const openFaq = () => {
//   const overlay = document.querySelector('.overlay');
//   const faqLink = document.querySelector('.faq-link');
//   const close = document.querySelector('.close')
//   const faqPanel = document.querySelector('.section-faq')
//   const faqItem = faqPanel.querySelectorAll('.faq-item')
//   const navBar = document.querySelector('.navbar')

//   overlay.addEventListener('click', ()=> {
//     faqPanel.classList.remove('open')
//     overlay.classList.remove('open')
//   })
//   faqPanel.addEventListener('keydown', (event) => {
//     if(event.keyCode === 9){
//       const activeEl = document.activeElement
//       if(activeEl.tabIndex === 6){
//         faqPanel.classList.remove('open')
//       overlay.classList.remove('open')
//       for(let i = 0; i< faqItem.length; i++){
//         faqItem[i].setAttribute('aria-hidden', 'true');
//         faqItem[i].setAttribute('tabindex', '');

//       }
//       for(let i = 0; i< navbarItems.length; i++){
//         item.setAttribute('aria-hidden', 'true')
//         item.setAttribute('tabindex', i+1)
//       }
//       }
//     }
//   })

//   faqPanel.addEventListener('keydown', (event) => {
//     if(event.keyCode === 27){
//       faqPanel.classList.remove('open')
//       overlay.classList.remove('open')
//       for(let i = 0; i< faqItem.length; i++){
//         faqItem[i].setAttribute('aria-hidden', 'true');
//         faqItem[i].setAttribute('tabindex', '');

//       }
//       for(let i = 0; i< navbarItems.length; i++){
//         item.setAttribute('aria-hidden', 'true')
//         item.setAttribute('tabindex', i+1)
//       }
//     }
//   })

//   faqLink.addEventListener('click', () => {
//     const navbarItems = navBar.querySelectorAll('a')
//     navbarItems.forEach((item) => {
//       item.setAttribute('aria-hidden', 'true')
//       item.setAttribute('tabindex', '')
//     })
//     faqPanel.classList.add('open')
//     overlay.classList.add('open')
//     close.setAttribute('aria-hidden', 'false');
//     close.setAttribute('tabindex', 1);
//     for(let i = 0; i< faqItem.length; i++){
//       faqItem[i].setAttribute('aria-hidden', 'false');
//       faqItem[i].setAttribute('tabindex', i+2);
//     }
//   })

//   faqLink.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter' || event.keyCode === 13){
//     const navbarItems = navBar.querySelectorAll('a')
//     navbarItems.forEach((item) => {
//       item.setAttribute('aria-hidden', 'true')
//       item.setAttribute('tabindex', '')
//     })
//     faqPanel.classList.add('open')
//     overlay.classList.add('open')
//     close.setAttribute('aria-hidden', 'false');
//     close.setAttribute('tabindex', 1);
//     for(let i = 0; i< faqItem.length; i++){
//       faqItem[i].setAttribute('aria-hidden', 'false');
//       faqItem[i].setAttribute('tabindex', i+2);

//     }
//   }
//   })

//   close.addEventListener('click', () => {
//     faqPanel.classList.remove('open')
//     overlay.classList.remove('open')
//     for(let i = 0; i< faqItem.length; i++){
//       faqItem[i].setAttribute('aria-hidden', 'true');
//       faqItem[i].setAttribute('tabindex', '');

//     }
//     for(let i = 0; i< navbarItems.length; i++){
//       item.setAttribute('aria-hidden', 'false')
//       item.setAttribute('tabindex', i+1)
//     }
//   })

//   close.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter' || event.keyCode === 13){
//     faqPanel.classList.remove('open')
//     overlay.classList.remove('open')
//     for(let i = 0; i< faqItem.length; i++){
//       faqItem[i].setAttribute('aria-hidden', 'true');
//       faqItem[i].setAttribute('tabindex', '');

//     }
//     for(let i = 0; i< navbarItems.length; i++){
//       item.setAttribute('aria-hidden', 'false')
//       item.setAttribute('tabindex', i+1)
//     }
//    }
//   })
// }

// const graphikLine = () => {
//   const bordGaucheBody = document.body.getBoundingClientRect().left
//   const bordGaucheSubtitle = document.querySelector('.subtitle-wrap').getBoundingClientRect().left
//   const distance = bordGaucheBody - bordGaucheSubtitle
//   const floating = document.querySelector('.floating')
//   floating.style.transform = `translateX(${distance}px)`
// }

// const handleNavBar = () => {
//   if (window.matchMedia("(min-width: 700px)").matches) {
//     navbarOnScroll()
//   } else {
//     const navbar = document.querySelector('.navbar');
//     navbar.classList.add('visible')
//   }
// }

// const animIntro = () => {
//   setTimeout(() => {
//   const title = document.querySelector('.title');
//   const paths = title.querySelectorAll('path');
//   const subTitle =  document.querySelector('.subtitle')
//   const floating =  document.querySelector('.floating')
//     const homeImage = document.querySelector('.home-image')
//   paths.forEach((path, index) => {
//     path.style.transform = 'rotate(20deg) translateY(100px)'
//     path.style.animation = `textReveal 0.6s forwards`;
//     path.style.animationTimingFunction = 'cubic-bezier(.33,.55,.17,.94)'
//     path.style.animationDelay = `${index * 0.03}s`;
//   });

//   subTitle.style.animation = 'subtitleReveal 0.7s forwards'
//   subTitle.style.animationDelay = `${paths.length * 0.08}s`
//   if(window.matchMedia("(min-width: 1101px)").matches){
//     floating.style.animation = 'floatingLine 0.7s forwards'
//     floating.style.animationDelay = `${paths.length * 0.08}s`
//   }
//   if (window.matchMedia("(max-width: 1100px)").matches) {
//   floating.style.animation = 'floatingLineDown1100 0.7s forwards'
//   floating.style.animationDelay = `${paths.length * 0.08}s`
//   }
//   if (window.matchMedia("(max-width: 700px)").matches) {
//     floating.style.animation = 'floatingLineDown700 0.7s forwards'
//     floating.style.animationDelay = `${paths.length * 0.08}s`
//     }
//   homeImage.style.animation = 'homeImage 0.7s forwards'
//   homeImage.style.animationDelay = `${paths.length * 0.08}s`

// }, 600);

// }

// animIntro()
// graphikLine()
// openFaq()
// lazyLoadImg()
// accessNavbar()
// handleNavBar()
// toggleFaq()
