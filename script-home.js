
const dateRecenzii = [
    {
        nume: "Elena Ionescu",
        locatie: "București",
        mesaj: "O vacanță de vis în Roma!",
        rating: 5
    },
    {
        nume: "Andrei Popescu",
        locatie: "Chișinău",
        mesaj: "Tokyo este uimitor. Recomand!",
        rating: 5
    }
];


dateRecenzii.push({
    nume: "Maria Sandu",
    locatie: "Cluj",
    mesaj: "Recomand cu drag excursiile în Moldova!",
    rating: 4
});


function genereazaCardHTML(client) {
    return `
        <div class="card-recenzie" style="background: white; padding: 20px; border-radius: 15px; border-top: 5px solid #5c6b35; margin: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <h4 style="color: #4a3423;">${client.nume}</h4>
            <small>Din ${client.locatie}</small>
            <p>"${client.mesaj}"</p>
            <div style="color: #ffcc00;">Rating: ${client.rating} stele</div>
        </div>
    `;
}

function incarcaRecenziiInPagina() {
    const container = document.getElementById('container-recenzii');
    
    if (container) {
        
        const listaDeCarduri = dateRecenzii.map(function(client) {
            return genereazaCardHTML(client); 
        });

        let htmlFinal = "";
        listaDeCarduri.forEach(function(card) {
            htmlFinal = htmlFinal + card; 
        });
        container.innerHTML = htmlFinal;
        
        console.log("Toate cerințele (push, map, forEach) au fost executate!");
    }
}

window.addEventListener('load', incarcaRecenziiInPagina);