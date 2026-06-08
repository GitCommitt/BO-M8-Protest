
const feiten = [
    "het virus  corona in 2019 is onstaan voor het  overgedragen van dier op mens in china ",
    "de eerste besmetting  van corona in nederland was in Brabantse Loon op Zand. ",
    " in Nederland zijn er  8.657.480 bevestigde besmettingen geregistreerd. ",
    "22.986 personen zijn overleden aan corona",
    "Het protest vond plaatst op  1 juni 2020",
    "25.000 mensen waren aanwezig op de dam",
    " mensen protesteren tegen het coronabeleid van de overheid",
];


function nieuwFeit() {
   
    const willekeurigGetal = Math.floor(Math.random() * feiten.length);
    
    const nieuwFeitje = feiten[willekeurigGetal];
    
   
    document.getElementById("feitje").textContent = nieuwFeitje;
}

