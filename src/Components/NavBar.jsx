import { Component } from "react";
import DropdownMenu from '../UI/Menu';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light " color='white'>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link style={{ color: 'white' }} className="nav-link active" to="/today">Hoy</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: 'white' }} className="nav-link active" to='/byhour'>Por Hora</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: 'white' }} className="nav-link active" to="/bydays">Próximos Días</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ color: 'white' }} className="nav-link active" to="/airCondition">Condición del Aire</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <DropdownMenu></DropdownMenu>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;