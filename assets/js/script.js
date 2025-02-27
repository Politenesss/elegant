let openPopUp = document.getElementById('open_pop_up');
let closePopUp = document.getElementById('pop_up_close');
let popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

let openPopUp2 = document.getElementById('open_pop_up2');
let closePopUp2 = document.getElementById('pop_up_close2');
let popUp2 = document.getElementById('pop_up2');
let openPopUp3 = document.getElementById('open_pop_up3');

openPopUp2.addEventListener('click', function(e){
    e.preventDefault();
    popUp2.classList.add('active');
})

closePopUp2.addEventListener('click', () => {
    popUp2.classList.remove('active');
})

openPopUp3.addEventListener('click', function(e){
    e.preventDefault();
    popUp2.classList.add('active');
    popUp.classList.remove('active');
})

let openPopUp4 = document.getElementById('open_pop_up4');

openPopUp4.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    popUp2.classList.remove('active');
})

