
# Branch Management Instructions

```bash
# Switch to the main branch
git checkout main

# Create a new branch from the current main branch
git checkout -b verify

# Verify that Zeuty/components/Verify exists
ls Zeuty/components/Verify

# Switch back to the main branch
git checkout main

# Create a new branch to remove the code in Zeuty/components/Verify
git checkout -b remove-verify

# Remove the Zeuty/components/Verify directory
rm -rf Zeuty/components/Verify

# Stage the changes
git add . 

# Commit the changes
git commit -m "Temporarily remove verify folder code"

# Push the changes to the remote repository
git push

# Merge the pull request on GitHub (this step requires manual intervention on GitHub)

# Switch to the main branch and pull the new changes
git checkout main
git pull

# Verify that Zeuty/components/Verify no longer exists
ls Zeuty/components/Verify

# Switch to the verify branch
git checkout verify

# Reset the verify branch to make Zeuty/components/Verify changes appear as new
git reset --soft main

# Stage the changes
git add .

# Commit the changes
git commit -m "Add verify component"

# Push the changes to the remote repository
git push

# Create a pull request on GitHub (this step requires manual intervention on GitHub)
```
