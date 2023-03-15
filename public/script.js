let butt = document.getElementById('butt');
let hey = document.getElementById('hello');
let show = document.getElementById('show');
let hide = document.getElementById('hide');
let press = document.getElementById('press');

butt.addEventListener('click', ()=>{
    if(hey.classList.contains('hidden')){
        hey.classList.remove('hidden');
    } else {
        hey.classList.add('hidden');
    }
});

show.addEventListener('click', ()=>{
    if(hide.classList.contains('hidden')){
        hide.classList.remove('hidden');
    } else {
        hide.classList.add('hidden');
    }
});

press.addEventListener('click', ()=>{
    window.location = 'https://akshathsuresh.github.io/akshathwordle.github.io/';
})



