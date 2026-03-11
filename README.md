# Måløv Judoklub website

Website for **Måløv Judoklub** built in **Astro**.

The site is designed as a simple, local club website focused on one thing: making it easy for new members and parents to understand what the club is, where it is, when training happens, and how to get started.

## What this project is

This is the public website for Måløv Judoklub.

It is not a complex web app. It is a fast, static marketing/information site with:

- front page with clear calls to action
- training times shown early in the user flow
- contact / trial training flow
- local club information
- FAQ for common beginner questions
- Google Maps embed and contact details
- mobile-friendly layout for phones, tablets, and laptops

## What was improved

The site was significantly cleaned up and tightened from a UX/content perspective.

### Content and UX improvements

- rewrote the homepage to feel more like a real local club and less like a generic template
- moved training times into the hero section so they are visible immediately
- simplified the navigation by removing unnecessary emphasis on the dedicated training page
- improved button hierarchy and CTA clarity
- added a quick trust section under the hero
- added a **first-time / getting started** section
- added an **FAQ** section for common newcomer questions
- improved the **Om klubben** page with more realistic club-oriented content
- improved the **Kontakt** page so it works more like a trial-training intake page
- updated the copy to better match the club and the real onboarding flow

### Visual improvements

- replaced placeholder/fake content in several places
- added and adjusted local imagery
- improved the image treatment in the “Judo er for alle” section
- replaced the fake map section with a real embedded Google Map
- improved the location/contact section layout
- added real Facebook and Instagram links

### Technical cleanup

- fixed missing package dependencies required for build
- verified that the site builds successfully with Astro
- kept the project as a simple static site

## Current pages

- `/` — homepage
- `/kontakt` — contact / trial training page
- `/om-judo` — about judo
- `/om-klubben` — about the club
- `/traening` — training schedule page

## Training times

Current training times in the project:

- **Børnehold:** Tuesday + Thursday, **18:00–19:00**
- **Ungdoms- og voksenhold:** Tuesday + Thursday, **19:00–21:00**

## Tech stack

- [Astro](https://astro.build/)
- Tailwind CSS
- Static pages

## Project structure

```txt
src/
  components/
  layouts/
  pages/
public/
  images/
```

## Local development

Install dependencies:

```bash
npm install
```

Run local dev server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Notes

There is still some template heritage in the repo from the Astro starter structure, but the public-facing site itself has been heavily adapted for Måløv Judoklub.

If this project keeps evolving, the next sensible steps would be:

- replace remaining starter-template leftovers
- connect the contact form to a real form backend
- add more real club photos
- add membership / pricing / signup details if needed
- improve SEO metadata page-by-page

## Repository

GitHub:

<https://github.com/nikolajflojgaard/mjk-judo>
