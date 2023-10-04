import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateProfileUser } = useContext(AuthContext);


    const HandleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;

        const password = form.password.value;
        const email = form.email.value;
        console.log(email);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                userDataUpdate(user, name, photoURL);
                console.log(photoURL);
            })
            .catch(error => console.log(error))


        const userDataUpdate = (user, name, photoURL) => {
            updateProfileUser(user, name, photoURL)
        }


    }
    return (
        <div className="hero min-h-screen py-20  bg-base-200">

            <form onSubmit={HandleRegister} className="hero-content flex-col md:w-full ">


                <div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                    <h2 className="text-5xl text-center pt-5 font-bold">Register now!</h2>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
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
                        <p>You have already Register ? please <Link to='/login'><span className='font-bold'>Login</span></Link></p>
                        <div className="divider">OR</div>
                        <button className="btn mx-auto btn-circle btn-outline">
                            G
                        </button>
                    </div>


                </div>

            </form>
        </div>
    );
};

export default Register;