import React from "react";

export default function Home() {
  return (
    <section className="hero">
      <h1>AfriNode</h1>
      <p>Infraestrutura cloud com identidade africana e padrão global.</p>
      <ul className="features">
        <li>Hospedagem em nuvem</li>
        <li>Edge Computing</li>
        <li>APIs prontas para integrar</li>
      </ul>
      <div className="hero-cta">
        <a className="btn" href="https://vercel.com" target="_blank">Deploy no Vercel</a>
      </div>
    </section>
  );
}