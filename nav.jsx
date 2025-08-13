import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth.js";

export default function Nav() {
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="nav">
      <div className="nav-brand">
        <span className="logo-dot" /> AfriNode
      </div>
      <nav className="nav-links">
        <Link to="/">Início</Link>
        {isLoggedIn() ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button className="btn" onClick={onLogout}>Sair</button>
          </>
        ) : (
          <>
            <Link to="/login">Entrar</Link>
            <Link to="/registar" className="btn">Criar conta</Link>
          </>
        )}
      </nav>
    </header>
  );
}