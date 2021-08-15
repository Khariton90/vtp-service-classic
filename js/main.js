
window.addEventListener('load', function(){
  // Свайпер два слайдера
  let swiper = new Swiper(".mySwiper", {
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
var swiper2 = new Swiper(".newSwiper", {
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

// Массив с заведениями
const establishments = [
  {
    id:1,
    title: 'Уютное заведение #1',
    item1: `Капитальный ремонт ресторана по адресу: <br> г. Санкт-Петербург, <br> Петровский бульвар д. 2 корп.1`,
    item2: 'Площадь ресторана: 160м2',
    item3: 'Срок выполнения работ: 25 дней'
  },
  {
    id:2,
    title: 'Уютное заведение #2',
    item1: `Капитальный ремонт ресторана по адресу: <br> г. Санкт-Петербург, <br> Петровский бульвар д. 2 корп.2`,
    item2: 'Площадь ресторана: 160м2',
    item3: 'Срок выполнения работ: 25 дней'
  },
  {
    id:3,
    title: 'Уютное заведение #3',
    item1: `Капитальный ремонт ресторана по адресу: <br> г. Санкт-Петербург, <br> Петровский бульвар д. 2 корп.3`,
    item2: 'Площадь ресторана: 160м2',
    item3: 'Срок выполнения работ: 25 дней'
  },
  {
    id:4,
    title: 'Уютное заведение #4',
    item1: `Капитальный ремонт ресторана по адресу: <br> г. Санкт-Петербург, <br> Петровский бульвар д. 2 корп.4`,
    item2: 'Площадь ресторана: 160м2',
    item3: 'Срок выполнения работ: 25 дней'
  },
]
let workTitle = document.getElementById('workTitle');
let items = document.querySelectorAll('.dpItem');
let itemsArray = Array.from(items);
let topItem = document.getElementById('sliderDp');

// Смена описаний из массива с заведениями 
async function descriptionWorks(){
  let block = await establishments[counter];
  workTitle.innerHTML = await block.title;
  await tl.from(workTitle, {x: -50,opacity: 0, duration: 0.3});
  itemsArray[0].innerHTML = await block.item1;
  itemsArray[1].innerHTML = await block.item2;
  itemsArray[2].innerHTML = await block.item3;
  await tl.from(topItem, {x: -30,opacity: 0, delay: 0.2, duration: 0.3});

}

let btnNext = document.querySelector('.swiper-button-works-next');
let btnPrev = document.querySelector('.swiper-button-works-prev');
let buttons = document.getElementById('buttons');
let counter = 0;
buttons.addEventListener('click', increment)

async function increment(e){
  await setTimeout(() => {
    if(e.target == btnNext && counter <= 2){
      counter++;
      descriptionWorks()
    }else if(e.target == btnPrev && counter > 0){
      counter--;
      descriptionWorks()
    }
  },200)


}

})

