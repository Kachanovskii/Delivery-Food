const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close')
cardButton.addEventListener('click', function(event){
    modal.classList.add('open')
})
close.addEventListener('click', function(event){
    modal.classList.remove('open')
})

new WOW().init();