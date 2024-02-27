import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

import { Link, useNavigate } from "react-router-dom";
import "./auth.scss";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    await login({ name, email, role, password });
    navigate("/");
  };

  const handleChange = (e) => {
    setRole(e.target.value);
  };
  // const { setLoggedUser, setId } = useContext(UserContext);

  // const handleSubmmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       "htt/login",
  //       { username, role, password },
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     setId(data.id);
  //     setLoggedUser(username);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="auth">
      <div className="container">
        <form>
          <Link to={"/"} className="link">
            <KeyboardBackspaceOutlinedIcon className="back" />
          </Link>
          <Card className="card" sx={{ maxWidth: 345 }}>
            <h2>Login</h2>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                size="small"
                label="Role"
                onChange={handleChange}
              >
                <MenuItem value={"User"}>User</MenuItem>
                <MenuItem value={"Delivery"}>Delivery Manager</MenuItem>
                <MenuItem value={"Inventory"}>Inventory Manager</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              size="small"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className="link">
              New User! Click <Link to={"/register"}>here</Link> to Register
            </span>
            <Button variant="contained" className="btn" onClick={handleSubmit}>
              Login
            </Button>
          </Card>
        </form>
      </div>
    </div>
  );
};
