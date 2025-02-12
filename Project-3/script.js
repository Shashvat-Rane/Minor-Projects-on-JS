let timebox = document.querySelector('#time');


setInterval(()=>{
    let date = new Date();
    timebox.innerHTML = `${date.toLocaleTimeString()}`;
},1000)