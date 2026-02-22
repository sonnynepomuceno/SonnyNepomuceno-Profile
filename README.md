# Sonny Nepomuceno — Portfolio (Vue 3 + Vuetify 3 · Options API)

Cinematic dark-themed developer portfolio built with **Vue 3 Options API**, **Vuetify 3**, and **Vite**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── main.js                    # App bootstrap (Vue + Vuetify)
├── App.vue                    # Root · cursor logic · global CSS
└── components/
    ├── NavBar.vue             # Fixed nav + mobile drawer
    ├── HeroSection.vue        # Full-screen hero with photo
    ├── MarqueeStrip.vue       # Scrolling accent banner
    ├── SkillsSection.vue      # Animated skill bars grid
    ├── ProjectsSection.vue    # Project rows with hover effects
    ├── ExperienceSection.vue  # Work history cards
    ├── ContactSection.vue     # Contact links + email CTA
    └── FooterBar.vue          # Footer
```

## ✏️ Customization

| What               | Where                                      |
|--------------------|--------------------------------------------|
| Photo              | Replace base64 in `HeroSection.vue` data() |
| Accent color       | Change `--accent` in `App.vue` :root       |
| Skills             | Edit `skills[]` in `SkillsSection.vue`     |
| Projects           | Edit `projects[]` in `ProjectsSection.vue` |
| Contact info       | Edit `contactItems[]` in `ContactSection.vue` |

## 🛠 Tech Stack
- Vue 3 (Options API)
- Vuetify 3
- Vite
- @mdi/font
- Syne + DM Sans (Google Fonts)
