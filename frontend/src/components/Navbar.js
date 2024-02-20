import {Link} from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
    return (
        <header>
            <div className="container-navbar">
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
