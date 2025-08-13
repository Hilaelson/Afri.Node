import React, { useEffect, useState } from "react";
import { api } from "../services/api.js";

export default function Dashboard() {
  const [me, setMe] = useState(null);
  const [health, setHealth] = useState(null);

  useEffect(() => {
    (async () => {
      try { setMe(await api.get("/auth/me")); } catch {}
      try { setHealth(await api.get("/health")); } catch {}
    })();
  }, []);

  return (
    <section className="card">
      <h2>Dashboard</h2>
      {me ? (
        <div className="grid">
          <div className="panel">
            <h3>Minha Conta</h3>
            <p><b>Email:</b> {me.email}</p>
            <p><b>Criado em:</b> {new Date(me.createdAt).toLocaleString()}</p>
          </div>
          <div className="panel">
            <h3>Status da API</h3>
            {health ? (
              <>
                <p><b>Status:</b> {health.status}</p>
                <p><b>Uptime (s):</b> {Math.floor(health.uptime)}</p>
              </>
            ) : <p>Carregando…</p>}
          </div>
        </div>
      ) : (
        <p>Carregando…</p>
      )}
    </section>
  );
}