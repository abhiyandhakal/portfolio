const toggler_div = document.querySelector('.toggler');
const hamburger_div = document.querySelector('.toggler>.hamburger');
const navList_ul = document.querySelector('.nav-list');
const navListItem_li = document.querySelectorAll('.nav-list-item');
let toggled = false;

toggler_div.addEventListener('click', ()=> {
  if (!toggled) {
    toggler_div.style = 'transform: translateX(-50%)';
    hamburger_div.setAttribute('id', 'toggler-animation');
    navList_ul.style = 'transform: scaleY(1);';

    navListItem_li.forEach((e)=> {
      e.style = 'opacity: 1; transition: opacity .5s .2s';
    });
    
    toggled = true;
    
  } else if(toggled) {
    toggler_div.style = 'transform: unset';
    hamburger_div.removeAttribute('id', 'toggler-animation');
    navList_ul.style = 'transform: scaleY(0);';
    
    navListItem_li.forEach((e)=> {
      e.style = 'opacity: 0;'
    });
    
    toggled = false;
  }
});