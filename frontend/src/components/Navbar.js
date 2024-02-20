import {Link} from "react-router-dom";
import { useLogout} from "../hooks/useLogout";
import "../css/navbar.css";

const Navbar = () => {
    const {logout} = useLogout();
    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container-navbar">
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <div>
                    <button onClick={handleClick}>Logout</button>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
