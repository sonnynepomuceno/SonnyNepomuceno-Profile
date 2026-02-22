<template>
  <div class="marquee-strip">
    <div class="marquee-track">
      <span v-for="(item, i) in doubledItems" :key="i" class="marquee-item">
        {{ item }}<span class="sep"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarqueeStrip',

  data() {
    return {
      items: [
        'Full Stack Developer',
        'Laravel & Vue.js',
        'MySQL & REST API',
        'Node.js & Express',
        'Tanza, Cavite PH',
        'Open to Work',
      ],
    }
  },

  computed: {
    doubledItems() {
      return [...this.items, ...this.items]
    },
  },
}
</script>

<style scoped>
.marquee-strip {
  background: var(--accent);
  overflow: hidden;
  padding: 1.4rem 0;
}
.marquee-track {
  display: flex;
  gap: 3rem;
  animation: marquee 18s linear infinite;
  white-space: nowrap;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Syne', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #060608;
  flex-shrink: 0;
}
.sep {
  display: inline-block;
  width: 6px; height: 6px;
  background: rgba(6,6,8,0.35);
  border-radius: 50%;
}
</style>
