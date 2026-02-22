<template>
  <v-app theme="dark" class="portfolio-app">
    <div class="cursor" :style="{ left: cursorX + 'px', top: cursorY + 'px' }" />
    <div class="cursor-follower" :style="{ left: followerX + 'px', top: followerY + 'px' }" />

    <NavBar />

    <v-main style="padding:0;">
      <HeroSection />
      <MarqueeStrip />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <FooterBar />
    </v-main>
  </v-app>
</template>

<script>
import NavBar            from './components/NavBar.vue'
import HeroSection       from './components/HeroSection.vue'
import MarqueeStrip      from './components/MarqueeStrip.vue'
import SkillsSection     from './components/SkillsSection.vue'
import ProjectsSection   from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection    from './components/ContactSection.vue'
import FooterBar         from './components/FooterBar.vue'

export default {
  name: 'App',

  components: {
    NavBar, HeroSection, MarqueeStrip,
    SkillsSection, ProjectsSection,
    ExperienceSection, ContactSection, FooterBar,
  },

  data() {
    return {
      cursorX:   0,
      cursorY:   0,
      followerX: 0,
      followerY: 0,
    }
  },

  mounted() {
    document.addEventListener('mousemove', this.onMouseMove)
    this.animateFollower()
  },

  beforeUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove)
  },

  methods: {
    onMouseMove(e) {
      this.cursorX = e.clientX
      this.cursorY = e.clientY
    },
    animateFollower() {
      this.followerX += (this.cursorX - this.followerX) * 0.12
      this.followerY += (this.cursorY - this.followerY) * 0.12
      requestAnimationFrame(this.animateFollower)
    },
  },
}
</script>

<style>
/* ── Global tokens ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --accent:  #c8f542;
  --accent2: #7b61ff;
  --bg:      #060608;
  --surface: #0e0e14;
  --card:    rgba(255,255,255,0.04);
  --border:  rgba(255,255,255,0.07);
  --text:    #f0f0f5;
  --muted:   rgba(240,240,245,0.45);
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg) !important;
  font-family: 'DM Sans', sans-serif !important;
  cursor: none;
  overflow-x: hidden;
}

/* Hide custom cursor on touch devices */
@media (hover: none) {
  body { cursor: auto; }
  .cursor, .cursor-follower { display: none; }
}

.v-application {
  background: var(--bg) !important;
  font-family: 'DM Sans', sans-serif !important;
}

/* Ensure transparent PNG images have no background bleed */
img { background: transparent !important; }

/* ── Custom cursor (desktop only) ── */
.cursor {
  width: 12px; height: 12px;
  background: var(--accent); border-radius: 50%;
  position: fixed; pointer-events: none;
  z-index: 9999; transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}
.cursor-follower {
  width: 36px; height: 36px;
  border: 1px solid rgba(200,245,66,0.4); border-radius: 50%;
  position: fixed; pointer-events: none;
  z-index: 9998; transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}

/* ── Helpers ── */
.font-syne   { font-family: 'Syne', sans-serif !important; }
.text-accent { color: var(--accent) !important; }
.text-muted  { color: var(--muted)  !important; }

/* ── Scroll reveal ── */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.in {
  opacity: 1;
  transform: translateY(0);
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 4px; }

/* ── Vuetify override: remove default v-main padding on mobile ── */
.v-main { padding-top: 0 !important; }
</style>
