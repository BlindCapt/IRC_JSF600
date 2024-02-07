import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container-navbar">
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
