document.addEventListener('DOMContentLoaded', function() {
    const authSection = document.getElementById('auth-section');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = localStorage.getItem('currentUser');

    if (isLoggedIn === 'true') {
        
        authSection.innerHTML = `
            <span style="margin-right: 15px; font-weight: bold; color: var(--maro-inchis);">
                Salut, ${currentUser}!
            </span>
            <a href="#" id="btnLogout" class="btn-nav-auth" style="background-color: #d9534f;">Logout</a>
        `;

        
        document.getElementById('btnLogout').addEventListener('click', function(e) {
            e.preventDefault();
            
           
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser');
            
            
            alert("Te-ai deconectat cu succes!");
            window.location.href = 'Home.html';
        });
    }
});