import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/org-info", (_req, res) => {
  res.json({
    name: "Pure Canada",
    tagline: "Rebuilding Lives. Restoring Hope",
  });
});

app.listen(PORT, () => {
  console.log(`Pure Canada API listening on http://localhost:${PORT}`);
});
