# GitHub Workflow Guide

This document outlines the standard process for pushing code updates from your local machine to your GitHub repository. It also covers the common issues we resolved, such as configuring Git and fixing PowerShell execution policies.

## 1. Configure Git (First Time Only)
Before you can save (commit) any code, Git needs to know who you are so it can attach your identity to the code changes.

Open your terminal and run:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
*(Note: We used your private GitHub noreply email for your portfolio to protect your privacy).*

## 2. The Daily Git Workflow
Whenever you make changes to your project (like editing a component or adding a new file), follow these three steps to push those changes to GitHub:

### Step 1: Stage your changes
This tells Git to prepare all modified and new files for the next save point.
```bash
git add .
```

### Step 2: Commit your changes
This creates the actual save point with a descriptive message.
```bash
git commit -m "feat: describe what you changed here"
```

### Step 3: Push to GitHub
This uploads your saved commits from your local machine to the remote GitHub repository.
```bash
git push
```
*(If it's your first time pushing a new branch, you might need to run `git push -u origin main`).*

---

## Troubleshooting PowerShell Errors

### "running scripts is disabled on this system"
When trying to run commands like `npm install` or `npm run dev` in Windows PowerShell, you might encounter a security error preventing scripts from running.

**The Fix:**
Run this command in PowerShell to allow locally created scripts to run for your user account:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Typo in commands
Always ensure you are using `npm` and not `npn` when trying to run Node.js commands!
```bash
# Correct:
npm run dev

# Incorrect:
npn run dev
```
