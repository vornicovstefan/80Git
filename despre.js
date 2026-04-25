function arataMembru(rol) {
    const descriereDiv = document.getElementById('afisaj-descriere');
    
    
    let text = "";

    if (rol === 'manager') {
        text = "<h3>Vornicov Ștefan</h3><p>Fondatorul agenției, pasionat de tehnologie și turism sustenabil.</p>";
    } else if (rol === 'ghid') {
        text = "<h3>Vornicov Denis </h3><p>Expert în destinații exotice, cu peste 15 ani de experiență pe toate continentele.</p>";
    } else if (rol === 'suport') {
        text = "<h3>Vornicov Vlad</h3><p>Zâmbetul din spatele telefonului, gata să te ajute cu orice rezervare.</p>";
    }

    descriereDiv.innerHTML = text;
    
    console.log("A fost afișat profilul pentru: " + rol);
}