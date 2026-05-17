(function() {
    const studentMenuHTML = `
        <div class="hamburger-menu">
            <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            <div class="menu-items student-menu" id="student-menu">
                <div class="menu-title">BIPH Tech Theater</div>
                
                <a href="https://biphtechtheater.github.io/">Home</a>

                <a href="https://biphtechtheater.github.io/files/">📄   Files</a>
                <a href="https://biphtechtheater.github.io/events/">📅   Events</a>
                
                <a href="https://biphtechtheater.github.io/tutorials/">⏯   Tutorials</a>
                <a href="https://biphtechtheater.github.io/tutorials/qlab/">          • QLab</a>
                <a href="https://biphtechtheater.github.io/tutorials/m32/">          • M32 Mixer</a>
                <a href="https://biphtechtheater.github.io/tutorials/blackbox/">          • Black Box</a>
                <a href="https://biphtechtheater.github.io/tutorials/auditorium/">          • Auditorium</a>
                <a href="https://biphtechtheater.github.io/tutorials/mobile/">          • Mobile Setup</a>
                
                <a href="https://biphtechtheater.github.io/dmxis/">🎚   DMXIS Remote</a>
                
                <a href="mailto:garrison.tubbs-biph@basischina.com">📩   Contact</a>
            </div>
        </div>
    `;

    const container = document.getElementById('shared-menu');
    if (!container) {
        console.error('Menu container (#shared-menu) not found');
        return;
    }

    // Updated styles
    const style = document.createElement('style');
    style.textContent = `
        .hamburger-menu {
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 1000;
        }

        .menu-toggle {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 30px;
            height: 25px;
            background: transparent;
            border: none;
            cursor: pointer;
        }

        .menu-toggle span {
            width: 30px;
            height: 3px;
            background: #cccccc;
            border-radius: 10px;
            transition: all 0.3s linear;
        }

        .menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 5px); }
        .menu-toggle.open span:nth-child(2) { opacity: 0; }
        .menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(6px, -7px); }

        .menu-items {
            position: absolute;
            top: 25px;
            left: -260px;
            border: 1px solid rgba(60, 60, 60, 0.6);
            border-radius: 10px;
            box-shadow: 0 14px 16px rgba(10, 10, 10, 0.9);
            background: linear-gradient(180deg, #2a2a2a, #1a1a1a);
            width: 260px;
            max-height: 85vh;
            overflow-y: auto;
            padding: 12px 0 40px 0;     /* More space at bottom */
            transition: all 0.3s ease-in-out;
            opacity: 0;
        }

        .menu-items.show {
            left: 0;
            opacity: 1;
        }

        .menu-items a {
            text-align: left;
            display: block;
            padding: 11px 40px 11px 47px;
            color: #e0e0e0;
            text-decoration: none;
            transition: background-color 0.2s;
            opacity: 0;
            transform: translateX(-20px);
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .menu-items.show a {
            opacity: 1;
            transform: translateX(0);
        }

        .menu-items a:hover {
            background-color: rgba(255, 255, 255, 0.08);
            color: white;
        }

        .menu-title {
            text-align: center;
            color: #ffffff;
            font-size: 17px;
            font-weight: 500;
            padding-bottom: 10px;
            border-bottom: 1px solid #444;
        }
    `;
    document.head.appendChild(style);

    let activeMenu = null;

    function closeMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const openMenu = document.querySelector('.menu-items.show');
        
        if (menuToggle) menuToggle.classList.remove('open');
        if (openMenu) openMenu.classList.remove('show');
        
        activeMenu = null;
    }

    function setupMenuInteractions() {
        const menuToggle = document.getElementById('menu-toggle');
        const menuItems = document.getElementById('student-menu');
        if (!menuToggle || !menuItems) return;

        menuItems.addEventListener('click', (e) => e.stopPropagation());

        const outsideClick = (e) => {
            if (!menuToggle.contains(e.target) && !menuItems.contains(e.target)) {
                closeMenu();
            }
        };

        const escapeKey = (e) => {
            if (e.key === 'Escape') closeMenu();
        };

        setTimeout(() => {
            document.addEventListener('click', outsideClick);
            document.addEventListener('keydown', escapeKey);
        }, 10);
    }

    function toggleMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const menuItems = document.getElementById('student-menu');

        if (menuItems.classList.contains('show')) {
            closeMenu();
        } else {
            menuToggle.classList.add('open');
            menuItems.classList.add('show');
            activeMenu = 'student';
            setupMenuInteractions();
        }
    }

    container.addEventListener('click', function(e) {
        if (e.target.closest('.menu-toggle')) {
            e.stopImmediatePropagation();
            toggleMenu();
        }
    });

    // Initial render
    container.innerHTML = studentMenuHTML;
})();