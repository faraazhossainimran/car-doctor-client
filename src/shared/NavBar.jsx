import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(()=>{
      Swal.fire(
        'Logged out successfully!',
        'Please login next time!',
        'success'
      )
    })
    .catch(error => {
      console.log(error);
    })
  }
  const navItems = <>
  <li><Link to={'/'} className='text-xl'>Home</Link></li>
  <li><Link to={'/about'} className='text-xl'>About</Link></li>
  <li><Link to={'/service'} className='text-xl'>Service</Link></li>
  <li><Link to={'/blog'} className='text-xl'>Blog</Link></li>
  <li><Link to={'/contact'} className='text-xl'>Contact</Link></li>
  {user?.email ? <li><button onClick={handleLogOut} className='text-xl'>Signout</button></li> : <li><Link to={'/login'} className='text-xl'>login</Link></li>}
  </>
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 h-28">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {navItems}
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img className='w-[80px]' src={logo}/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-warning">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
