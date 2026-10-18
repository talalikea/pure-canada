import logo from "../assets/logo.svg";
import DonationButton from "./DonationButton";

function Header() {
  return (
    <header className="site-header">
      <img className="site-header__logo" src={logo} alt="Pure Canada logo" />
      <div className="site-header__brand">
        <h1>Pure Canada</h1>
        <p className="site-header__tagline">Rebuilding Lives. Restoring Hope</p>
      </div>
      <div className="site-header__donate">
        <DonationButton />
      </div>
    </header>
  );
}

export default Header;
