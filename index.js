
import './index.css';

const menu = document.querySelector('.menu');
const menuBtnOpen = document.querySelector('.menuBtnOpen');
const menuBtnClose = document.querySelector('.menuBtnClose');

menuBtnOpen.addEventListener('click', function(){
    menu.classList.add('translate-x-0');
    menu.classList.remove('translate-x-full');
    menuBtnOpen.classList.add('hidden');
    menuBtnClose.classList.remove('hidden');
});


menuBtnClose.addEventListener('click', function(){
    menu.classList.remove('translate-x-0');
    menu.classList.add('translate-x-full');
    menuBtnOpen.classList.remove('hidden');
    menuBtnClose.classList.add('hidden');
});