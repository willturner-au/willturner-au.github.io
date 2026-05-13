# Will Turner — SEO/AEO Upgrade Instructions
# Generated: 13 May 2026
# Apply these changes to each file in your GitHub repo

## ─────────────────────────────────────────────────
## ALL PAGES — Add to <head> (after existing meta tags, before </head>)
## ─────────────────────────────────────────────────

### Add these tags to EVERY page's <head>:

```html
<!-- AEO: llms.txt reference for AI crawlers -->
<link rel="alternate" type="text/plain" title="AI-readable summary" href="https://willturner.au/llms.txt">

<!-- Performance: font-display -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"></noscript>
```

## ─────────────────────────────────────────────────
## index.html — Homepage
## ─────────────────────────────────────────────────

### REPLACE title:
OLD: <title>Will Turner — Simplexity | Keynote Speaker & Executive Coach</title>
NEW: <title>Will Turner — Keynote Speaker, Executive Coach & Creator of Simplexity | Brisbane</title>

### REPLACE meta description:
OLD: <meta name="description" content="Will Turner created Simplexity — the discipline of finding the simple human truth inside every complex challenge. Keynote speaker, executive coach, trusted advisor. Brisbane.">
NEW: <meta name="description" content="Will Turner created Simplexity — the discipline of finding the simple human truth inside every complex challenge. Award-winning author. Keynote speaker, executive coach, trusted advisor. Brisbane, Australia.">

### REPLACE keywords meta:
OLD: <meta name="keywords" content="Will Turner, Simplexity, keynote speaker Brisbane, executive coach Brisbane, unconscious complexity, penny drop, leadership clarity, Simplexity Matrix, trusted advisor Australia">
NEW: <meta name="keywords" content="Will Turner, Simplexity, keynote speaker Brisbane, executive coach Brisbane, keynote speaker Australia, unconscious complexity, penny drop, leadership clarity, Simplexity Matrix, trusted advisor Australia, award-winning author, Australian Business Book Awards, leadership speaker Queensland">

### REPLACE the entire <script type="application/ld+json"> block:
→ Use the content from schema-index.html (the upgraded schema file)

## ─────────────────────────────────────────────────
## about.html
## ─────────────────────────────────────────────────

### REPLACE title:
OLD: <title>About Will Turner — Creator of Simplexity</title>
NEW: <title>About Will Turner — Award-Winning Author & Creator of Simplexity | Brisbane</title>

### REPLACE meta description:
OLD: <meta name="description" content="Will Turner: 20+ years finding the simple human truth inside complex challenges. Keynote speaker, executive coach, trusted advisor. Brisbane.">
NEW: <meta name="description" content="Will Turner: 25+ years finding the simple human truth inside complex challenges. Award-winning author (Australian Business Book Awards 2023). Keynote speaker, executive coach, trusted advisor. Brisbane.">

### REPLACE OG description:
OLD: <meta property="og:description" content="Will Turner: the creator of Simplexity and the concept of unconscious complexity. 20+ years finding the simple human truth inside complex leadership challenges. Brisbane.">
NEW: <meta property="og:description" content="Will Turner: creator of Simplexity and the concept of unconscious complexity. Award-winning author. 25+ years finding the simple human truth inside complex leadership challenges across Australia, UK and Europe.">

### UPDATE keywords meta — add to existing:
<meta name="keywords" content="Will Turner Brisbane, Will Turner speaker Australia, who is Will Turner, Will Turner Simplexity creator, Will Turner award-winning author, keynote speaker Queensland, Australian Business Book Awards 2023, Will Turner biography">

### REPLACE the entire <script type="application/ld+json"> block:
→ Use the content from schema-about.html

### BODY CONTENT CHANGE — find "20 years" or "20+" and update to "25 years" / "25+"
Find: "more than 20 years in rooms with leaders"
Replace: "more than 25 years in rooms with leaders"

Find: "25 years experience" (if present)
Ensure consistency throughout — all references should say "25+ years"

## ─────────────────────────────────────────────────
## speaking.html
## ─────────────────────────────────────────────────

### REPLACE title:
OLD: <title>Keynote Speaker — Will Turner | Simplexity</title>
NEW: <title>Keynote Speaker Australia — Will Turner | Simplexity | Brisbane</title>

### REPLACE meta description:
OLD: <meta name="description" content="Will Turner engineers the penny drop moment for leadership audiences worldwide. The simple human truth inside every complex challenge. Book a keynote.">
NEW: <meta name="description" content="Will Turner engineers the penny drop moment for leadership audiences across Australia and worldwide. 25+ years. Award-winning author. The simple human truth inside every complex challenge. Book a keynote.">

### UPDATE keywords:
<meta name="keywords" content="Will Turner keynote speaker, keynote speaker Brisbane, keynote speaker Australia, leadership keynote speaker, Simplexity keynote, unconscious complexity speaker, penny drop keynote, book Will Turner, leadership speaker Queensland, corporate keynote speaker Australia">

### REPLACE the entire <script type="application/ld+json"> block:
→ Use the content from schema-speaking.html

## ─────────────────────────────────────────────────
## coaching.html
## ─────────────────────────────────────────────────

### REPLACE title:
OLD: <title>Executive Coaching — Will Turner | Simplexity</title>
NEW: <title>Executive Coach Brisbane — Will Turner | Simplexity | Leadership Clarity</title>

### REPLACE meta description:
OLD: <meta name="description" content="1:1 executive coaching for senior leaders. Will Turner identifies unconscious complexity and engineers the penny drop moment in private. High-value, low-volume.">
NEW: <meta name="description" content="1:1 executive coaching for senior leaders with Will Turner. High-value, low-volume. Identifies unconscious complexity and engineers the penny drop moment in private. Brisbane, Australia.">

### UPDATE keywords:
<meta name="keywords" content="executive coach Brisbane, executive coach Australia, leadership coach Brisbane, 1:1 leadership coaching, Will Turner coach, Simplexity coaching, unconscious complexity coaching, senior leadership coach Queensland">

### ADD to <script type="application/ld+json"> — insert additional schema:
Add a HowTo schema for "How executive coaching with Will Turner works" with steps:
1. First conversation — understand the specific challenge and what unconscious complexity is at play
2. The penny drop session — name it, see it, own it
3. Move forward — with one specific action you intuitively know is right

### ADD FAQs to coaching schema:
- "What is executive coaching with Will Turner?"
- "How long does executive coaching with Will Turner last?"  
- "Who is executive coaching with Will Turner for?"
- "What makes Will Turner different as an executive coach?"

## ─────────────────────────────────────────────────
## advisory.html
## ─────────────────────────────────────────────────

### REPLACE title:
OLD: <title>Trusted Advisor — Will Turner | Simplexity</title>
NEW: <title>Trusted Advisor — Will Turner | Strategic Clarity | Simplexity</title>

### REPLACE meta description:
OLD: <meta name="description" content="Will Turner works with 2–3 organisations as a trusted advisor — the person who names the unconscious complexity and creates leadership clarity.">
NEW: <meta name="description" content="Will Turner works with 2–3 organisations as a trusted advisor — embedded, present, the person who names the unconscious complexity and creates the leadership clarity the organisation cannot build for itself.">

### UPDATE keywords:
<meta name="keywords" content="trusted advisor Brisbane, strategic advisor Australia, leadership advisor Queensland, Will Turner advisor, Simplexity advisory, unconscious complexity advisor, strategic clarity advisor, executive advisor Brisbane">

## ─────────────────────────────────────────────────
## book.html
## ─────────────────────────────────────────────────

### REPLACE title:
OLD: <title>Simplexity — The Book | Will Turner</title>
NEW: <title>Simplexity — The Book by Award-Winning Author Will Turner | Q1 2027</title>

### REPLACE meta description:
OLD: <meta name="description" content="Simplexity — The Simple Truth Inside Everything Complex. Will Turner's forthcoming book on unconscious complexity. Arriving Q1 2027.">
NEW: <meta name="description" content="Simplexity: The Simple Truth Inside Everything Complex — Will Turner's forthcoming book. From the award-winning author (Australian Business Book Awards 2023). On unconscious complexity and the penny drop. Q1 2027.">

### UPDATE keywords:
<meta name="keywords" content="Simplexity book, Will Turner book, unconscious complexity book, leadership book 2027, Simplexity The Simple Truth, Will Turner author, Australian Business Book Awards, leadership clarity book, penny drop book">

### REPLACE the entire <script type="application/ld+json"> block:
→ Use the content from schema-book.html

## ─────────────────────────────────────────────────
## simplexity.html
## ─────────────────────────────────────────────────

### Title is good — keep as is

### REPLACE meta description:
OLD: <meta name="description" content="Simplexity: finding the simple human truth inside every complex challenge. Will Turner's original framework — the Simplexity Matrix, unconscious complexity, and the penny drop.">
NEW: <meta name="description" content="Simplexity: finding the simple human truth inside every complex challenge. Will Turner's original framework — the Simplexity Matrix, unconscious complexity, the penny drop, and the science behind them. Created by award-winning author Will Turner.">

### UPDATE keywords:
<meta name="keywords" content="Simplexity, what is Simplexity, Simplexity framework, Simplexity Matrix, unconscious complexity, the penny drop, Will Turner framework, leadership clarity framework, Ashby's Law leadership, conscious simplicity, unconscious simplicity">

### REPLACE the entire <script type="application/ld+json"> block:
→ Use the content from schema-simplexity.html

## ─────────────────────────────────────────────────
## contact.html
## ─────────────────────────────────────────────────

### REPLACE title:
OLD: <title>Work with Will Turner — Simplexity</title>
NEW: <title>Book Will Turner — Keynote Speaker, Coach & Advisor | willturner.au</title>

### REPLACE meta description:
OLD: <meta name="description" content="Enquire about booking Will Turner as a keynote speaker, executive coach, or trusted advisor. Based in Brisbane, Australia. Working with leaders worldwide.">
NEW: <meta name="description" content="Book Will Turner as a keynote speaker, executive coach, or trusted advisor. Award-winning author. Based in Brisbane, Australia. Working with leaders across Australia, UK, and globally. Enquire today.">

## ─────────────────────────────────────────────────
## NEW FILES TO ADD TO REPO ROOT
## ─────────────────────────────────────────────────

1. llms.txt          → from llms.txt (this folder)
2. sitemap.xml       → from sitemap.xml (this folder) — replaces existing
3. robots.txt        → from robots.txt (this folder) — replaces existing

## ─────────────────────────────────────────────────
## BODY CONTENT AUDIT — CHANGES NEEDED ACROSS SITE
## ─────────────────────────────────────────────────

### "20 years" → "25 years" throughout
Every page that references "20 years" or "20+ years" should be updated to 
"25 years" or "25+ years" to reflect accurate experience.

### Award credentials — add where absent
The ABBA 2023 dual win should appear on:
- Homepage (add to "about Will" section if one exists)
- About page (already present — confirm it's prominent)
- Book page (already present — confirm placement)
- Speaking page (add to credibility section)
- Coaching page (add to credibility section)

### Internal linking — add where missing
Each page should link to simplexity.html using anchor text "Simplexity" 
and "unconscious complexity" where those terms appear in body copy.

Example: change "the penny drop" in speaking.html body copy to
<a href="simplexity.html#penny-drop">the penny drop</a>

## ─────────────────────────────────────────────────
## PRIORITY ORDER FOR IMPLEMENTATION
## ─────────────────────────────────────────────────

CRITICAL (do first):
1. Add llms.txt to repo root
2. Update robots.txt
3. Update sitemap.xml

HIGH (do second):
4. Replace schema on index.html (biggest impact — homepage)
5. Replace schema on simplexity.html (core concept page)
6. Replace schema on speaking.html (primary commercial page)
7. Replace schema on about.html (E-E-A-T authority signals)

MEDIUM (do third):
8. Replace schema on book.html
9. Update all title tags
10. Update all meta descriptions
11. Update "20 years" → "25 years" throughout

LOWER (do last):
12. Add keywords meta updates
13. Add internal anchor links for SEO
14. Add llms.txt link tag to all pages
