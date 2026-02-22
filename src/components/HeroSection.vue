<template>
  <section class="hero-section">
    <div class="hero-grid"></div>
    <div class="hero-bg-text font-syne">FS</div>

    <v-container fluid class="hero-inner pa-0">

      <!-- MOBILE: Name pinned at top always visible -->
      <div class="mobile-name-bar d-flex d-md-none font-syne">
        Sonny <span class="name-accent-inline">&nbsp;Nepomuceno</span>
      </div>

      <v-row class="hero-row ma-0 px-4 px-sm-8 px-md-10" align="center">

        <!-- RIGHT (photo) — on mobile comes first via order -->
        <v-col cols="12" md="6" :order="mdAndUp ? 2 : 1" class="hero-right pa-0">
          <div class="photo-wrap reveal">
            <div class="ring r1"></div>
            <div class="ring r2"></div>
            <img :src="photoSrc" alt="Sonny Nepomuceno" class="hero-photo" />
            <div class="float-card card-exp d-none d-sm-block">
              <div class="fc-label">Experience</div>
              <div class="fc-val font-syne">6+ Yrs</div>
            </div>
            <div class="float-card card-proj d-none d-sm-block">
              <div class="fc-label">Projects</div>
              <div class="fc-val font-syne">3+</div>
            </div>
          </div>
        </v-col>

        <!-- LEFT (text) -->
        <v-col cols="12" md="6" :order="mdAndUp ? 1 : 2" class="hero-left pa-0">
          <div class="hero-eyebrow reveal">
            <span class="eyebrow-dot"></span>
            <span class="eyebrow-text">Available for opportunities</span>
          </div>

          <!-- Desktop name — hidden on mobile (shown in sticky bar instead) -->
          <h1 class="hero-name font-syne reveal d-none d-md-block">
            Sonny<br>
            <span class="name-accent">Nepomuceno</span>
          </h1>

          <!-- Tablet name (sm only) -->
          <h1 class="hero-name hero-name--sm font-syne reveal d-none d-sm-flex d-md-none">
            Sonny <span class="name-accent-inline">&nbsp;Nepomuceno</span>
          </h1>

          <p class="hero-desc reveal">
            Full Stack Web Developer with 6+ years building production-grade systems using
            Laravel, Vue.js &amp; MySQL. I turn complex workflows into elegant, reliable software.
          </p>

          <div class="hero-ctas reveal">
            <v-btn
              href="#projects"
              :size="mdAndUp ? 'large' : 'default'"
              class="btn-primary font-syne"
              rounded="lg"
              elevation="0"
              append-icon="mdi-arrow-top-right"
            >
              View Projects
            </v-btn>
            <v-btn
              href="#contact"
              :size="mdAndUp ? 'large' : 'default'"
              variant="outlined"
              class="btn-ghost font-syne"
              rounded="lg"
              elevation="0"
            >
              Get In Touch
            </v-btn>
          </div>

          <!-- Mini stats on mobile -->
          <div class="mobile-stats d-flex d-md-none mt-6 reveal">
            <div class="mstat">
              <div class="mstat-num font-syne">6+</div>
              <div class="mstat-label">Years Exp</div>
            </div>
            <div class="mstat-divider"></div>
            <div class="mstat">
              <div class="mstat-num font-syne">3+</div>
              <div class="mstat-label">Projects</div>
            </div>
            <div class="mstat-divider"></div>
            <div class="mstat">
              <div class="mstat-num font-syne">10+</div>
              <div class="mstat-label">Technologies</div>
            </div>
          </div>
        </v-col>

      </v-row>
    </v-container>

    <div class="scroll-hint reveal d-none d-md-flex">
      <span class="scan-line"></span>
      <span class="hint-text">Scroll to explore</span>
    </div>
  </section>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
  name: 'HeroSection',

  setup() {
    const { mdAndUp } = useDisplay()
    return { mdAndUp }
  },

  data() {
    return {
      photoSrc: 'data:image/png;base64,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',
    }
  },

  mounted() {
    this.initReveal()
  },

  methods: {
    initReveal() {
      const els = document.querySelectorAll('.reveal')
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('in'), i * 80)
          }
        })
      }, { threshold: 0.05 })
      els.forEach(el => obs.observe(el))
    },
  },
}
</script>

<style scoped>
/* ── Section shell ── */
.hero-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}

/* ── Animated grid ── */
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridShift 20s linear infinite;
  pointer-events: none;
}
@keyframes gridShift {
  from { background-position: 0 0; }
  to   { background-position: 60px 60px; }
}

/* ── Big decorative bg text ── */
.hero-bg-text {
  position: absolute; right: -2vw; top: 50%;
  transform: translateY(-50%);
  font-size: 28vw; font-weight: 800;
  color: rgba(255,255,255,0.018);
  pointer-events: none; letter-spacing: -0.05em;
  animation: floatBg 8s ease-in-out infinite; z-index: 0;
}
@keyframes floatBg {
  0%,100% { transform: translateY(-50%); }
  50%      { transform: translateY(-53%); }
}

/* ── Inner container ── */
.hero-inner { position: relative; z-index: 2; }

/* ── MOBILE sticky name bar ── */
.mobile-name-bar {
  position: sticky;
  top: 0; left: 0; right: 0;
  z-index: 150;
  padding: 1rem 1.5rem;
  background: rgba(6,6,8,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text);
  align-items: center;
}
.name-accent-inline { color: var(--accent); }

/* ── Hero row ── */
.hero-row {
  min-height: 100vh;
  padding-top: 80px; /* offset fixed navbar */
}
@media (max-width: 959px) {
  .hero-row {
    padding-top: 1.5rem;
    min-height: unset;
    padding-bottom: 3rem;
  }
}

/* ── LEFT (text) ── */
.hero-left {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
@media (min-width: 960px) {
  .hero-left { padding-top: 10vh; padding-bottom: 10vh; }
}

/* ── Eyebrow ── */
.hero-eyebrow {
  display: inline-flex; align-items: center;
  gap: 0.6rem; margin-bottom: 1.5rem;
}
.eyebrow-dot {
  width: 8px; height: 8px;
  background: var(--accent); border-radius: 50%;
  animation: blink 2s infinite;
}
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
.eyebrow-text {
  font-size: 0.68rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--muted);
}

/* ── Desktop/Tablet name ── */
.hero-name {
  font-size: clamp(2.8rem, 6vw, 6.5rem);
  font-weight: 800; line-height: 0.92;
  letter-spacing: -0.04em; color: var(--text);
  margin-bottom: 1.5rem;
}
.hero-name--sm {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: 1.25rem;
}
.name-accent { color: var(--accent); display: block; }

/* ── Description ── */
.hero-desc {
  color: var(--muted); font-size: 0.9rem;
  max-width: 430px; line-height: 1.75; margin-bottom: 2rem;
}
@media (max-width: 599px) {
  .hero-desc { font-size: 0.85rem; }
}

/* ── CTAs ── */
.hero-ctas { display: flex; gap: 0.75rem; flex-wrap: wrap; }

.btn-primary {
  background: var(--accent) !important; color: #060608 !important;
  font-weight: 700 !important; letter-spacing: 0.06em !important;
  text-transform: uppercase !important; font-size: 0.75rem !important;
  transition: transform .25s, box-shadow .25s !important;
}
.btn-primary:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 40px rgba(200,245,66,.3) !important;
}
.btn-ghost {
  border-color: var(--border) !important; color: var(--text) !important;
  font-weight: 600 !important; letter-spacing: 0.06em !important;
  text-transform: uppercase !important; font-size: 0.75rem !important;
  transition: border-color .25s, transform .25s !important;
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,.3) !important;
  transform: translateY(-3px) !important;
}

/* ── Mobile stats ── */
.mobile-stats { gap: 0; }
.mstat { text-align: center; flex: 1; }
.mstat-num {
  font-size: 1.6rem; font-weight: 800;
  color: var(--accent); letter-spacing: -0.04em;
}
.mstat-label { font-size: 0.62rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; }
.mstat-divider { width: 1px; background: var(--border); align-self: stretch; margin: 0 0.5rem; }

/* ── RIGHT (photo) ── */
.hero-right {
  display: flex; justify-content: center; align-items: flex-end;
}
@media (max-width: 959px) {
  .hero-right { align-items: center; padding-top: 2rem; }
}

/* ── Photo wrapper ── */
.photo-wrap {
  position: relative;
  /* Mobile: smaller, centered */
  width: min(280px, 70vw);
}
@media (min-width: 600px) {
  .photo-wrap { width: min(360px, 50vw); }
}
@media (min-width: 960px) {
  .photo-wrap { width: min(420px, 42vw); }
}

/* Photo itself — transparent PNG, no background at all */
.hero-photo {
  width: 100%;
  display: block;
  position: relative;
  z-index: 2;
  /* Remove any inherited background */
  background: transparent;
  mix-blend-mode: normal;
}

/* ── Rings ── */
.ring {
  position: absolute; border-radius: 50%;
  bottom: 8%; left: 50%; transform: translateX(-50%);
  animation: ringPulse 4s ease-in-out infinite; z-index: 1;
}
.r1 { width: 55%; height: auto; aspect-ratio: 1; border: 1px solid rgba(200,245,66,.2); }
.r2 { width: 85%; height: auto; aspect-ratio: 1; border: 1px solid rgba(200,245,66,.08); animation-delay:.6s; }
@keyframes ringPulse {
  0%,100% { transform: translateX(-50%) scale(1); }
  50%      { transform: translateX(-50%) scale(1.04); opacity:.7; }
}

/* ── Floating cards ── */
.float-card {
  position: absolute;
  background: rgba(14,14,20,.9); backdrop-filter: blur(20px);
  border: 1px solid var(--border); border-radius: 0.85rem;
  padding: 0.85rem 1.25rem; z-index: 10;
  animation: cardFloat 6s ease-in-out infinite;
}
.card-exp  { left: -40px;  top: 30%; }
.card-proj { right: -40px; top: 58%; animation-delay: 1.5s; }
@media (max-width: 959px) {
  .card-exp  { left: -20px; }
  .card-proj { right: -20px; }
}
@keyframes cardFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}
.fc-label { font-size: .58rem; text-transform: uppercase; letter-spacing: .14em; color: var(--muted); margin-bottom: .2rem; }
.fc-val   { font-size: 1.15rem; font-weight: 800; color: var(--accent); letter-spacing: -.03em; }

/* ── Scroll hint ── */
.scroll-hint {
  position: absolute; bottom: 2.5rem; left: 5vw;
  display: flex; align-items: center; gap: .75rem;
  color: var(--muted); font-size: .68rem;
  letter-spacing: .15em; text-transform: uppercase; z-index: 5;
}
.scan-line {
  width: 40px; height: 1px; background: var(--muted);
  position: relative; overflow: hidden; display: block;
}
.scan-line::after {
  content: ''; position: absolute; top: 0; left: -100%;
  width: 100%; height: 100%; background: var(--accent);
  animation: scanLine 1.5s infinite;
}
@keyframes scanLine { to { left: 100%; } }
</style>
