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
