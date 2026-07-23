# Ex2 - Git Ignore

## Objective
- Explain `.gitignore`
- Explain how to ignore unwanted files using `.gitignore`

In this hands-on lab, you will learn how to:
- Implement `git ignore` command to ignore unwanted files and folders

## Prerequisites
- Setting up Git environment
- Integrate notepad++ as a default editor
- A Git repository in the local system and a remote repository in GitLab (or GitHub)

---

## Hands-on Steps

1. In your GitDemo working directory, create a `.log` file:
   ```
   echo "Some log content" > app.log
   ```

2. Create a `log` folder with a log file inside:
   ```
   mkdir log
   echo "Another log" > log/error.log
   ```

3. Create a `.gitignore` file in the working directory (if it does not exist):
   ```
   notepad++.exe .gitignore
   ```

4. Update the `.gitignore` file with the following patterns:
   ```
   # Ignore all .log files
   *.log

   # Ignore the log folder
   log/
   ```

5. Save and close the `.gitignore` file.

6. Verify if `.gitignore` is working by executing:
   ```
   git status
   ```

   The `.log` files and `log/` folder should NOT appear in the git status output, meaning they are properly ignored.

7. To verify if specific files are ignored, execute:
   ```
   git check-ignore -v app.log
   git check-ignore -v log/error.log
   ```

---

## How `.gitignore` Works

- `.gitignore` is a plain text file that tells Git which files (or folders) to ignore.
- It is placed in the root of the repository (or in any subdirectory).
- Patterns:
  - `*.log` — ignores all files with `.log` extension
  - `log/` — ignores the entire `log` folder
  - `!important.log` — a leading `!` negates the pattern (forces tracking)
- Files already tracked by Git before adding to `.gitignore` will **not** be ignored automatically — you must run `git rm --cached <file>` to untrack them.

## Verify Working Directory Status

After configuring `.gitignore`:
- **Working Directory:** `.log` files and `log/` folder exist on disk but are not shown by `git status`
- **Local Repository:** No new entries for ignored files
- **Git Repository (remote):** Ignored files are never pushed
