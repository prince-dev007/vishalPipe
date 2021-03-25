import Logo from "../assests/img/Vishal-Logo.jpg";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
    async function submitForm(e)
    {
        e.preventDefault();
        let data = {
            email,password
        }
        if(data.email ==='admin@gmail.com' && data.password ==='admin')
        history.push("/Dashboard");
        else
        alert('Incorrect Credentials');
    }
  return (
    <>
      <div class="container-fluid " id="section1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6"></div>
            <div class="col-lg-6 mt-5 p-lg-5">
              <img src={Logo} height="80px" alt="VishalPipe" />
              <form class="mt-4" id="loginForm" onSubmit={submitForm}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    required
                    class="form-control"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    class="form-control"
                    name="password"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn">
                  Login Here
                </button>
                <button type="submit" class="btn ml-2">
                  Forgot Password
                </button>
              </form>
              <h6 class="mt-5">Copyright All Rights Reserved &copy; 2021</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
