import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/dashboard";
import api from "./https/api";

function App() {
  const [login, setLogin] = useState(false);

  const handleLogin = (value) => {
    setLogin(value);
  };

  useEffect(() => {
    const verifyToken = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          // Make a request to verify the token
          await api.get("/verify-token", {
            headers: { Authorization: `Bearer ${token}` },
          });
          handleLogin(true); // Token is valid, user is logged in
        } catch (error) {
          // Token is invalid, remove it and show login screen
          window.localStorage.removeItem("token");
          handleLogin(false);
        }
      } else {
        handleLogin(false);
      }
    };

    verifyToken();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {login ? <Dashboard /> : <Login handleLogin={handleLogin} />}
    </div>
  );
}

export default App;
