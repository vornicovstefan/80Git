document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nume = document.getElementById('nume').value.trim();
    const prenume = document.getElementById('prenume').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefon = document.getElementById('telefon').value.trim();
    const parola = document.getElementById('parola').value;
    const confirmParola = document.getElementById('confirmParola').value;
    const errorMsg = document.getElementById('errorGeneral');

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonRegex = /^[0-9]+$/;

    if (!nume || !prenume || !email || !telefon || !parola) {
        alert("Toate câmpurile sunt obligatorii!");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Format email invalid!");
        return;
    }

    if (!telefonRegex.test(telefon)) {
        alert("Numărul de telefon trebuie să conțină doar cifre!");
        return;
    }

    if (parola.length < 8) {
        alert("Parola trebuie să aibă cel puțin 8 caractere!");
        return;
    }

    if (parola !== confirmParola) {
        alert("Parolele nu coincid!");
        return;
    }

    
    let utilizatori = JSON.parse(localStorage.getItem('utilizatori')) || [];l
    
    
    if (utilizatori.find(u => u.email === email)) {
        alert("Acest email este deja înregistrat!");
        return;
    }

   
    const utilizatorNou = { nume, prenume, email, telefon, parola };
    utilizatori.push(utilizatorNou);
    localStorage.setItem('utilizatori', JSON.stringify(utilizatori));

    alert("Cont creat cu succes!");
    window.location.href = 'login.html';
});