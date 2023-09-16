import { useState } from "react";
import { useAuth } from "../context/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(
    ''
  );
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
      e.preventDefault();

      try {
          // await login(email, password);
          // Redirect or update UI after successful login
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/');
      } catch (error) {
        setError(error.message)
      }
  };

  return (
    <form onSubmit={handleLogin}>
      {error && error}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Gallery-One</h1>
              <p className="py-6">Share your photos with the world.</p>
            </div>
            <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  placeholder="email" 
                  className="input input-bordered" type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                   placeholder="password" 
                   className="input input-bordered" 
                   type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label> */}
                </div>
           <div className="form-control mt-6">
      <button className="btn btn-primary">Sign up</button>
    </div>
  </div>
</div>
</div>
</div>
    </form>
);
}

export default Login;