import { Router } from "express";
const router = Router();

// Endpoints "mock" para futura integração com WHMCS
router.get("/status", (_req, res) => {
  res.json({ whmcs: "stub", connected: false, note: "implementar integração real depois" });
});

export default router;