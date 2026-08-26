# AGENTS.md

Static link-in-bio page. No build step, no package manager — edit files directly and open `index.html`.

## Files

- `index.html` — page markup and content (links, avatar, social icons)
- `index.css` — all styling; theming uses CSS custom properties on `:root` / `html[data-theme="dark"]`
- `script.js` — theme toggle (persisted in `localStorage`) + load-in animation
- `images/` — avatar, favicons, per-link icons
- `vercel.json` — deployment config

## Conventions

- Keep it dependency-free. Font Awesome (CDN) and Google Fonts (CDN) are the only externals — don't add JS frameworks or build tooling for a single static page.
- Theme colors live only as CSS variables in `index.css` (`--bg`, `--fg`, `--card-bg`, `--card-border`, `--card-shadow`). Don't hardcode colors elsewhere.
- New links go in the `ul.vertical` list in `index.html`, following the existing `<li><a><i class="..."></i> Label</a></li>` pattern.
- Don't commit `.DS_Store` or other OS/editor cruft — it's gitignored.

## Verifying changes

There's no test suite. Open `index.html` in a browser and check:
- Theme toggle button switches light/dark and persists on reload
- All links resolve and icons render
- Layout holds on mobile width (~375px)
