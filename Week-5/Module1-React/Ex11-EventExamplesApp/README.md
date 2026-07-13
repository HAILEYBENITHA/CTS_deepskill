# Ex11 - Event Examples App (eventexamplesapp) - ReactJS HOL

Source: ReactJS-HOL.docx (Digital Nurture Java FSE - Deepskilling / React)

## Objectives
- Explain React events
- Event handlers
- Synthetic events
- React event naming convention (camelCase, e.g. `onClick`)

## Task
Create a React Application named **eventexamplesapp** to handle various events
of form elements in HTML.

1. **Increment / Decrement** counter:
   - "Increase" button to increase the value of the counter.
   - "Decrement" button to decrease the value.
   - The "Increase" button invokes **multiple methods** (increment the value
     and say a static "Hello" message).
2. **Say Welcome** button which invokes a function that takes `"welcome"` as
   an argument.
3. A button that invokes a **synthetic event** (`onClick`) and displays
   "I was clicked".
4. **CurrencyConvertor** component that converts Indian Rupees to Euro when the
   Convert button is clicked. Handle the button click to invoke `handleSubmit`
   and perform the conversion.

## Concepts Covered
- React event handling (`onClick`, `onSubmit`, `onChange`)
- Binding `this` in class components
- Invoking multiple methods from one handler
- Passing arguments to event handlers
- Synthetic events (`event` object)
- Controlled form inputs with `state`

## Run
```
npm start
```
