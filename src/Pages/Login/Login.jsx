import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hook/UseTitle';


const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
useTitle("Educational Toys || login")
  const [errorMessage, setErrorMessage] = useState("")
  const { login,sighinGogool } = useContext(AuthContext)
const from = location.state?.from?.pathname || "/"


  const sighinInGoggol = () => {
    sighinGogool()
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate(from ,{replace:true})
    })
    .catch((error) => {
      const errorMessage = error.message;
     console.log(errorMessage);
    });

  };


  const handleSighinIn = (e) => {
    e.preventDefault();


    const email = e.target.email.value
    const password = e.target.password.value
    setErrorMessage("")
   
      {

      login(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate(from ,{replace:true})
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });

    }
  };
  return (
    <div className="hero p-8  w-full bg-base-200 my-8">


      <div className="card flex-shrink-0 w-full max-w-sm shadow-sm bg-base-100">

        <form onSubmit={handleSighinIn} className="card-body p-8">
          <h3 className='text-center text-2xl font-bold'>Sighin In</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"
              name='email'
              required
              placeholder="email"
              className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password"
              name='password'
              required
              placeholder="password"
              className="input input-bordered" />

          </div>
          <p className='text-xl text-red-600'>{errorMessage}</p>
          <div className="form-control mt-6">
            <button type='submit' className='py-2 text-xl text-white px-4 border-0 bg-yellow-900 w-full'>Login</button>

          </div>

          <div className="flex flex-col w-full border-opacity-50">

            <div className="divider">OR</div>

          </div>

          <div className='text-center'>
            <button onClick={sighinInGoggol} className="btn btn-circle btn-outline">
              G
            </button>

          </div>
          <p>Yor are new to website please <Link to="/sighinup"><span className='font-bold '>Sighinup</span></Link></p>
        </form>
      </div>
    </div>

  );
};

export default Login;