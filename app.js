const UIactivity = document.getElementById('activityStatus');
const UIloader = document.querySelector('#loader');
const UIoutput = document.querySelector('#output');
const UIforms = document.querySelector('#form-card');

let activityValue = 1.2;


UIoutput.style.display = 'none';
UIloader.style.display = 'none';

document.addEventListener('change', function (e) {
    activityValue = parseFloat(e.target.value);
});
document.addEventListener('submit', function (e) {  
    e.preventDefault();
    
    const UIage = document.getElementById('age');
    const UIweight = document.getElementById('weight');
    const UIheight = document.getElementById('height');
    const weight = parseFloat(UIweight.value);
    const height = parseFloat(UIheight.value);
    const age = parseFloat(UIage.value);
    
    // show loader
    UIloader.style.display = 'none';
    
    setTimeout(calculateCal(weight, height, age), 2000);   
});
function calculateCal(w, h, a) {

    if (Math.sign(w) == 1 && Math.sign(h) == 1 && Math.sign(a) == 1) {
        const bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
        const totalCal = bmr * activityValue;
        setTimeout(output(totalCal.toFixed(4)),3000);
    } else {
        setTimeout(showError('Please Enter valid details!'),3000);
    }
    
}
function output(val) {
    UIoutput.innerHTML = `<div class="display-3 mt-4">RESULTS</div><hr><h3 class="mt-3">Your daily intake calories is ${val} Calories.</h3>`;
    UIoutput.style.display = 'block';
}
function showError(error) {
    UIoutput.style.display ='none';
    const errorBox = document.createElement('div');
    errorBox.className = 'alert alert-danger mt-3';
    errorBox.appendChild(document.createTextNode(error));
    document.querySelector('.card-content').insertBefore(errorBox, UIoutput);
    console.log();
    setTimeout(function () {
        document.querySelector('.alert-danger').remove();
    }, 1500);
}

