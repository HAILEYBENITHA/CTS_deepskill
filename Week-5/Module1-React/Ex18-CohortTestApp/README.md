# Ex18 - Cohort Test App (cohorttestapp) - ReactJS HOL

Source: ReactJS-HOL.docx (Digital Nurture Java FSE - Deepskilling / React)

## Objectives
- Need for Unit Testing in React
- Working with Jest and Enzyme
- Router component types (conceptual)

## Task
A Cognizant Academy dashboard displays cohort details. You are assigned the
task of **unit testing** the `CohortDetails` component to ensure it is bug-free.

1. Restore node modules: `npm install`
2. Install Enzyme support:
   ```
   npm install --save-dev enzyme enzyme-adapter-react-17 enzyme-to-json
   ```
3. Modify `src/setupTests.js` to configure the Enzyme adapter.
4. Add `CohortDetails.test.js` importing `mount`/`shallow` from Enzyme, the
   `CohortDetails` component, and the `CohortData` array from `Cohort.js`.
5. Define a `describe('Cohort Details Component', ...)` suite with tests:

| Test | Name | Checks |
|------|------|--------|
| 1 | should create the component | Loads the component in isolation (shallow) |
| 2 | should initialize the props | Mounts and asserts props equal the cohort object |
| 3 | should display cohort code in h3 | Mounts, `find('h3')`, verifies cohort code |
| 4 | should always render same html | Snapshot test of the component |

6. Build and run the tests:
   ```
   npm test
   ```

## Concepts Covered
- Jest `describe()` / `test()`
- Enzyme `shallow()` and `mount()`
- Matchers (`toBe`, `toEqual`, `toMatchSnapshot`)
- Snapshot testing

## Run
```
npm install
npm test
```
