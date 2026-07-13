# Ex12 - Ticket Booking App (ticketbookingapp) - ReactJS HOL

Source: ReactJS-HOL.docx (Digital Nurture Java FSE - Deepskilling / React)

## Objectives
- Conditional rendering in React
- Element variables
- Preventing components from rendering

## Task
Create a React Application named **ticketbookingapp** where:
- The **guest user** can browse the page where the flight details are displayed.
- The **logged-in user** only can **book tickets**.
- The **Login** and **Logout** buttons display different pages accordingly.
- Once the user logs in, the **User page** is displayed.
- When the user clicks **Logout**, the **Guest page** is displayed.

## Behaviour
| State | Button shown | Page rendered |
|-------|--------------|--------------|
| Logged out (guest) | Login | GuestPage (view flights only) |
| Logged in (user) | Logout | UserPage (book tickets) |

## Concepts Covered
- Conditional rendering with `if/else`
- Element variables
- Toggling UI based on `state`
- Preventing the booking action from rendering for guests

## Run
```
npm start
```
