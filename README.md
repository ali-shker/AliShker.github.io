[README.md](https://github.com/user-attachments/files/31569003/README.md)
# Ali Shker — Portfolio

A single-file personal portfolio site for Ali Shker, senior Computer Science student and full-stack / ML developer. Built as one self-contained HTML file — no build step, no dependencies to install, no server required.

## View it

**Locally**
1. Download `portfolio.html`.
2. Double-click it, or right-click → **Open with** → your browser.

That's it — the file includes all CSS, JavaScript, and the profile photo (embedded as base64), so it works fully offline.

## Deploy it online

Since it's a single static file, any of these take under a minute:

| Host | Steps |
|---|---|
| **Netlify Drop** | Go to [app.netlify.com/drop](https://app.netlify.com/drop), rename the file to `index.html`, drag it in. Get an instant public URL. |
| **Vercel** | Same drag-and-drop flow at [vercel.com](https://vercel.com). |
| **GitHub Pages** | Create a repo, upload the file as `index.html`, enable Pages in **Settings → Pages**. Live at `yourusername.github.io/reponame`. |

## What's inside

- **Hero** — animated typewriter intro, fade-in call-to-action pills, cursor-follow glow, rotating-ring avatar badge.
- **About** — bio and a terminal-style graphic summarizing strengths.
- **Skills** — C++, Java (OOP & Data Structures), JavaScript, HTML5, CSS3, SQL, React, Python, Machine Learning, Angular, Node.js.
- **Projects**
  - *Aosis — Creative Agency* (HTML5/CSS3 agency site)
  - *Mainframe — Motion Landing Page* (React/TypeScript/Vite/Tailwind)
  - *Credit Card Customer Segmentation* (K-Means + Decision Tree, Python/Pandas/scikit-learn) with a cluster-visualization graphic
  - *Electronics Store — Login & Reservations* (Angular, Node.js — built during the Vanrise internship)
- **Experience** — internships at Vanrise and AOSIS.
- **Certificates** — Google AI Essentials (Coursera) and Claude AI Certification (tixue.ai), linked out.
- **Contact** — email and phone, plus a one-click "copy email" button.

## Tech

Plain HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no external JS libraries. Fonts (Space Grotesk, Inter) load from Google Fonts; everything else is self-contained in `portfolio.html`.

## Customizing

Everything lives in one file, so editing is straightforward:

- **Text/copy** — edit directly inside the `<section>` blocks in the HTML body.
- **Colors** — change the CSS variables at the top of the `<style>` block (`--bg`, `--accent`, `--accent2`, etc.).
- **Avatar photo** — swap the base64 string in the `<img src="data:image/jpeg;base64,...">` tag inside the hero section, or replace it with a normal `src="your-photo.jpg"` path if you'd rather keep the image as a separate file.
- **Projects** — duplicate a `.project-card` block inside the `#projects` section and edit the tag, icon, title, description, and stack pills.

## Notes

- Respects `prefers-reduced-motion` — animations are disabled for users who have that OS setting on.
- Fully responsive down to mobile, with a dedicated hamburger menu and overlay nav.
- No analytics, tracking, or external scripts beyond the two Google Fonts stylesheets.
