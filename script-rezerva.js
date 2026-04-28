document.addEventListener('DOMContentLoaded', function() {
    
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        const params2 = new URLSearchParams(window.location.search);
        const redirectUrl = 'rezerva.html?' + params2.toString();
        if (confirm('Trebuie să fii autentificat pentru a face o rezervare.\nApasă OK pentru a merge la pagina de autentificare.')) {
            window.location.href = 'login.html?redirect=' + encodeURIComponent(redirectUrl);
        } else {
            window.location.href = 'Home.html';
        }
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const oras = params.get('oras');
    const pret = params.get('pret');

    const elementNume = document.getElementById('destinatie-nume');
    const elementPret = document.getElementById('destinatie-pret');

    if (oras) {
        elementNume.innerText = oras;
    } else {
        elementNume.innerText = "Destinație nespecificată";
    }

    if (pret) {
        elementPret.innerText = pret;
    }

   
    const form = document.getElementById('confirmareForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const numeDestinatie = oras || 'destinația aleasă';
            alert('Rezervarea pentru ' + numeDestinatie + ' a fost înregistrată cu succes! Te vom contacta în curând.');
            
          
            window.location.href = 'Home.html';
        });
    }
});
