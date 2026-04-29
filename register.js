document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nume = document.getElementById('nume').value.trim();
    const prenume = document.getElementById('prenume').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefon = document.getElementById('telefon').value.trim();
    const parola = document.getElementById('parola').value;
    const confirmParola = document.getElementById('confirmParola').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonRegex = /^[0-9]+$/;
 
    if (!nume || !prenume || !email || !telefon || !parola) return;
    if (!emailRegex.test(email)) return;
    if (!telefonRegex.test(telefon)) return;
    if (parola.length < 8) return;
    if (parola !== confirmParola) return;
 
    let utilizatori = JSON.parse(localStorage.getItem('utilizatori')) || [];
    if (utilizatori.find(u => u.email === email)) return;
 
    const utilizatorNou = { nume, prenume, email, telefon, parola };
    utilizatori.push(utilizatorNou);
    localStorage.setItem('utilizatori', JSON.stringify(utilizatori));
 
    window.location.href = 'login.html';
});
 
