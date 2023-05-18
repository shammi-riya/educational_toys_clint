import { useState } from 'react';
import { Link } from 'react-router-dom';

const Regester = () => {
   const [error,serError] = useState("")


    const handleSighinUp = (e) => {
        e.preventDefault()

        const form = e.target

        // const email = form.email.value;
        // const url = form.url.value;
        const password = form.password.value;
        const confirm= form.confrim.value;

       if(password!==confirm){
       serError("your password not match")
       }else{
        serError(" ")
       }


        form.reset()
    }

    return (
        <div className='border-2 w-1/2 mx-auto my-8 shadow-md'>
            <form onSubmit={handleSighinUp} className="card-body p-10">
                <h3 className='text-center text-2xl font-bold'>Sighin Up</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        name='email'
                        placeholder="email"
                        required
                        className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="url"
                        name='url'
                        required
                        placeholder="your photo url"
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">confirm Password</span>
                    </label>
                    <input type="password"
                        name='confrim'
                        required
                        placeholder="confrim password"
                        className="input input-bordered" />
                    
                </div>

                <p className='text-xl text-red-600'>{error}</p>
                <div className="form-control mt-6">
                    <button type='submit' className='py-2 text-xl text-white px-4 border-0 bg-yellow-900 w-full rounded-sm'>Sighin Up</button>

                </div>

                <p>You have already an acoount please <Link to="/login"><span className='font-bold'>Login</span></Link></p>


            </form>
        </div>
    );
};

export default Regester;