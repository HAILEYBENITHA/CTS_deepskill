# Ex5 - Cohort Dashboard (CSS Modules Styling)

## Objective
Style the React components of a Cohort Dashboard (showing ongoing and completed
cohorts) using a **CSS Module**.

## Steps
1. Unzip / build the provided React application in a folder.
2. Open a command prompt and switch to the react application folder.
3. Restore the node packages:
   ```
   npm install
   ```
4. Open the application in VS Code.
5. Create a new CSS Module file named `CohortDetails.module.css`.
6. Define a `.box` class with:
   - `width: 300px`
   - `display: inline-block`
   - overall `10px` margin
   - top and bottom padding `10px`
   - left and right padding `20px`
   - `1px` solid black border
   - `border-radius: 10px`
7. Define a style for the `<dt>` element using a tag selector with
   `font-weight: 500`.
8. Open the Cohort Details component and import the CSS Module.
9. Apply the `box` class to the container `div`.
10. Style the `<h3>` element to use **green** font when the cohort status is
    `ongoing`, and **blue** in all other scenarios.
11. Verify the final result matches the expected layout.

## Concepts Covered
- CSS Modules (`*.module.css`)
- Tag selectors
- Conditional inline styling based on component data

## Run
```
npm start
```
