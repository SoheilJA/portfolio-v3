const SITE_DATA = {
    settings: {
        hero_title: "SOHEIL AHMADI",
        hero_subtitle: "NO BUGS FOUND",
        hero_text: "Full-Stack developer with a powerlifter's mindset. Six years of shipping Django back-ends, WordPress builds and interfaces that don't flinch under load. Trained to ship. Built to last.",
        hero_audio: "",
        nav_home: "HOME", nav_services: "SERVICES", nav_about: "ABOUT", nav_work: "WORK",
        nav_certificates: "CERTIFICATES", nav_contact: "CONTACT",
        nav_email_label: "E-MAIL", nav_social_label: "SOCIAL",
        service_sum_1: "ARCHITECTURE",
        service_sum_2a: "DEVELOPMENT", service_sum_2b: "DEPLOYMENT",
        service_sum_3a: "APIS", service_sum_3b: "FRONTENDS", service_sum_3c: "SCALABILITY",
        service_sum_4: "DATABASES",
        services_title: "SERVICES",
        services_subtitle: "Everything between idea and production",
        services_text: "No agencies. No handoffs. No excuses. One operator who designs the system, writes the code, deploys it — and stays for the maintenance. Pick your program below.",
        about_title: "ABOUT",
        about_subtitle: "Train like an athlete. Code like a pro.",
        about_text: "I'm Soheil � a full-stack developer from Tehran who treats every project like competition prep: plan, execute, measure, repeat.",
        about_bio_text: "Six years ago I wrote my first line of Python between training sessions. Today I architect and ship production systems — Django back-ends, WordPress platforms and the front-ends on top — for founders and studios who need one reliable operator instead of a committee.\n\nMy rule is simple: whatever leaves my keyboard must survive real traffic, real deadlines and real users. Clean architecture, honest estimates, documented handovers.\n\nOff the keyboard: 5:30 alarms, barbells, black coffee and a permanently open terminal.",
        works_title: "WORKS",
        works_subtitle: "Selected work — proof, not promises",
        works_text: "A cut of what I've built. Hover to preview, click for the full breakdown. Some client work sits under NDA — ask me about it over coffee.",
        tab_dev: "Development", tab_wp: "WordPress",
        wp_stat_text: "WordPress sites built and shipped",
        certificates_title: "CERTIFICATES",
        certificates_subtitle: "Proof of work — verifiable",
        certificates_text: "Papers don't write code, but these show I did the reps. Hover to preview, click any certificate to view it full-size and verify it with the issuer.",
        cert_verify_label: "View & Verify",
        cert_image_alt: "Certificate",
        contact_summary_quote: 'NO SHORTCUTS.<br>NO EXCUSES.<span> JUST SHIP.</span>',
        marquee_summary_1: "FULL-STACK DEVELOPER|DJANGO|WORDPRESS|REST APIS|DEPLOYMENT|SINCE 2019",
        marquee_summary_2: "TRAIN HARD|SHIP HARD|REVIEW|REFACTOR|REPEAT|NO EXCUSES",
        marquee_contact: "AVAILABLE FOR NEW PROJECTS|LET'S BUILD SOMETHING HEAVY|REPLY WITHIN 24H",
        contact_title: "CONTACT",
        contact_subtitle: "The barbell is optional. The deadline isn't.",
        contact_text: "A system to build, a WordPress site to rescue, or an API that needs a coach? Send the brief. You'll hear back within 24 hours — honest about scope, price and what it takes.",
        contact_email_label: "E-MAIL", contact_phone_label: "PHONE", contact_social_label: "SOCIAL MEDIA",
        email: "hello@soheil-ahmadi.dev", phone: "+98 912 345 6789"
    },
    social_links: [
        { name: "GitHub", url: "https://github.com/soheil-ahmadi" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/soheil-ahmadi" },
        { name: "Telegram", url: "https://t.me/soheil-ahmadi" },
        { name: "Instagram", url: "https://instagram.com/soheil-ahmadi.dev" }
    ],
    services: [
        { title: "Back-End Engineering", description: "Django & DRF systems designed like training programs: progressive, measurable, overload-proof. Clean models, fat tests, zero spaghetti — from auth to async workers.", tags: "Python, Django, DRF, PostgreSQL, Redis, Celery" },
        { title: "Front-End Development", description: "Interfaces that hit. Semantic markup, engineered animation, pixel-accurate builds — tuned to perform on the slowest phone in the room, not just your laptop.", tags: "JavaScript, Vue, GSAP, Tailwind, HTML5" },
        { title: "WordPress Development", description: "Custom themes and plugins from a blank folder — no bloated page builders. WooCommerce stores, headless setups, load times measured in diet milliseconds.", tags: "WooCommerce, ACF, Custom Themes, PHP" },
        { title: "API Design & Integration", description: "REST APIs with documentation your grandma could call. Payment gateways, SMS providers, third-party chaos — tamed, logged, retry-safe.", tags: "REST, JWT, Webhooks, Payment Gateways" },
        { title: "Deployment & DevOps", description: "Docker, Nginx, CI/CD. I put it on the server, watch the logs like a coach watches form, and wake up at 3AM before your users do.", tags: "Docker, Nginx, Linux, GitHub Actions" }
    ],
    technologies: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Celery", "JavaScript", "Vue", "GSAP", "Tailwind", "Docker", "Nginx", "WordPress", "WooCommerce", "PHP", "Linux"],
    projects: [
        { category: "development", name: "HELIOS ANALYTICS", href: "", image: "https://picsum.photos/seed/helios-dashboard/1200/800.jpg", bg_image: "https://picsum.photos/seed/helios-bg/1600/900.jpg", technologies: ["Django", "DRF", "Celery", "PostgreSQL", "Redis"] },
        { category: "development", name: "PULSE GYM CORE", href: "https://github.com/soheil-ahmadi", image: "https://picsum.photos/seed/pulse-gym/1200/800.jpg", bg_image: "https://picsum.photos/seed/pulse-bg/1600/900.jpg", technologies: ["Django", "Vue", "JWT", "Docker"] },
        { category: "development", name: "VAKHT SCHEDULING API", href: "", image: "https://picsum.photos/seed/vakht-api/1200/800.jpg", bg_image: "", technologies: ["Django", "DRF", "PostgreSQL", "Redis"] },
        { category: "development", name: "LEDGER INVENTORY", href: "", image: "https://picsum.photos/seed/ledger-stock/1200/800.jpg", bg_image: "", technologies: ["Django", "Celery", "ReportLab", "PostgreSQL"] },
        { category: "wordpress", name: "CAFE NOIR — SHOP", href: "", image: "https://picsum.photos/seed/cafe-noir/1200/800.jpg", bg_image: "https://picsum.photos/seed/cafe-bg/1600/900.jpg", technologies: ["WooCommerce", "ACF", "Custom Theme"] },
        { category: "wordpress", name: "CLINIC AVA", href: "", image: "https://picsum.photos/seed/clinic-ava/1200/800.jpg", bg_image: "", technologies: ["Custom Theme", "ACF", "SEO"] },
        { category: "wordpress", name: "STUDIO FRAME", href: "https://www.behance.net/soheil-ahmadi", image: "https://picsum.photos/seed/studio-frame/1200/800.jpg", bg_image: "", technologies: ["Custom Theme", "GSAP", "Headless"] },
        { category: "wordpress", name: "ATR BOOKSHOP", href: "", image: "https://picsum.photos/seed/atr-books/1200/800.jpg", bg_image: "", technologies: ["WooCommerce", "Persian RTL", "Custom Theme"] },
        { category: "wordpress", name: "MOTO GARAGE", href: "", image: "https://picsum.photos/seed/moto-garage/1200/800.jpg", bg_image: "", technologies: ["Custom Theme", "ACF", "Speed Tuning"] }
    ],
    certificates: [
        { title: "Meta Back-End Developer Professional", issuer: "COURSERA — META", image: "https://picsum.photos/seed/cert-meta/900/650.jpg", verify_url: "https://www.coursera.org/professional-certificates/meta-back-end-developer" },
        { title: "CS50x — Intro to Computer Science", issuer: "HARVARD UNIVERSITY", image: "https://picsum.photos/seed/cert-cs50/900/650.jpg", verify_url: "https://cs50.harvard.edu/x/" },
        { title: "JavaScript Algorithms & Data Structures", issuer: "FREECODECAMP", image: "https://picsum.photos/seed/cert-fcc/900/650.jpg", verify_url: "https://www.freecodecamp.org/learn" },
        { title: "Django for Everybody Specialization", issuer: "COURSERA — DR. CHUCK", image: "https://picsum.photos/seed/cert-django/900/650.jpg", verify_url: "https://www.coursera.org/specializations/django" },
        { title: "WordPress Developer Essentials", issuer: "LINKEDIN LEARNING", image: "https://picsum.photos/seed/cert-wp/900/650.jpg", verify_url: "https://www.linkedin.com/learning/" }
    ]
};

/* Use injected Django data if available */
const injectedNode = document.querySelector('script#site-data[type="application/json"]');
const DATA = (injectedNode && injectedNode.textContent.trim()) ? JSON.parse(injectedNode.textContent) : SITE_DATA;
const S = DATA.settings;

/* ---------- Utilities ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const icons = () => { if (window.lucide) lucide.createIcons(); };
const YEAR = new Date().getFullYear();
document.title = `${S.hero_title} — ${S.hero_subtitle}`;

/* ╝╝╝ Render: navigation ╝╝╝ */
(function renderNav() {
    const navLinks = [
        ['#home', S.nav_home], ['#services', S.nav_services], ['#about', S.nav_about],
        ['#work', S.nav_work], ['#certificates', S.nav_certificates], ['#contact', S.nav_contact]
    ];
    const initials = S.hero_title.trim().split(/\s+/).map(w => w[0] || '').join('').toUpperCase();
    $('#navLogo').innerHTML = `${initials[0] || 'A'}<span>/</span>${initials[1] || 'K'}`;
    $('#lBrand').textContent = S.hero_title.toUpperCase();
    $('#navLinks').innerHTML = navLinks.map(([h, t]) => `<a href="${h}" data-spy="${h.slice(1)}">${esc(t)}</a>`).join('');
    const socials = DATA.social_links.map(sl => `<a href="${esc(sl.url)}" target="_blank" rel="noopener">${esc(sl.name.toUpperCase())}<i data-lucide="arrow-up-right"></i></a>`).join('');
    $('#navRight').innerHTML = `
    <a class="nav-meta" href="mailto:${esc(S.email)}">${esc(S.nav_email_label)} <i data-lucide="arrow-up-right"></i></a>
    <div class="nav-social" id="navSocial">
      <button id="nsBtn">${esc(S.nav_social_label)} <i data-lucide="chevron-down"></i></button>
      <div class="ns-panel">${socials}</div>
    </div>
    <button class="burger" id="burger" aria-label="open menu"><span></span><span></span><span></span></button>`;
    /* Mobile menu */
    $('#mmLinks').innerHTML = navLinks.map(([h, t], i) => `<a class="mm-link" style="transition-delay:${.08 + i * .06}s" href="${h}"><span class="mono">0${i + 1}</span>${esc(t)}</a>`).join('');
    $('#mmFoot').innerHTML = `
    <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>
    <span>${DATA.social_links.map(sl => `<a href="${esc(sl.url)}" target="_blank" rel="noopener">${esc(sl.name.toUpperCase())}</a>`).join(' &nbsp;/&nbsp; ')}</span>`;
})();

/* ╝╝╝ Render: HERO ╝╝╝ */
(function renderHero() {
    const parts = S.hero_title.trim().split(/\s+/);
    const l1 = parts[0] || '';
    const l2 = parts.slice(1).join(' ');
    $('#heroName').innerHTML =
        `<span class="mask"><span class="l">${esc(l1)}</span></span>` +
        (l2 ? `<span class="mask"><span class="l metal">${esc(l2)}</span></span>` : '');
    $('#heroSub').innerHTML = `<span class="o">/</span> ${esc(S.hero_subtitle)}`;
    $('#heroText').textContent = S.hero_text;
    $('#hmYear').textContent = `PORTFOLIO — ${YEAR}`;
    const techs = DATA.technologies || [];
    const stats = [
        [6, '+', 'YEARS OF CODE'],
        [DATA.projects.length, '+', 'PROJECTS SHIPPED'],
        [techs.length, '', 'TECHNOLOGIES'],
        [DATA.certificates.length, '', 'CERTIFICATES']
    ];
    $('#heroStats').innerHTML = stats.map(([v, suf, k]) => `
    <div class="stat">
      <span class="v" data-count="${v}"><span class="n">0</span>${suf ? `<em>${suf}</em>` : ''}</span>
      <span class="k">${k}</span>
    </div>`).join('');
})();

/* ╝╝╝ Render: tickers (pipe separator) ╝╝╝ */
function buildMarquee(el, raw) {
    const items = String(raw || '').split('|').map(s => s.trim()).filter(Boolean);
    if (!items.length) { el.remove(); return; }
    const seq = items.concat(items, items, items);
    const group = `<div class="mq-g">${seq.map(t => `<span class="mq-item"><span>${esc(t)}</span><i class="dsep"></i></span>`).join('')}</div>`;
    el.innerHTML = `<div class="track">${group}${group}</div>`;
}
buildMarquee($('#mq1'), S.marquee_summary_1);
buildMarquee($('#mq2'), S.marquee_summary_2);
buildMarquee($('#mq3'), S.marquee_contact);

/* ╝╝╝ Render: METHOD section (scroll-driven words) ╝╝╝ */
const stagesData = [
    { cap: 'PHASE 01 — PLAN', lines: [[S.service_sum_1, 'w']] },
    { cap: 'PHASE 02 — BUILD', lines: [[S.service_sum_2a, 'w'], [S.service_sum_2b, 'outl']] },
    { cap: 'PHASE 03 — CONNECT', lines: [[S.service_sum_3a, 'w'], [S.service_sum_3b, 'outl'], [S.service_sum_3c, 'org']] },
    { cap: 'PHASE 04 — STORE', lines: [[S.service_sum_4, 'w']] }
];
$('#stages').innerHTML = stagesData.map(st =>
    `<div class="stage">${st.lines.map(([t, c]) => `<span class="sw ${c}"><span>${esc(t)}</span></span>`).join('')}</div>`).join('');

/* ╝╝╝ Render: SERVICES ╝╝╝ */
$('#servicesTitle').textContent = S.services_title;
$('#servicesSub').textContent = S.services_subtitle;
$('#servicesText').textContent = S.services_text;
$('#serviceList').innerHTML = DATA.services.map((sv, i) => {
    const tags = String(sv.tags || '').split(',').map(t => t.trim()).filter(Boolean);
    return `<article class="service-row" data-reveal style="--d:${i * .06}s">
    <span class="s-idx">0${i + 1}</span>
    <h3 class="s-title">${esc(sv.title)}</h3>
    <div class="s-body">
      <p class="s-desc">${esc(sv.description)}</p>
      <div class="s-tags">${tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
    </div>
    <span class="s-arrow"><i data-lucide="arrow-up-right"></i></span>
  </article>`;
}).join('');
/* On mobile: tap to pin orange state */
$$('.service-row').forEach(r => r.addEventListener('click', () => {
    if (!matchMedia('(hover: none)').matches) return;
    const was = r.classList.contains('pin');
    $$('.service-row.pin').forEach(x => x.classList.remove('pin'));
    if (!was) r.classList.add('pin');
}));

/* ╝╝╝ Render: ABOUT ╝╝╝ */
$('#aboutTitle').textContent = S.about_title;
$('#aboutSub').textContent = S.about_subtitle;
$('#aboutText').textContent = S.about_text;
$('#aboutBio').innerHTML = String(S.about_bio_text || '').split(/\n+/).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('');
$('#toolbox').innerHTML = (DATA.technologies || []).map(t => `<span>${esc(t)}</span>`).join('');

/* ╝╝╝ Render: WORKS ╝╝╝ */
$('#worksTitle').textContent = S.works_title;
$('#worksSub').textContent = S.works_subtitle;
$('#worksText').textContent = S.works_text;
const devCount = DATA.projects.filter(p => p.category === 'development').length;
const wpCount = DATA.projects.filter(p => p.category === 'wordpress').length;
$('#tabDev').innerHTML = `${esc(S.tab_dev)} <span class="cnt">(${String(devCount).padStart(2, '0')})</span>`;
$('#tabWp').innerHTML = `${esc(S.tab_wp)} <span class="cnt">(${String(wpCount).padStart(2, '0')})</span>`;
$('#wpStatNum').textContent = String(wpCount).padStart(2, '0');
$('#wpStatLbl').textContent = S.wp_stat_text;

let curTab = 'development';
const workList = $('#workList'), worksBg = $('#worksBg'), worksBgImg = $('#worksBgImg');
const workCursor = $('#workCursor'), wcImg = $('#wcImg'), wcTag = $('#wcTag');

function renderWorksList() {
    const list = DATA.projects.map((p, i) => ({ ...p, _i: i })).filter(p => p.category === curTab);
    workList.innerHTML = list.map((p, i) => {
        const chips = p.technologies.slice(0, 4).map(t => `<span>${esc(t)}</span>`).join('') +
            (p.technologies.length > 4 ? `<span>+${p.technologies.length - 4}</span>` : '');
        return `<button class="work-row" data-i="${p._i}" style="animation-delay:${i * 60}ms">
      <span class="w-idx">${String(i + 1).padStart(2, '0')}</span>
      <span class="w-name">${esc(p.name)}</span>
      <span class="w-tags">${chips}</span>
      <span class="w-arrow"><i data-lucide="arrow-up-right"></i></span>
    </button>`;
    }).join('');
    icons();
    /* Preload images for smooth preview transitions */
    list.forEach(p => [p.image, p.bg_image].filter(Boolean).forEach(u => { const im = new Image(); im.src = u; }));
    bindWorkRows();
}
function bindWorkRows() {
    $$('.work-row', workList).forEach(row => {
        const p = DATA.projects[+row.dataset.i];
        row.addEventListener('mouseenter', () => {
            setWorksBg(p);
            if (matchMedia('(pointer:fine)').matches && innerWidth > 900) {
                wcImg.src = p.image; wcImg.alt = p.name;
                wcTag.textContent = p.href ? 'VIEW PROJECT' : 'VIEW CASE';
                workCursor.classList.add('show');
            }
        });
        row.addEventListener('click', () => openProjectModal(p));
    });
    workList.addEventListener('mouseleave', () => {
        worksBg.style.opacity = 0;
        workCursor.classList.remove('show');
    });
}
function setWorksBg(p) {
    const src = p.bg_image || p.image;
    if (worksBgImg.getAttribute('src') !== src) worksBgImg.src = src;
    worksBg.style.opacity = 1;
}
$$('.tab').forEach(t => t.addEventListener('click', () => {
    if (t.dataset.tab === curTab) return;
    curTab = t.dataset.tab;
    $$('.tab').forEach(x => x.classList.toggle('active', x === t));
    renderWorksList();
}));
renderWorksList();

/* Smooth preview card follow + speed-based rotation */
let wcX = 0, wcY = 0, wcTX = 0, wcTY = 0, wcRot = 0;
$('#work').addEventListener('mousemove', e => { wcTX = e.clientX; wcTY = e.clientY; });

/* ╝╝╝ Render: CERTIFICATES ╝╝╝ */
$('#certTitle').textContent = S.certificates_title;
$('#certSub').textContent = S.certificates_subtitle;
$('#certText').textContent = S.certificates_text;
$('#certList').innerHTML = DATA.certificates.map((c, i) => `
  <article class="cert-row" data-reveal style="--d:${i * .05}s" data-i="${i}" tabindex="0">
    <span class="c-idx">${String(i + 1).padStart(2, '0')}</span>
    <div class="c-main">
      <h3 class="c-title">${esc(c.title)}</h3>
      <div class="c-issuer">${esc(c.issuer)}</div>
    </div>
    ${c.verify_url
        ? `<a class="c-verify" href="${esc(c.verify_url)}" target="_blank" rel="noopener"><i data-lucide="badge-check"></i>${esc(S.cert_verify_label)}</a>`
        : `<span class="c-verify"><i data-lucide="image"></i>VIEW</span>`}
  </article>`).join('');
function setCertPreview(i) {
    const c = DATA.certificates[i];
    $('#cpImg').src = c.image; $('#cpImg').alt = S.cert_image_alt;
    $('#cpTitle').textContent = `${c.issuer} — ${String(i + 1).padStart(2, '0')}`;
    $$('.cert-row').forEach((r, j) => r.classList.toggle('on', j === i));
}
$$('.cert-row').forEach((row, i) => {
    row.addEventListener('mouseenter', () => setCertPreview(i));
    row.addEventListener('click', e => { if (e.target.closest('.c-verify')) return; openCertModal(i); });
    row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCertModal(i); } });
});
setCertPreview(0);

/* ╝╝╝ Render: ETHOS (quote — user HTML preserved) ╝╝╝ */
(function renderQuote() {
    const lines = String(S.contact_summary_quote || '').split(/<br\s*\/?>/i).map(s => s.trim()).filter(Boolean);
    $('#quoteLines').innerHTML = lines.map((l, i) =>
        `<div class="q-line"><span style="transition-delay:${.1 + i * .13}s">${l}</span></div>`).join('');
})();

/* ╝╝╝ Render: CONTACT ╝╝╝ */
$('#contactTitle').textContent = S.contact_title;
$('#contactSub').textContent = S.contact_subtitle;
$('#contactText').textContent = S.contact_text;
$('#lblEmail').textContent = S.contact_email_label;
$('#lblPhone').textContent = S.contact_phone_label;
$('#lblSocial').textContent = S.contact_social_label;
$('#emailTxt').textContent = S.email;
$('#emailLink').href = `mailto:${S.email}`;
$('#phoneTxt').textContent = S.phone;
$('#phoneLink').href = `tel:${S.phone.replace(/[^+\d]/g, '')}`;
$('#ctaBig').href = `mailto:${S.email}?subject=${encodeURIComponent('Project Inquiry — via portfolio')}&body=${encodeURIComponent('Hi Soheil,\n\nProject:\nDeadline:\nBudget:\n\n—')}`;
const iconFor = n => {
    n = (n || '').toLowerCase();
    return n.includes('github') ? 'github' : n.includes('linkedin') ? 'linkedin' : n.includes('telegram') ? 'send' : n.includes('instagram') ? 'instagram' : 'link';
};
$('#socialList').innerHTML = DATA.social_links.map(sl => `
  <a class="social-row" href="${esc(sl.url)}" target="_blank" rel="noopener">
    <i data-lucide="${iconFor(sl.name)}"></i>
    <span class="sn">${esc(sl.name.toUpperCase())}</span>
    <i data-lucide="arrow-up-right" class="arr"></i>
  </a>`).join('');
$('#footBrand').textContent = `© ${YEAR} — ${S.hero_title.toUpperCase()}`;

/* ---------- Tehran local time ---------- */
function tick() {
    try {
        const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        $('#localTime').textContent = `TEHRAN — ${f.format(new Date())} / GMT+3:30`;
    } catch (e) { $('#localTime').textContent = ''; }
}
setInterval(tick, 1000); tick();

/* ╝╝╝ Loader ╝╝╝ */
(function loader() {
    const num = $('#loadNum'), bar = $('#loadBar'), t0 = performance.now(), dur = 1300;
    function step(t) {
        const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        num.textContent = Math.round(e * 100); bar.style.width = (e * 100) + '%';
        if (p < 1) requestAnimationFrame(step); else finish();
    }
    function finish() {
        setTimeout(() => {
            $('#loader').classList.add('done');
            document.body.classList.remove('loading');
            document.body.classList.add('ready');
            startCounters();
            setTimeout(() => $('#loader').remove(), 900);
        }, 150);
    }
    requestAnimationFrame(step);
})();

/* Stat counters */
function startCounters() {
    $$('.stat .v').forEach(el => {
        const target = +el.dataset.count, n = el.querySelector('.n'), t0 = performance.now();
        (function f(t) {
            const p = Math.min(1, (t - t0) / 1400), e = 1 - Math.pow(1 - p, 3);
            n.textContent = Math.round(e * target);
            if (p < 1) requestAnimationFrame(f);
        })(t0);
    });
}

/* ╝╝╝ Scroll reveal ╝╝╝ */
const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: '0px 0px -8% 0px' });
$$('[data-reveal]').forEach(el => io.observe(el));

/* Quote: line-by-line entrance */
const ethIO = new IntersectionObserver(es => {
    if (es[0].isIntersecting) { $('#ethos').classList.add('in'); ethIO.disconnect(); }
}, { threshold: .35 });
ethIO.observe($('#ethos'));

/* ╝╝╝ Scrollspy + nav behavior + progress bar ╝╝╝ */
const nav = $('#nav'), progressBar = $('#scrollProgress');
let lastY = 0;
const spyIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) $$('#navLinks a').forEach(a => a.classList.toggle('active', a.dataset.spy === e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
['home', 'services', 'about', 'work', 'certificates', 'contact'].forEach(id => { const s = document.getElementById(id); if (s) spyIO.observe(s); });

addEventListener('scroll', () => {
    const y = scrollY;
    nav.classList.toggle('solid', y > 40);
    if (y > 500 && y > lastY + 6) nav.classList.add('hide');
    else if (y < lastY - 6) nav.classList.remove('hide');
    lastY = y;
    const h = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.width = (h > 0 ? (y / h * 100) : 0) + '%';
    scrubUpdate();
}, { passive: true });

/* ╝╝╝ METHOD section scroll logic ╝╝╝ */
const methodSec = $('#method');
let curStage = -1;
function setStage(i) {
    $$('.stage').forEach((st, j) => st.classList.toggle('on', j === i));
    $$('.scrub-rail .tick').forEach((t, j) => t.classList.toggle('on', j <= i));
    $('#scrubNum').textContent = String(i + 1).padStart(2, '0');
    $('#scrubPhase').textContent = stagesData[i].cap;
    $('#scrubIdx').textContent = String(i + 1).padStart(2, '0');
}
function scrubUpdate() {
    const total = methodSec.offsetHeight - innerHeight;
    if (total <= 0) return;
    const p = Math.min(1, Math.max(0, -methodSec.getBoundingClientRect().top / total));
    const idx = Math.min(stagesData.length - 1, Math.floor(p * stagesData.length));
    if (idx !== curStage) { curStage = idx; setStage(idx); }
    $('#railFill').style.height = (p * 100) + '%';
    $('#scrubBar').style.width = (p * 100) + '%';
}
setStage(0); curStage = 0;
addEventListener('resize', scrubUpdate);

/* ╝╝╝ Modal ╝╝╝ */
const modal = $('#modal'), mBody = $('#mBody');
function openModal(html) {
    mBody.innerHTML = html;
    modal.classList.add('open');
    document.body.classList.add('lock');
    icons();
}
function closeModal() { modal.classList.remove('open'); document.body.classList.remove('lock'); }
$('#mClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target.classList.contains('m-overlay')) closeModal(); });
addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function openProjectModal(p) {
    const chips = p.technologies.map(t => `<span>${esc(t)}</span>`).join('');
    const cat = p.category === 'development' ? S.tab_dev : S.tab_wp;
    openModal(`
    <div class="hazard" aria-hidden="true"></div>
    <div class="m-img brk"><img src="${esc(p.image)}" alt="${esc(p.name)}"></div>
    <div class="m-body">
      <div class="m-meta"><span class="o">${esc(cat.toUpperCase())}</span><span>${p.technologies.length} TECH</span></div>
      <h3 class="m-title">${esc(p.name)}</h3>
      <div class="m-tech">${chips}</div>
      <div class="m-actions">
        ${p.href
            ? `<a class="btn btn-primary" href="${esc(p.href)}" target="_blank" rel="noopener">VISIT PROJECT <i data-lucide="arrow-up-right"></i></a>`
            : `<span class="m-note">PRIVATE CLIENT BUILD — FULL CASE STUDY ON REQUEST</span>`}
      </div>
    </div>`);
}
function openCertModal(i) {
    const c = DATA.certificates[i];
    openModal(`
    <div class="hazard" aria-hidden="true"></div>
    <div class="m-img brk"><img src="${esc(c.image)}" alt="${esc(S.cert_image_alt)}"></div>
    <div class="m-body">
      <div class="m-meta"><span class="o">${esc(c.issuer)}</span><span>DOC — ${String(i + 1).padStart(2, '0')}</span></div>
      <h3 class="m-title">${esc(c.title)}</h3>
      <div class="m-actions">
        ${c.verify_url
            ? `<a class="btn btn-primary" href="${esc(c.verify_url)}" target="_blank" rel="noopener">VERIFY WITH ISSUER <i data-lucide="external-link"></i></a>`
            : `<span class="m-note">SELF-HOSTED DOCUMENT — VIEW ONLY</span>`}
      </div>
    </div>`);
}

/* ╝╝╝ Toast + email copy ╝╝╝ */
const toastEl = $('#toast'); let toastT;
function toast(msg) {
    toastEl.querySelector('span').textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove('show'), 2400);
}
async function copyText(t) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(t);
    return new Promise(res => {
        const ta = document.createElement('textarea'); ta.value = t;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); ta.remove(); res();
    });
}
$('#copyEmail').addEventListener('click', async () => {
    await copyText(S.email);
    toast('EMAIL COPIED TO CLIPBOARD');
    const b = $('#copyEmail');
    b.innerHTML = '<i data-lucide="check"></i>'; icons();
    setTimeout(() => { b.innerHTML = '<i data-lucide="copy"></i>'; icons(); }, 1600);
});

/* ╝╝╝ Mobile menu ╝╝╝ */
const mm = $('#mobileMenu');
function mmToggle(open) {
    mm.classList.toggle('open', open);
    document.body.classList.toggle('lock', open);
}
$('#burger')?.addEventListener('click', () => mmToggle(true));
$('#mmClose').addEventListener('click', () => mmToggle(false));
$$('#mmLinks a').forEach(a => a.addEventListener('click', () => mmToggle(false)));

/* Social dropdown in nav */
document.addEventListener('click', e => {
    const ns = $('#navSocial'); if (!ns) return;
    if (e.target.closest('#nsBtn')) ns.classList.toggle('open');
    else if (!e.target.closest('.ns-panel')) ns.classList.remove('open');
});

/* ╝╝╝ Magnetic buttons ╝╝╝ */
$$('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * .25, y = (e.clientY - r.top - r.height / 2) * .35;
        btn.style.transform = `translate(${x}px,${y}px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = '');
});
$('#toTop').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* ╝╝╝ Custom cursor + shared rAF loop ╝╝╝ */
const finePointer = matchMedia('(pointer:fine)').matches;
const dot = $('#cursorDot'), ring = $('#cursorRing');
let cx = innerWidth / 2, cy = innerHeight / 2, rx = cx, ry = cy;
if (finePointer) {
    addEventListener('mousemove', e => {
        cx = e.clientX; cy = e.clientY;
        dot.style.transform = `translate(${cx}px,${cy}px)`;
    });
    document.addEventListener('mouseover', e => {
        ring.classList.toggle('hot', !!e.target.closest('a,button,[data-hover],.cert-row'));
    });
    document.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = 1; ring.style.opacity = 1; });
}
(function raf() {
    requestAnimationFrame(raf);
    if (finePointer) {
        rx += (cx - rx) * .18; ry += (cy - ry) * .18;
        ring.style.transform = `translate(${rx}px,${ry}px)`;
    }
    /* Project preview card */
    if (workCursor.classList.contains('show')) {
        wcX += (wcTX - wcX) * .14; wcY += (wcTY - wcY) * .14;
        const rt = Math.max(-9, Math.min(9, (wcTX - wcX) * .08));
        wcRot += (rt - wcRot) * .1;
        workCursor.style.transform = `translate3d(${wcX}px,${wcY}px,0) rotate(${wcRot}deg)`;
    }
})();

/* --- Audio � use hero_audio if set, else neon synth via WebAudio --- */
let audioOn = false, synth = null, htmlAudio = null;
$('#soundBtn').addEventListener('click', async () => {
    audioOn = !audioOn;
    const btn = $('#soundBtn');
    btn.classList.toggle('on', audioOn);
    $('#soundLbl').textContent = audioOn ? 'SOUND — ON' : 'SOUND — OFF';
    if (S.hero_audio) {
        htmlAudio = htmlAudio || (() => { const a = new Audio(S.hero_audio); a.loop = true; a.volume = .55; return a; })();
        if (audioOn) { try { await htmlAudio.play(); } catch (e) { } } else htmlAudio.pause();
    } else {
        synth = synth || buildSynth();
        synth.toggle(audioOn);
    }
});
function buildSynth() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    /* Sub bass — page heartbeat */
    const dr = ctx.createOscillator(); dr.type = 'sine'; dr.frequency.value = 42;
    const drG = ctx.createGain(); drG.gain.value = .06; dr.connect(drG); drG.connect(master); dr.start();
    /* Filtered brown noise — breathing texture */
    const len = ctx.sampleRate * 2, nb = ctx.createBuffer(1, len, ctx.sampleRate), d = nb.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = (last + .02 * w) / 1.02; d[i] = last * 3; }
    const ns = ctx.createBufferSource(); ns.buffer = nb; ns.loop = true;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 240;
    const ng = ctx.createGain(); ng.gain.value = .35;
    ns.connect(lp); lp.connect(ng); ng.connect(master); ns.start();
    /* Repeating kick — workout tempo */
    const kick = () => {
        const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(36, t + .22);
        g.gain.setValueAtTime(.55, t); g.gain.exponentialRampToValueAtTime(.001, t + .35);
        o.connect(g); g.connect(master); o.start(t); o.stop(t + .4);
    };
    setInterval(kick, 640);
    return {
        toggle(on) {
            ctx.resume();
            master.gain.cancelScheduledValues(ctx.currentTime);
            master.gain.linearRampToValueAtTime(on ? .7 : 0, ctx.currentTime + .35);
        }
    };
}

icons();
