
window.addEventListener('load', function(){
  // Свайпер два слайдера
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 2,
    initialSlide:2,
    loop: false,
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1.5,
        grabCursor: false,
        depth: 2000,
  }
  },
    navigation: {
      nextEl: ".swiper-button-nexty",
      prevEl: ".swiper-button-prevy",
    },
  })

const swiper2 = new Swiper(".newSwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 10,
      depth: 800,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      767: {
        slidesPerView: "auto",
        depth: 1200,
  }
  },
    navigation: {
      nextEl: ".swiper-button-works-next",
      prevEl: ".swiper-button-works-prev",
    },
  });
  const swiper3 = new Swiper(".slider__dp", {
    spaceBetween: 100,
    navigation: {
      nextEl: ".swiper-button-works-next",
      prevEl: ".swiper-button-works-prev",
    }
  });
// Аос инициализация
AOS.init({
      once: true,
      delay: 100,
      duration: 700,
});

// Функция скролл к блоку
document.querySelectorAll('a[href^="#"').forEach(link => {
link.addEventListener('click', scroll);
});

function scroll(e) {
  e.preventDefault();
  if(window.innerWidth >= 1050){
    let href = this.getAttribute('href').substring(1);
  const scrollTarget = document.getElementById(href);
  const topOffset = document.querySelector('.navigation').offsetHeight;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;
  window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
  });
  }else{
    let href = this.getAttribute('href').substring(1);
  const scrollTarget = document.getElementById(href);
  const topOffset = document.querySelector('.navigation').offsetHeight;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - 65;
  window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
  });
  return menuToggle();
  }
  
}
let burger = document.querySelector('.burger');
let burgerItem = Array.from(document.querySelectorAll('.burger span'));

// Окрытие мобильного меню
function menuToggle(){
    let menu = document.getElementById('menu');
    let nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
    
    if(menu.classList.contains('active')){
      document.body.classList.remove('lock')
      
      setTimeout(() =>{
        for(item of burgerItem){
          item.classList.remove('active');
          burger.classList.remove('active');
        }
        menu.classList.toggle('active');
        addClassMenuItem();
      },200);
    }else{
      document.body.classList.add('lock')
      
      menu.classList.toggle('active');
      for(item of burgerItem){
        item.classList.add('active');
        burger.classList.add('active');
      }
      addClassMenuItem();
    }      
}
function addClassMenuItem(){
  let navs = Array.from(document.querySelectorAll('.nav a'))
  return navs.forEach(el => el.classList.toggle('toggle'))
}
burger.addEventListener('click', menuToggle);
// Появление хедера и первого блока при загрузке страницы
var tl = gsap.timeline({delay: 0.7});
tl.to(".title", {y: 50,opacity: 1, duration: 0.8});
tl.from(".header", {y:-50,opacity: 0, duration: 0.8});

})

