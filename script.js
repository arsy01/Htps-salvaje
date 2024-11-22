
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        var menu = document.getElementById("menu");
        menu.classList.remove("show");
    });
});