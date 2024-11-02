const lavori = {
    backend:{
        titolo:'Sviluppo Backend',
        prezzo:20.50,
    },

    frontend:{
        titolo:'Sviluppo Frontend',
        prezzo:15.30,
    },

    analisiprogettuale:{
        titolo:'Analisi Progettuale',
        prezzo:33.60,
    },
}




/**
 * la funzione prende un prezzo e lo moltiplica per 10 e restituisce il risultato
 * @param {number} prezzoInInput
 * @returns {number}
 */
function calcolaPrezzo(prezzoInInput) {   
    return prezzoInInput * 10
}

/**
 * la funzione prende l elemento select dei tipi di lavoro
 * estrae il valore della opzione selezionata
 * trova il prezzo in base all opzione selezionata
 */
function trovaPrezzo() {
    const tipoDiLavoro = document.getElementById('tipodilavoro')
    const valore = tipoDiLavoro.value;
    const prezzoLavoro = (lavori[valore].prezzo)
    return prezzoLavoro
}



