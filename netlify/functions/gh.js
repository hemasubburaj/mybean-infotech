const crypto = require("crypto");
const REPO = "hemasubburaj/mybean-infotech";
const sign = (s) => crypto.createHmac("sha256", process.env.SESSION_SECRET).update(s).digest("hex");
const eq = (a, b) => { const x = Buffer.from(String(a ?? "")), y = Buffer.from(String(b ?? "")); return x.length === y.length && crypto.timingSafeEqual(x, y); };
const out = (c, b) => ({ statusCode: c, headers: { "Content-Type": "application/json" }, body: JSON.stringify(b) });

exports.handler = async (e) => {
  if (e.httpMethod !== "POST") return out(405, { message: "POST only" });
  let d; try { d = JSON.parse(e.body || "{}"); } catch { return out(400, { message: "Bad JSON" }); }

  if (e.queryStringParameters?.action === "login") {
  if (e.queryStringParameters?.debug) return out(200, { userLen: (process.env.ADMIN_USER || "").length, passLen: (process.env.ADMIN_PASS || "").length, ctx: process.env.CONTEXT });
    if (eq(String(d.user || ""), process.env.ADMIN_USER) && eq(String(d.pass || ""), process.env.ADMIN_PASS)) {
      const exp = String(Date.now() + 8 * 3600 * 1000);
      return out(200, { token: exp + "." + sign(exp) });
    }
    return out(401, { message: "Wrong username or password" });
  }

  const [exp, sig] = (e.headers.authorization || "").replace("Bearer ", "").split(".");
  if (!exp || !sig || !eq(sig, sign(exp)) || Date.now() > +exp) return out(401, { message: "Session expired" });

  if (!String(d.path || "").startsWith(`/repos/${REPO}/contents/`)) return out(403, { message: "Path not allowed" });
  const r = await fetch("https://api.github.com" + d.path, {
    method: d.method || "GET",
    headers: { Authorization: "Bearer " + process.env.GITHUB_TOKEN, Accept: "application/vnd.github+json", "User-Agent": "mybean-admin", "Content-Type": "application/json" },
    body: d.body ? JSON.stringify(d.body) : undefined
  });
  return { statusCode: r.status, headers: { "Content-Type": "application/json" }, body: await r.text() };
};
