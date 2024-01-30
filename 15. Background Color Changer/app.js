const colorDoc = document.getElementById('button');
let hexcode = document.getElementById('hex');

function chagecolor() {
    let letter = "0123456789ABCDF";
    let color = "#";

    for (let i = 0; i<6 ; i++) {
        color += letter[Math.floor(Math.random()* 16)]
    }
    return color;
    
}

colorDoc.addEventListener('click', () => {
    document.body.style.backgroundColor = chagecolor();
    hexcode.innerHTML = chagecolor();
});
