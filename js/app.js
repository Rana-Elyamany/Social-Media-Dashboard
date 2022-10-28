let Body= document.querySelector('body');
let togglebar=document.querySelector('.home > header > .container > .row > .togglebar');
let indicator=document.querySelector('.home > header > .container > .row > .togglebar > .indicator');
let head=document.getElementsByClassName('head');
let DIV1=document.getElementsByClassName('Div1');
let number=document.getElementsByClassName('num');
let number2=document.querySelectorAll('#sp1');
let Mode=document.querySelector('.home > header > .container > .row > .togglebar > .smode')

togglebar.onclick=function(){
    Body.classList.toggle('dark_body');
    Mode.classList.toggle('num_dark');
   
    indicator.classList.toggle('dark_indicator');
    for(let i=0;i<head.length;i++){
        head[i].classList.toggle('head_dark');
    }
    for(let i=0;i<DIV1.length;i++){
        DIV1[i].classList.toggle('DIV1_dark');
    }
    for(let i=0;i<number.length;i++){
        number[i].classList.toggle('num_dark');
    }
    for(let i=0;i<number2.length;i++){
        number2[i].classList.toggle('num_dark');
    }
    if(Mode.innerText=='Dark Mode')
    {
        Mode.innerText='Light Mode';
    }else{
        Mode.innerText='Dark Mode';
    }
    
}
wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  ).init();