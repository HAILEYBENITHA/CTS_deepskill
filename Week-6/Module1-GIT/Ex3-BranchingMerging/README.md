# Ex3 - Branching and Merging

## Objective
- Explain branching and merging
- Explain about creating a branch request in GitLab
- Explain about creating a merge request in GitLab

In this hands-on lab, you will learn how to:
- Construct a branch, do some changes in the branch, and merge it with master (or trunk)

## Prerequisites
- Setting up Git environment with P4Merge tool for Windows

---

## Branching Steps

1. Create a new branch "GitNewBranch":
   ```
   git branch GitNewBranch
   ```

2. List all the local and remote branches available in the current trunk. Observe the `*` mark which denotes the current pointing branch:
   ```
   git branch -a
   ```

3. Switch to the newly created branch:
   ```
   git checkout GitNewBranch
   ```
   (Or use `git switch GitNewBranch` in newer Git versions)

4. Add some files to it with some contents:
   ```
   echo "Feature from GitNewBranch" > feature.txt
   git add feature.txt
   git commit -m "Add feature.txt in GitNewBranch"
   ```

5. Check the status with `git status` command:
   ```
   git status
   ```

---

## Merging Steps

1. Switch to the master branch:
   ```
   git checkout master
   ```

2. List out all the differences between trunk and branch:
   ```
   git diff master GitNewBranch
   ```

3. List out all the visual differences between master and branch using P4Merge tool:
   ```
   git mergetool --tool=p4merge master GitNewBranch
   ```
   (P4Merge must be installed and configured as the merge tool.)

4. Merge the source branch to the trunk:
   ```
   git merge GitNewBranch
   ```

5. Observe the logging after merging using:
   ```
   git log --oneline --graph --decorate
   ```

6. Delete the branch after merging with the trunk:
   ```
   git branch -d GitNewBranch
   ```

7. Observe the git status:
   ```
   git status
   ```

---

## GitLab Merge Request

- After pushing the branch to GitLab, you can create a **Merge Request** (MR) from GitNewBranch into master.
- A Merge Request allows code review, discussion, and approval before merging.
- Once approved, the MR can be merged via the GitLab web UI.

## Key Commands

| Command | Purpose |
|---------|---------|
| `git branch <name>` | Create a new branch |
| `git branch -a` | List all branches (local + remote) |
| `git checkout <branch>` | Switch to a branch |
| `git diff <branch1> <branch2>` | Show differences between branches |
| `git merge <branch>` | Merge a branch into current branch |
| `git log --oneline --graph --decorate` | Visual commit history |
| `git branch -d <branch>` | Delete a merged branch |
