let btns = document.querySelectorAll('.button');
let bdy = document.querySelector('.main');
console.log(bdy);

btns.forEach((btn)=>{
    console.log(btn);

    btn.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);
        bdy.style.backgroundColor = e.target.id;
    });
});