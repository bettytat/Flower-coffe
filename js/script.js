var pokusu = 0;

function ukazCas () {
pokusu = pokusu +1;

    let aktualniCas = new Date();

    let hodin = 'Hodiny:' + aktualniCas.getHours();
    let minut = 'Minuty:' + aktualniCas.getMinutes();
    let vterin = 'Vteřiny:' + aktualniCas.getSeconds();

    let spojenyCas = hodin + '<br/>' + minut + '<br/>' + vterin;

    document.getElementById('hodiny').innerHTML = spojenyCas;
    document.getElementById('pokusCislo').innerHTML = pokusu;
    document.getElementById('hodiny').classList.toggle('barevne');
}