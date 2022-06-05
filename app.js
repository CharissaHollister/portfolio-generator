const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};

const promptProject = () => {
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you build this project with? (Check all that apply)",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "link",
      message: "Enter the GitHub link to your project. (Required)",
    },
    {
      type: "confirm",
      name: "feature",
      message: "Would you like to feature this project?",
      default: false,
    },
    {
      type: "confirm",
      name: "confirmAddProject",
      message: "Would you like to enter another project?",
      default: false,
    },
  ]);
};

promptUser()
  .then((answers) => console.log(answers))
  .then(promptProject)
  .then((projectAnswers) => console.log(projectAnswers));

const fs = require("fs");
const generatePage = require("./src/page-template");

const pageHTML = generatePage(name, github);

fs.writeFile("./index.html", pageHTML, (err) => {
  if (err) throw err;

  console.log("Portfolio complete! Check out index.html to see the output!");
});

// const fs = require("fs");

// const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;

// const generatePage = require("./src/page-template.js");

// fs.writeFile("./index.html", generatePage(name, github), (err) => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

// // const profileDataArgs = process.argv.slice(2, process.argv.length);
// // const fs = require("fs");

// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// //same as:
// // const [name, github] = profileDataArgs;
// // console.log(profileDataArgs);

// // const generatePage = (userName, githubName) =>
// //   `Name: ${userName}, Github: ${githubName}`;

// // const generatePage = (userName, githubName) => {
// //   return `
// //     Name: ${userName}
// //     GitHub: ${githubName}
// //   `;
// // // };

// // const generatePage = (name, github) => {
// //   return `
// //   <!DOCTYPE html>
// //   <html lang="en">
// //   <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
// //     <title>Portfolio Demo</title>
// //   </head>

// //   <body>
// //     <h1>${name}</h1>
// //     <h2><a href="https://github.com/${github}">Github</a></h2>
// //   </body>
// //   </html>
// //   `;
// // };

// // fs.writeFile("index.html", generatePage(name, github), (err) => {
// //   if (err) throw err;

// //   console.log("Portfolio complete! Check out index.html to see the output!");
// // });

// // const printProfileData = (profileDataArr) => {
// //   console.log(profileDataArr);
// // // };

// // // Notice the lack of parentheses around the `profileDataArr` parameter?
// // const printProfileData = (profileDataArr) => {
// //   // This...
// //   for (let i = 0; i < profileDataArr.length; i += 1) {
// //     console.log(profileDataArr[i]);
// //   }

// //   console.log("================");

// //   // Is the same as this...
// //   //   profileDataArr.forEach((profileItem) => {
// //   //     console.log(profileItem);
// //   //   });
// //   // Is the same as this...
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// // var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:

// var one = 'one: declared outside the block';

// if (true === true) {
//   var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
//   console.log(one); // prints 'one: declared inside the block'
// }

// console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.

// // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

// let two = 'two: declared outside the block';

// if (true === true) {
//   let two = 'two: declared inside the block';
//   console.log(two); // prints 'two: declared inside the block'
// }

// console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.

// // var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well:

// var three = 'three: declared outside the block';

// if (true === true) {
//   three = 'three: changed inside the block'; // notice: we don't redeclare
//   console.log(three); // prints 'three: changed inside the block'
// }

// console.log(three); // also prints 'three: changed inside the block', because the variable has function scope. This means that the value change in the block is reflected throughout the function, i.e., outside the block.

// // let is block-scoped, so changing its value in a block does change its value outside the block _if_ the variable is not redeclared in the block:

// let four = 'four: outside the block';

// if (true === true) {
//   four = 'four: inside the block'; // notice: we don't redeclare the variable
//   console.log(four); // prints 'four: inside the block'
// }

// console.log(four); // prints 'four: inside the block', because we didn't redeclare the variable inside the block. That meant we referenced the variable outside the block, and we therefore changed it.
