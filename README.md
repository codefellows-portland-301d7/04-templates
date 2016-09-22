![CF](https://i.imgur.com/7v5ASc8.png) Lab 04: Templates
=======

Fix up the blog codebase, so it's properly using Handlebars templates.

You should be familiar with the pair flow by now. If not, review previous instructions.

## TODOs: MVP
1. Include the Handlebars.js file in your project.
1. Convert your existing template html code into a Handlebars style template.
1. Update your article `.toHTML` method to use Handlebars
1. You may find it useful to attach some additional properties to your article object, before you hand it off to the template.

## Stretch Goals:
1. Look at all that duplicated markup in your `#filter` list items! Looks like a good opportunity to use a template. Make a small template for each filter, and re-render the list once you have data to populate it with.

Now find those `TODO` items in the codebase, and tackle each one of them!

## Setup your repo

Here is the recommended workflow:

1. Driver: fork this repository if you haven't done so already.
1. Your **forked repo** on GitHub will be your "origin" repo. Clone **your fork** to your local development environment:

1. Next, `cd 301/`
1. `cd lab-assignments`
1. `cd my-forked-labs`
1. `git clone` this repo.
1. `cd` into this repo.
1. Immediately `git checkout -b` driver-name-navigator-name (ex: `git checkout -b rick-brian`).  

## Write code together!

Find those `TODO` items in the code, and tackle one of them.

1. Driver: In your terminal, ensure that:
   - you are on a branch with you and your partner's namesake.
   - you are currently within the starter-code directory.

1. Type `atom .` to open this starter-code folder as a project in Atom.
1. Use the Atom "Find in Project" (command shift "f" if on a Mac) to locate all the `TODO:` items.
1. Work through one or two TODO items before switching roles (or one hour, whichever arrives first), testing your code as you go.
1. In your terminal type `git status` to view the files that you have changed. You should only see the files that you have worked on.
2. Type `git diff` to see line-item changes with your down arrow key. (Type `q` to exit this mode!)
1. Type `git add file1 file2` where file1, file2, etc. are the files that you have changed.
1. Type `git status` to view the files that have been added to your commit. You should only see the files that you worked on.
1. Type `git commit -m "some meaningful message"` where Some meaningful message is a message that **thoroughly** explains your commit.
1. Type `git status` to ensure there is nothing left to commit.
1. Type `git push origin your-name-partner-name` to push this branch to your forked repo on GitHub.
2. On GitHub, Add your navigator as a collaborator (go to settings -> collaborators).
3. Once they have accepted the invite to collaborate, `Slack` to your partner your forked repo link for them to clone down.

## Switch roles

1. Navigator (AKA new Driver): You can now clone the driver's fork, to your own local dev environment. If you haven't already:
2. `mkdir 301/` that will be the parent directory for all things 301.
3. `cd 301/`
4. `mkdir lab-assignments`
5. `cd lab-assignments`
6. `mkdir partners-forked-labs`
7. `cd partners-forked-labs`
8. The new driver (original navigator):
  1. `git clone` the repo your patner Slacked you into your navigator folder.
  2. `git fetch origin` branch-name
  2. Now open the starter-code in Atom. It's your turn to have the hands on the keyboard!

## Submit your assignment

When you are finished with lab (or if the 2 hour time limit runs out), please submit your work. To do this, you'll create *one* Pull Request (aka: "PR") to the original repo with your changes, and you'll each submit that same PR link in Canvas.

1. Ensure that all your local changes are committed, and pushed to your `origin` repo.
2. Visit the origin repo on github.com. (or just type `git open` in the terminal if you have that package installed :wink:
1. Create a new PR and ensure the branches look correct.
1. Fill in the template based on the text box prompts:
  1. Write a good descriptive summary of your changes:
    - Be sure to include how much time you spent on it, and who you worked with.
    - Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, share with your partner, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.
