"use strict";
let getModalWindow = document.querySelector('.modal_page_wrapper');
let getHamburger = document.querySelector('.hamburger');
let getCloseBtn = document.querySelector('.close');
let modalInnerInfBlock = document.querySelector('.inner_modal_page');
let getInnerModalPoints = Array.from(document.getElementsByClassName('li_modal'));
let modalClassesToRemove = ['first_li', 'second_li', 'third_li'];
document.querySelector('.hamburger_wrapper').addEventListener('click', () => {
    getModalWindow.classList.add('show_modal_block');
    getCloseBtn.classList.add('moving_close_btn');
    getHamburger.classList.add('hide_hamburger');
    document.querySelector('body').classList.add('stopScroll');
    for (let i = 0; i < getInnerModalPoints.length; i++) {
        getInnerModalPoints[i].classList.remove(`${modalClassesToRemove[i]}`);
    }
});
function RemoveModal() {
    getModalWindow.classList.remove('show_modal_block');
    getCloseBtn.classList.remove('moving_close_btn');
    getHamburger.classList.remove('hide_hamburger');
    document.querySelector('body').classList.remove('stopScroll');
    for (let i = 0; i < getInnerModalPoints.length; i++) {
        getInnerModalPoints[i].classList.add(`${modalClassesToRemove[i]}`);
    }
}
getCloseBtn.addEventListener('click', () => {
    RemoveModal();
});
if (window.innerWidth <= 700) {
    modalInnerInfBlock.style.minHeight = `${window.innerHeight - 61}px`;
}
window.addEventListener('resize', () => {
    modalInnerInfBlock.style.minHeight = `${window.innerHeight - 61}px`;
});
let getModalBlocks = Array.from(document.getElementsByClassName('li_modal'));
for (let i = 0; i < getModalBlocks.length; i++) {
    getModalBlocks[i].addEventListener('click', () => {
        let createLink = document.createElement('a');
        switch (i) {
            case 0: {
                createLink.href = '#the_day';
                setTimeout(() => {
                    createLink.click();
                }, 700);
                RemoveModal();
                break;
            }
            case 1: {
                createLink.href = '#hungary_ev';
                setTimeout(() => {
                    createLink.click();
                }, 700);
                RemoveModal();
                break;
            }
            case 2: {
                createLink.href = '#oman_ev';
                setTimeout(() => {
                    createLink.click();
                }, 700);
                RemoveModal();
                break;
            }
        }
    });
}
let h3Blocks = Array.from(document.getElementsByClassName('h3_Block'));
console.log(h3Blocks);
const observer = new IntersectionObserver(ent => {
    ent.forEach(e => {
        console.log(1);
        e.target.classList.toggle('show_h3', e.isIntersecting);
    });
});
h3Blocks.forEach(e => {
    observer.observe(e);
});
let infBlock = Array.from(document.getElementsByClassName('inf_block'));
const observer_2 = new IntersectionObserver(ent => {
    ent.forEach(e => {
        console.log(1);
        e.target.classList.toggle('show_inf_block', e.isIntersecting);
    });
});
infBlock.forEach(e => {
    observer_2.observe(e);
});
