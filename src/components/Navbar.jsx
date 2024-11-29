import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfólio</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
