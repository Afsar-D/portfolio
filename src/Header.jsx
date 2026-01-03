
function Header() {
    const handleNavigation = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            <ul>
                <li><a href=".intro" onClick={(e) => handleNavigation(e, '.intro')}>Afsar</a></li>
                <li><a href="#footer" onClick={(e) => handleNavigation(e, '#footer')}>Contact</a></li>
            </ul>
        </nav>
    )
}
export default Header