import nodemailer from "nodemailer";
import { config } from "../config.js";

export function makeTransport() {
  if (!config.gmail.user || !config.gmail.pass) {
    console.warn("⚠️ GMAIL_USER/GMAIL_PASS não configurados. Emails não serão enviados.");
    // transport fake para dev
    return {
      sendMail: async (opts) => {
        console.log("📧 [DEV] Email simulado:", opts);
        return { accepted: [opts.to] };
      },
    };
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: config.gmail.user, pass: config.gmail.pass },
  });
}

export async function sendWelcomeEmail(to) {
  const transporter = makeTransport();
  const html = `
    <div style="font-family:Arial,sans-serif">
      <h2>Bem-vindo à AfriNode 🚀</h2>
      <p>Conta criada com sucesso: <b>${to}</b></p>
      <p>Conectando África ao Futuro.</p>
    </div>
  `;
  return transporter.sendMail({
    from: `"AfriNode" <${config.gmail.user || "no-reply@afrinode.local"}>`,
    to,
    subject: "Bem-vindo à AfriNode",
    html,
  });
}