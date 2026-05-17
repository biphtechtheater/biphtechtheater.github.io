// header.js
const headerHTML = `
<header>
    <div class="logo-container">
        <div class="logo-icon" style="width: 90px; height: 78px; margin-top: 5px; margin-right: -18px;">
            <img src="../icons/TechTheaterLogo.png" style="height: 80px;" alt="BIPH Tech Theater Logo">
        </div>
        <div>
            <div class="logo" style="line-height: 85%; margin-bottom: 18px; margin-left: -1px;">BIPH Technical Theatre</div>
            <div class="subtitle">2026-2027</div>
        </div>
    </div>
</header>
`;

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('shared-header');
    if (placeholder) {
        placeholder.innerHTML = headerHTML;
    }
});