const BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

function headers(extra = {}) {
  const token = localStorage.getItem("afrinode_token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...extra,
  };
}

async function handle(res) {
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : {}; } catch { data = { error: text }; }
  if (!res.ok) throw data;
  return data;
}

export const api = {
  async get(path) {
    const res = await fetch(`${BASE}${path}`, { headers: headers() });
    return handle(res);
  },
  async post(path, body) {
    const res = await fetch(`${BASE}${path}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });
    return handle(res);
  },
};