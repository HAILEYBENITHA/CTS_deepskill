# Ex1 - Git Setup, Configuration & First Commit

## Objective
Familiarize with Git commands like `git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`.

In this hands-on lab, you will learn how to:
- Setup your machine with Git Configuration
- Integrate notepad++.exe to Git and make it a default editor
- Add a file to source code repository

## Prerequisites
- Install Git Bash client in your machine

---

## Step 1: Setup your machine with Git Configuration

1. To check if Git client is installed properly: Open Git bash shell and execute:
   ```
   git --version
   ```
   If output shows Git with its version information, that indicates Git Client is installed properly.

2. To configure user level configuration of user ID and email ID, execute:
   ```
   git config --global user.name "Hailey Benitha"
   git config --global user.email "haileybenitha@gmail.com"
   ```

3. To check if the configuration is properly set, execute:
   ```
   git config --list
   ```

---

## Step 2: Integrate notepad++.exe to Git and make it a default editor

1. To check if notepad++.exe executes from Git bash:
   ```
   notepad++.exe
   ```
   If Git bash could not recognize the `notepad++.exe` command, that implies notepad++.exe is not added to the environment PATH variable.

   To add the path of notepad++.exe to the environment variable:
   - Go to Control Panel → System → Advanced System settings
   - Go to Advanced tab → Environment variables
   - Add the path of notepad++.exe to the PATH user variable by clicking on "Edit"

2. Exit Git bash shell, open bash shell again and execute:
   ```
   notepad++
   ```
   Now, notepad++ will open from Git bash shell.

3. To create an alias command for notepad++.exe, execute:
   ```
   alias npp="notepad++.exe"
   ```
   It will open notepad++ from bash shell. To make this alias permanent, add the line to your `~/.bash_profile` or `~/.bashrc`:
   ```
   echo "alias npp='notepad++.exe'" >> ~/.bash_profile
   source ~/.bash_profile
   ```

4. To configure the editor, execute the command:
   ```
   git config --global core.editor "notepad++.exe"
   ```

5. To verify if notepad++ is the default editor, execute:
   ```
   git var GIT_EDITOR
   ```
   It should display `notepad++.exe`.

---

## Step 3: Add a file to source code repository

1. Open Git bash shell and create a new project "GitDemo" by executing:
   ```
   mkdir GitDemo
   cd GitDemo
   ```

2. Git bash initializes the "GitDemo" repository. To verify, execute:
   ```
   git init
   ```
   It will display all the hidden files in the Git "working directory" (`.git/` folder).

3. To create a file "welcome.txt" and add content to the file, execute:
   ```
   echo "Welcome to Git" > welcome.txt
   ```

4. To verify if the file "welcome.txt" is created, execute:
   ```
   ls -la
   ```

5. To verify the content, execute:
   ```
   cat welcome.txt
   ```

6. Check the status by executing:
   ```
   git status
   ```
   Now the file "welcome.txt" is available in Git "working directory" (shown in red as untracked).

7. To make the file to be tracked by Git repository, execute:
   ```
   git add welcome.txt
   ```

8. To add multi-line comments, open the default editor to comment. Execute:
   ```
   git commit
   ```
   Notepad++ editor will open. Add a multi-line commit message, save, and close.

9. To check if local and "Working Directory" git repository are the same, execute:
   ```
   git status
   ```
   `welcome.txt` is now added to the local repository.

10. Sign up with GitLab (or GitHub) and create a remote repository "GitDemo".

11. To pull the remote repository, execute:
    ```
    git pull origin master
    ```

12. To push the local to remote repository, execute:
    ```
    git push origin master
    ```

---

## Key Commands Summary

| Command | Purpose |
|---------|---------|
| `git --version` | Check Git installation |
| `git config --global user.name "..."` | Set global username |
| `git config --global user.email "..."` | Set global email |
| `git config --global core.editor "notepad++.exe"` | Set default editor |
| `git init` | Initialize a new Git repository |
| `git status` | Check working directory status |
| `git add <file>` | Stage a file |
| `git commit` | Commit staged changes (opens editor) |
| `git pull origin master` | Pull remote changes |
| `git push origin master` | Push local changes to remote |
