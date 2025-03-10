# Weglot bugs

Demonstrates "removeChild" and "insertBefore" bugs with Weglot when used with React.

This simple application uses vite to transform and serve the react code.

## Local setup
1. Run `npm install`
2. Run `npm run dev`
3. Open `http://localhost:5173` in your browser

## Steps to reproduce
1. Open your locally served application, or visit https://brianpeiris.github.io/weglot-bug
2. The application is in English by default.
3. Click on the "Toggle frog" button change the end of the sentence.
4. Click on the "Toggle animal" button to hide the end of the sentence.
5. Refresh the page.
6. Switch to French using the language switcher in the bottom right corner.
7. Click on the "Toggle frog" button and see the error in the console.
8. Refresh the page.
9. While still in French, click on the "Toggle animal" button and see the error in the console.


## Solution

The Weglot support team has provided a solution to the original bug. As seen in `src/Spans.jsx`, the solution is to wrap text in span nodes so that they aren't just disconnected text nodes that may cause a mismatch in the DOM manipulation.
