# Ex7 - Shopping App (shoppingapp)

## Objective
Create a React application named **shoppingapp** with class components
**OnlineShopping** and **Cart**. The `OnlineShopping` component maintains an
array of `Cart` items and displays them.

## Steps
1. Create the React app:
   ```
   npx create-react-app shoppingapp
   ```
2. In the `Cart` class, create two properties:
   - `itemname`
   - `price`
3. In the `OnlineShopping` class, create an array of `Cart` and initialize
   5 items.
4. Loop through these items and display the data.

## Components
| Component | Type | Responsibility |
|-----------|------|----------------|
| Cart | Class | Holds `itemname` and `price` |
| OnlineShopping | Class | Holds an array of 5 Cart items and renders them |

## Output
The page displays the 5 cart items with their names and prices.
