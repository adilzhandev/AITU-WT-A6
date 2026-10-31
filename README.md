# Assignment 6 — jQuery

**Student:** Adilzhan Kuandykov  
**Group:** SE-2526

This project demonstrates jQuery selectors, effects, DOM changes and animations. It uses plain HTML, CSS and JavaScript with jQuery 3.7.1 from a CDN. The mini project is a bouncing ball with Start, Pause and Reset buttons. Each assignment part has a separate page, connected by the navigation bar.

**Website:** [Open the assignment](https://adilzhandev.github.io/AITU-WT-A6/)  
**Repository:** [adilzhandev/AITU-WT-A6](https://github.com/adilzhandev/AITU-WT-A6)

## Run on localhost

Open a terminal in this project folder and run:

```bash
python3 -m http.server 5500 --bind 127.0.0.1
```

Then open [http://localhost:5500](http://localhost:5500). Keep the terminal running. Press `Ctrl+C` in that terminal to stop the server. No package installation or build command is needed. An internet connection is needed to load jQuery from its CDN.

## Where to find each task

| Page | Tasks | What it demonstrates |
| --- | --- | --- |
| `index.html` | 0–1 | Ready event, selectors, text, HTML and CSS changes |
| `effects.html` | 2–4 | Show/hide, fading an image and sliding a panel |
| `dom.html` | 5–7 | List items, image/link attributes and live form values |
| `animations.html` | 8–10 | Basic, sequential and combined animations |
| `project.html` | 11 | Bouncing ball mini project |

`styles.css` controls the appearance of all pages. `script.js` contains the behavior, with numbered comments for the tasks. `assets/mountains.svg` and `assets/sunset.svg` are the local images. The full jQuery build is used because the slim build does not include effects and animations.

## Explain the code during the defense

**HTML, CSS and JavaScript:** HTML creates elements such as buttons and paragraphs. CSS styles them. JavaScript responds to actions. jQuery is a JavaScript library that makes selecting and changing elements easier.

**Ready:** `$(document).ready(function () { ... });` runs its code when the page's HTML has been turned into the DOM. The DOM is the browser's representation of the page. The console prints `jQuery is ready!` to confirm that the setup works.

**Selectors:** `$()` finds elements. `$("#title")` selects the element with that ID, `$(".note")` selects elements with that class, and `$("p")` selects paragraph tags. IDs should be unique; a class can belong to several elements.

**Events:** `.on("click", function () { ... })` tells jQuery what to do when a button is clicked. The function inside is an event handler. The form uses the `input` event so the preview changes as the user types or clears a field.

**Content and style:** `.text("Hello")` inserts plain text. `.html("<strong>Hello</strong>")` inserts HTML, so the word becomes bold. `.css("color", "green")` changes a style. User input is displayed with `.text()` so it is not interpreted as HTML.

**Effects:** `.hide()` and `.show()` change visibility. `.toggle()` switches between them. The fade methods animate opacity, while the slide methods animate the height of the element. An animation duration such as `400` means 400 milliseconds.

**List changes:** `.append()` inserts content at the end of an element. `.prepend()` inserts it at the beginning. `.remove()` deletes the selected element from the page.

**Attributes and values:** `.attr("src", "assets/sunset.svg")` changes an image's source. `.attr("href", "https://api.jquery.com")` changes a link's destination. `.val()` reads the current text from an input, and `.text()` copies that value into the preview.

**Animations:** `.animate({ left: "100px", width: "100px" }, 600)` changes numeric CSS properties over time. A box with `position: relative` can move using `left` and `top`. Its movement is measured from its normal position. The animation area limits the space available for the demonstration.

**Sequence and queue:** Chained `.animate()` calls run one after another on the same element. Changing several properties inside one call animates them together. `.stop(true, true)` clears waiting animations and finishes the current one; this prevents repeated clicks from building a long queue. A reset also restores the starting CSS values.

**Bouncing ball:** The ball is a 56-pixel square `<div>` made circular with `border-radius: 50%`. It sits inside a track whose width is `calc(100% - 56px)`. Subtracting the ball's width keeps the whole ball inside the area when it reaches the right edge.

**Repeating the movement:** `bounceBall()` chains two animations: `left: "100%"` moves the ball right, and `left: "0%"` brings it back. The second animation receives `bounceBall` as its callback, so the next trip starts after this one finishes. Each animation lasts 1000 milliseconds.

**Start, Pause and Reset:** `isBouncing` is a Boolean variable: `true` means moving, and `false` means stopped. Start sets it to `true` and starts the movement once. Pause sets it to `false` and calls `.stop(true)` to clear waiting animations and keep the current position. Unlike `.stop(true, true)`, it does not jump to the end of the current animation. Reset also moves the ball to `left: "0%"`. The buttons and status text show whether the ball is moving or paused.

These selector names in the explanation are small examples. For the actual page selectors, read the numbered task sections in `script.js` alongside the matching HTML page.

## Practice small changes

- Change the text passed to `.text()` and click the button again.
- Change a color inside `.css()` and explain the result.
- Increase an effect's duration to make it slower.
- Replace `.append()` with `.prepend()` and observe the insertion order.
- Change the image path or link destination in `.attr()`.
- Change a box's `left`, `width` or `opacity` value in `.animate()`.
- Change the ball's animation duration from `1000` to `2000` and explain why it moves more slowly.
- Change the ball's background color in `styles.css`.

Reload the page to return to its initial state. Changes made by these demos are kept only in the current page; they are not saved to a database.

## GitHub Pages

The website is published from the `main` branch and the repository root (`/`). The `.nojekyll` file tells GitHub Pages to serve the static files directly. No build command is needed.

To update the website, commit your changes and push them to `main`. GitHub Pages publishes the new version automatically. Check **Actions** for deployment progress or **Settings → Pages** for the published URL.

For assignment submission, use the repository link above and include the website link so the instructor can open the demonstrations.

See the official [GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Reference

[jQuery API documentation](https://api.jquery.com/)
