import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Login = () => {


    const { signIn, googleSignIn } = useContext(AuthContext);

    const HandleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.log(error))
    }

    const handleGooleSignIN = () => {
        googleSignIn();

    }

    return (
        <div className=" hero  py-20  bg-base-200">

            <div className='hero-content  flex-col md:w-full flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card'>
                <form onSubmit={HandleLogin} className=" ">


                    <h2 className="text-5xl text-center pt-5 font-bold">Login now!</h2>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mb-4  mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>If you new toy ? please <Link to='/register'><span className='font-bold'>Registration</span></Link></p>

                    </div>

                </form>

                <div className="divider ">OR</div>
                <button onClick={handleGooleSignIN} className="btn  mx-auto btn-circle btn-outline">
                    G
                </button>

            </div>



        </div>
    );
};

export default Login;