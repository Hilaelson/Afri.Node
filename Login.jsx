import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../services/api.js";
import { saveToken } from "../utils/auth.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await api.post("/auth/login", { email, password });
      saveToken(res.token);
      navigate("/dashboard");
    } catch (err) {
      setMsg(err?.error || "Falha ao entrar");
    }
  };

  return (
    <section className="card">
      <h2>Entrar</h2>
      <form onSubmit={submit} className="form">
        <label>Email
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </label>
        <label>Senha
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </label>
        <button className="btn" type="submit">Entrar</button>
        {msg && <p className="error">{msg}</p>}
      </form>
      <p>Não tem conta? <Link to="/registar">Registar</Link></p>
    </section>
  );
}