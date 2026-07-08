# Ex2 - Student Management Portal (StudentApp)

## Objective
Create a React app named **StudentApp** with three components — **Home**,
**About**, and **Contact** — each displaying a welcome message, and call all
three components from `App.js`.

## Steps
1. Create the React project:
   ```
   npx create-react-app studentapp
   ```
2. Under `src`, create a folder named `Components` and add `Home.js`.
3. Add the Home component code that displays
   `Welcome to the Home page of Student Management Portal`.
4. Add `About.js` under `src/Components`.
5. Repeat for `About.js` and `Contact.js` with their respective messages.
6. Edit `App.js` to invoke the `Home`, `About`, and `Contact` components.
7. Navigate into the project and run:
   ```
   cd studentapp
   npm start
   ```
8. Open a browser and go to `http://localhost:3000`.

## Components
| Component | Message |
|-----------|---------|
| Home | Welcome to the Home page of Student Management Portal |
| About | Welcome to the About page of the Student Management Portal |
| Contact | Welcome to the Contact page of the Student Management Portal |

## Output
The page displays all three welcome messages, one from each component.
