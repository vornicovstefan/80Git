document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
 
    const email = document.getElementById('loginEmail').value;
    const parola = document.getElementById('loginParola').value;
 
    const utilizatori = JSON.parse(localStorage.getItem('utilizatori')) || [];
    const utilizatorGasit = utilizatori.find(u => u.email === email && u.parola === parola);
 
    if (utilizatorGasit) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', utilizatorGasit.prenume);
        const redirectParam = new URLSearchParams(window.location.search).get('redirect');
        window.location.href = redirectParam ? decodeURIComponent(redirectParam) : 'Home.html';
    }
});
 
