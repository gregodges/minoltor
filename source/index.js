
const toggleFaq = () => {
  const faqItems = document.querySelectorAll('.faq-item');
  const reponses = document.querySelectorAll('.reponse-block');
  const plusIcons = document.querySelectorAll('.plus-icon')
   faqItems.forEach(item => {
     item.addEventListener('click' , ()=> {
       reponses[item.id - 1].classList.toggle('opened')
       plusIcons[item.id - 1].classList.toggle('opened')
     });
  })
   faqItems.forEach(item => {
     item.addEventListener('keydown' , (event)=> {
       if (event.key === 'Enter' || event.keyCode === 13){
         reponses[item.id - 1].classList.toggle('opened')
         plusIcons[item.id - 1].classList.toggle('opened')
          }
        });
   })
 }

 const accessNavbar = () => {
   const navbarItems = document.querySelectorAll('a')
   navbarItems.forEach((item) => {
     item.addEventListener('focus' , () => {
       const navbar = document.querySelector('.navbar');
       navbar.classList.add('visible')
     })

   })
 }
 const navbarOnScroll =() => {
 document.addEventListener('scroll', ()=>{
   const navbar = document.querySelector('.navbar');

   if(window.scrollY >= 400 ){

     navbar.classList.add('visible')
   }else{
     navbar.classList.remove('visible')
   }
 })
 }

 const lazyLoadImg = () => {

 const imgTargets = document.querySelectorAll('.lazy-image');
 const loadImg = (entries, observer) => {
     const [entry] = entries;
     if(!entry.isIntersecting) return;
     entry.target.src = entry.target.dataset.src;
     observer.unobserve(entry.target);
     console.log('isIn')
 };

 const imgObserver = new IntersectionObserver(loadImg, {
     root: null,
     threshold: 0.5,
 })

 imgTargets.forEach(img => imgObserver.observe(img));
 }

 const openFaq = () => {
   const overlay = document.querySelector('.overlay');
   const faqLink = document.querySelector('.faq-link');
   const close = document.querySelector('.close')
   const faqPanel = document.querySelector('.section-faq')
   const faqItem = faqPanel.querySelectorAll('.faq-item')
   const navBar = document.querySelector('.navbar')

   overlay.addEventListener('click', ()=> {
     faqPanel.classList.remove('open')
     overlay.classList.remove('open')
   })
   faqPanel.addEventListener('keydown', (event) => {
     if(event.keyCode === 9){
       const activeEl = document.activeElement
       if(activeEl.tabIndex === faqItem.length + 1){
         faqPanel.classList.remove('open')
       overlay.classList.remove('open')
       for(let i = 0; i< faqItem.length; i++){
         faqItem[i].setAttribute('aria-hidden', 'true');
         faqItem[i].setAttribute('tabindex', '');

       }
       for(let i = 0; i< navbarItems.length; i++){
         item.setAttribute('aria-hidden', 'true')
         item.setAttribute('tabindex', i+1)
       }
       }
     }
   })

   faqPanel.addEventListener('keydown', (event) => {
     if(event.keyCode === 27){
       faqPanel.classList.remove('open')
       overlay.classList.remove('open')
       for(let i = 0; i< faqItem.length; i++){
         faqItem[i].setAttribute('aria-hidden', 'true');
         faqItem[i].setAttribute('tabindex', '');

       }
       for(let i = 0; i< navbarItems.length; i++){
         item.setAttribute('aria-hidden', 'true')
         item.setAttribute('tabindex', i+1)
       }
     }
   })

   faqLink.addEventListener('click', () => {
     const navbarItems = navBar.querySelectorAll('a')
     navbarItems.forEach((item) => {
       item.setAttribute('aria-hidden', 'true')
       item.setAttribute('tabindex', '')
     })
     faqPanel.classList.add('open')
     overlay.classList.add('open')
     close.setAttribute('aria-hidden', 'false');
     close.setAttribute('tabindex', 1);
     for(let i = 0; i< faqItem.length; i++){
       faqItem[i].setAttribute('aria-hidden', 'false');
       faqItem[i].setAttribute('tabindex', i+2);
     }
   })

   faqLink.addEventListener('keydown', (event) => {
     if (event.key === 'Enter' || event.keyCode === 13){
     const navbarItems = navBar.querySelectorAll('a')
     navbarItems.forEach((item) => {
       item.setAttribute('aria-hidden', 'true')
       item.setAttribute('tabindex', '')
     })
     faqPanel.classList.add('open')
     overlay.classList.add('open')
     close.setAttribute('aria-hidden', 'false');
     close.setAttribute('tabindex', 1);
     for(let i = 0; i< faqItem.length; i++){
       faqItem[i].setAttribute('aria-hidden', 'false');
       faqItem[i].setAttribute('tabindex', i+2);

     }
   }
   })

   close.addEventListener('click', () => {
     faqPanel.classList.remove('open')
     overlay.classList.remove('open')
     for(let i = 0; i< faqItem.length; i++){
       faqItem[i].setAttribute('aria-hidden', 'true');
       faqItem[i].setAttribute('tabindex', '');

     }
     for(let i = 0; i< navbarItems.length; i++){
       item.setAttribute('aria-hidden', 'false')
       item.setAttribute('tabindex', i+1)
     }
   })

   close.addEventListener('keydown', (event) => {
     if (event.key === 'Enter' || event.keyCode === 13){
     faqPanel.classList.remove('open')
     overlay.classList.remove('open')
     for(let i = 0; i< faqItem.length; i++){
       faqItem[i].setAttribute('aria-hidden', 'true');
       faqItem[i].setAttribute('tabindex', '');

     }
     for(let i = 0; i< navbarItems.length; i++){
       item.setAttribute('aria-hidden', 'false')
       item.setAttribute('tabindex', i+1)
     }
    }
   })
 }

 const graphikLine = () => {
   const bordGaucheBody = document.body.getBoundingClientRect().left
   const bordGaucheSubtitle = document.querySelector('.subtitle-wrap').getBoundingClientRect().left
   const distance = bordGaucheBody - bordGaucheSubtitle
   const floating = document.querySelector('.floating')
   floating.style.transform = `translateX(${distance}px)`
 }

 const handleNavBar = () => {
   if (window.matchMedia("(min-width: 700px)").matches) {
     navbarOnScroll()
   } else {
     const navbar = document.querySelector('.navbar');
     navbar.classList.add('visible')
   }
 }

 const animIntro = () => {
   const title = document.querySelector('.title');
   const paths = title.querySelectorAll('path');
   const subTitle =  document.querySelector('.subtitle')
   const floating =  document.querySelector('.floating')
     const homeImage = document.querySelector('.home-image')
   paths.forEach((path, index) => {
     path.style.transform = 'rotate(20deg) translateY(100px)'
     path.style.animation = `textReveal 0.6s forwards`;
     path.style.animationTimingFunction = 'cubic-bezier(.33,.55,.17,.94)'
     path.style.animationDelay = `${index * 0.03}s`;
   });

   subTitle.style.animation = 'subtitleReveal 0.7s forwards'
   subTitle.style.animationDelay = `${paths.length * 0.08}s`
   if(window.matchMedia("(min-width: 1101px)").matches){
     floating.style.animation = 'floatingLine 0.7s forwards'
     floating.style.animationDelay = `${paths.length * 0.08}s`
   }
   if (window.matchMedia("(max-width: 1100px)").matches) {
   floating.style.animation = 'floatingLineDown1100 0.7s forwards'
   floating.style.animationDelay = `${paths.length * 0.08}s`
   }
   if (window.matchMedia("(max-width: 700px)").matches) {
     floating.style.animation = 'floatingLineDown700 0.7s forwards'
     floating.style.animationDelay = `${paths.length * 0.08}s`
     }
   homeImage.style.animation = 'homeImage 0.7s forwards'
   homeImage.style.animationDelay = `${paths.length * 0.08}s`


 }

 animIntro()
 graphikLine()
 openFaq()
 lazyLoadImg()
 accessNavbar()
 handleNavBar()
 toggleFaq()
