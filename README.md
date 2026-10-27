# Webbit Design

One-of-a-kind websites for Kansas City small businesses. Each design is sold to **one business only**.

## What's in here

| Folder | What it is |
|---|---|
| `index.html` | Portfolio page to show business owners (designs + pricing) |
| `designs/` | The blank design templates, with `{{TAGS}}` where business info goes |
| `examples/` | Each design filled in with a made-up sample business |

All businesses in `examples/` are fictional samples.

## Designs

| Design | File | Best for |
|---|---|---|
| Bold Block | `designs/bold-block.html` | Food trucks, restaurants, anything colorful |
| Neon Night | `designs/neon-night.html` | Barbers, salons, tattoo shops, late-night spots |
| Clean Card | `designs/clean-card.html` | Cleaning, wellness, home services |
| Street Poster | `designs/street-poster.html` | Lawn care, trades, loud and direct |
| Chalkboard | `designs/chalkboard.html` | BBQ, cafés, menus |
| Minimal Line | `designs/minimal-line.html` | Auto repair, professional services |

## Template tags

Replace these in a design file to make a client's site:

```
{{NAME}}      business name
{{TAGLINE}}   one-line pitch
{{PHONE}}     phone as people read it, e.g. (816) 555-0142
{{TEL}}       phone digits only, for the call button, e.g. 8165550142
{{AREA}}      service area, e.g. Gladstone, MO
{{HOURS}}     hours
{{ADDRESS}}   address or location note
{{EXTRA}}     one extra line (payment types, free estimates, etc.)
{{ICON}}      an emoji, e.g. 🌮
{{COLOR}}     brand color, e.g. #1f8a4c
{{YEAR}}      current year
{{SERVICES}}  list items: <li><span>Haircut</span><b>$25</b></li>
```

The easiest way to fill these in is **Site Studio**, which does it automatically and tracks which designs are sold.

## Making a client's site live

1. Create a new repo named after the client (e.g. `rosas-tacos`).
2. Add the finished site as `index.html`.
3. Settings → Pages → Deploy from branch → `main` → Save.
4. Only do this **after they've paid**. Keep previews private until then.

## Turn this portfolio on

Settings → Pages → Deploy from branch → `main` / root → Save.
It will be live at `https://lezkt1811-maker.github.io/Webbit-Design/`.

## Business Hunter (finds businesses with no website)

**One-time setup**
1. Get a Google Places API key: go to console.cloud.google.com, create a project, turn on **Places API (New)**, then **APIs & Services → Credentials → Create credentials → API key**. Google asks for a card, but the monthly free allowance covers normal use. Set a budget alert to be safe.
2. In this repo: **Settings → Secrets and variables → Actions → New repository secret**. Name it `GOOGLE_PLACES_KEY` and paste the key.

**Every time**
1. **Actions → Business Hunter → Run workflow.** Type a kind of business (`barber`, `food truck`, `lawn care`...) and a city (`Gladstone, MO`).
2. When it finishes (about 30 seconds), open the run and download **leads** under Artifacts.
3. Open `hunter.html` on your GitHub Pages site and load that file.
4. Each business gets a design picked for its type. Tap **Preview their site** to see it with their name, phone, address and hours filled in.
5. Track each one: New → Previewed → Pitched → Sold / No.

Notes:
- "No website" means none is listed on their Google profile. Double-check with a quick search before pitching.
- Lead lists auto-delete from GitHub after 7 days. Your statuses stay saved on your phone.
- Previews are for showing the owner in person. Don't publish a site under a business's name until they've paid.
