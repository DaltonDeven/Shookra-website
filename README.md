# Shookra Aesthetics & Academy — site files

Put every file in this folder in the same directory as your existing `Shookra.jpeg`
logo. No build step, no framework — open `index.html` in a browser and it works.

```
index.html              Home
founders-corner.html    Founder's Corner (replaces "Academy" in nav + footer)
skin.html
hair.html
laser.html
permanent-makeup.html
permanent-tattoo.html
styles.css              One stylesheet for all pages — theme lives here
site.js                 WhatsApp links + tile reveal
map.jpg                 Google Maps screenshot used in the Visit tile
founder.jpg             PLACEHOLDER — replace with the founder's portrait
Shookra.jpeg            your existing logo (not included here)
```

## 1. Set the WhatsApp number — this is the only thing that's mandatory

Open `site.js`, first line of code:

```js
const WHATSAPP_NUMBER = "919999999999"; // <-- REPLACE WITH THE REAL NUMBER
```

Country code + number, digits only. No `+`, no spaces, no dashes.
Example for India: `919876543210`.

That single value drives **every** WhatsApp button on every page:
Book on WhatsApp, Book a consultation, Ask about enrolment, the Consultation
tile, each service page's Ask on WhatsApp, and the footer link.

Each button opens the chat with a pre-filled message specific to where it was
clicked (e.g. the laser page opens with a laser enquiry), so you can tell at a
glance what the lead came in for. To change any of that wording, edit the
`data-wa="..."` attribute on that link in the HTML.

## 2. Replace the founder photo and copy

- Swap `founder.jpg` for a real portrait. Best at **4:5 portrait ratio**
  (e.g. 900 × 1125px) — it's cropped to that automatically.
- In `founders-corner.html`, replace `[Founder's Name]` (appears twice: the
  heading and the first paragraph), the role line, the two paragraphs, the pull
  quote and the three fact rows.

## 3. Instagram

"Explore the academy" on the home page, "Follow on Instagram" on the founder
page and the footer links all point to
`https://www.instagram.com/shookraesthetics/`.

## 4. Google Maps tile

The Visit section now shows the actual map screenshot with a gold pin and an
"Open in Google Maps" button pinned to the bottom, so it reads as clickable.
The whole tile is the link. To update the map picture later, just replace
`map.jpg` with a new screenshot.

## 5. Service page content

Each service page has: hero, "what we treat", a treatments list, a numbered
"how a session runs" sequence, a practical note, an at-a-glance card, the
address card, links to the other four services, and a closing WhatsApp CTA.

The copy is written to be accurate and non-overclaiming, but **read it before
you publish** — adjust anything that doesn't match what you actually offer
(device names, session counts, what's included). Prices are deliberately left
out; the CTA sends people to WhatsApp instead.
