/* ==========================================================================
   Shookra — shared script
   ==========================================================================
   1) WHATSAPP NUMBER
      Change it in ONE place, right below. Every "Book", "Book a consultation",
      "Ask about enrolment" and service enquiry button on every page picks it up.

      Format: country code + number, digits only. No +, no spaces, no dashes.
      India example: 919876543210
   ========================================================================== */

const WHATSAPP_NUMBER = "9289370287"; // <-- REPLACE WITH THE REAL NUMBER

/* Default message used when a button doesn't specify its own. */
const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Shookra, I'd like to book a consultation.";

/* --------------------------------------------------------------------------
   Any link with data-wa becomes a WhatsApp chat link.
   Optional: data-wa="Hi Shookra, I'd like to ask about laser hair reduction."
   -------------------------------------------------------------------------- */
document.querySelectorAll("[data-wa]").forEach((el) => {
  const message = el.getAttribute("data-wa") || WHATSAPP_DEFAULT_MESSAGE;
  el.setAttribute(
    "href",
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message)
  );
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

/* --------------------------------------------------------------------------
   Service tiles fade in as they enter the viewport (home page only).
   -------------------------------------------------------------------------- */
const tiles = document.querySelectorAll(".service");
if (tiles.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("in"), idx * 70);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  tiles.forEach((el) => io.observe(el));
} else {
  tiles.forEach((el) => el.classList.add("in"));
}
