# Ex9 - Cricket App (cricketapp) - ReactJS HOL

Source: ReactJS-HOL.docx (Digital Nurture Java FSE - Deepskilling / React)

## Objectives
- Use the `map()` method of ES6
- Apply arrow functions of ES6
- Implement Destructuring features of ES6
- (merge arrays - spread feature of ES6)

## Task
Create a React Application named **cricketapp** with the following components:

### ListofPlayers
- Declare an array with 11 players and store details of their **names** and
  **scores** using the `map()` feature of ES6.
- Filter the players with scores **below 70** using arrow functions of ES6.

### IndianPlayers
- Display the **Odd Team Players** and **Even Team Players** using the
  **Destructuring** features of ES6.
- Declare two arrays `T20players` and `RanjiTrophyPlayers`, merge the two
  arrays and display them using the **merge** feature of ES6.

### App (home page)
- Display these two components in the same home page using a simple `if/else`
  on a **flag** variable (Flag = true -> ListofPlayers, Flag = false ->
  IndianPlayers).

## Concepts Covered
- ES6 `map()`
- Arrow functions
- Array `filter()`
- Destructuring / array splitting
- Spread operator for merging arrays
- Conditional rendering with a flag

## Run
```
npm start
```
