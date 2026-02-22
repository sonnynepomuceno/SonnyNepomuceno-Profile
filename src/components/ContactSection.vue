<template>
  <section id="contact" class="section">
    <v-container fluid class="px-4 px-sm-8 px-md-10">
      <div class="section-header reveal">
        <span class="section-num font-syne">04</span>
        <h2 class="section-title font-syne">Contact</h2>
      </div>

      <v-row align="center" class="g-8">
        <!-- LEFT -->
        <v-col cols="12" md="6" class="reveal">
          <h2 class="contact-heading font-syne">
            Let's Build<br>
            <span class="text-accent">Something</span><br>
            Great
          </h2>
          <p class="contact-sub">
            Open to full-time roles, freelance projects, and collaborations.
            Whether you have a project in mind or just want to say hi — my inbox is open.
          </p>
          <div class="contact-links">
            <a v-for="item in contactItems" :key="item.label" :href="item.href" class="contact-link">
              <v-icon :icon="item.icon" class="link-icon" size="20" />
              <div class="link-text">
                <span class="link-label">{{ item.label }}</span>
                <span class="link-val">{{ item.val }}</span>
              </div>
              <v-icon icon="mdi-chevron-right" size="16" class="link-chevron" />
            </a>
          </div>
        </v-col>

        <!-- RIGHT -->
        <v-col cols="12" md="6" class="text-center reveal">
          <a href="mailto:sonnybst@gmail.com" class="big-email font-syne">
            sonnybst<br>@gmail.com
          </a>
          <div class="mt-6">
            <v-btn href="mailto:sonnybst@gmail.com" size="large"
              class="cta-btn font-syne" rounded="lg" elevation="0"
              append-icon="mdi-arrow-top-right">
              Send a Message
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      contactItems: [
        { icon:'mdi-email-outline',      label:'Email',    val:'sonnybst@gmail.com',         href:'mailto:sonnybst@gmail.com' },
        { icon:'mdi-phone-outline',      label:'Phone',    val:'+63 963 871 8959',            href:'tel:+639638718959' },
        { icon:'mdi-map-marker-outline', label:'Location', val:'Tanza, Cavite, Philippines',  href:'#' },
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

.contact-heading {
  font-size:clamp(2.2rem,5vw,5rem); font-weight:800;
  letter-spacing:-0.04em; line-height:0.95; color:var(--text); margin-bottom:1.5rem;
}
.contact-sub {
  color:var(--muted); font-size:0.88rem;
  line-height:1.8; max-width:420px; margin-bottom:2rem;
}
.contact-links { display:flex; flex-direction:column; gap:0.85rem; }
.contact-link {
  display:flex; align-items:center; gap:1rem;
  padding:1rem 1.25rem;
  background:var(--card); border:1px solid var(--border);
  border-radius:0.75rem; text-decoration:none;
  transition:border-color 0.25s, transform 0.25s;
}
.contact-link:hover { border-color:rgba(200,245,66,0.3); transform:translateX(6px); }
.link-icon   { color:var(--accent); flex-shrink:0; }
.link-text   { display:flex; flex-direction:column; flex:1; }
.link-label  { font-size:0.6rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--muted); margin-bottom:0.1rem; }
.link-val    { font-size:0.85rem; color:var(--text); font-weight:500; word-break:break-all; }
.link-chevron { color:var(--muted); flex-shrink:0; }

.big-email {
  font-size:clamp(1.5rem,4vw,3rem); font-weight:800;
  color:var(--text); text-decoration:none; display:block;
  letter-spacing:-0.03em; line-height:1.1; transition:color 0.25s;
}
.big-email:hover { color:var(--accent); }

.cta-btn {
  background:var(--accent) !important; color:#060608 !important;
  font-weight:700 !important; letter-spacing:0.06em !important;
  text-transform:uppercase !important; font-size:0.75rem !important;
  transition:transform .25s, box-shadow .25s !important;
}
.cta-btn:hover {
  transform:translateY(-3px) !important;
  box-shadow:0 12px 40px rgba(200,245,66,.3) !important;
}
</style>
