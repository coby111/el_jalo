const nav = () => {
    return (
        `<nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="acerca.html">Acerca de...</a></li>
                <li><a href="galeria.html">Galeria</a></li>
                <li><a href="Contacto.html">Contacto</a></li>
            </ul>
        </nav>
        `
    )
}
const main = () => {
    document.getElementById('app_head').innerHTML += nav()
}
document.addEventListener('DOMContentLoaded',main)