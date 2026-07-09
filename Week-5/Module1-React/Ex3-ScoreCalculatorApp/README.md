# Ex3 - Score Calculator App (scorecalculatorapp)

## Objective
Create a React app named **scorecalculatorapp** with a function component named
**CalculateScore** that accepts `Name`, `School`, `Total`, and `goal` as props,
calculates the average score of a student, and displays it.

## Steps
1. Create the React project:
   ```
   npx create-react-app scorecalculatorapp
   ```
2. Under `src`, create a folder named `Components` and add `CalculateScore.js`.
3. Add the `CalculateScore` function component that receives the props and
   computes the average score (`total / goalScore`).
4. Create a folder named `Stylesheets` under `src` and add `mystyle.css` to
   style the component.
5. Edit `App.js` to invoke the `CalculateScore` component and pass the props.
6. Navigate into the project and run:
   ```
   cd scorecalculatorapp
   npm start
   ```
7. Open a browser and go to `http://localhost:3000`.

## Props
| Prop | Description |
|------|-------------|
| name | Name of the student |
| school | School of the student |
| total | Total marks scored |
| goalScore | Number of subjects / goal used to average |

## Output
The page displays the student details and the calculated average score.
