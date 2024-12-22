import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [email, setEmail] = useState("bhuvanesh@gmail.com");
  const [password, setPassword] = useState("Bhuvanesh@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[error, setError] = useState();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data); //
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center m-24">
      <div className="card bg-base-300   w-96 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title">Login</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email ID</span>
            </div>
            <input
              type="text"
              value={email}
              className="input input-bordered w-full max-w-xs  my-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs my-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p> {error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary " onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
