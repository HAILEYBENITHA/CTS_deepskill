# Ex14 - Employee Theme App (employeethemeapp) - ReactJS HOL

Source: ReactJS-HOL.docx (Digital Nurture Java FSE - Deepskilling / React)

## Objectives
- Need and benefits of the React Context API
- Working with `createContext()`
- Router component types (conceptual)

## Task
The employee management app supports **light** and **dark** themes for its
buttons. The original solution passed the theme name from `App` →
`EmployeesList` → `EmployeeCard` via props. Convert it from **props-only** to
the **React Context API** so nested children share the theme without prop
drilling.

## Steps
1. Download / unzip the application and run `npm install`, then `npm start`.
2. Explore `App.js`, `EmployeesList.js`, and `EmployeeCard.js`.
3. Create `ThemeContext.js` defining a context named `ThemeContext` with a
   default value of `'light'`, exported as default.
4. In `App.js`, import `ThemeContext`, wrap the entire JSX in
   `ThemeContext.Provider`, assign the value from the component state, and stop
   passing the theme as props to `EmployeesList`.
5. In `EmployeesList.js`, stop passing the theme name explicitly to its child.
6. In `EmployeeCard.js`, import `ThemeContext`, retrieve the value with
   `useContext()`, store it in a variable, and use it as the `className` for the
   buttons.

## Concepts Covered
- `React.createContext()`
- `ThemeContext.Provider` (provider)
- `useContext()` (consumer)
- Eliminating prop drilling

## Run
```
npm install
npm start
```
