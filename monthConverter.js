function convert ( menuo ) {
    const pavadinimai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze'];

    if ( typeof(menuo) === 'number' ) {
        return pavadinimai[menuo-1];
    }

    if ( typeof(menuo) === 'string' ) {
        if ( pavadinimai.indexOf(menuo) >= 0 ) {
            return pavadinimai.indexOf(menuo) + 1;
        } else {
            return 'blogas men pav';
        }
    }
}

export default convert