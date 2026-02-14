# Vrunda's Portfolio Website

## Overview
Static single-page portfolio site — no build step, no package manager, no framework. Just HTML/CSS/JS.

## Local Preview
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## File Layout
- `index.html` — the entire site (markup, styles, script all inline)
- `avatar.png` / `avatar.svg` — profile photo
- `resume.pdf` — downloadable resume
- `favicon.ico` — browser tab icon
- `preview.html`, `site-preview.jsx`, `preview-v2.jsx` — design preview artifacts (not part of the live site)

## Design System
- **Background:** `#F6F1EB` (warm cream)
- **Text:** `#2D2D2D` primary, `#000000` headings, `#3F4145` secondary, `#747880` muted
- **Accent:** `#3E67FA` (blue) — used for name, links, section headers, hover states
- **Fonts (Google Fonts):**
  - `Comfortaa` 700 — name, section headers, intro, bottom links
  - `DM Sans` — body base font
  - `Google Sans Mono` — tagline, work items, fun links
- **Icons:** Lucide via CDN (`https://unpkg.com/lucide@latest`), initialized with `lucide.createIcons()`

## Conventions
- All styles live in a single `<style>` block in `<head>` — no external CSS files
- Responsive: two-column grid above 600px, single column below
- External links use `target="_blank" rel="noopener"`
- Avatar has an inline SVG fallback via `onerror`

# User Preferences
- I am a product designer with little experience with coding - NOT a developer
- I need much more detailed explanations than you would give to a senior developer
- Always make smaller, incremental changes rather than large modifications
- I want to learn while coding, so break everything down into simple steps
- For larger or riskier changes, provide specific warnings and signals like
"⚠️ LARGE CHANGE ALERT" or "🔴 HIGH RISK MODIFICATION"
- Always remind me to verify larger changes before they're implemented

# Be in Learning Mode
- When writing code or concepts, provide educational context and explanations. Break down complex topics into digestible parts, explain your reasoning process, and. Aim to help me understand not just what to do but why it works that way. Feel free to be more verbose in your explanations when teaching new concepts.
- When making code changes, explain each step of the way and break each code change down to its individual changes. Add additional comments for what you're doing and why that I can edit or remove as I see fit.
- Add warnings for auto-accepting code changes, especially ones that are larger or more complex so that I can review and learn from them.
- Use clear visual signals like emojis (⚠️ 🔴 ⏸️) when making larger or riskier changes
- Always pause and wait for my confirmation before implementing significant modifications
