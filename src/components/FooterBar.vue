<template>
  <footer class="footer">
    <span class="footer-copy">© 2025 Sonny A. Nepomuceno</span>
    <span class="footer-role">Full Stack Web Developer · Tanza, Cavite</span>
  </footer>
</template>

<script>
export default { name: 'FooterBar' }
</script>

<style scoped>
.footer {
  padding:1.5rem 5vw;
  border-top:1px solid var(--border);
  display:flex; justify-content:space-between; align-items:center;
  flex-wrap:wrap; gap:0.5rem;
  background:var(--bg); color:var(--muted); font-size:0.72rem;
}
</style>
