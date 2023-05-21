
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/logo/logo.jpg'
import { useContext} from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';



const Navber = () => {

  const {users, logOut} = useContext(AuthContext)
  
  const handleSighinOut = ()=>{
   
      logOut()
        .then(() => {
          // Sign-out successful.
        }).catch((error) => {
          console.log(error);
        });
    
  
  }




    return (
       
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? "border-b-4 border-yellow-900  " : ""}  to="/">Home</NavLink></li>
    <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? "border-b-4 border-yellow-900  " : ""}  to="/alltoys">All Toys</NavLink></li>
    <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? " border-b-4 border-yellow-900" : ""}  to="/mytoys">MyToys</NavLink></li>
    <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? "border-b-4 border-yellow-900 " : ""}  to="/add">AddToys</NavLink></li>
    <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? "border-b-4 border-yellow-900" : ""}  to="/blog">Blogs</NavLink></li>
   
    
    
      </ul>
    </div>
    <img className='h-28' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-2 text-xl">
    <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? "border-b-4 border-yellow-900  " : ""}  to="/">Home</NavLink></li>
    <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? "border-b-4 border-yellow-900  " : ""}  to="/alltoys">All Toys</NavLink></li>
  {
    users && <>
      <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? " border-b-4 border-yellow-900" : ""}  to="/mytoys">MyToys</NavLink></li>
    <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? "border-b-4 border-yellow-900 " : ""}  to="/add">AddToys</NavLink></li>
    </>
  }
    <li className='px-2 text-yellow-900'><NavLink className={({ isActive }) => isActive ? "border-b-4 border-yellow-900" : ""}  to="/blog">Blogs</NavLink></li>
   
    
     
     
     
    </ul>
  </div>
  <div className="navbar-end">
   
  

    
       <div >
      {
        users ? <div className='flex gap-6'> 
     <div>
     <button className='rounded-md py-2 px-3 bg-yellow-900 text-white' onClick={handleSighinOut}>SighinOut</button>
     </div>
        
        <div className="w-10 h-10 rounded-full">
        <img src={users.photoURL} className="tooltip" title={`${users?.displayName}`}/>
      </div>
      
      </div>
      :
      
      <>
      <li className='rounded-md bg-yellow-900 py-2 px-3 text-white'><NavLink className={({ isActive }) => isActive ? "border-b-4 border-yellow-900" : ""}  to="/login">Login</NavLink></li>
      
      </>
      }
       </div>
     
  </div>
</div>
       
    );
};

export default Navber;