import { useState } from "react";
import "./admin.scss";
import { baseUrl } from "../../baseUrl";
import { Button, TextField } from "@mui/material";
import LoadingOverlay from "../Loading/LoadingOverlay";

const EditNewsLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${baseUrl}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        onLogin();
      } else {
        setLoading(false);
        setError("Nieprawidłowy login lub hasło");
      }
    } catch {
      setError("Błąd połączenia z serwerem");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      {loading && <LoadingOverlay />}
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Login"
          variant="outlined"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default EditNewsLogin;
