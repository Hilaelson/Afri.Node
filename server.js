import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "./config.js";
import healthRouter from "./routes/health.js";
import authRouter from "./routes/auth.js";
import whmcsRouter from "./routes/whmcs.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: "*", credentials: false }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.use("/health", healthRouter);
app.use("/auth", authRouter);
app.use("/whmcs", whmcsRouter); // stub para futuro

app.get("/", (_req, res) => {
  res.json({ ok: true, name: "AfriNode API", version: "1.0.0" });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Erro interno" });
});

app.listen(config.port, () => {
  console.log(`✅ AfriNode API rodando em http://localhost:${config.port}`);
});