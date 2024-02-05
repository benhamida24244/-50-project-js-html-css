let counter = document.getElementById('count');
let entreis = document.getElementById('save');
let increment = document.querySelector('.increment-btn');
let saveBtn = document.querySelector('.save-btn');
let count = 0;

increment.addEventListener('click' , () => {
       
        count++;
        counter.textContent = count;
});

saveBtn.addEventListener('click' , () => {
    let compa = count + ", ";
    entreis.textContent += compa;
    count = 0;
    counter.textContent = count;
});