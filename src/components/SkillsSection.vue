<template>
  <section id="skills" class="section">
    <v-container fluid class="px-4 px-sm-8 px-md-10">
      <div class="section-header reveal">
        <span class="section-num font-syne">01</span>
        <h2 class="section-title font-syne">Tech Stack</h2>
      </div>
      <v-row class="skills-grid reveal" no-gutters>
        <v-col v-for="skill in skills" :key="skill.name"
          cols="6" sm="4" md="3" class="skill-cell">
          <div class="skill-item">
            <div class="skill-name">{{ skill.name }}</div>
            <div class="skill-bar">
              <div class="skill-bar-fill" :style="{ width: animated ? skill.pct + '%' : '0%' }"></div>
            </div>
            <div class="skill-pct">{{ skill.pct }}%</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      animated: false,
      skills: [
        { name: 'Laravel 9',      pct: 92 },
        { name: 'Vue.js',         pct: 90 },
        { name: 'Vuetify 3',      pct: 88 },
        { name: 'MySQL',          pct: 85 },
        { name: 'JavaScript',     pct: 87 },
        { name: 'Node.js',        pct: 78 },
        { name: 'REST API',       pct: 90 },
        { name: 'PHP / HTML+CSS', pct: 88 },
      ],
    }
  },
  mounted() {
    this.initReveal()
    this.initSkillBars()
  },
  methods: {
    initReveal() {
      const els = document.querySelectorAll('.reveal')
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) setTimeout(() => e.target.classList.add('in'), i * 80)
        })
      }, { threshold: 0.05 })
      els.forEach(el => obs.observe(el))
    },
    initSkillBars() {
      const section = document.getElementById('skills')
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { this.animated = true; obs.disconnect() }
      }, { threshold: 0.15 })
      obs.observe(section)
    },
  },
}
</script>

<style scoped>
.section { padding: 5rem 0; background: var(--bg); }
@media (min-width: 960px) { .section { padding: 9rem 0; } }

.section-header {
  display:flex; align-items:flex-end; gap:1.5rem;
  border-bottom:1px solid var(--border);
  padding-bottom:1.5rem; margin-bottom:2.5rem;
}
.section-num {
  font-size: clamp(3rem, 8vw, 5rem); font-weight:800;
  color:rgba(255,255,255,0.05); line-height:1; letter-spacing:-0.05em;
}
.section-title {
  font-size: clamp(1.6rem, 4vw, 3.2rem); font-weight:800;
  letter-spacing:-0.04em; line-height:1; color:var(--text);
}

.skills-grid { border:1px solid var(--border); border-radius:1rem; overflow:hidden; }
.skill-cell  { border-right:1px solid var(--border); border-bottom:1px solid var(--border); }
.skill-cell:nth-child(2n)   { border-right:none; }
@media (min-width:600px)  { .skill-cell:nth-child(2n)   { border-right:1px solid var(--border); }
                             .skill-cell:nth-child(3n)   { border-right:none; } }
@media (min-width:960px)  { .skill-cell:nth-child(3n)   { border-right:1px solid var(--border); }
                             .skill-cell:nth-child(4n)   { border-right:none; } }

.skill-item {
  padding:1.75rem 1.25rem; background:var(--card);
  cursor:default; position:relative; overflow:hidden;
  display:flex; flex-direction:column; gap:0.65rem; height:100%;
}
.skill-item::after {
  content:''; position:absolute; inset:0;
  background:var(--accent); transform:translateY(100%);
  transition:transform 0.35s cubic-bezier(0.16,1,0.3,1); z-index:0;
}
.skill-item:hover::after { transform:translateY(0); }
.skill-name,.skill-pct,.skill-bar,.skill-bar-fill { position:relative; z-index:1; transition:color 0.25s,background 0.25s; }
.skill-name { font-family:'Syne',sans-serif; font-size:0.88rem; font-weight:700; color:var(--text); }
.skill-pct  { font-size:0.68rem; color:var(--muted); }
.skill-bar  { height:2px; background:var(--border); border-radius:2px; }
.skill-bar-fill { height:100%; background:var(--accent); border-radius:2px; transition:width 1.2s cubic-bezier(0.16,1,0.3,1); }
.skill-item:hover .skill-name     { color:#060608; }
.skill-item:hover .skill-pct      { color:rgba(6,6,8,0.6); }
.skill-item:hover .skill-bar      { background:rgba(6,6,8,0.15); }
.skill-item:hover .skill-bar-fill { background:#060608; }
</style>
