/* Nicholas Kingston
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
console.log("\nSOLUTION 1")
const gitDefinition = "Git is a repository for code that allows you to share code with others as well as maintain version control."
console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
console.log("\nSOLUTION 2")
const gitHubDefinition = "GitHub is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code."
console.log(gitHubDefinition)

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
console.log("\nSOLUTION 3")

const gitInitDefinition = "The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository."
console.log(gitInitDefinition)

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
console.log("\nSOLUTION 4")

const gitCloneDefinition = "git clone is a Git command line utility which is used to target an existing repository and create a clone, or copy of the target repository."
console.log(gitCloneDefinition)

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
console.log("\nSOLUTION 5")

const gitStatusDefinition = "The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git. Status output does not show you any information regarding the committed project history."
console.log(gitStatusDefinition)

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
console.log("\nSOLUTION 6")

const gitAddDefinition = "The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit."
console.log(gitAddDefinition)
const gitAddCode = "git add --all"
console.log(gitAddCode)

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
console.log("\nSOLUTION 7")

const gitCommitDefinition = "A Git commit is a snapshot of the hierarchy (Git tree) and the contents of the files (Git blob) in a Git repository."
const gitCommitCode = "git commit -m 'initial commit'"

console.log(gitCommitCode)

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
console.log("\nSOLUTION 8")
const gitPushDefinition = "git push updates the remote branch with local commits. "
console.log(gitPushDefinition)