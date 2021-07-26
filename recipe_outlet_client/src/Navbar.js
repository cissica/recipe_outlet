import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>GroceryRun</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/account">My Account</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;