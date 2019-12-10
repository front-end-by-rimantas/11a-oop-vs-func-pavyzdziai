const metuPajamos = [
    {
        menuo: 1,
        pajamos: [1, 2, 3, 4, -4]
    },
    {
        menuo: 2,
        pajamos: [11, 2, 3, 4, -8]
    },
    {
        menuo: 3,
        pajamos: [1, 22, 3, -99, [-44, -48]]
    },
    {
        menuo: 4,
        pajamos: [1, 2, 33, 4]
    },
    {
        menuo: 5,
        pajamos: [1, 2, 3, 44]
    }
]

console.log(metuPajamos);

function arKlientasAtsiskaite ( list ) {
    let suma = 0;
    for (let i=0; i<list.length; i++) {
        suma += list[i];
    }
    return suma;
}

function arGalimaSumuotiKaipPajama ( kiekis ) {
    if ( typeof(kiekis) === 'number' ) {
        if ( kiekis > 0 ) {
            return kiekis;
        }
        return 0;
    }
    if ( Array.isArray(kiekis) ) {
        const suma = arKlientasAtsiskaite(kiekis);
        if ( suma > 0 ) {
            return suma;
        }
        return 0;
    }
}

function menesioPajamos ( list ) {
    let suma = 0;
    for (let i=0; i<list.length; i++) {
        suma += arGalimaSumuotiKaipPajama( list[i] );
    }
    return suma;
}

function metuPajamuSuma ( metuObjektas ) {
    let suma = 0;
    for ( let i=0; i<metuObjektas.length; i++ ) {
        const menuo = metuObjektas[i]
        suma += menesioPajamos(menuo.pajamos);
    }
    return suma;
}

function prasciausiasMenuo ( metuObjektas ) {
    let menesioIndex = metuObjektas[0].menuo;
    let menesioSuma = Infinity;
    for ( let i=0; i<metuObjektas.length; i++ ) {
        const pajamos = menesioPajamos( metuObjektas[i] );
        if ( pajamos < menesioSuma ) {
            menesioSuma = pajamos;
            menesioIndex = metuObjektas[i].menuo;
        }
    }
    return menesioIndex;
}


// bendros metu pajamos
console.log('bendros metu pajamos: ', metuPajamuSuma(metuPajamos))

// menuo su maziausiai
console.log('menuo su maziausiai: ', prasciausiasMenuo(metuPajamos))


// menuo su daugiausiai

console.log('-----------------');

const gimimas = 0;
const mirtis = 18;
const gertiNuo = 7;

function zalingiIprociai( nuo, iki, kriterijus ) {
    for ( let i=nuo; i<iki; i++ ) {
        if ( i < kriterijus ) {
            console.log(i, '-', 'negalima gerti');
        } else {
            console.log(i, '-', 'galima gerti');
        }
    }
}

zalingiIprociai(gimimas, mirtis, gertiNuo)