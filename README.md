# City Explorer

A small travel-guide website presenting tourist destinations: cities, countries, recommended stay length, and a trip-planning form.
Built for the Tehnologii Web course (FIIR, UPB, 2026-2027). It started as a static HTML/CSS page (Lab 1) and is now moving to a Vite + React app, with the data logic written in plain JavaScript (Lab 2).

**Author:** Mihai Raluca-Mihaela

## Data model

| Field   | Type    | Notes                                   |
| ------- | ------- | --------------------------------------- |
| id      | text    | unique, used to find, toggle and delete |
| oras    | text    | city name                               |
| tara    | text    | country                                 |
| zile    | number  | recommended number of days              |
| vizitat | boolean | visited or not, toggled immutably       |

Sample data used in Lab 2 (`app/src/data/destinatii.js`):

1. Lisabona, Portugalia, 4 days, not visited
2. Cluj-Napoca, România, 2 days, visited
3. Porto, Portugalia, 3 days, not visited
4. Brașov, România, 2 days, visited
5. Kyoto, Japonia, 6 days, not visited
6. Tokyo, Japonia, 5 days, not visited

## Project structure

```
city-explorer/
├── index.html           Lab 1: static page (header, destinations, form, tips, footer)
├── css/
│   └── style.css        Lab 1: tropical theme, Flexbox header, Grid cards
├── app/                 Lab 2: Vite + React app
│   ├── index.html
│   ├── package.json
│   └── src/
│       ├── main.jsx             imports, calls and console output (L2 prefix)
│       ├── App.jsx              page structure
│       ├── index.css            tropical theme carried over from Lab 1
│       ├── data/destinatii.js   the list of destinations
│       ├── utils/destinatii.js  processing functions
│       └── api/orase.js         fetch requests
└── ai-log/              AI usage log, one file per lab
```

## Pages

The page has three sections, linked from the header menu:

- **Destinații**: five destination cards (Paris, Roma, Kyoto, New York, Barcelona), one of them highlighted with the `featured` class
- **Planifică**: a form with name, destination, number of days and a submit button
- **Recomandări**: a list of three travel tips

The static version (`index.html`) and the React version (`app/`) show the same content and use the same theme.

## How to run

**Static page (Lab 1):** open `index.html` with Live Server in VS Code. No build step.

**React app (Lab 2):**

```bash
cd app
npm install
npm run dev
```

Then open the address printed by Vite (usually http://localhost:5173) and press F12 → Console to see the Lab 2 results.
Other scripts: `npm run build` (production build), `npm run lint`.

## Lab 1: static page

Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`) with a labelled form, styled from a single file, `css/style.css`. The header uses Flexbox, the destination cards use Grid with `repeat(auto-fit, minmax(240px, 1fr))` so the number of columns adapts to the screen, and the `featured` card has its own look. Cards have a hover effect, and links, buttons and form fields have visible focus states.

## Lab 2: Vite and modern JavaScript

The code is split by responsibility, and `main.jsx` only imports and prints. Results appear in the browser console, each message starting with `L2`.

**Exercise 1: processing the list** (`utils/destinatii.js`)

| Function | What it returns | Built with |
| --- | --- | --- |
| `getOrase(list)` | the city names | `map` |
| `getNevizitate(list)` | destinations not yet visited | `filter` |
| `totalZile(list)` | the total number of days | `reduce`, start value 0 |
| `formatDestinatie(d)` | one text line, e.g. `[x] Cluj-Napoca, România (2 zile)` | destructuring, template literal, ternary |
| `numarPeTara(list)` | how many destinations per country | `reduce`, computed key, `??` |
| `sortDupaZile(list)` | the list sorted by days, descending | `sort` on a copy `[...list]` |

**Exercise 2: changing the list without breaking it**

`marcheazaVizitat`, `adaugaDestinatie` and `stergeDestinatie` always return a new list and never change the one they receive. `main.jsx` proves it: the original list keeps its values, and an untouched element is the same object in both lists (`destinatii[1] === dupaMarcare[1]`).

**Exercise 3: data from an API** (`api/orase.js`)

`fetchUsers` and `fetchUserById` call the public JSONPlaceholder API, check `response.ok` and throw `Error('HTTP <status>')` on failure. `loadOrase` in `main.jsx` wraps the calls in `try / catch`, reads each city from `user.address.city`, counts the names longer than 10 characters and loads user 1 separately.

## Current limits

- `App.jsx` is still static: the cards and the form options are written by hand and do not use `destinatii.js` yet
- the form has no submit logic
- the API returns test users, so the cities from it are only used for the exercise

## AI usage

| Tool   | Used for                                                                                                  |
| ------ | --------------------------------------------------------------------------------------------------------- |
| Gemini | Lab 2: Vite project structure, processing functions, immutable updates, fetch with async/await and try/catch |
| Claude | Lab 2: checking the project against the lab guides and the expected console output, README and AI log       |

Details per lab: see the `ai-log/` folder.

## Status

- [x] Lab 1: static page, CSS, Git and GitHub
- [x] Lab 2: Vite project, modules, list processing, API requests
- [ ] Lab 3: React components

## Checklist - Lab 1

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| L1-R1 | header with site name and nav with 3 internal links | [index.html L10-L17](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/index.html#L10-L17) | open the page |
| L1-R2 | 5 destinations as `article` (city, country, description, duration) | [index.html L20-L54](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/index.html#L20-L54) | open the page |
| L1-R3 | form with name, destination (`select`), days and button, labels linked by `for` | [index.html L56-L77](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/index.html#L56-L77) | click a label, the field activates |
| L1-R4 | list with at least 3 travel tips | [index.html L79-L86](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/index.html#L79-L86) | read |
| L1-R5 | footer with author and year | [index.html L89-L91](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/index.html#L89-L91) | bottom of the page |
| L1-R6 | header with Flexbox, name on the left, menu on the right | [style.css L91-L97](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L91-L97), [L174-L178](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L174-L178) | open the page |
| L1-R7 | form fields stacked, labels above, fields full width | [style.css L376-L385](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L376-L385), [L399-L403](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L399-L403) | look at the form |
| L1-R8 | cards with Grid, padding, border, radius, gap | [style.css L263-L267](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L263-L267), [.card L269-L281](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L269-L281) | look at the cards |
| L1-R9 | one `featured` card with a different look | [index.html L29](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/index.html#L29), [style.css L323-L346](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L323-L346) | the Roma card stands out |
| L1-R10 | `:hover` on cards and `:focus` on fields | [.card:hover L306](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L306), [input:focus L416-L419](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L416-L419) | mouse over a card, Tab on the form |
| L1-R11 | columns adapt to the screen width | [style.css L265](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L265), [@media L478-L483](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/css/style.css#L478-L483) | resize the window |
| L1-R12 | repository with README and at least 4 separate commits | [commit 1578cac](https://github.com/ralucamihai/city-explorer/commit/1578cac4f7980aba64082edf15f387cab1bf09ed), [951ebb7](https://github.com/ralucamihai/city-explorer/commit/951ebb7e672a70281c3aea24d71e3a1a24ab6a4a), [04d9b3b](https://github.com/ralucamihai/city-explorer/commit/04d9b3b870881fe14b1ca75f6b02a2f73944341b) | [commit history](https://github.com/ralucamihai/city-explorer/commits/main) |

## Checklist - Lab 2

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| L2-R1 | Vite + React (JavaScript) project in `app/`, `npm run dev` and `npm run lint` work | [app/package.json](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/package.json), [.oxlintrc.json](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/.oxlintrc.json) | `npm install`, `npm run dev` |
| L2-R2 | data list copied exactly, in its own file | [data/destinatii.js L1-L8](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/src/data/destinatii.js#L1-L8) | compare with the guide |
| L2-R3 | six processing functions, each exported, none changes the list | [utils/destinatii.js L1-L13](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/src/utils/destinatii.js#L1-L13) | read |
| L2-R4 | three functions that return a new list | [utils/destinatii.js L15-L20](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/src/utils/destinatii.js#L15-L20) | read |
| L2-R5 | Exercise 1 results in the console | [main.jsx L23-L29](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/src/main.jsx#L23-L29) | F12, Console |
| L2-R6 | Exercise 2 proves the original list is unchanged | [main.jsx L31-L41](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/src/main.jsx#L31-L41) | F12, Console |
| L2-R7 | two async functions that check `response.ok` | [api/orase.js L3-L17](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/src/api/orase.js#L3-L17) | read |
| L2-R8 | `loadOrase` with `try / catch`, called at the end | [main.jsx L44-L58](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/src/main.jsx#L44-L58) | F12, Console |
| L2-R9 | code split into modules, every message starts with `L2` | [main.jsx L1-L21](https://github.com/ralucamihai/city-explorer/blob/b789354d279996a07418f835c145f20391b363a7/app/src/main.jsx#L1-L21) | read |
| L2-R10 | README Lab 2 section + AI log | [README.md](https://github.com/ralucamihai/city-explorer/blob/main/README.md), [ai-log/lab-02.md](https://github.com/ralucamihai/city-explorer/blob/main/ai-log/lab-02.md) | read |
| L2-R11 | commits for Lab 2 pushed | [6c0dc61](https://github.com/ralucamihai/city-explorer/commit/6c0dc61c1fd0b2d9c5cbf0af244167824038f4a2), [1d2f925](https://github.com/ralucamihai/city-explorer/commit/1d2f925a339af7fa140637b2d38355da14635c15), [00041ed](https://github.com/ralucamihai/city-explorer/commit/00041ed6172ae30dbd028b3be665c4eba049a013), [b789354](https://github.com/ralucamihai/city-explorer/commit/b789354d279996a07418f835c145f20391b363a7) | commit history |
