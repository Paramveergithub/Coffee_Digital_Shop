let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    cartItem.classList.toggle('active');
}

document.querySelector('#menu-btn').onclick = () =>{
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}
