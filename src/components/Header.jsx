import "../css/Header.css";

export const Header = ({toggleNavbar}) => {
  return (
    <header className="header">
      <section className="header__left-section">
        <button className="header__navbar-btn" onClick={toggleNavbar}>
          <span className="header__btn-line"></span>
          <span className="header__btn-line"></span>
          <span className="header__btn-line"></span>
        </button>
        <h2 className="header__title">Administration Panel</h2>
      </section>
      <figure className="header__profile-img-container">
        <img className="header__profile-img" src="/images/dummy-avatar.png" alt="profile photo" />
      </figure>
    </header>
  );
};
