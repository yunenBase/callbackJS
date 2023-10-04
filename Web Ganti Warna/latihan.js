const ubahWarna = document.querySelector('#tUbahWarna');
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'warna');
    document.body.classList.toggle('warna');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Klik untuk acak warna');
tAcakWarna.append(teksTombol);
tAcakWarna.setAttribute('type', 'button');
ubahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    document.body.style.backgroundColor = ' rgb('+ r +', '+ g +', '+ b +'  )'
})

const sMerah = document.querySelector('input[name=sMerah]');

sMerah.addEventListener('change', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
});

const sHijau = document.querySelector('input[name=sHijau]');

sHijau.addEventListener('change', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
});

const sBiru = document.querySelector('input[name=sBiru]');

sBiru.addEventListener('change', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
});

document.body.addEventListener('mousemove', function(event) {
    // console.log(event.clientX);
    // console.log(event.clientY);
    //console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);

    const yPos = Math.round((event.clientY / window.innerWidth) * 255);
    document.body.style.backgroundColor = 'rgb('+xPos+', '+yPos+', 100)';
});


