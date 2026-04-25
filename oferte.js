
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container-oferte-dinamice');

    fetch('locatii.json')
        .then(response => response.json())
        .then(date => {
            date.forEach(locatie => {
                const card = document.createElement('div');
                card.className = 'card'; // Folosește clasa existentă din stil.css
                card.innerHTML = `
                    <div class="card-info">
                        <h3>${locatie.nume}</h3>
                        <p>${locatie.descriere}</p>
                        <div style="color: var(--verde-masliniu); font-weight: bold; font-size: 1.2rem;">
                            ${locatie.pret}
                        </div>
                        <a href="contacte.html" class="btn-rezerva">Vezi Detalii</a>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => console.error("Eroare la încărcarea locațiilor:", err));
});