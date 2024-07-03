import "../css/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ toggleNavbar, isNavHidden }) => {
  return (
    <>
      <nav className={`nav-bar ${isNavHidden ? "nav-bar--hidden" : ""}`}>
        <header className="nav-bar__hero">
          <button className="nav-bar__mobile-btn" onClick={toggleNavbar}>
            &#215;
          </button>
          <img className="nav-bar__hero-icon" src="/images/nav-bar-icon.png" alt="Plantasia icon" />
          <h3 className="nav-bar__hero-title">Plantasia</h3>
        </header>

        <section className="nav-bar__main-section">
          <ul className="nav-bar__btns-wrapper">

            <li className="nav-bar__btn">
              <img src="/images/home.png" alt="Home icon" />
              <Link className='nav-bar__link' to="/dashboard">Dashboard</Link>
            </li>

            <li className="nav-bar__btn">
              <img src="/images/shopping-bag.png" alt="Products icon" />
              <Link className='nav-bar__link' to="/products">Products</Link>
            </li>

            <li className="nav-bar__btn">
              <img src="/images/user.png" alt="Users icon" />
              <Link className='nav-bar__link' to="/users">Users</Link>
            </li>

            <li className="nav-bar__btn">
              <img src="/images/shopping-cart.png" alt="Orders icon" />
              <Link className='nav-bar__link' to="/orders">Orders</Link>
            </li>

          </ul>
          <div className="nav-bar__return-section">
            <img src="/images/return.png" alt="Return icon" />
            <span className="nav-bar__return-section-text">Return to website</span>
          </div>
        </section>
      </nav>
      <div
        className={`nav-bar__overlay ${isNavHidden ? "" : "nav-bar__overlay--shown"}`}
        onClick={toggleNavbar}
      ></div>
    </>
  );
};
