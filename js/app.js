const SEED_EXHIBITS = [
  {
    id: "s1", icon: "🐚", name: "Great Barrier Reef", era: "~2050 projection",
    cat: "ocean", status: "critical",
    shortDesc: "The largest living structure visible from space.",
    longDesc: "Stretching 2,300 kilometres along the Australian coast, the reef once sheltered over 1,500 species of fish and 4,000 types of mollusc. Bleaching events, driven by waters growing warmer each decade, have stripped entire regions of their colour and life. Scientists who have studied it for a lifetime now speak of it in the past tense.",
    tags: ["coral","biodiversity","1,500 species"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Great_Barrier_Reef",
    messages: [
      { author: "M. Torres", text: "I dove here years ago. Even then, the silence underwater was wrong — too few fish, too much white." }
    ]
  },
  {
    id: "s2", icon: "❄️", name: "Arctic summer ice", era: "~2035 projection",
    cat: "ocean", status: "critical",
    shortDesc: "The mirror that kept our planet from overheating.",
    longDesc: "For millennia, Arctic sea ice acted as a planetary thermostat — its white surface reflecting solar energy back into space. Each summer that passes, less of it returns. The first fully ice-free Arctic summer is now projected within a decade, a threshold never crossed in the 800,000 years of ice cores we have learned to read.",
    tags: ["arctic","albedo","climate feedback"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Arctic_sea_ice_decline",
    messages: []
  },
  {
    id: "s3", icon: "🦋", name: "Monarch migration", era: "~2060 projection",
    cat: "sky", status: "endangered",
    shortDesc: "Billions of wings navigating by starlight and magnetic fields.",
    longDesc: "Every autumn, hundreds of millions of monarch butterflies departed Canada and the northern United States, flying 4,500 kilometres to a single mountain forest in Michoacán, Mexico — guided by a magnetic compass and the angle of the sun encoded in their genes. Their population has declined by 80% since 1980. The knowledge of the route dies with each generation that does not complete it.",
    tags: ["insect","migration","Mexico"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Monarch_butterfly_migration",
    messages: [
      { author: "R. Okafor", text: "My grandmother called them 'traveling flowers.' I have never seen a migration." }
    ]
  },
  {
    id: "s4", icon: "🌫️", name: "Truly dark skies", era: "Lost: 1990s",
    cat: "sensation", status: "lost",
    shortDesc: "The Milky Way, as every human saw it for 300,000 years.",
    longDesc: "For the entirety of human existence until roughly 1900, the Milky Way arched across every night sky on Earth. Every religion, every navigational system, every creation myth was written beneath it. Today, one third of humanity — and 80% of North Americans — cannot see it from where they sleep. The sky that shaped our species has been erased by the glow of our own making.",
    tags: ["light pollution","starlight","urban sprawl"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Light_pollution",
    messages: [
      { author: "A. Lindqvist", text: "I saw the full Milky Way once, in the Atacama. I wept without meaning to." }
    ]
  },
  {
    id: "s5", icon: "🐘", name: "African forest elephant", era: "~2040 projection",
    cat: "land", status: "critical",
    shortDesc: "The gardeners who shaped the Congo for ten million years.",
    longDesc: "Smaller and more elusive than their savanna cousins, forest elephants spent millennia dispersing seeds, carving trails, and knocking down trees to let light reach the forest floor — engineering the entire structure of Central Africa's rainforest. Poaching reduced their population by 86% in just 31 years. The forest they tended is already reshaping itself into something their absence will define.",
    tags: ["Congo","keystone species","poaching"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/African_forest_elephant",
    messages: []
  },
  {
    id: "s6", icon: "🎵", name: "The dawn chorus", era: "Fading: present",
    cat: "sensation", status: "endangered",
    shortDesc: "The hour before sunrise when every bird sang at once.",
    longDesc: "The dawn chorus — that layered explosion of birdsong in the thirty minutes before sunrise — has grown measurably quieter within a single human lifetime. North America alone has lost three billion birds since 1970. The specific acoustic texture of a spring morning that your grandparents knew, that particular fullness of sound — does not exist in the same form today. It is leaving slowly, in the way that light leaves a room.",
    tags: ["birdsong","soundscape","3 billion birds lost"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Dawn_chorus_(birds)",
    messages: [
      { author: "P. Sharma", text: "My father used to wake at 5am just to listen. He said it was better than any music." }
    ]
  },
  {
    id: "s7", icon: "🌊", name: "Vaquita porpoise", era: "Lost: ~2026",
    cat: "ocean", status: "lost",
    shortDesc: "The smallest cetacean — fewer individuals than a family.",
    longDesc: "Native only to a small region of the northern Gulf of California, the vaquita is the world's most critically endangered marine mammal, and almost certainly its most recent cetacean extinction. Fewer than ten are believed to survive. They die as bycatch in gillnets set for the totoaba fish, whose swim bladder is smuggled to China for supposed medicinal value. No recovery effort has succeeded. The species is functionally gone.",
    tags: ["Mexico","porpoise","bycatch"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Vaquita",
    messages: []
  },
  {
    id: "s8", icon: "🌿", name: "Old-growth silence", era: "Lost: ongoing",
    cat: "sensation", status: "lost",
    shortDesc: "The particular quiet found only inside ancient forests.",
    longDesc: "There is a quality of silence in an old-growth forest that cannot be replicated - a density of life so complete that it absorbs sound, returns it changed, holds centuries of growth in the texture of the air. Less than 5% of the world's original old-growth forests remain unlogged. The rest have been replaced with plantations, farms, and roads. You cannot hear what once lived there.",
    tags: ["old-growth","acoustic ecology","5% remaining"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Old-growth_forest",
    messages: []
  },
  {
    id: "s9", icon: "🐢", name: "Yangtze giant softshell turtle", era: "Lost: ~2025",
    cat: "land", status: "lost",
    shortDesc: "Only three individuals remain on Earth.",
    longDesc: "Once common in China's Yangtze River and Vietnam's lakes, the world's largest freshwater turtle now exists only as three known individuals - two in Chinese zoos and one wild turtle in a Vietnamese lake. The last confirmed female died in 2019 during an artificial insemination attempt. Without a viable pair, the species is functionally extinct, a slow death measured in decades rather than years.",
    tags: ["freshwater","China","3 remaining"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Yangtze_giant_softshell_turtle",
    messages: []
  },
  {
    id: "s10", icon: "🌿", name: "Saint Helena olive", era: "Lost: 2003",
    cat: "land", status: "lost",
    shortDesc: "The last wild tree died alone on a cliff.",
    longDesc: "Endemic to the remote island of Saint Helena in the South Atlantic, this small flowering tree was down to one known wild specimen by 1994. Despite propagation attempts, all cultivated descendants failed to survive. In 2003, the last wild tree — growing on a steep cliff face — died of unknown causes. No living individual remains anywhere. The species exists now only in herbarium sheets and memory.",
    tags: ["plant","island endemic","2003"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Nesiota_elliptica",
    messages: []
  },
  {
    id: "s11", icon: "🦋", name: "Xerces blue butterfly", era: "Lost: 1941",
    cat: "sky", status: "lost",
    shortDesc: "The first American butterfly lost to urban sprawl.",
    longDesc: "Once abundant in the sand dunes of San Francisco's Golden Gate headlands, the Xerces blue vanished as its habitat was consumed by city expansion. The last specimens were collected in 1941. It became the first butterfly in the United States driven to extinction by human development, not by pesticides or climate change, but simply by having nowhere left to live.",
    tags: ["insect","California","urban extinction"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Xerces_blue",
    messages: []
  },
  {
    id: "s12", icon: "🍄", name: "Lost fungal lineages", era: "Fading: present",
    cat: "land", status: "endangered",
    shortDesc: "The invisible network that forests breathe through.",
    longDesc: "Fungi are the least-documented kingdom of life, over 90% of species remain undescribed. Yet each year, old-growth forests are logged before their mycorrhizal networks are even named. Unlike animals, a fungus can vanish without a single photograph, an extinction that leaves no trace in the public record. Scientists estimate dozens of fungal species are lost annually, unseen and unmourned.",
    tags: ["fungus","mycorrhizal","undocumented"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mycorrhizal_network",
    messages: []
  },
  {
    id: "s13", icon: "🏜️", name: "The Aral Sea", era: "Lost: 2014",
    cat: "land", status: "lost",
    shortDesc: "A sea drained in one generation.",
    longDesc: "Once the world's fourth-largest lake, the Aral Sea has shrunk to less than 10% of its original volume, a man-made ecological catastrophe executed in living memory. Soviet irrigation projects diverted its two feeder rivers to cotton fields. By 2014, the eastern basin had completely dried. Where fishing boats once sailed, there is now a desert littered with rusted hulls and salt storms that poison the lungs of children.",
    tags: ["central asia","freshwater","desertification"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Aral_Sea",
    messages: []
  },
  {
    id: "s14", icon: "🐸", name: "Golden toad", era: "Lost: 1989",
    cat: "land", status: "lost",
    shortDesc: "The first extinction driven by climate change.",
    longDesc: "Found only in the Monteverde Cloud Forest of Costa Rica, the brilliant golden toad was last seen in 1989. Scientists now believe that rising temperatures allowed a lethal chytrid fungus to flourish at previously inhospitable elevations. The golden toad became the first species whose extinction was directly attributed to global climate change — a herald of what was to come.",
    tags: ["amphibian","Costa Rica","chytrid"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Golden_toad",
    messages: []
  },
  {
    id: "s15", icon: "🐅", name: "Sumatran tiger", era: "Lost: ~2032",
    cat: "land", status: "critical",
    shortDesc: "The last tiger of Sunda — fewer than 400 remain.",
    longDesc: "The smallest surviving tiger subspecies, confined to the remaining forests of Sumatra. Palm oil plantations and poaching have reduced their habitat by two-thirds since 1985. Each remaining individual is mapped, named, and watched by rangers who know that when the last one falls, an apex predator that shaped Sundanese forests for a million years will vanish forever.",
    tags: ["Sumatra","apex predator","<400"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Sumatran_tiger",
    messages: []
  },
  {
    id: "s16", icon: "🧊", name: "Mountain glaciers of the tropics", era: "Lost: ~2045",
    cat: "sensation", status: "critical",
    shortDesc: "Ice that has stood for 18,000 years — now melting.",
    longDesc: "The Quelccaya Ice Cap in Peru, the largest tropical ice mass on Earth, has lost 40% of its area since 1970. These glaciers are not just water, they are time capsules, preserving millennia of atmospheric history. Unlike polar ice, tropical glaciers sit at the edge of viability. Once gone, they will not return in any human timeframe. The last generation to see them is alive today.",
    tags: ["Andes","cryosphere","water source"], aiGenerated: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Quelccaya_Ice_Cap",
    messages: []
  }
];

// ---------- GLOBAL STATE ----------
let exhibits = [];
let activeFilter = "all";
let guestbookMessages = {};

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// ---------- LOCALSTORAGE ----------
function saveToLocalStorage() {
  const dataToSave = {
    exhibits: exhibits.map(e => ({
      ...e,
      messages: guestbookMessages[e.id] || []
    })),
    guestbookMessages: guestbookMessages
  };
  localStorage.setItem('museum_exhibits', JSON.stringify(dataToSave));
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem('museum_exhibits');
  if (!saved) return false;
  try {
    const data = JSON.parse(saved);
    if (data.exhibits && data.exhibits.length > 0) {
      exhibits = data.exhibits;
      guestbookMessages = data.guestbookMessages || {};
      exhibits.forEach(e => {
        if (!guestbookMessages[e.id]) {
          guestbookMessages[e.id] = e.messages || [];
        }
      });
      return true;
    }
  } catch(e) { console.warn("Failed to load from localStorage", e); }
  return false;
}

if (!loadFromLocalStorage()) {
  exhibits = JSON.parse(JSON.stringify(SEED_EXHIBITS));
  guestbookMessages = {};
  SEED_EXHIBITS.forEach(e => {
    guestbookMessages[e.id] = e.messages ? [...e.messages] : [];
  });
}

// ---------- HELPERS ----------
function getStatusClass(s) {
  return s === "critical" ? "critical" : s === "lost" ? "lost" : "endangered";
}

function getStatusLabel(s) {
  return s === "critical" ? "Critical" : s === "lost" ? "Gone" : "Endangered";
}

function wikiLink(url) {
  if (!url) return '';
  return `<a class="wiki-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">↗ Wikipedia</a>`;
}

function updateStats() {
  document.getElementById("stat-total").textContent = exhibits.length;
  document.getElementById("stat-critical").textContent = exhibits.filter(e => e.status === "critical").length;
  document.getElementById("stat-lost").textContent = exhibits.filter(e => e.status === "lost").length;
  document.getElementById("stat-ai").textContent = exhibits.filter(e => e.aiGenerated).length;
}

// ---------- GALLERY ----------
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  const filtered = activeFilter === "all" ? exhibits
    : activeFilter === "visitor" ? exhibits.filter(e => e.aiGenerated)
    : exhibits.filter(e => e.cat === activeFilter);

  grid.innerHTML = "";
  filtered.forEach(e => {
    const card = document.createElement("div");
    card.className = "exhibit-card" + (e.isNew ? " is-new" : "");
    card.innerHTML = `
      ${e.aiGenerated ? '<span class="ai-badge">Visitor submission</span>' : ''}
      <span class="exhibit-icon">${escapeHtml(e.icon)}</span>
      <div class="exhibit-status">
        <div class="status-dot ${getStatusClass(e.status)}"></div>
        <span class="status-text ${getStatusClass(e.status)}">${getStatusLabel(e.status)}</span>
      </div>
      <h3 class="exhibit-name">${escapeHtml(e.name)}</h3>
      <p class="exhibit-era">${escapeHtml(e.era)}</p>
      <p class="exhibit-desc">${escapeHtml(e.shortDesc)}</p>
      <div class="exhibit-tags">${e.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
      ${wikiLink(e.wikipediaUrl)}
    `;
    card.addEventListener("click", (ev) => {
      if (ev.target.closest('.wiki-link')) return;
      openExhibit(e.id);
    });
    grid.appendChild(card);
    if (e.isNew) setTimeout(() => { e.isNew = false; saveToLocalStorage(); }, 700);
  });

  updateStats();
}

// ---------- LIGHTBOX ----------
function openExhibit(id) {
  const e = exhibits.find(x => x.id === id);
  if (!e) return;
  const msgs = guestbookMessages[id] || [];

  const inner = document.getElementById("lightbox-inner");
  inner.innerHTML = `
    <div class="lightbox-header">
      <div class="lightbox-icon">${escapeHtml(e.icon)}</div>
      <div class="lightbox-meta">
        <div class="lightbox-status">
          <div class="status-dot ${getStatusClass(e.status)}"></div>
          <span class="status-text ${getStatusClass(e.status)}">${getStatusLabel(e.status)}</span>
          ${e.aiGenerated ? '<span class="ai-badge" style="position:static;margin-left:8px;">Visitor submission</span>' : ''}
        </div>
        <h2 class="lightbox-title">${escapeHtml(e.name)}</h2>
        <p class="lightbox-era">${escapeHtml(e.era)}</p>
      </div>
    </div>
    <div class="lightbox-body">
      <p class="lightbox-long">${escapeHtml(e.longDesc)}</p>
      <div class="lightbox-tags">${e.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
      ${wikiLink(e.wikipediaUrl)}
    </div>
    <div class="guestbook">
      <p class="guestbook-title">Leave a message for those who come after</p>
      <p class="guestbook-subtitle">A permanent record · visible to all visitors</p>
      <div class="guestbook-compose">
        <input class="guestbook-input" id="gb-input-${id}" placeholder="Write something worth preserving…" />
        <button class="guestbook-submit" onclick="submitMessage('${id}')">Inscribe</button>
      </div>
      <div class="guestbook-messages" id="gb-msgs-${id}">
        ${msgs.map(m => `
          <div class="guestbook-msg">
            <p class="msg-text">"${escapeHtml(m.text)}"</p>
            <p class="msg-author">— ${escapeHtml(m.author)}</p>
          </div>
        `).join('')}
        ${msgs.length === 0 ? '<p style="font-family:\'Cormorant Garamond\',serif;font-style:italic;color:var(--ash);font-size:0.95rem;">Be the first to leave a message.</p>' : ''}
      </div>
    </div>
  `;

  const overlay = document.getElementById("lightbox-overlay");
  overlay.classList.add("open");
  overlay.scrollTop = 0;
  if (window.setCuratorContext) window.setCuratorContext(e.name);
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    document.getElementById("lightbox").classList.add("visible");
  }, 50);
}

function submitMessage(id) {
  const input = document.getElementById(`gb-input-${id}`);
  const text = input.value.trim();
  if (!text) return;
  const msg = { author: "A visitor", text };
  if (!guestbookMessages[id]) guestbookMessages[id] = [];
  guestbookMessages[id].unshift(msg);
  input.value = "";
  saveToLocalStorage();
  const container = document.getElementById(`gb-msgs-${id}`);
  const div = document.createElement("div");
  div.className = "guestbook-msg";
  div.style.animation = "card-appear 0.4s ease";
  div.innerHTML = `<p class="msg-text">"${escapeHtml(msg.text)}"</p><p class="msg-author">— ${escapeHtml(msg.author)}</p>`;
  container.prepend(div);
  const empty = container.querySelector('p[style*="italic"]');
  if (empty) empty.remove();
}

function closeLightbox(event) {
  if (event.target === document.getElementById("lightbox-overlay")) closeLightboxBtn();
}

function closeLightboxBtn() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("visible");
  setTimeout(() => {
    document.getElementById("lightbox-overlay").classList.remove("open");
    document.body.style.overflow = "";
    if (window.setCuratorContext) window.setCuratorContext(null);
  }, 300);
}

// ---------- FILTERS ----------
document.getElementById("filter-pills").addEventListener("click", e => {
  const pill = e.target.closest(".filter-pill");
  if (!pill) return;
  activeFilter = pill.dataset.cat;
  document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
  pill.classList.add("active");
  renderGallery();
});

function showError(msg) {
  const el = document.getElementById("error-msg");
  el.textContent = msg;
  el.classList.add("visible");
}

// ---------- NOMINATION ----------
async function submitNomination() {
  const input = document.getElementById("nominate-input");
  const btn = document.getElementById("nominate-btn");
  const genIndicator = document.getElementById("gen-indicator");
  const errorMsg = document.getElementById("error-msg");
  const nomination = input.value.trim();

  errorMsg.classList.remove("visible");

  if (!nomination) {
    showError("Please name something worth preserving.");
    return;
  }

  btn.disabled = true;
  genIndicator.classList.add("visible");

  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nomination })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "API error");

    const exhibit = data.exhibit;

    const newExhibit = {
      id: "ai_" + Date.now(),
      icon: exhibit.icon || "🌱",
      name: exhibit.name || nomination.substring(0, 50),
      era: exhibit.era || "Present",
      cat: ["ocean","land","sky","sensation"].includes(exhibit.cat) ? exhibit.cat : "sensation",
      status: ["critical","endangered","lost"].includes(exhibit.status) ? exhibit.status : "endangered",
      shortDesc: exhibit.shortDesc || nomination.substring(0, 60),
      longDesc: exhibit.longDesc || "",
      tags: Array.isArray(exhibit.tags) ? exhibit.tags.slice(0, 3) : [],
      wikipediaUrl: exhibit.wikipediaUrl || null,
      aiGenerated: true,
      isNew: true,
      messages: []
    };

    guestbookMessages[newExhibit.id] = [];
    exhibits.unshift(newExhibit);
    saveToLocalStorage();
    input.value = "";

    activeFilter = "all";
    document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
    document.querySelector(".filter-pill[data-cat='all']").classList.add("active");

    renderGallery();
    document.querySelector(".gallery-section").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => openExhibit(newExhibit.id), 800);

  } catch (err) {
    showError("The curator could not compose this exhibit: " + err.message);
  } finally {
    btn.disabled = false;
    genIndicator.classList.remove("visible");
  }
}

document.getElementById("nominate-input").addEventListener("keydown", e => {
  if (e.key === "Enter") submitNomination();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightboxBtn();
});

window.submitNomination = submitNomination;
window.submitMessage = submitMessage;
window.closeLightbox = closeLightbox;
window.closeLightboxBtn = closeLightboxBtn;

renderGallery();

// ---------- GSAP ----------
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.exhibit-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: 'power2.out'
  });
});

gsap.to('.ring', {
  scale: 1.05,
  opacity: 0.4,
  duration: 3,
  repeat: -1,
  yoyo: true,
  stagger: 0.3,
  ease: 'sine.inOut'
});