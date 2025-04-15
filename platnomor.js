let platNomor = ['B 1280 VLA'];
let tanggalHariIni = 4;

platNomor.forEach(function(plat) {
    let angka = plat.split(' ')[1]; 
    let angkaTerakhir = angka[angka.length - 1]; 
    let jenisPlatnomor = '';

    switch (angkaTerakhir) {
        case '0':
        case '2':
        case '4':
        case '6':
        case '8':
            jenisPlatnomor = 'GENAP';
            break;
        default:
            jenisPlatnomor = 'GANJIL';
    }

    let jenisTanggal = (tanggalHariIni % 2 === 0) ? 'GENAP' : 'GANJIL';
    let bolehMelintas = (jenisPlatnomor === jenisTanggal) ? 'Boleh' : 'Tidak Boleh';

    console.log(`${plat} adalah plat ${jenisPlatnomor}, maka ${bolehMelintas} melintas karena hari ini tanggal ${tanggalHariIni}`);
});
