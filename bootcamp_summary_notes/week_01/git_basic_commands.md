# Git Commands Summary Notes
```
git init
```
This will initiate an empty git repo within the directory you're currently in.
```
git status
```
At any given time you can type this command to get the status of the current git repo you're in. It will tell if files have been changed and it will tell you what files are staged as well.
```
git add file.txt
```
This will stage the `file.txt` file.
```
git add .
```
This will stage all changed or added files.
```
git add -A
```
This will stage all changed, added or deleted files.
```
git commit -m "initial commit"
```
This will commit all staged files / folders.
```
git log
```
This will list all previous commits with the latest being at the top.
```
git remote add origin git@github.com:CodeCoreYVR/nov-2015-fundamentals.git
```
This will add a link to a remote repo for your current repo. The address of the remote repo in this case is:  `git@github.com:CodeCoreYVR/nov-2015-fundamentals.git`
```
git push origin master
```
This will push the changes from your master branch to the `origin` remote repo's master branch. It will push all the changes not on the master branch.
```
git pull origin master
```
This will fetch and merge all the commits from the `origin` remote repo's master branch to your local repo's master branch.
```
git clone git@github.com:CodeCoreYVR/nov-2015-fundamentals.git
```
This will clone the `git@github.com:CodeCoreYVR/nov-2015-fundamentals.git` repo with all of its branches to your local computer at the current working directory.
