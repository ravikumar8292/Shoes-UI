import './navbar.css';
import logo from './images/brand_logo.png';

function navbar() {
    return (
        <div className="Navbar-item">
            <div className="logo">
               <img src={logo} alt="react logo" />
            </div>
            <div className="list">
              <div className="menu"><a href=""><p>Menu</p></a></div>
              <div className="location"><a href=""><p>Location</p></a></div>
              <div className="about"><a href=""><p>About</p></a></div>
              <div className="contact"><a href=""><p>Contact</p></a></div>
            </div>
            <div className="log-in">
              <button className="login">Login</button>
            </div>
        </div>
        
    );
  }
  
  export default navbar;
 
