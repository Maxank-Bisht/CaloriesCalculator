const UIactivity = document.getElementById('activityStatus');
const UIloader = document.querySelector('#loader');
const UIoutput = document.querySelector('#output');
const UIforms = document.querySelector('#form-card');

UIoutput.style.display = 'none';
UIloader.style.display = 'none';

document.addEventListener('submit', function (e) {  
    e.preventDefault();
   
    
    //hide output
    UIoutput.style.display = 'none';
    // show loader
    UIloader.style.display = 'block';
    setTimeout(calculateCal, 1500);   
});

function calculateCal(e) {
    const UIage = document.getElementById('age');
    const UIweight = document.getElementById('weight');
    const UIheight = document.getElementById('height');
    
    const af = parseFloat(UIactivity.value);
    const w = parseFloat(UIweight.value);
    const h = parseFloat(UIheight.value);
    const a = parseFloat(UIage.value);

    UIloader.style.display = 'none';
    if (Math.sign(w) == 1 && Math.sign(h) == 1 && Math.sign(a) == 1) {
        const bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
        const totalCal = bmr * af;
        const val = totalCal.toFixed(4);
        UIoutput.innerHTML = `<div class="display-3 mt-4">RESULTS</div><hr><h3 class="mt-3">Your daily intake calories is ${val} Calories.</h3>`;
        UIoutput.style.display = 'block';
        
    } else {
        const error = 'Please Enter valid details!';
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
}


