// header 메뉴 이벤트 
const header = document.querySelector('#header');
const menu01 = header.querySelector('.intro_sc');
const menu02 = header.querySelector('.intro_ab');
const menu03 = header.querySelector('.intro_pj');
const menu04 = header.querySelector('.intro_ct');

const intro = document.querySelector('.intro');
const about = document.querySelector('.about');
const project = document.querySelector('.project01');
const contact = document.querySelector('.contact');

menu01.addEventListener('click', (e)=>{
  e.preventDefault()
  const topValue = intro.offsetTop;
  window.scrollTo({
      top: topValue,
      behavior: 'smooth'
  })
})
menu02.addEventListener('click', (e)=>{
  e.preventDefault()
  const topValue = about.offsetTop;
  window.scrollTo({
      top: topValue,
      behavior: 'smooth'
  })
})
menu03.addEventListener('click', (e)=>{
  e.preventDefault()
  const topValue = project.offsetTop;
  window.scrollTo({
      top: topValue,
      behavior: 'smooth'
  })
})
menu04.addEventListener('click', (e)=>{
  e.preventDefault()
  const topValue = contact.offsetTop;
  window.scrollTo({
      top: topValue,
      behavior: 'smooth'
  })
})

////////////// header 메뉴 이벤트 


// uptotop 이벤트
const uptoTop = document.querySelector('.option_wrap .upto_top');

uptoTop.addEventListener('click',()=> {
  window.scrollTo(0,0);
})

///////// uptotop 이벤트

//board modal 이벤트
const board_btn = document.querySelector('.option .board');
const close_btn = document.querySelector('.close_btn');
const board = document.querySelector('.board_wrap');

board_btn.addEventListener('click', ()=>{
  board.classList.add('show');
})
close_btn.addEventListener('click', ()=>{
  board.classList.remove('show');
})
////////board modal 이벤트