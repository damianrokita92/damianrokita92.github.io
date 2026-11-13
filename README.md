# damianrokita92.github.io

Personal game portfolio served by GitHub Pages: https://damianrokita92.github.io/

- Plain static HTML/CSS/JS; `.nojekyll` turns Jekyll off.
- `app-ads.txt` must stay in the root: AdMob verifies it there. Do not move or delete it.
- The privacy policy lives in the separate `Policies` repo (https://damianrokita92.github.io/Policies/#everward); the URL is used by the app and both stores.

## Layout

- `index.html` – about, games grid, contact
- `<game>/index.html` – game page; images in `<game>/img/` (WebP, screenshots `<name>.webp` 1600 px + `<name>-sm.webp` 720 px)
- `assets/` – shared `style.css`, `site.js` (YouTube on click, screenshot lightbox), icons

## Adding a game

1. Copy `everward/` to `<new-game>/` and replace texts, links and images.
2. Add a card to the `#games` grid in `index.html`.

Preview locally: `python3 -m http.server 8000` and open http://localhost:8000/
