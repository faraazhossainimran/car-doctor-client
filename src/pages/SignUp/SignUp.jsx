
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const signupDetails = {
            name, email, password
        }
        console.log(signupDetails);
        createUser(email, password)
        .then(result=> {
            console.log(result.user);
        })
        .then(error => {
            console.log(error);
        })
    }
    return (
        <div>
                 <div className="hero bg-base-200">
        <div className="hero-content py-24 flex-col lg:flex-row">
          <div className="text-center mr-12 w-1/2">
           <img src={img}/>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSignUp}>
            <h1 className="text-3xl font-bold text-center">SignUp!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type='submit' value='Sign Up' className="btn btn-primary"></input>
              </div>
            </form>
            <p className='py-4 text-center'>Have an account? <Link to={'/login'} className='text-orange-600 font-semibold'>Login</Link></p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default SignUp