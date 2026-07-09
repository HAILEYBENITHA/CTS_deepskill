# Ex4 - Blog App (blogapp)

## Objective
Create a React app named **blogapp** with a class-based **Posts** component that
fetches blog posts from a REST API using the Fetch API and displays them, while
handling lifecycle events and errors.

## Steps
1. Create the React project:
   ```
   npx create-react-app blogapp
   ```
2. Open the project in VS Code.
3. Create `Post.js` in `src` with the Post class properties
   (`userId`, `id`, `title`, `body`).
4. Create a class-based component `Posts` inside `Posts.js`.
5. Initialize the component with a list of posts in state using the constructor.
6. Create a `loadPosts()` method that uses the Fetch API to get posts from
   `https://jsonplaceholder.typicode.com/posts` and assigns them to state.
7. Implement `componentDidMount()` to call `loadPosts()`.
8. Implement `render()` to display each post's title (heading) and body
   (paragraph).
9. Define `componentDidCatch()` to display any error as an alert message.
10. Add the `Posts` component to the `App` component.
11. Build and run:
    ```
    npm start
    ```

## Concepts Covered
- Class-based components
- `constructor` and `state`
- Fetch API
- Lifecycle hooks: `componentDidMount()`, `componentDidCatch()`

## Output
The page displays a list of blog posts with each title as a heading and its
body as a paragraph.
