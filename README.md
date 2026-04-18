# Future Museum of Extinct Things

> *It is the year 2100. You are standing in a digital archive built by those who remembered.*
> *This is what they chose to preserve.*

**[→ Visit the Museum](https://museumofuture.vercel.app/)**

Built for the [DEV Earth Day Challenge 2026](https://dev.to/challenges/weekend-2026-04-16) - a contemplative digital museum set in the year 2100, where the exhibits are the species, places, sounds, and sensations that humanity lost during the Anthropocene. Visitors can nominate what *they* are afraid we will lose, and an AI curator - powered by Google Gemini - writes a scientifically-grounded permanent exhibit for each one.

---

## What It Is

The premise: a museum from the future, looking back at us. Every exhibit documents a real environmental loss, not invented, not speculative fiction, but things already gone or measurably disappearing. The Great Barrier Reef. The monarch migration. The sound of a full dawn chorus. Truly dark skies.

The Gemini integration isn't decorative. When a visitor nominates something, *"the smell of rain on dry earth"*, *"fireflies in August"* , the AI archivist grounds it in documented science: petrichor tied to soil biome degradation, firefly populations collapsing under light pollution. It writes with restraint and grief. No calls to action. Just documentation.

---

## Built With

- **Vanilla HTML, CSS, JavaScript** 
- **GSAP** 
- **Google Gemini API** 
- **Vercel** - deployment with a serverless `/api/gemini.js` proxy to keep the API key server-side

---

## How the Gemini Integration Works

A visitor types anything: a word, a phrase, a short sentence. *"Fireflies."* *"The sound of my grandmother's forest."* Gemini receives that as a nomination and generates a full museum exhibit: a name, an era, a conservation status, a short description, a longer archival story, and category tags.

The result renders as a new card in the gallery, permanent for the session.

---

## Prize Category

Submitted under **Best use of Google Gemini** for the DEV Earth Day Challenge 2026.

---

*"We do not inherit the earth from our ancestors; we borrow it from our children."*