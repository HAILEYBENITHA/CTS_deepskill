# Ex5 - Clean up and Push back to remote Git

## Objective
- Explain how to clean up and push back to remote Git.

In this hands-on lab, you will learn how to:
- Execute steps involving clean up and push back to remote Git.

## Prerequisites
- Hands-on ID: "Git-T03-HOL_002"

---

## Hands-on Steps

1. Verify if master is in clean state:
   ```
   git status
   ```
   The output should show "nothing to commit, working tree clean".

2. List out all the available branches:
   ```
   git branch -a
   ```

3. Pull the remote git repository to the master:
   ```
   git pull origin master
   ```
   This fetches and merges any changes from the remote `master` branch into your local `master`.

4. Push the changes, which are pending from "Git-T03-HOL_002" to the remote repository:
   ```
   git push origin master
   ```

5. Observe if the changes are reflected in the remote repository:
   - Log in to GitLab (or GitHub)
   - Navigate to the repository
   - Verify that the latest commits are visible on the `master` branch
   - Check that the files and changes are present

---

## Clean-up Best Practices

| Action | Command | Purpose |
|--------|---------|---------|
| Check status | `git status` | Verify working tree is clean |
| Review branches | `git branch -a` | List local and remote branches |
| Pull latest | `git pull origin master` | Sync with remote before pushing |
| Push changes | `git push origin master` | Upload local commits to remote |
| Delete merged branch | `git branch -d <branch>` | Remove local branch after merge |
| Delete remote branch | `git push origin --delete <branch>` | Remove remote branch |

## Notes
- Always pull before you push to avoid non-fast-forward errors.
- Use `git push origin --delete <branch>` to delete a remote branch after it has been merged.
- Keep the working tree clean before switching branches or pulling.
