const feiten = [
{ text: "Tijdens de coronaperiode gold in Nederland lange tijd de 1,5‑meterregel om besmettingen te voorkomen.", type: "corona" },
{ text: "In 2020 gingen scholen, horeca en sportscholen tijdelijk dicht vanwege de coronamaatregelen.", type: "corona" },
{ text: "Mondkapjes werden in het openbaar vervoer verplicht vanaf 1 juni 2020.", type: "corona" },
{ text: "Het RIVM speelde een grote rol in het adviseren van de overheid tijdens de coronacrisis.", type: "corona" },
{ text: "Veel mensen werkten tijdens de coronaperiode voor het eerst massaal vanuit huis.", type: "corona" },

{ text: "Het protest op de Dam werd georganiseerd door actiegroep Black Lives Matter Nederland.", type: "protest" },
{ text: "De Dam raakte tijdens het protest veel voller dan vooraf was verwacht.", type: "protest" },
{ text: "Burgemeester Femke Halsema kreeg kritiek omdat de drukte niet werd ingeschat.", type: "protest" },
{ text: "Het protest was onderdeel van wereldwijde demonstraties tegen racisme en politiegeweld.", type: "protest" },
{ text: "Veel demonstranten droegen mondkapjes, maar afstand houden lukte nauwelijks door de grote opkomst.", type: "protest" },
{ text: "De politie greep niet in omdat dat volgens hen tot nog meer chaos zou leiden.", type: "protest" },
{ text: "Het protest duurde ongeveer twee uur en verliep vreedzaam.", type: "protest" },
{ text: "De demonstratie leidde tot een nationale discussie over demonstratierecht tijdens een pandemie.", type: "protest" }
];

let huidigeFilter = null;

function nieuwFeit() {
    const lijst = huidigeFilter
        ? feiten.filter(f => f.type === huidigeFilter)
        : feiten;

    const willekeurig = Math.floor(Math.random() * lijst.length);
    const feit = lijst[willekeurig].text;

    const feitElement = document.getElementById("feitje");
    const box = document.getElementById("feit-box");

    feitElement.textContent = feit;

    box.classList.remove("fade");
    void box.offsetWidth;
    box.classList.add("fade");
}

function filterFeit(type) {
    huidigeFilter = type;
    nieuwFeit();
}
