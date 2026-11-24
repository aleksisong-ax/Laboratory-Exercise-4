# CvSU Mini Store — Laboratory Exercises 3 & 4

A complete Vite + React implementation of the two attached labs. The current branch, `lab4-live`, contains the Exercise 3 product catalog plus Exercise 4 live search, category filtering, price sorting, debouncing, result count, and document-title effect.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To make a production build, run `npm run build`.

## Branches

- `main` — completed Laboratory Exercise 3 (product cards, props, callback/cart, responsive styling).
- `lab4-live` — Laboratory Exercise 4 extension (controlled SearchBar, combined filters, sorting, debounce, title update, empty state).

Switch versions with `git switch main` or `git switch lab4-live`.

## Implementation notes

- `ProductCard` destructures all props, defaults `category` to `General`, renders optional `children`, and disables the button for unavailable products.
- `App` owns cart state and passes `handleAddToCart` down as a callback. Products are rendered with `.map()` and stable `id` keys.
- `SearchBar` is controlled by state owned by `App`.
- Search waits 300 ms after the last keystroke. The effect cleanup cancels any earlier timer.
- Filter/sort results are derived during render from a copied array, so the imported source data is not mutated.
- The page title effect depends on the number of displayed results.

## Guide questions — Laboratory Exercise 3

1. **What is the difference between props and state?** Props are inputs a component receives from its parent; state is data the component (or its owner) manages and updates over time.
2. **Why can a child not modify its props?** React treats props as read-only inputs. A child that changes them directly would make data flow unpredictable; it should ask its parent to update through a callback.
3. **How does `onAddToCart` move data upward?** The parent passes a function down as a prop. The child calls it with the product title, and the function executes in the parent, where cart state is updated.
4. **Why are keys needed for `.map()`?** Keys let React identify each list item across renders. Missing or duplicate keys can cause warnings and incorrect reuse or updates of list elements.
5. **What does `children` allow?** It lets a parent place arbitrary nested content inside a component, such as a badge, without the component needing a dedicated prop for every possible piece of content.

## Guide questions — Laboratory Exercise 4

1. **Why keep `searchText` and `debouncedSearch` separately?** `searchText` updates immediately so the input feels responsive; `debouncedSearch` updates only after typing pauses, avoiding repeated filtering while a person is still typing.
2. **What if the debounce effect had no cleanup?** Multiple pending timers could fire for outdated text, causing unnecessary updates and potentially making the results briefly stale or out of order.
3. **What is the dependency array for? What if it is empty or omitted?** It tells React which values an effect uses and when it must rerun. `[]` means run after the initial mount only; omitting it runs after every render, which can repeat work and may create render loops if the effect updates state.
4. **Why not sort the original products array?** `sort()` mutates its array. Mutating imported/shared source data can create order-dependent bugs, so this app sorts a copied array.
5. **Should filtered products be separate state?** Usually no: they are fully derived from the products and current filter/sort state. Calculating them during render avoids storing duplicate data that could get out of sync.

## GitHub submission

The local repository includes meaningful commits on both required branches. To publish it, create an empty GitHub repository, add its URL as `origin`, then push both branches:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
git push -u origin lab4-live
```

Replace the example URL with your actual repository URL before submitting. No GitHub account or remote was connected here, so the repository has been prepared locally but not published.

## GitHub Pages hosting

The `lab4-live` branch includes a GitHub Actions workflow that builds this app with the correct repository path and deploys it to Pages. In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The site URL will be `https://aleksisong-ax.github.io/Laboratory-Exercise-4/` after the first successful workflow run.
