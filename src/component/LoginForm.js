import { useState, useEffect } from "react";
import axios from "axios";
import "./LoginForm.css";
const baseURL = "https://isv.voicehuddle.com/huddle/api/istudioweb/appLogin";
function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState([]);
  const [post, setPost] = useState("");
  let params = {
    HDUser: { name },
    HDpass: { setPassword },
  };
  useEffect(() => {
    axios.post(baseURL, params).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, []);

  const validateLogin = () => {
    params = {
      HDUser: name,
      HDpass: password,
    };
    axios.post(baseURL, params).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  };
  const onNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    validateLogin();
    //setName("");
    //setPassword("");
    console.log(name);
    console.log(post);
  };
  return (
    <div className="container">
      <div className="header">
        <h2>Creat Account</h2>
      </div>
      <form className="form" id="form" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label>UsserName</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="text"
            placeholder="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default LoginForm;
