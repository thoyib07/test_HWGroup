function test(jumlah) { 
    for (let idx = 1; idx <= jumlah; idx++) {
        let hasil = "";
        if (idx%3 == 0) {
            hasil += "Tiga";
        }
        
        if (idx%5 == 0) {
            hasil += "Lima";
        }

        if (hasil === "") {
            hasil += idx;
        }
        console.info(hasil);
    }
}

test(100);