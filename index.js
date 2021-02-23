const input = document.querySelector('#input');
const button = document.querySelector('.button');
const result = document.querySelector('#result');

const monthButton = document.querySelector('.months-button');
const dayButton = document.querySelector('.days-button');

input.addEventListener('input', event => {
    const age = event.target.value
    
    isNaN(age) ? ( result.innerHTML = `${age} is not a valid number!`, button.disabled = true, monthButton.disabled = true, dayButton.disabled = true )  : 
    
        button.addEventListener('click', e => {
            result.innerHTML = `${(age * 10.5)} years!`;
            event.target.value = ''
        })
        
        monthButton.addEventListener('click', evt => {
            result.innerHTML = `${(age * 10.5 * 12)} months`;
            event.target.value = ''
        })
        
        dayButton.addEventListener('click', e => {
            result.innerHTML = `${(age * 10.5 * 365)} days`;
            event.target.value = ''
        });

})
