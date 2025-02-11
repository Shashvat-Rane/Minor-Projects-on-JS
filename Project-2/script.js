
let btn = document.querySelector('.btn');

btn.addEventListener("click" , (e)=>{

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    if(isNaN(height) || isNaN(weight) || height<=0 || weight<=0){
        result.innerHTML= 'Invalid Input , Enter a Valid Input and Press Calculate';
    }
    else{
        let bmi = (weight / (height*height)) * 10000
        bmi = bmi.toFixed(1);
        result.innerHTML = `BMI : ${bmi}`;
    }
});