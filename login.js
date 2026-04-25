document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const parola = document.getElementById('loginParola').value;
    
    const utilizatori = JSON.parse(localStorage.getItem('utilizatori')) || [];
    
    const utilizatorGasit = utilizatori.find(u => u.email === email && u.parola === parola);

    if (utilizatorGasit) {
        alert(`Bine ai revenit, ${utilizatorGasit.prenume}!`);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', utilizatorGasit.prenume);
        window.location.href = 'Home.html';
    } else {
        alert("Email sau parolă incorectă!");
    }
});