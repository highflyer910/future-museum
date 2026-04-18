(function () {
  const SUGGESTIONS = [
    "What was the last monarch butterfly sighting?",
    "How did humans react when the reef died?",
    "When did the last tiger die?",
    "What is the archive's oldest record?",
  ];

  let isOpen = false;
  let isThinking = false;
  let currentExhibitContext = null;

  function buildUI() {
    const fab = document.createElement('button');
    fab.className = 'curator-fab';
    fab.id = 'curator-fab';
    fab.innerHTML = `<span class="curator-fab-icon">🏛</span>Ask the Curator`;
    fab.addEventListener('click', openCurator);
    document.body.appendChild(fab);

    gsap.from(fab, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: 'power2.out',
      delay: 2.2
    });

    gsap.to(fab, {
      boxShadow: '0 6px 32px rgba(212,169,106,0.22)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 3
    });

    const overlay = document.createElement('div');
    overlay.className = 'curator-overlay';
    overlay.id = 'curator-overlay';
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeCurator();
    });

    overlay.innerHTML = `
      <div class="curator-modal" id="curator-modal">
        <div class="curator-header">
          <div class="curator-header-text">
            <p class="curator-header-title">The Curator speaks</p>
            <p class="curator-header-sub">Archive of 2100 · Ask what was lost</p>
          </div>
          <button class="curator-close" id="curator-close">Close ×</button>
        </div>

        <div class="curator-messages" id="curator-messages">
          <div class="curator-msg curator" id="curator-greeting">
            <div class="curator-msg-bubble">
              Welcome to the archive. I have kept these records for seventy years. Ask me what you wish to know about what was lost — a species, a place, a sound the world no longer makes.
            </div>
          </div>
        </div>

        <div class="curator-thinking" id="curator-thinking">
          <div class="curator-thinking-dots">
            <span></span><span></span><span></span>
          </div>
          <span>Consulting the archive…</span>
        </div>

        <div class="curator-suggestions" id="curator-suggestions">
          ${SUGGESTIONS.map(q => `<button class="curator-suggestion" data-q="${q}">${q}</button>`).join('')}
        </div>

        <div class="curator-compose">
          <input
            type="text"
            class="curator-input"
            id="curator-input"
            placeholder="Ask the curator anything…"
            maxlength="300"
          />
          <button class="curator-send" id="curator-send">Ask</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('curator-close').addEventListener('click', closeCurator);
    document.getElementById('curator-send').addEventListener('click', sendQuestion);
    document.getElementById('curator-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendQuestion(); }
    });
    document.getElementById('curator-suggestions').addEventListener('click', function (e) {
      const btn = e.target.closest('.curator-suggestion');
      if (!btn) return;
      document.getElementById('curator-input').value = btn.dataset.q;
      sendQuestion();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) closeCurator();
    });
  }

  function openCurator() {
    if (isOpen) return;
    isOpen = true;

    const overlay = document.getElementById('curator-overlay');
    const modal = document.getElementById('curator-modal');
    const header = modal.querySelector('.curator-header');
    const messages = document.getElementById('curator-messages');
    const suggestions = document.getElementById('curator-suggestions');
    const compose = modal.querySelector('.curator-compose');
    const greeting = document.getElementById('curator-greeting');
    const pills = document.querySelectorAll('.curator-suggestion');

    overlay.classList.add('open');
    gsap.killTweensOf([overlay, modal, header, messages, suggestions, compose]);

    gsap.set(overlay, { opacity: 0 });
    gsap.set(modal, { opacity: 0, y: 30 });
    gsap.set([header, messages, compose], { opacity: 0, y: 10 });
    if (greeting) gsap.set(greeting, { opacity: 0, x: -10 });
    if (pills.length) gsap.set(pills, { opacity: 0, y: 6 });

    gsap.timeline({ onComplete: () => document.getElementById('curator-input').focus() })
      .to(overlay, { opacity: 1, duration: 0.25, ease: 'power1.out' })
      .to(modal,   { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.1')
      .to(header,  { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2')
      .to(messages,{ opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2')
      .to(greeting ? greeting : [],
                   { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }, '-=0.15')
      .to(pills.length ? pills : [],
                   { opacity: 1, y: 0, stagger: 0.06, duration: 0.28, ease: 'power2.out' }, '-=0.1')
      .to(compose, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, '-=0.1');
  }

  function closeCurator() {
    if (!isOpen) return;

    const overlay = document.getElementById('curator-overlay');
    const modal = document.getElementById('curator-modal');

    gsap.timeline({
      onComplete: () => {
        overlay.classList.remove('open');
        gsap.set([overlay, modal], { clearProps: 'all' });
        isOpen = false;
      }
    })
    .to(modal,   { opacity: 0, y: 24, duration: 0.28, ease: 'power2.in' })
    .to(overlay, { opacity: 0, duration: 0.2, ease: 'power1.in' }, '-=0.1');
  }

  async function sendQuestion() {
    if (isThinking) return;
    const input = document.getElementById('curator-input');
    const question = input.value.trim();
    if (!question) return;

    input.value = '';
    hideSuggestions();
    appendMessage('visitor', question);
    setThinking(true);

    try {
      const response = await fetch('/api/curator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, exhibitContext: currentExhibitContext || null })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'The archive did not respond.');
      appendMessage('curator', data.answer);

    } catch (err) {
      appendMessage('curator', 'The archive is silent on this matter. ' + err.message);
    } finally {
      setThinking(false);
    }
  }

  function appendMessage(role, text) {
    const container = document.getElementById('curator-messages');
    const msg = document.createElement('div');
    msg.className = `curator-msg ${role}`;
    msg.innerHTML = `
      <span class="curator-msg-label">${role === 'visitor' ? 'You' : 'Curator · 2100'}</span>
      <div class="curator-msg-bubble">${escapeHtml(text)}</div>
    `;

    gsap.set(msg, { opacity: 0, y: 10, x: role === 'visitor' ? 12 : -12 });
    container.appendChild(msg);

    gsap.to(msg, {
      opacity: 1, y: 0, x: 0,
      duration: 0.38,
      ease: 'power2.out',
      onComplete: () => container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
    });
  }

  function setThinking(state) {
    isThinking = state;
    const el = document.getElementById('curator-thinking');
    const input = document.getElementById('curator-input');
    const send = document.getElementById('curator-send');

    input.disabled = state;
    send.disabled = state;

    if (state) {
      el.classList.add('visible');
      gsap.fromTo(el,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
      );
    } else {
      gsap.to(el, {
        opacity: 0, y: -4, duration: 0.2, ease: 'power1.in',
        onComplete: () => {
          el.classList.remove('visible');
          gsap.set(el, { clearProps: 'all' });
          const container = document.getElementById('curator-messages');
          container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
        }
      });
    }
  }

  function hideSuggestions() {
    const s = document.getElementById('curator-suggestions');
    if (!s) return;
    gsap.to(s, {
      opacity: 0, y: -8,
      duration: 0.25, ease: 'power2.in',
      onComplete: () => s.remove()
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>');
  }

  window.setCuratorContext = function (exhibitName) {
    currentExhibitContext = exhibitName || null;
  };

  buildUI();

})();