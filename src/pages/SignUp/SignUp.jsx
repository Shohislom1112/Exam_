import "./style.scss";
import logo from "../logo/logo.svg";
import Food from "../../components/food/Food";
import { NavLink } from "react-router-dom";


const SignUp = () => {
  return (
    <div className="modal">
      <div className="signUp">
        <div className="signUp-left">
          <img src={logo} alt="logo"></img>

          <h2>Sign Up To eatly</h2>
          <button></button>
          <button></button>
          <p>or</p>
          <form>
            <input placeholder="full name" />
            <input placeholder="email" />
            <input placeholder="password" />
            <button>sign up</button>
          </form>
          <p>Already Have An Account? <NavLink to="/LogIn">
          Log In</NavLink></p>
        </div>
        <div className="signUp-right">
          <Food />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
