# Ex4 - Conflict Resolution

## Objective
- Explain how to resolve the conflict during merge.

In this hands-on lab, you will learn how to:
- Implement conflict resolution when multiple users are updating the trunk (or master) in such a way that it results into a conflict with the branch's modification.

## Prerequisites
- Hands-on ID: "Git-T03-HOL_001"

---

## Hands-on Steps

1. Verify if master is in clean state:
   ```
   git status
   ```

2. Create a branch "GitWork":
   ```
   git branch GitWork
   git checkout GitWork
   ```

3. Add a file "hello.xml":
   ```
   echo "<greeting>Hello from GitWork</greeting>" > hello.xml
   git add hello.xml
   git commit -m "Add hello.xml in GitWork branch"
   ```

4. Update the content of "hello.xml" and observe the status:
   ```
   echo "<greeting>Updated Hello from GitWork</greeting>" > hello.xml
   git status
   ```

5. Commit the changes to reflect in the branch:
   ```
   git commit -am "Update hello.xml in GitWork"
   ```

6. Switch to master:
   ```
   git checkout master
   ```

7. Add a file "hello.xml" to the master with different content:
   ```
   echo "<greeting>Hello from Master</greeting>" > hello.xml
   git add hello.xml
   git commit -m "Add hello.xml in master"
   ```

8. Observe the log by executing:
   ```
   git log --oneline --graph --decorate --all
   ```

9. Check the differences with Git diff tool:
   ```
   git diff master GitWork
   ```

10. For better visualization, use P4Merge tool to list out all the differences between master and branch:
    ```
    git mergetool --tool=p4merge master GitWork
    ```
    (P4Merge must be installed and configured.)

11. Merge the branch to the master:
    ```
    git merge GitWork
    ```
    **Conflict will occur** because both branches modified `hello.xml`.

12. Observe the git markup. Git will mark the conflicting sections in `hello.xml`:
    ```
    <<<<<<< HEAD
    <greeting>Hello from Master</greeting>
    =======
    <greeting>Updated Hello from GitWork</greeting>
    >>>>>>> GitWork
    ```

13. Use 3-way merge tool to resolve the conflict:
    ```
    git mergetool --tool=p4merge
    ```
    Resolve the conflict in P4Merge, save, and close.

14. Commit the changes to the master once done with conflict resolution:
    ```
    git add hello.xml
    git commit -m "Resolve merge conflict in hello.xml"
    ```

15. Observe the git status and add backup file to the `.gitignore` file:
    ```
    git status
    ```
    The merge conflict backup files (`.orig`) should be ignored:
    ```
    echo "*.orig" >> .gitignore
    git add .gitignore
    git commit -m "Add *.orig to .gitignore"
    ```

16. Commit the changes to the `.gitignore`.

17. List out all the available branches:
    ```
    git branch -a
    ```

18. Delete the branch which merged to master:
    ```
    git branch -d GitWork
    ```

19. Observe the log by executing:
    ```
    git log --oneline --graph --decorate
    ```

---

## Conflict Resolution Summary

- A **merge conflict** occurs when two branches modify the same line(s) of the same file and Git cannot auto-merge.
- Git marks conflicts with `<<<<<<<`, `=======`, and `>>>>>>>` delimiters.
- Resolution options:
  1. **Manual edit** — open the file, remove markers, keep desired content
  2. **Merge tool** — use `git mergetool` with P4Merge or another 3-way merge tool
  3. **Accept one side** — `git checkout --ours <file>` or `git checkout --theirs <file>`
- After resolving, stage the file (`git add`) and commit.
