<template>
  <section id="projects" class="section">
    <v-container fluid class="px-4 px-sm-8 px-md-10">
      <div class="section-header reveal">
        <span class="section-num font-syne">02</span>
        <h2 class="section-title font-syne">Projects</h2>
      </div>

      <div class="projects-list reveal">
        <div v-for="(project, index) in projects" :key="project.title" class="project-row">
          <span class="project-num">{{ padNum(index + 1) }}</span>
          <div class="project-info">
            <h3 class="project-title font-syne">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="tag-row">
              <v-chip v-for="tag in project.tags" :key="tag"
                size="x-small" variant="outlined" class="project-chip">{{ tag }}</v-chip>
            </div>
          </div>
          <div class="project-arrow d-none d-sm-flex">
            <v-icon size="18">mdi-arrow-top-right</v-icon>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          title: 'New House Type Monitoring System',
          desc:  'Application that monitors the status of new house types across various departments in real time, deployed on internal servers.',
          tags:  ['Laravel 9', 'Vue.js', 'Vuetify 3', 'MySQL'],
        },
        {
          title: 'Plaster Board Checklist System',
          desc:  'Production-facing checklist tool that verifies all plan checkpoints, ensuring zero errors and preventing costly customer feedback.',
          tags:  ['Laravel 9', 'Vue.js', 'Vuetify 3', 'MySQL'],
        },
        {
          title: 'Sending Order System',
          desc:  'Order transmission monitoring platform that tracks and manages the flow of order data across the production pipeline.',
          tags:  ['Vue.js', 'Vuetify 3', 'Node.js', 'MySQL'],
        },
      ],
    }
  },
  methods: {
    padNum(n) { return String(n).padStart(2, '0') },
  },
}
</script>

<style scoped>
.section { padding:5rem 0; background:var(--bg); }
@media (min-width:960px) { .section { padding:9rem 0; } }

.section-header {
  display:flex; align-items:flex-end; gap:1.5rem;
  border-bottom:1px solid var(--border);
  padding-bottom:1.5rem; margin-bottom:2.5rem;
}
.section-num {
  font-size:clamp(3rem,8vw,5rem); font-weight:800;
  color:rgba(255,255,255,0.05); line-height:1; letter-spacing:-0.05em;
}
.section-title {
  font-size:clamp(1.6rem,4vw,3.2rem); font-weight:800;
  letter-spacing:-0.04em; line-height:1; color:var(--text);
}

.projects-list { border:1px solid var(--border); border-radius:1rem; overflow:hidden; }

.project-row {
  display:grid;
  grid-template-columns: 2rem 1fr;
  align-items:center; gap:1rem;
  padding:1.75rem 1.5rem;
  background:var(--card); border-bottom:1px solid var(--border);
  transition:background 0.25s, padding-left 0.3s;
  cursor:default; position:relative;
}
@media (min-width:600px) {
  .project-row { grid-template-columns: 2.5rem 1fr 2.5rem; gap:1.5rem; padding:2rem 2rem; }
}
@media (min-width:960px) {
  .project-row { gap:2rem; padding:2.25rem 2.5rem; }
}
.project-row:last-child { border-bottom:none; }
.project-row::before {
  content:''; position:absolute; left:0; top:0; bottom:0;
  width:3px; background:var(--accent);
  transform:scaleY(0); transition:transform 0.3s ease; transform-origin:bottom;
}
.project-row:hover { background:rgba(200,245,66,0.03); padding-left:2.25rem; }
.project-row:hover::before { transform:scaleY(1); }

.project-num { font-family:'Syne',sans-serif; font-size:0.72rem; font-weight:700; color:var(--muted); }
.project-title {
  font-size:clamp(0.95rem,2.5vw,1.2rem); font-weight:700;
  letter-spacing:-0.02em; color:var(--text); margin-bottom:0.35rem;
}
.project-desc { font-size:0.8rem; color:var(--muted); line-height:1.6; margin-bottom:0.75rem; }
.tag-row { display:flex; flex-wrap:wrap; gap:0.35rem; }
.project-chip {
  border-color:var(--border) !important; color:var(--muted) !important;
  font-size:0.6rem !important; letter-spacing:0.06em !important;
}
.project-arrow {
  width:40px; height:40px; border:1px solid var(--border); border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  color:var(--muted); transition:all 0.25s; justify-self:end;
}
.project-row:hover .project-arrow {
  background:var(--accent); border-color:var(--accent);
  color:#060608; transform:rotate(45deg);
}
</style>
