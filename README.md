# Drobe

**The landing site for Drobe, an iOS wardrobe app that turns photos of your clothes into a
digital closet and suggests what to wear each day. This repository holds the site, not the app.**

![Four Drobe iPhone screens: the home screen with a week strip, Today's Suggestion with a Regenerate button, and a Build Your Own card; the Customize Your Look sheet with weather and occasion choices; the Build Outfit screen with top, bottom, and shoe slots; and the empty Your Clothes list filtered by category](docs/screens.png)

Getting dressed is rarely a question of what you own. It is a question of what goes together
today, given the weather and where you are going. Drobe's answer is to catalog the closet once
from photos and then hand back an outfit each morning, tuned by a few quick inputs instead of a
scroll through a camera roll. This repository is the public face of that app: a one-page site
with the pitch and real screenshots, a privacy policy, and a support page.

Live: **https://drobe-blush.vercel.app**

```
src/app/page.tsx      ->  Hero, Features, How It Works, call to action
public/assets/*.PNG   ->  five app screenshots shown inside a CSS iPhone frame
/privacy              ->  privacy policy written for the iOS app
/contact              ->  support contact and a troubleshooting guide
next build            ->  static and server-rendered pages on Vercel
```

Photograph the closet once. Get an outfit every morning.

## The core idea

The site describes the app in three steps, and the screenshots show the screens behind them:

1. **Snap your wardrobe.** Photograph each item; the app removes the background and files it as a
   top, bottom, shoes, or another category.
2. **Define your style.** Set aesthetic preferences, height, and weight, then add context for the
   day: weather (sunny, cloudy, rainy, snowy, windy, hot, cold, humid) and occasion (casual, work,
   date, formal, workout, travel).
3. **Get daily looks.** A suggestion for today with a Regenerate button, or build an outfit by
   hand from top, bottom, and shoe slots and save it.

## What it does

| Page or piece | What is in the repo |
|---|---|
| Home page | Animated hero, a three-card feature grid, a three-step "How It Works" section, and a dark call-to-action band |
| Phone frame | `Iphone15Mockup`, a pure-CSS iPhone frame that renders a screenshot with `next/image` |
| App screenshots | Five real captures: home with week strip and Today's Suggestion, Customize Your Look, Build Outfit, the Closet with wear statistics (most-worn top, bottom, and shoes), and Your Clothes by category |
| Privacy policy | Camera use, transient photo processing, what is and is not collected, third-party processing, children's privacy, CCPA rights, retention (last updated December 22, 2025) |
| Contact page | Support email and troubleshooting steps: restart the app, check the connection, update, restart the phone, check permissions, reinstall |
| Navigation | Fixed navbar (logo home link, Privacy Policy, Contact Us) and a footer with Privacy Policy and Contact links |

## How it works

**Stack.** Next.js 15 with the App Router, React 19, TypeScript, Tailwind CSS v4 through PostCSS,
Framer Motion for entrance and scroll animations, lucide-react icons, and the Geist font family.

**Pages.** `src/app/page.tsx` composes four section components. `privacy/` and `contact/` are
plain server components. `layout.tsx` sets the metadata and wraps every page in the navbar and
footer.

**Components.** `components/sections/` holds the page sections, `components/layout/` the navbar
and footer, and `components/ui/` a button, a container, and the phone frame. `lib/utils.ts` merges
Tailwind classes with `clsx` and `tailwind-merge`.

**Deploy.** The site is a standard Next.js build hosted on Vercel.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
npm run lint     # eslint
```

## Layout

```
src/
  app/
    page.tsx               home page (Hero, Features, HowItWorks, CTA)
    layout.tsx             metadata, fonts, navbar and footer
    privacy/page.tsx       privacy policy
    contact/page.tsx       support and troubleshooting
    globals.css            Tailwind and theme variables
  components/
    sections/              Hero, Features, HowItWorks, CTA
    layout/                Navbar, Footer
    ui/                    Button, Container, Iphone15Mockup
  lib/utils.ts             class-name helper
public/assets/             the five app screenshots used by the page
IMG_2008.PNG to IMG_2012.PNG   copies of the same screenshots at the repo root
```

## Honesty

* The iOS app's source code is not in this repository. Everything said here about the app comes
  from the site's copy and the screenshots.
* The "Download for iOS" and "Download Now" buttons are not linked yet.
* There are no tests.
