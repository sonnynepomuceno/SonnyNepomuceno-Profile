<template>
  <div class="navbar">
    <a href="#" class="nav-logo font-syne">Sonny<em>.</em></a>

    <nav class="nav-links d-none d-md-flex">
      <a v-for="link in links" :key="link.id" :href="link.href">{{ link.label }}</a>
    </nav>

    <v-btn class="d-flex d-md-none" icon variant="text" @click="drawer = true">
      <v-icon color="white">mdi-menu</v-icon>
    </v-btn>

    <v-navigation-drawer v-model="drawer" location="right" temporary width="240"
      style="background:#0e0e14; border-left:1px solid rgba(255,255,255,0.07);">
      <div class="pa-6">
        <div class="d-flex align-center justify-space-between mb-8">
          <span class="font-syne" style="font-weight:800;font-size:1.1rem;color:#f0f0f5;">
            Sonny<span style="color:var(--accent)">.</span>
          </span>
          <v-btn icon variant="text" size="small" @click="drawer = false">
            <v-icon color="white" size="18">mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="drawer-links">
          <a v-for="link in links" :key="link.id" :href="link.href"
            class="drawer-link" @click="drawer = false">
            <span class="drawer-num">{{ String(link.id).padStart(2,'0') }}</span>
            {{ link.label }}
          </a>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
      links: [
        { id: 1, label: 'Skills',     href: '#skills' },
        { id: 2, label: 'Projects',   href: '#projects' },
        { id: 3, label: 'Experience', href: '#experience' },
        { id: 4, label: 'Contact',    href: '#contact' },
      ],
    }
  },
}
</script>

<style scoped>
.navbar {
  position: fixed; top:0; left:0; right:0; z-index:200;
  display:flex; justify-content:space-between; align-items:center;
  padding: 1rem 5vw;
  background: rgba(6,6,8,0.92); backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-logo { font-weight:800; font-size:1.15rem; letter-spacing:-0.03em; color:#f0f0f5; text-decoration:none; }
.nav-logo em { color:var(--accent); font-style:normal; }
.nav-links { display:flex; gap:2rem; }
.nav-links a {
  color:var(--muted); text-decoration:none; font-size:0.72rem;
  font-weight:500; letter-spacing:0.1em; text-transform:uppercase;
  transition:color 0.2s; position:relative;
}
.nav-links a::after {
  content:''; position:absolute; bottom:-3px; left:0; right:0;
  height:1px; background:var(--accent); transform:scaleX(0);
  transition:transform 0.25s; transform-origin:left;
}
.nav-links a:hover { color:#f0f0f5; }
.nav-links a:hover::after { transform:scaleX(1); }
.drawer-links { display:flex; flex-direction:column; gap:0.25rem; }
.drawer-link {
  display:flex; align-items:center; gap:1rem; padding:0.85rem 0.5rem;
  color:rgba(240,240,245,0.7); text-decoration:none; font-size:0.82rem;
  font-weight:500; letter-spacing:0.08em; text-transform:uppercase;
  border-bottom:1px solid var(--border); transition:color 0.2s;
}
.drawer-link:hover { color:var(--accent); }
.drawer-num { color:var(--accent); font-size:0.65rem; font-family:'Syne',sans-serif; font-weight:700; }
</style>
