# README

Smart Home Management System that keeps everyones schedules, to-do lists, and all the other chaotic parts organized.

## HomeHub

HomeHub is a smart home management system that is designed to merge all members' schedules, tasks, and events into a centralized place so that everyone can see. HomeHub also aspires to optimize, automate, and control common household chores such as paying utilities, ordering groceries, setting timers for lights, AC, and other Wifi connected devices.

### How to Contribute

Follow the steps below to contribute to this project.

1. To start, run `git pull https://github.com/cdylpp/homehub.git` into the command line. The project will download into the current working directory.
2. Next take a look at the file structure. The `src` folder is composed of server-side components, while the `public` folder is used for client-side components.
3. To work on front-end development, save HTML within the `/public/pages` directory. Similarly, CSS style sheets and JS scripts belong in `/public/css` and `/public/js`, respectively.
4. For back-end development, `/src/routes` holds all the Node.js routes. The scripts directory is for helper functions and general JavaScript server code. Note, the databases are uninitialized.
5. To run the server make sure Node.js is installed, then navigate to the `homehub/src` folder and run `node app.js` in the terminal. The server will start and it will be located at `localhost:8080`.
6. Open any browsers and navigate to the url localhost:8080. Navigate to the pages by appending the path to the url, e.g. the home page is located at `localhost:8080/pages/index.html`. 

### Committing changes 

After working editing the files on a local device, the changes must be pushed to the GitHub source.
1. First, add all the changes made through `git add {changed file name}` or to add all files from a subdirectory use the asterisks such as `git add public/pages/*` which adds all files in the pages directory.
2. Once the files are added, commit them with the `git commit -m "Some comment"` command. Ensure the comment is useful.
3. Finally, the files need to be pushed by calling `git push`

-HomeHub Team


