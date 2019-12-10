import data from './pajamos.js';
import Menuo from './menuo.js';

class MetuPajamos {
    constructor ( data ) {
        this.metuPajamos = data;
        this.menesiai = [];

        this.duomenuSkaidymasPamenesiui();
    }

    duomenuSkaidymasPamenesiui () {
        for ( let i=0; i<this.metuPajamos.length; i++ ) {
            this.menesiai.push( new Menuo( this.metuPajamos[i] ) );
        }
    }

    spausdintiMenesiuPajamas ( monthIndex ) {
        if ( typeof(monthIndex) === 'number' ) {
            return this.menesiai[monthIndex].print();
        }

        for ( let i=0; i<this.menesiai.length; i++ ) {
            this.menesiai[i].print();
        }
    }
}

const metai = new MetuPajamos( data );

metai.spausdintiMenesiuPajamas();
metai.spausdintiMenesiuPajamas(0);