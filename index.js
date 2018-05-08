const readline = require('readline');

console.log(`==========================================================================================================================================================================================================================================`);
console.log(`WELCOME TO WEB-WIZARD!`);
console.log(`This application will guide you through a few questions, and create a custom boilerplate that you can use to develop your own full-stack web application!`);
console.log(`PLEASE NOTE: This application is best used by those who already have a basic outline of an application in place. You will want to know what type of database you are using, as well as the names of your models.`);
console.log(`==========================================================================================================================================================================================================================================`);
console.log('');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const getProjectName = () => {
    let projectName = rl.question('What is the name of you project? \n', (data) => { return data })


    console.log(`You have named your project "${projectName}"`)
}

getProjectName();

process.stdin.setEncoding('utf8');