
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import { AuthContext } from '../../Auth/AuthProvider';


const Register = () => {

    const { passwordSignUp, handleUpdateUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        e.target.name.value = '';
        const email = e.target.email.value;
        e.target.email.value = '';
        const image = e.target.img.value;
        e.target.img.value = '';
        const password = e.target.password.value;
        e.target.password.value = '';

        if (password.length < 6) {
            return Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your password should have at least 6 characters or longer',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your password should have at least one capital letter',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            return Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your password should have at least one special character',
                showConfirmButton: false,
                timer: 1500
            })
        }
        console.log(image, name)
        passwordSignUp(email, password)
            .then(res => {
                handleUpdateUser(name, image)
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Register Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })

                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `${err}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <>
            <div className="hero   bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSignUp} className="px-10 pb-5 ">
                            <h1 className="text-2xl lg:text-4xl py-5 text-center px-4 font-bold">Register now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='img' placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Register</button>
                            </div>

                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;