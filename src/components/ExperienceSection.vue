<template>
  <section id="experience" class="section">
    <v-container fluid class="px-4 px-sm-8 px-md-10">
      <div class="section-header reveal">
        <span class="section-num font-syne">03</span>
        <h2 class="section-title font-syne">Experience</h2>
      </div>
      <v-row>
        <v-col v-for="job in jobs" :key="job.role" cols="12" md="6">
          <div class="exp-card reveal">
            <v-chip class="period-chip mb-4" size="small" rounded="pill" variant="tonal">
              {{ job.period }}
            </v-chip>
            <h3 class="exp-role font-syne">{{ job.role }}</h3>
            <p class="exp-company">{{ job.company }}</p>
            <ul class="exp-items">
              <li v-for="item in job.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      jobs: [
        {
          period:  '2019 – 2025',
          role:    'Full Stack Developer',
          company: 'H.R.D Singapore Pte Ltd',
          items: [
            'Created web-based systems to streamline company production workflows',
            'Managed local deployment of all internal web systems',
            'Built a user-friendly project tracking system ensuring cross-department task completion on schedule',
          ],
        },
        {
          period:  '2014 – 2019',
          role:    'AutoCAD Draftsman',
          company: 'H.R.D Singapore Pte Ltd',
          items: [
            'Designed, checked and revised piping plans for residential construction projects',
            'Interpreted Japanese-language instructions from planners and subcontractors',
            'Maintained standard operating procedure compliance across teams',
          ],
        },
      ],
    }
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

.exp-card {
  background:var(--card); border:1px solid var(--border);
  border-radius:1rem; padding:2rem;
  height:100%; transition:border-color 0.25s,transform 0.25s;
  margin-bottom:1rem;
}
@media (min-width:960px) {
  .exp-card { padding:2.75rem; margin-bottom:0; }
}
.exp-card:hover { border-color:rgba(200,245,66,0.3); transform:translateY(-4px); }

.period-chip {
  background:rgba(200,245,66,0.1) !important; color:var(--accent) !important;
  font-size:0.65rem !important; font-weight:600 !important; letter-spacing:0.08em !important;
}
.exp-role {
  font-size:clamp(1.1rem,3vw,1.45rem); font-weight:800;
  letter-spacing:-0.03em; color:var(--text); margin-bottom:0.3rem;
}
.exp-company { font-size:0.8rem; color:var(--muted); margin-bottom:1.25rem; }
.exp-items { list-style:none; display:flex; flex-direction:column; gap:0.65rem; }
.exp-items li {
  font-size:0.8rem; color:var(--muted);
  padding-left:1.4rem; position:relative; line-height:1.6;
}
.exp-items li::before { content:'↗'; position:absolute; left:0; color:var(--accent); font-size:0.72rem; }
</style>
