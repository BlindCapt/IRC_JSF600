import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
