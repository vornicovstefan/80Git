
document.addEventListener('DOMContentLoaded', function() {
    const rezervaForm = document.getElementById('formularRezervare');

    
    if (rezervaForm) {
        rezervaForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Preluarea informațiilor din casete
            const nume = document.getElementById('numeComplet').value;
            const email = document.getElementById('emailUtilizator').value;
            const telefon = document.getElementById('nrTelefon').value;

            
            const emailDestinatie = "infoelevi2016@gmail.com";
            const subiect = "Rezervare Nouă GlobeTrotter";
            
            const mesajBody = "Date Rezervare:\n\n" +
                              "Nume: " + nume + "\n" +
                              "Gmail: " + email + "\n" +
                              "Telefon: " + telefon;

            
            const mailtoLink = "mailto:" + emailDestinatie + 
                               "?subject=" + encodeURIComponent(subiect) + 
                               "&body=" + encodeURIComponent(mesajBody);

            
            window.location.href = mailtoLink;
            
            alert("Informațiile au fost preluate. Se deschide aplicația de email!");
        });
    }
});