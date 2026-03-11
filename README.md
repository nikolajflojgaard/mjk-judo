# Måløv Judoklub

Hjemmeside for **Måløv Judoklub** — lokal judoklub for børn, unge og voksne i Måløv.

## 🌐 Live site

**Repo:** https://github.com/nikolajflojgaard/mjk-judo

## 📝 Om klubben

Måløv Judoklub tilbyder judo i et trygt og lokalt fællesskab med fokus på:
- Bevægelse, balance og kropskontrol
- Respekt og disciplin
- Fællesskab for børn, unge og voksne
- En nem og tryg start for nye medlemmer

**Adresse:** Måløv Hovedgade 50, 2760 Måløv  
**Telefon:** 21 41 84 06  
**Email:** mjkjudo@gmail.com

## 🕒 Træningstider

**Børnehold (7-11 år)**
- Tirsdag: 18:00–19:00
- Torsdag: 18:00–19:00

**Ungdoms- og voksenhold (12+ år)**
- Tirsdag: 19:00–21:00
- Torsdag: 19:00–21:00

## 🚀 Teknologi

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS
- **Type:** Statisk website
- **Maps:** Google Maps embed

## 🛠️ Udvikling

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## 📁 Projektstruktur

```text
mjk-judo/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/
│   └── images/
└── package.json
```

## 📦 Byg en `site.zip` til upload i filemanager

Hvis siden skal deployes manuelt via en hosting filemanager, kan du bygge en zip-fil med det færdige site sådan her:

```bash
npm run build
cd dist
zip -r ../site.zip .
```

Det giver en fil i projektroden:

```text
site.zip
```

### Vigtigt

Zip **indholdet af `dist/`** — ikke selve `dist`-mappen.

Det vil sige, at zip-filen efter upload og udpakning skal ende med at lægge filer direkte i webroden, fx:

```text
index.html
kontakt/
om-judo/
om-klubben/
traening/
_astro/
images/
robots.txt
rss.xml
```

### Typisk deploy-flow

1. Kør build:
   ```bash
   npm run build
   ```
2. Lav zip:
   ```bash
   cd dist
   zip -r ../site.zip .
   ```
3. Upload `site.zip` i hostingens filemanager
4. Udpak zip-filen i webroden (`public_html`, `htdocs` eller tilsvarende)
5. Sørg for at filer og mapper ligger direkte i webroden — ikke inde i en ekstra `dist/`-mappe

## 📄 Sider

### Forside (`/`)
- Hero med klare CTA’er
- Træningstider direkte i toppen
- Intro til klubben
- FAQ for nye medlemmer
- Kort og kontaktsektion

### Kontakt (`/kontakt`)
- Kontaktoplysninger
- Prøvetrænings-flow
- Formular til nye medlemmer / forældre

### Om Judo (`/om-judo`)
- Kort introduktion til hvad judo er
- Fordele ved sporten
- Intro til bælter og udvikling

### Om Klubben (`/om-klubben`)
- Klubbens værdier
- Hvad man kan forvente som nyt medlem
- Praktisk information

### Træning (`/traening`)
- Oversigt over hold og træningstider

## 🎨 Design

- **Stil:** Enkel, lokal og troværdig
- **Font:** Inter
- **Fokus:** Mobilvenligt layout og tydelige call-to-actions
- **Mål:** Gøre det nemt at forstå klubben og komme i gang hurtigt

## ✅ Det der er lavet i projektet

- Forsiden er gjort mere lokal og mindre template-agtig
- Træningstider er flyttet højt op i brugerflowet
- FAQ for nye medlemmer er tilføjet
- “Første gang”-sektion er tilføjet
- Kontaktflowet er gjort mere direkte mod prøvetræning
- Fake map-placeholder er erstattet med rigtigt embed
- Sociale links og kontaktoplysninger er opdateret
- Billeder og sektioner er justeret til klubbens faktiske indhold
- Build er gjort fungerende igen

## 🔎 SEO

Der er lavet et grundlæggende SEO-setup i projektet, så siden ikke bare er pæn, men også teknisk sat ordentligt op.

### Det omfatter

- side-specifikke **title** og **meta description** på de vigtigste sider
- **canonical URLs** via layoutet
- **Open Graph** metadata til deling på sociale medier
- **Twitter card** metadata
- **robots meta** (`index,follow`)
- **structured data / schema markup** for klubben som lokal sportsaktivitet
- korrekt **robots.txt**
- site-konfiguration opdateret fra starter-template til rigtig domæne-/brandinfo

### Hvor det er sat op

- Globalt layout og metadata:
  - `src/layouts/Layout.astro`
- Site / brand config:
  - `src/consts.ts`
- Robots:
  - `src/pages/robots.txt.ts`
- Side-specifikke metadata:
  - `src/pages/index.astro`
  - `src/pages/kontakt.astro`
  - `src/pages/om-judo.astro`
  - `src/pages/om-klubben.astro`
  - `src/pages/traening.astro`

### Bemærkning

Det her er et solidt **baseline SEO-setup**. Hvis siden senere skal pushes hårdere organisk, er næste lag typisk:
- mere lokal søgeordsoptimeret tekst
- flere landingssider / indholdssider
- FAQ schema udvidelse
- bedre delingsbilleder / OG-billeder pr. side

## 📝 Bemærkninger

Projektet stammer fra en Astro-baseret starter, men er tilpasset kraftigt til Måløv Judoklub.

Hvis siden skal videreudvikles, giver det mest mening at tage næste skridt med:
- flere rigtige klubbilleder
- korrekt formular-backend
- medlemskab / kontingent-side hvis relevant
- yderligere lokal SEO

---

**Lavet af:** ReichkendlerSolutions / Nikolaj Fløjgaard  
**Projekt:** Website for Måløv Judoklub
