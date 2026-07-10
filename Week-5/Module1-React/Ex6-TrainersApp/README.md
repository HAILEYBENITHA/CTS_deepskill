# Ex6 - Trainers App (SPA with React Router)

## Objective
Create a Single Page Application (SPA) named **TrainersApp** to maintain a list
of trainers along with their expertise, using **React Router** for navigation.

## Trainer Data
- T-ID
- Name
- Phone
- Email
- Stream / Technology
- Skills

## Steps
1. Create the React app:
   ```
   npx create-react-app trainersapp
   ```
2. Open the project in VS Code.
3. Add `trainer.js` in `src` and define a `Trainer` class with the properties
   `TrainerId`, `Name`, `Email`, `Phone`, `Technology`, `Skills`.
4. Create `TrainersMock.js` containing the mock trainer data.
5. Install React Router for the DOM:
   ```
   npm install react-router-dom
   ```
6. Create a `TrainersList` component (`TrainersList.js`) that accepts trainers
   data as a parameter and renders each trainer's name as a clickable hyperlink.
7. Create a `Home` component (`Home.js`) to display the landing content.
8. Modify the `App` component to add routing using `BrowserRouter`, `Routes`,
   `Route`, and `Link`:
   - `/` → Home component
   - `/trainers` → Trainers List component
9. Create a `TrainerDetail` component (`TrainerDetail.js`) that reads the `id`
   URL parameter using the `useParams` hook, looks up the trainer in the mock
   data, and displays the details. Add links from `TrainersList` and a route in
   `App` for `/trainers/:id`.
10. Build and run:
    ```
    npm start
    ```

## Concepts Covered
- React Router (`BrowserRouter`, `Routes`, `Route`, `Link`)
- `useParams` hook
- Passing props / component parameters
- Mock data modules

## Routes
| URL | Component |
|-----|-----------|
| `/` | Home |
| `/trainers` | TrainersList |
| `/trainers/:id` | TrainerDetail |
