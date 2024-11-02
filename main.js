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

const codiciPromo = [
    'YHDNU32',
    'JANJC63',
    'PWKCN25',
    'SJDPO96',
    'POCIE24'
]
const formPreventivo = document.getElementById('datiutente')

formPreventivo.addEventListener('submit', function(event) {
    event.preventDefault()
    const codiceUtente = document.getElementById('codicepromozionale').value


    let prezzoFinale = calcolaPrezzo(trovaPrezzo())


    document.getElementById('prezzo').innerHTML = prezzoFinale.toFixed(2)
        if (codiceUtente === '')
        return 
    if (codiciPromo.includes(codiceUtente)){
        prezzoFinale = sconto(prezzoFinale)
        document.getElementById('prezzo').innerHTML = prezzoFinale.toFixed(2)
        return}
    else alert('codice inserito non valido')
})


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


/**
 * la funzione applica uno sconto del 25%
 */
function sconto(prezzononscontato) {
const scontoTotale = (prezzononscontato * 25)/100 
const prezzoScontato = prezzononscontato - scontoTotale
return prezzoScontato
}