import { Link, Outlet } from "react-router-dom";
import './Navbar.css';
import Logo from '../KiaLogo.jpg';

export const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='Catalogos'>Catalogos</Link>
                    </li>
                    <li>
                        <Link to='Contactanos'>Asesor. Julio Dominguez Lopez</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
};
