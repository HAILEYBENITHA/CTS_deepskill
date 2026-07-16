# Ex17 - Fetch User App (fetchuserapp) - ReactJS HOL

Source: ReactJS-HOL.docx (Digital Nurture Java FSE - Deepskilling / React)

## Objectives
- Consume REST APIs from React applications
- Construct a React app that invokes a REST API and fetches data

## Task
Create a React Application named **fetchuserapp** which retrieves user details
from `https://api.randomuser.me/` and displays the **title**, **firstname** and
**image** of a user.

Create a component named **Getuser** and in the asynchronous method
**`componentDidMount()`** invoke the URL using the `fetch()` method. Display the
response in the `render()` method of the component.

## Concepts Covered
- Consuming a REST API with `fetch()`
- Asynchronous `componentDidMount()` lifecycle hook
- Storing fetched data in `state`
- Conditional rendering while loading

## Run
```
npm start
```
