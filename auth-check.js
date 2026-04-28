document.addEventListener('DOMContentLoaded', function() {
    const authSection = document.getElementById('auth-section');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentUser = localStorage.getItem('currentUser');

    if (isLoggedIn === 'true') {
        
        authSection.innerHTML = `
            <span style="margin-right: 15px; font-weight: bold; color: var(--maro-inchis);">
                Salut, ${currentUser}!
            </span>
            <a href="#" id="btnLogout" style="
                display: inline-flex;
                align-items: center;
                gap: 7px;
                background-color: transparent;
                color: #c0392b;
                border: 2px solid #c0392b;
                padding: 7px 18px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: bold;
                text-decoration: none;
                transition: all 0.25s ease;
            "
            onmouseover="this.style.backgroundColor='#c0392b';this.style.color='#fff';"
            onmouseout="this.style.backgroundColor='transparent';this.style.color='#c0392b';"
            >
                <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'>
                    <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'/>
                    <polyline points='16 17 21 12 16 7'/>
                    <line x1='21' y1='12' x2='9' y2='12'/>
                </svg>
                Logout
            </a>
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
