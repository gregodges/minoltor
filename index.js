
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

lazyLoadImg()
accessNavbar()
navbarOnScroll()
toggleFaq()
