
const titleOnScroll =() => {
document.addEventListener('scroll', ()=>{
  const navbar = document.querySelector('.navbar');
  if(window.scrollY >= 450){
    navbar.classList.add('visible')
  }else{
    navbar.classList.remove('visible')
  }
})
}
titleOnScroll()
