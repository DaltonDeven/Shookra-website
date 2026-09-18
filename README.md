# Shookra Aesthetics & Academy   site files

Put every file in this folder in the same directory as your existing `Shookra.jpeg`
logo. No build step, no framework   open `index.html` in a browser and it works.

```
index.html              Home
founders-corner.html    Founder's Corner (replaces "Academy" in nav + footer)
skin.html
hair.html
laser.html
permanent-makeup.html
paramedical-tattoo.html
styles.css              One stylesheet for all pages   theme lives here
site.js                 WhatsApp links + tile reveal
map.jpg                 Google Maps screenshot used in the Visit tile
founder.jpg             Anya's portrait, cropped to 4:5
logo-mark.png           SA monogram, transparent, used in nav + footer
logo-full.png           Full logo lockup, transparent, used in the hero
```

## 1. WhatsApp number (already set)

`site.js` line 12:

```js
const WHATSAPP_NUMBER = "919289370287";
```

That single value drives **every** WhatsApp button on every page: Book your slot,
Book a consultation, Ask about enrolment, the Consultation tile, each service
page's Ask on WhatsApp, and the footer link. Country code + digits only, no `+`
or spaces, if you ever need to change it.

Each button opens the chat with a pre-filled message specific to where it was
clicked (the laser page opens with a laser enquiry), so you can tell what the
lead came in for. To change any of that wording, edit the `data-wa="..."`
attribute on that link in the HTML.

## 2. Founder's Corner

Anya's photo and story are already in. `founder.jpg` is cropped to 4:5 from the
photo you sent; to change it, drop in a new 4:5 image with the same filename.

## 3. Instagram

"Explore the academy" on the home page, "Follow on Instagram" on the founder
page and the footer links all point to
`https://www.instagram.com/shookraesthetics/`.

## 4. Google Maps tile

The Visit section shows the actual map screenshot with an "Open in Google Maps"
button pinned to the bottom, so it reads as clickable. Google's own marker and
the Shookra label are already in the screenshot, so there is no overlaid pin.
The whole tile is the link. To update the map picture later, just replace
`map.jpg` with a new screenshot.

## 5. Service page content

Each service page has: hero, "what we treat", a treatments list, a numbered
"how a session runs" sequence, a practical note, an at-a-glance card, the
address card, links to the other four services, and a closing WhatsApp CTA.

The copy is written to be accurate and non-overclaiming, but **read it before
you publish**   adjust anything that doesn't match what you actually offer
(device names, session counts, what's included). Prices are deliberately left
out; the CTA sends people to WhatsApp instead.


## 6. Contact number

`+91 92893 70287` appears under the address in every footer as a `tel:` link,
so it dials on mobile. It's also the number wired into the WhatsApp buttons
(`site.js`). Change both if they should differ.
