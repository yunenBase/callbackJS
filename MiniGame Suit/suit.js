var tanya = true;
while (tanya) {

    //menangkap pilihan player
    var p = prompt('Masukkan pilihan anda : \ncontoh : batu, gunting, kertas');

    //menangkap pilihan computer
    //membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'batu';
    } else if (comp >= 34 && comp <= 0.67) {
        comp = 'gunting';
    } else {
        comp = 'kertas';
    }
    console.log(comp);
    var hasil = '';
    //menentukan rules
    if (p == comp) {
        hasil = 'seri';
    } else if (p == 'batu') {
        hasil = (comp == 'gunting') ? 'menang' : 'kalah';
    } else if (p == 'gunting') {
        hasil = (comp == 'kertas') ? 'menang' : 'kalah';
    } else if (p == 'kertas') {
        hasil = (comp == 'kertas') ? 'menang' : 'kalah';
    } else {
        hasil = 'anda memasukkan karakter yang salah'
    }

    //menampilkan hasil
    alert('kamu memilih '+p+' dan computer memilih '+comp+', hasil pertandingan '+hasil);

    tanya = confirm('main lagi?')
}
alert('terimakasih');

