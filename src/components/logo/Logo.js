import './style.scss';
import {NavLink} from "react-router-dom"
import logo from './logo.svg'

const Logo = () => {
  return (
    <NavLink className="logo" to="/">
      <img src={logo} alt="logo"></img>
      <span className="logo__title">eatly</span>
    </NavLink>
  );
}
 
export default Logo;