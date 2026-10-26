# Lab 2: AI log

## Tools
- Gemini
- Claude

## Conversations
- Conversație privată Gemini (Lab 2: Vite project setup, modules, array methods, immutable updates, fetch with async/await) https://share.gemini.google/HBc5FCae12Ds
- Conversație privată Claude (Lab 2: checking the project against the lab guides, README and AI log) https://claude.ai/share/99fcfa0a-b2ba-484f-8c8b-c495e352bd79

## Key requests
### 1. Project setup and modules
- Asked: how to set up the Vite + React (JavaScript) project and split the code into `data/`, `utils/` and `api/`, with `main.jsx` only importing and printing.
- Got: the structure `app/src/data/destinatii.js`, `app/src/utils/destinatii.js` and `app/src/api/orase.js`, with named exports and imports that start with `./` and keep the `.js` extension.
- Changed or rejected: the guide replaces `App.jsx` with a single title, but I kept the tropical theme from Lab 1 and carried it into `App.jsx` and `index.css`, so the React version looks like the static page.

### 2. Processing functions
- Asked: how to write the six functions for the destination list, using `map`, `filter`, `reduce`, destructuring, template literals and the ternary operator.
- Got: `getOrase`, `getNevizitate`, `totalZile`, `formatDestinatie`, `numarPeTara` and `sortDupaZile`, each taking the list as a parameter.
- Changed or rejected: `sortDupaZile` sorts a copy (`[...list]`), because `sort` changes the array it is called on. `numarPeTara` uses `reduce` with `{}` as start value and a computed key.

### 3. Changing the list without breaking it
- Asked: how to toggle `vizitat`, add and delete a destination without changing the original list.
- Got: `marcheazaVizitat` (`map` + ternary + spread), `adaugaDestinatie` (spread on the list) and `stergeDestinatie` (`filter`).
- Changed or rejected: I kept the checks in `main.jsx` that compare the original list with the new one, including `destinatii[1] === dupaMarcare[1]`, to prove that only the changed element was copied.

### 4. Data from an API
- Asked: how to read the users from JSONPlaceholder and use their cities, with errors handled.
- Got: `fetchUsers` and `fetchUserById` in `api/orase.js`, both checking `response.ok` and throwing `Error('HTTP <status>')`, and an async `loadOrase` in `main.jsx` with `try / catch`.
- Changed or rejected: the city names are taken with `map` from `user.address.city`, and the names longer than 10 characters are counted with `filter`, as the exercise asks.

### 5. Checking with Claude
- Asked: to compare the repository with the Lab 1 and Lab 2 guides, check the functions against the expected console output, and write the README and this log.
- Got: all 13 function checks matched the guide (4 unvisited, 18 days left, 22 days in total, `[x] Cluj-Napoca, România (2 zile)`, Kyoto as the longest visit, 2 destinations per country, original list unchanged after add, toggle and delete). The API requests could not be run in Claude's environment because it has no internet access, so those results were checked by reading the code and have to be confirmed in the browser console.
- Changed or rejected: Claude did not change any code. It noticed that some console messages are worded differently from the guide (for example `L2 Ex. 1 orașe:` instead of `L2 Ex. 1 - orașe:`); the values are the same.

## What I learned / what did not work
Learned why `map`, `filter` and spread leave the original list untouched while `push`, `splice` and `sort` do not, and why that matters for React. Learned that `fetch` does not fail on a 404, so `response.ok` has to be checked and the error thrown by hand, and that a function using `await` must be marked `async` and also called. Learned to read import errors by checking the `./` path, the `.js` extension and the exact name used in `export`.
