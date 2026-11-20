// ================= EDIT THESE =================
const C = { wa: "919655155611", mail: "info@mybeaninfotech.com", ph: ["+91 96551 55611", "+91 96262 61516"],
  a1: "No. 85, 2nd Floor, Avarampalayam Road, New Siddhapudur, Coimbatore – 641044, Tamil Nadu",
  a2: "4/1A, Guru Complex, 2nd Floor, Kasthuri Bai Street, Ganapathy, Coimbatore – 641006" };
const IMG = "https://mybeaninfotech.com/wp-content/uploads/"; // change to "images/" after downloading
const WA = `https://wa.me/${C.wa}?text=` + encodeURIComponent("Hi MyBean InfoTech, I'm interested in your services. Can you share more details?");
const SOC = [["Instagram", "instagram", "https://www.instagram.com/mybean_info/"], ["Facebook", "facebook-f", "https://www.facebook.com/profile.php?id=61554712267244"],
  ["LinkedIn", "linkedin-in", "https://www.linkedin.com/company/mybean-infotech-coimbatore/"], ["X", "x-twitter", "https://twitter.com/Mybean_infotech"],
  ["Pinterest", "pinterest-p", "https://in.pinterest.com/mybean_infotech/"], ["Reddit", "reddit-alien", "https://www.reddit.com/user/mybean_infotech"], ["WhatsApp", "whatsapp", WA]];
// ==============================================

const $ = s => document.querySelector(s), put = (s, x) => { const e = $(s); if (e) e.innerHTML = x; }, pad = n => String(n).padStart(2, "0");
const pg = document.body.dataset.page || "home", H = pg === "home" ? "" : "index.html";
document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">');
const ico = s => `<a class="ic" href="${s[2]}" target="_blank" rel="noopener" aria-label="${s[0]}"><i class="fa-brands fa-${s[1]}"></i></a>`;
const act = k => pg === k ? ' class="on"' : "";

// ---------- data (placeholder copy: edit freely) ----------
const sv = [
["software-development", "Software Development", "Custom business software built around your workflow.", "From ERP and billing to hospital, school, stock and transport systems — we design, build and support software your team actually uses.", ["ERP & accounts", "Billing & invoicing", "Hospital management", "School management", "Stock control", "Transport management"], ["ERP", "Billing", "Hospital", "School"], "g1 s8"],
["design-innovation", "Design Innovation", "UI/UX that makes complex software simple.", "Good software starts with good design. We map your users, sketch the flows and shape interfaces people enjoy using.", ["UI/UX design", "Wireframes & prototypes", "Design systems", "Usability review"], ["UI/UX", "Prototypes"], "g2 s4"],
["digital-innovation", "Digital Innovation", "Web and mobile apps, automation and integrations.", "We take manual, paper-heavy processes online with modern web and mobile apps, automation and clean integrations.", ["Websites & web apps", "Mobile apps", "Process automation", "API integrations"], ["Web", "Mobile", "Automation"], "g3 s4"],
["digital-marketing-branding", "Digital Marketing & Branding", "Identity and campaigns people remember.", "We shape how your business looks and sounds, then take it to the right people through social media and campaigns.", ["Logo & brand identity", "Social media marketing", "Ad campaigns", "Creatives & content"], ["Identity", "Social", "Campaigns"], "g4 s4"],
["seo", "SEO", "Get found on search in Coimbatore and beyond.", "We make your website easy for search engines to understand and easy for customers to find.", ["Technical SEO", "On-page & content", "Local SEO", "Reports & tracking"], ["Technical", "Content", "Local"], "g5 s4"],
["research-publication", "Research & Publication", "Research support and publication help for scholars and institutions.", "We support scholars and institutions with structured research guidance and publication assistance.", ["Research guidance", "Paper writing support", "Publication assistance", "Editing & formatting"], ["Research", "Publication", "Scholars"], "g6 s12"]];
const wk = [["ERP Software", "Business", IMG + "2021/06/erp.jpg"], ["Stock Control Software", "Inventory", IMG + "2021/06/stc.jpg"], ["Hospital Management System", "Healthcare", IMG + "2021/06/hms.jpg"], ["Billing Software", "Retail", IMG + "2021/06/bis.jpg"], ["School Management System", "Education", IMG + "2021/06/sms.jpg"], ["Transport Management", "Logistics", IMG + "2021/06/tms.jpg"],
["Bishop Ambrose College", "Website", IMG + "2021/05/Home-Bishop-Ambrose-College-1024x944.png", "https://www.bishopambrosecollege.in/"], ["Vaniya Chettiyar Kovai", "Community website", IMG + "elementor/thumbs/Sangamam-p6j07l3lcrzirw0fl9yqqrg29fel9pfz495k05insg.png", "http://vaniyachettiyarkovai.com/"]];
const steps = [["Share your need", "Tell us the goal and the pain. We listen first and write it down."], ["Design & plan", "We draw the screens and the roadmap, with clear scope and cost."], ["Build it", "We develop in short cycles and show you working software often."], ["Test & deliver", "We test, train your team and stay on for support after go-live."]];
const why = [["Customer-first", "We are here because of our customers. When their needs change, we change."], ["Domain depth", "Hospitals, schools, stock, billing and transport — we've built each of them."], ["Tailored builds", "No one-size-fits-all. Every system is fitted to how you actually work."], ["Honest partnership", "Clear scope, clear cost, regular demos. You always know what's next."], ["Long-term support", "Maintenance and upgrades after launch, not just a hand-over."], ["Growth built in", "SEO, marketing and branding under the same roof as the software."]];
const faq = [["What does MyBean InfoTech do?", "We build business software (ERP, billing, hospital, school, stock and transport systems) and offer design, SEO, digital marketing, branding and research support from Coimbatore."], ["How long does a project take?", "It depends on scope. We give you a timeline after we understand your requirement."], ["How much does it cost?", "It depends on scope, like the cost of a house. Share your requirement and we send a clear quote before we begin."], ["Do you support us after launch?", "Yes. We train your team, fix issues and handle upgrades after go-live."], ["Where are you located?", "Coimbatore, Tamil Nadu. We also work with clients across India remotely."]];

// ---------- builders ----------
const card = (s, i, cls) => `<a class="c ${cls || s[6]}" href="service.html?s=${s[0]}"><span class="n">${pad(i + 1)} / ${pad(sv.length)}</span><span class="go">→</span><div class="tags">${s[5].map(t => `<span>${t}</span>`).join("")}</div><h3>${s[1]}</h3><p>${s[2]}</p></a>`;
const wkCard = (w, i) => { const t = w[3] ? "a" : "div", l = w[3] ? ` href="${w[3]}" target="_blank" rel="noopener"` : ""; return `<${t} class="c pg s3" data-cat="${w[3] ? "Websites" : "Software"}"${l}><img src="${w[2]}" alt="${w[0]}" loading="lazy"><span class="n">${pad(i + 1)} · ${w[1]}</span>${w[3] ? '<span class="go">↗</span>' : ""}<h3>${w[0]}</h3></${t}>`; };
const stepsH = () => steps.map((s, i) => `<article><b>${pad(i + 1)}</b><p class="mk">Stage</p><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join("");
const whyH = () => why.map((w, i) => `<article><i>${pad(i + 1)}</i><h3>${w[0]}</h3><p>${w[1]}</p></article>`).join("");
const ph = (k, t, p) => `<section class="ph"><div class="w"><p class="mk">${k}</p><h1>${t}</h1><p class="mu">${p}</p></div></section>`;
const secProcess = `<section class="sec pr" id="process"><div class="w"><div class="sticky"><p class="mk">How we work</p><h2 class="h2" style="margin:18px 0"><b>From need</b><br>to release.</h2><p class="mu">Four clear stages on every project. You always know what's happening, what's next and what it costs.</p><a class="pill ol" href="contact.html#project" style="margin-top:26px">Talk to us</a></div><div class="st">${stepsH()}</div></div></section>`;
const secWhy = `<section class="sec"><div class="w"><p class="mk">Why us</p><h2 class="h2" style="margin:18px 0 48px"><b>Six reasons customers</b><br>choose MyBean.</h2><div class="why">${whyH()}</div></div></section>`;
const statsH = `<section class="stats"><div><dt><span data-c="2015" data-p>0</span></dt><dd>Founded, with passion and vision</dd></div><div><dt><span data-c="6">0</span></dt><dd>Services under one roof</dd></div><div><dt><span data-c="8">0</span><sup>+</sup></dt><dd>Projects in our portfolio</dd></div><div><dt><span data-c="10">0</span><sup>+</sup></dt><dd>Years serving customers</dd></div></section>`;

// ---------- shared layout ----------
const links = [["Home", "index.html"], ["About", "about.html"], ["Services", H + "#services"], ["Portfolio", "portfolio.html"], ["Blog", "blog.html"], ["Careers", "careers.html"], ["Contact", "contact.html"]];
document.body.insertAdjacentHTML("afterbegin", `<div class="bar" id="bar"></div>
<header class="nav" id="nav"><div class="nav-in"><a class="logo" href="index.html" aria-label="MyBean InfoTech home">my<b>bean</b></a>
<nav class="links" aria-label="Primary"><div class="dd"><a href="${H}#services"${act("service")}>Services &#8964;</a><div class="dd-menu">${sv.map(s => `<a href="service.html?s=${s[0]}"><b>${s[1]}</b><small>${s[2]}</small></a>`).join("")}</div></div>
<a href="about.html"${act("about")}>About</a><a href="portfolio.html"${act("portfolio")}>Portfolio</a><a href="blog.html"${act("blog")}>Blog</a><a href="careers.html"${act("careers")}>Careers</a><a href="contact.html"${act("contact")}>Contact</a></nav>
<div class="rt"><a class="pill" href="contact.html#project">Get a quote <i>→</i></a><button class="burger" id="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button></div></div></header>
<div class="menu" id="menu" aria-hidden="true"><div class="ml">${links.map((x, i) => `<a href="${x[1]}">${x[0]}<i>${pad(i + 1)}</i></a>`).join("")}</div>
<div class="mi"><h4>Say hello</h4><a href="mailto:${C.mail}">${C.mail}</a>${C.ph.map(p => `<a href="tel:${p.replace(/\s/g, "")}">${p}</a>`).join("")}<h4>Visit</h4><p>${C.a1}</p><h4>Follow</h4><div class="ics">${SOC.map(ico).join("")}</div></div></div>
<a class="fwa" href="${WA}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>`);

if (pg === "home") {
  document.body.insertAdjacentHTML("afterbegin", `<div class="bglogo" aria-hidden="true"></div><div class="bgdeco" aria-hidden="true"><i></i><i></i></div>`);
  const hp = $(".hero");
  if (hp) hp.insertAdjacentHTML("beforeend", [["ERP", 46, 31], ["Billing", 62, 36], ["Hospital", 80, 32], ["School", 10, 63], ["Stock", 28, 71], ["Transport", 44, 58], ["SEO", 60, 67], ["Branding", 76, 62]].map((c, i) => `<span class="fc" style="left:${c[1]}%;top:${c[2]}%;animation-delay:-${i * 0.9}s;animation-duration:${5 + i % 3}s">${c[0]}</span>`).join(""));
}
$("main").insertAdjacentHTML("afterend", `<section class="cta" id="contact"><div class="w"><p class="mk" style="color:#ccc">Start a project</p>
<h2><b>Let's make</b><br><b>your</b> <span class="l">next system</span><br><b>real together.</b></h2>
<div class="cta-b"><p>Tell us what you want to build — software, a brand or a campaign — and let's create something useful together.</p>
<div><a class="big" href="contact.html#project">Let's work! <i>→</i></a><p class="sm2"><a href="mailto:${C.mail}">${C.mail}</a><a href="${WA}" target="_blank" rel="noopener">WhatsApp us</a></p></div></div></div></section>
<footer class="ft"><div class="w"><div class="fg">
<div><p>MyBean InfoTech is a software and digital marketing company from Coimbatore, Tamil Nadu — building business systems and brands since 2015.</p><div class="ics" style="margin-top:18px">${SOC.map(ico).join("")}</div></div>
<div><h4>Company</h4><a href="index.html">Home</a><a href="about.html">About</a><a href="portfolio.html">Portfolio</a><a href="blog.html">Blog</a><a href="careers.html">Careers</a><a href="contact.html">Contact</a></div>
<div><h4>Services</h4>${sv.map(s => `<a href="service.html?s=${s[0]}">${s[1].split(" &")[0]}</a>`).join("")}</div>
<div><h4>Follow us</h4>${SOC.map(s => `<a href="${s[2]}" target="_blank" rel="noopener">${s[0]}</a>`).join("")}</div>
<div><h4>Get in touch</h4><a href="mailto:${C.mail}">${C.mail}</a>${C.ph.map(p => `<a href="tel:${p.replace(/\s/g, "")}">${p}</a>`).join("")}<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("MyBean InfoTech Avarampalayam Road Coimbatore")}" target="_blank" rel="noopener">${C.a1}</a></div></div>
<p class="copy"><span>© 2026 MyBean InfoTech. All rights reserved.</span><span>Crafted in Coimbatore by <b>MyBean</b></span></p><div class="sc" aria-hidden="true">#teammybean</div></div></footer>`);

// ---------- pages ----------
const R = {
home() {
  put("#svc", sv.map((s, i) => card(s, i)).join(""));
  const tech = [["HTML5", "html5"], ["CSS3", "css3-alt"], ["JavaScript", "js"], ["React", "react"], ["Node.js", "node-js"], ["PHP", "php"], ["Laravel", "laravel"], ["MySQL"], ["Python", "python"], ["Android", "android"], ["WordPress", "wordpress"], ["Elementor"], ["Figma", "figma"], ["Git", "git-alt"]];
  put("#trust", `<div class="tr">${[...tech, ...tech].map(t => `<span class="t">${t[1] ? `<i class="fa-brands fa-${t[1]}"></i>` : ""}${t[0]}</span>`).join("")}</div>`);
  const sk = ["ERP", "Billing", "Hospital Systems", "School Management", "Stock Control", "Transport", "SEO", "Branding", "UI/UX", "Web Apps", "Mobile Apps", "Digital Marketing", "Research", "Publication"];
  const row = (a, c) => `<div class="mq ${c}"><div class="tr">${[...a, ...a].map(w => `<span>${w}</span>`).join("")}</div></div>`;
  put("#skills", row(sk.slice(0, 7), "") + row(sk.slice(7), "rv2"));
  put("#wk", wk.map((w, i) => wkCard(w, i)).join(""));
  put("#st", stepsH()); put("#why", whyH());
  const so = [["Instagram", "@mybean_info", "Launches, work in progress and team moments.", ["Behind the scenes", "Projects"], SOC[0][2]], ["LinkedIn", "MyBean InfoTech", "Company news, hiring and software insights.", ["Company", "Careers"], SOC[2][2]], ["Facebook", "MyBean InfoTech", "Updates and announcements for our customers.", ["Updates", "Community"], SOC[1][2]]];
  put("#so", so.map(s => `<div><span class="hn">${s[1]}</span><h3>${s[0]}</h3><p>${s[2]}</p><div class="tg">${s[3].map(t => `<span>${t}</span>`).join("")}</div><a class="fl" href="${s[4]}" target="_blank" rel="noopener">Follow →</a></div>`).join(""));
  put("#faqs", faq.map((f, i) => `<details><summary><i>${pad(i + 1)}</i>${f[0]}<span class="pm">+</span></summary><p>${f[1]}</p></details>`).join(""));
},
about() { return ph("About us", "<b>We are</b><br>MyBean.", "Being a dedicated and motivation driven company since 2015, we have an impeccable record of happy customers.") + statsH +
  `<section class="sec"><div class="w"><div class="hd"><h2 class="h2"><b>Our story,</b><br>in short.</h2><p>We are here because of our customers. When our customers' needs change, we change to meet those needs. That one idea has shaped every system, site and campaign we've delivered from Coimbatore.</p></div><div class="cta-row"><a class="pill" href="contact.html#project">Work with us <i>→</i></a><a class="pill ol" href="portfolio.html">See our work</a></div></div></section>` + secProcess + secWhy; },
service() { const s = sv.find(x => x[0] === new URLSearchParams(location.search).get("s")) || sv[0]; document.title = s[1] + " | MyBean InfoTech";
  return ph("Service", `<b>${s[1]}</b>`, s[2]) + `<section class="sec" style="padding-top:20px"><div class="w"><div class="hd"><h2 class="h2"><b>What we</b><br>do.</h2><p>${s[3]}</p></div><div class="why">${s[4].map((x, i) => `<article><i>${pad(i + 1)}</i><h3>${x}</h3></article>`).join("")}</div><div class="cta-row" style="margin-top:36px"><a class="pill" href="contact.html#project">Start a project <i>→</i></a></div></div></section>` + secProcess +
  `<section class="sec"><div class="w"><p class="mk">More services</p><div class="bento" style="margin-top:30px">${sv.filter(x => x !== s).slice(0, 3).map(x => card(x, sv.indexOf(x), "s4")).join("")}</div></div></section>`; },
portfolio() { return ph("Portfolio", "<b>Our</b> projects.", "Software outsourcing is a tool for business goals. Worthwhile results come from cooperation and trust between us and our clients.") +
  `<section class="sec" style="padding-top:0"><div class="w"><div class="flt" id="flt">${["All", "Software", "Websites"].map((f, i) => `<button data-f="${f}" class="${i ? "" : "on"}">${f}</button>`).join("")}</div><div class="bento" id="pgrid">${wk.map((w, i) => wkCard(w, i)).join("")}</div></div></section>`; },
blog() { const p = [["Software", "How an ERP saves your team hours every week", "The daily tasks a good ERP takes off your plate."], ["Billing", "Choosing billing software for a growing shop", "What to check before you pick a billing system."], ["SEO", "Why local SEO matters for Coimbatore businesses", "How to show up when nearby customers search."]];
  return ph("Blog", "<b>Notes</b> from the team.", "Ideas on software, design and growth. Sample titles below — read our full blog on the main site.") + `<section class="sec" style="padding-top:0"><div class="w"><div class="so">${p.map(x => `<div class="blogc"><span class="hn">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><a class="fl" href="https://mybeaninfotech.com/blog/" target="_blank" rel="noopener">Read →</a></div>`).join("")}</div></div></section>`; },
careers() { const perks = [["Real projects", "Work on ERP, hospital and school systems used every day."], ["Learn fast", "Hands-on guidance from experienced developers and designers."], ["Friendly team", "Open, supportive and customer-first."], ["Room to grow", "Grow across software, design and marketing."]];
  const roles = [["Web Developer", "Software · Full-time"], ["UI/UX Designer", "Design · Full-time"], ["Digital Marketing Executive", "Marketing · Full-time"]];
  return ph("Careers", "<b>Build</b> with us.", "Join a customer-first team in Coimbatore. Send us your CV on WhatsApp or email.") + `<section class="sec" style="padding-top:0"><div class="w"><div class="why">${perks.map((x, i) => `<article><i>${pad(i + 1)}</i><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div>
<h2 class="h2" style="margin:80px 0 30px"><b>Open</b> roles.</h2>${roles.map(r => `<div class="rl"><div><h3>${r[0]}</h3><span>${r[1]}</span></div><a class="pill" href="https://wa.me/${C.wa}?text=${encodeURIComponent("Hi, I'd like to apply for the " + r[0] + " role.")}" target="_blank" rel="noopener">Apply <i>→</i></a></div>`).join("")}</div></section>`; },
contact() { return ph("Contact", "<b>Let's</b> talk.", "Tell us what you want to build and we'll reply with a clear plan and quote.") +
  `<section class="sec" id="project" style="padding-top:0"><div class="w cg"><form id="qf" class="form" novalidate>
<label>Name<input name="name" required autocomplete="name"></label><label>Phone<input name="phone" required inputmode="tel" autocomplete="tel"></label>
<label>Email (optional)<input name="email" type="email" autocomplete="email"></label><label>Service<select name="svc">${sv.map(s => `<option>${s[1]}</option>`).join("")}</select></label>
<label class="full">What do you want to build?<textarea name="msg" rows="5" required></textarea></label>
<button class="pill" type="submit">Send on WhatsApp <i>→</i></button><p class="note" id="fnote" role="status"></p></form>
<div class="ci"><div><h4>Email</h4><a href="mailto:${C.mail}">${C.mail}</a></div><div><h4>Call</h4>${C.ph.map(p => `<a href="tel:${p.replace(/\s/g, "")}">${p}</a>`).join("")}</div>
<div><h4>Visit</h4><p>${C.a1}</p><p style="margin-top:10px">${C.a2}</p></div><div><h4>Follow</h4><div class="ics">${SOC.map(ico).join("")}</div></div></div></div></section>
<section class="mapw"><iframe title="MyBean InfoTech location" loading="lazy" src="https://www.google.com/maps?q=${encodeURIComponent("MyBean InfoTech Avarampalayam Road New Siddhapudur Coimbatore 641044")}&output=embed"></iframe></section>`; }
};
if (pg === "home") R.home(); else { const a = $("#app"); a.innerHTML = (R[pg] || (() => ""))(); }

// ---------- interactions ----------
const bg = $("#burger"), mn = $("#menu");
const tog = o => { bg.setAttribute("aria-expanded", o); mn.classList.toggle("open", o); mn.setAttribute("aria-hidden", !o); document.body.style.overflow = o ? "hidden" : ""; };
bg.addEventListener("click", () => tog(bg.getAttribute("aria-expanded") !== "true"));
mn.querySelectorAll("a").forEach(a => a.addEventListener("click", () => tog(false)));
addEventListener("keydown", e => e.key === "Escape" && tog(false));
const nav = $("#nav"), bar = $("#bar");
const onScroll = () => { nav.classList.toggle("stk", scrollY > 80); const m = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${m > 0 ? scrollY / m : 0})`; };
addEventListener("scroll", onScroll, { passive: true }); onScroll();

document.querySelectorAll(".hd,.c,.why article,.st article,.so>div,.fq details,.pc,.edge>*,.stats>div,.ci>div,.rl,.form,.flt").forEach((e, i) => { e.classList.add("rv"); e.style.transitionDelay = (i % 4) * 70 + "ms"; });
const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); const t = e.target; setTimeout(() => t.style.transitionDelay = "", 1200); } }), { threshold: .12 });
document.querySelectorAll(".rv").forEach(e => rio.observe(e));
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const el = e.target, end = +el.dataset.c, t0 = performance.now();
  const tick = t => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}), { threshold: .6 });
document.querySelectorAll("[data-c]").forEach(el => cio.observe(el));

const flt = $("#flt");
if (flt) flt.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; flt.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b)); document.querySelectorAll("#pgrid .c").forEach(c => c.hidden = b.dataset.f !== "All" && c.dataset.cat !== b.dataset.f); });
const qf = $("#qf");
if (qf) qf.addEventListener("submit", e => { e.preventDefault(); const f = new FormData(qf), n = $("#fnote");
  if (!f.get("name").trim() || !f.get("phone").trim() || !f.get("msg").trim()) { n.textContent = "Please fill in your name, phone and project details."; return; }
  const t = `Hi MyBean InfoTech, I'm ${f.get("name")} (${f.get("phone")}${f.get("email") ? ", " + f.get("email") : ""}). Service: ${f.get("svc")}. ${f.get("msg")}`;
  window.open(`https://wa.me/${C.wa}?text=` + encodeURIComponent(t), "_blank", "noopener"); n.textContent = "Opening WhatsApp with your message…"; });

// page transitions
document.addEventListener("click", e => { const a = e.target.closest("a"); if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const u = new URL(a.href, location.href); if (!["http:", "https:", "file:"].includes(u.protocol) || u.host !== location.host || u.protocol !== location.protocol || (u.pathname === location.pathname && u.search === location.search)) return;
  e.preventDefault(); document.body.classList.add("out"); setTimeout(() => { location.href = u.href; }, 260); });
addEventListener("pageshow", () => document.body.classList.remove("out"));
if (location.hash) setTimeout(() => { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }, 60);
