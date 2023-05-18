import  { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

  const [errorMessage, setErrorMessage] = useState("")

  const sighinInGoggol = () => {
    // setUsername(e.target.value);
  };


  const handleSighinIn = (e) => {
    e.preventDefault();


    const email = e.target.email.value
    const password = e.target.password.value
 setErrorMessage("")
    if (!email || !password) {
      setErrorMessage('Please enter your username and password.');
    } else {

      // setErrorMessage("")

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
              placeholder="email"
              className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password"
              name='password'
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