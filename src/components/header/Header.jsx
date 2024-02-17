import { NavLink } from "react-router-dom";
import "./style.scss";
import Logo from "../logo/Logo";
import SignUp from "../../pages/SignUp/SignUp";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-body">
            <Logo />

            <nav className="header-navigation">
              <ul className="header-list">
                <li className="header-list__element">
                  <NavLink className="header-list__link" to="/">
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="header-list__element">
                  <NavLink className="header-list__link" to="/Dishes">
                    <span>Dishes</span>
                  </NavLink>
                </li>
                {/*  */}
              </ul>
            </nav>

            <div className="header-buttons">
              <NavLink to="/LogIn">
              <button className="header__button auth">Login</button>
              </NavLink>
             <NavLink to="/SignUp"> <button className="header__button registr">Sign up</button></NavLink>
            </div>
          </div>
        </div>
      </header>

      <SignUp />
    </>
  );
};

export default Header;
