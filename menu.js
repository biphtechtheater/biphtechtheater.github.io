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
                <a href="https://biphtechtheater.github.io/tutorials/dmxis/">          • DMXIS</a>
                <a href="https://biphtechtheater.github.io/tutorials/m32/">          • M32 Mixer</a>
                <a href="https://biphtechtheater.github.io/tutorials/blackbox/">          • Black Box</a>
                <a href="https://biphtechtheater.github.io/tutorials/auditorium/">          • Auditorium</a>
                <a href="https://biphtechtheater.github.io/tutorials/mobile/">          • Mobile Setup</a>
                
                <a href="https://biphtechtheater.github.io/dmxis/">🎚   DMXIS Remote</a>
                <a href="https://biphtechtheater.github.io/launchpad/">🚀   Launchpad</a>
                
                <a href="mailto:garrison.tubbs-biph@basischina.com">📩   Contact</a>
            </div>
        </div>
    `;

    const teacherMenuHTML = `
        <div class="hamburger-menu">
            <button class="menu-toggle" id="menu-toggle" aria-label="Toggle teacher menu">
                <span></span><span></span><span></span>
            </button>
            <div class="menu-items teacher-menu" id="teacher-menu">
                <div class="menu-title">BIPH Tech Theater - Teacher</div>
                <a href="https://biphtechtheater.github.io/groups">Groups</a>
                <a href="https://biphtechtheater.github.io/quadrants">Quadrants</a>
                <a href="https://biphtechtheater.github.io/completionboard">Completion Board</a>
                <div class="menu-footer">© Garrison Tubbs 2026</div>
            </div>
        </div>
    `;

    const container = document.getElementById('shared-menu');
    if (!container) {
        console.error('Menu container (#shared-menu) not found');
        return;
    }

    // Styles
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
            padding: 12px 0 40px 0;
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
            transition: background-color 0.2s, color 0.2s;
            opacity: 0;
            transform: translateX(-20px);
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.2s, color 0.2s;
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
            margin-bottom: 4px;
        }

        .menu-footer {
            position: absolute;
            bottom: 12px;
            width: 100%;
            text-align: center;
            color: #888;
            font-size: 12px;
        }

        /* Slight visual distinction for teacher menu */
        .teacher-menu {
            border-color: rgba(75, 219, 255, 0.25);
        }
        .teacher-menu .menu-title {
            color: #4bdbff;
        }
    `;
    document.head.appendChild(style);

    let activeMenu = null;
    let currentOutsideHandler = null;
    let currentEscapeHandler = null;

    function renderMenu(type) {
        container.innerHTML = type === 'teacher' ? teacherMenuHTML : studentMenuHTML;
    }

    function closeMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const openMenu = document.querySelector('.menu-items.show');
        
        if (menuToggle) menuToggle.classList.remove('open');
        if (openMenu) openMenu.classList.remove('show');

        // Cleanup listeners
        if (currentOutsideHandler) {
            document.removeEventListener('click', currentOutsideHandler);
            currentOutsideHandler = null;
        }
        if (currentEscapeHandler) {
            document.removeEventListener('keydown', currentEscapeHandler);
            currentEscapeHandler = null;
        }
        
        activeMenu = null;
    }

    function setupMenuInteractions(type) {
        const menuToggle = document.getElementById('menu-toggle');
        const menuItems = document.getElementById(`${type}-menu`);
        if (!menuToggle || !menuItems) return;

        // Prevent clicks inside the menu from closing it
        menuItems.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Outside click handler
        currentOutsideHandler = (e) => {
            if (!menuToggle.contains(e.target) && !menuItems.contains(e.target)) {
                closeMenu();
            }
        };

        // Escape key handler
        currentEscapeHandler = (e) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        };

        setTimeout(() => {
            document.addEventListener('click', currentOutsideHandler);
            document.addEventListener('keydown', currentEscapeHandler);
        }, 10);
    }

    function toggleMenu(requestedType) {
        if (activeMenu === requestedType) {
            // Special case: Command/Option-click when teacher menu is already open → stay open
            if (requestedType === 'teacher') {
                return;
            } else {
                closeMenu();
                return;
            }
        }

        // Open or switch menu
        renderMenu(requestedType);
        setupMenuInteractions(requestedType);
        
        const menuItems = document.getElementById(`${requestedType}-menu`);
        const menuToggle = document.getElementById('menu-toggle');
        
        void menuItems.offsetWidth; // force reflow for animation
        menuToggle.classList.add('open');
        menuItems.classList.add('show');
        activeMenu = requestedType;
    }

    // Main toggle button handler
    container.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-toggle')) return;

        e.stopImmediatePropagation();
        
        const isTeacherRequest = e.altKey || e.metaKey;
        const requestedType = isTeacherRequest ? 'teacher' : 'student';
        
        toggleMenu(requestedType);
    });

    // Initial render
    renderMenu('student');
})();