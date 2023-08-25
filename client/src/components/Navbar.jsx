import { Link } from "react-router-dom";
import icon from '/public/SWINE.png'

function Navbar({ setUser, username ,id}) {
 
  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };
    return (
      <ul id='navbar' className="flex space-x-4 mt-20">
        <li>
          <Link to="/">
            <img src={icon} alt="Logo" className="w-14 mb-5"/> 
          </Link>
        </li>
        {console.log(username,id)}
        {username ? 
          <>
            <li style={{ color: "white" }}>Oink {username}!</li>
            <li className="hover:text-red-700 font-bold">
              <Link to='/post'>Post</Link>
            </li>
            <li className="hover:text-red-700 font-bold">
              <Link to='/about'>About</Link>
            </li>
            <li onClick={logout} className="hover:text-red-700 font-bold">
              <Link to="/about">Logout</Link>
            </li>
            {/* <li className="hover:text-red-700 font-bold">
              <Link to={`/profile/${id}`}>Profile</Link>
            </li> */}
          </>
          : 
          <>
            <li className="hover:text-red-700 font-bold">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:text-red-700 font-bold">
              <Link to="/register">Register</Link>
            </li>
          </>
        }
      </ul>
    );
  }

export default Navbar;
