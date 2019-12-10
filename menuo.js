import converter from './monthConverter.js';

class Menuo {
    constructor ( data ) {
        console.log(data);
        
        this.menesioPavadinimas = data.menuo;
        this.pajamos = data.pajamos;
        this.index = converter(this.menesioPavadinimas);
        this.pajamuSuma = this.bendraPajamuSuma();
    }

    arKlientasAtsiskaite ( list ) {
        let suma = 0;
        for (let i=0; i<list.length; i++) {
            suma += list[i];
        }
        return suma;
    }

    arGalimaSumuoti ( kiekis ) {
        if ( typeof(kiekis) === 'number' ) {
            if ( kiekis > 0 ) {
                return kiekis;
            }
            return 0;
        }
        if ( Array.isArray(kiekis) ) {
            const suma = this.arKlientasAtsiskaite(kiekis);
            if ( suma > 0 ) {
                return suma;
            }
            return 0;
        }
    }

    bendraPajamuSuma = () => {
        let suma = 0
        for ( let i=0; i<this.pajamos.length; i++ ) {
            suma += this.arGalimaSumuoti(this.pajamos[i]);
        }
        return suma;
    }

    print = () => {
        console.log(`${this.menesioPavadinimas} (${this.index}) - ${this.pajamuSuma}`);
    }
}

export default Menuo;