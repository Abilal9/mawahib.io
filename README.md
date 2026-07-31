# Mawahib.io

Marketing site for [Mawahib](https://mawahib.app) — the creative talent marketplace for the MENA region.

## Tech Stack

- React 19
- Vite 7
- Deployed via GitHub Pages

## Development

Requires Node 20+.

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site deploys to GitHub Pages at [mawahib.io](https://mawahib.io) via GitHub Actions (same setup as nonchalantqueen.com).

- **Automatic:** every push to `main`
- **Manual:** GitHub → Actions → **Deploy to GitHub Pages** → **Run workflow**

In the repo settings, set Pages source to **GitHub Actions** (Settings → Pages → Build and deployment → Source).
