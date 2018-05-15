import ProjectDetails from "./ProjectDetails";
import buildFolderStructure from "./folderStucture";

// var prompt = require('prompt');

// console.log(`==========================================================================================================================================================================================================================================`);
// console.log(`WELCOME TO WEB-WIZARD!`);
// console.log(`This application will guide you through a few questions, and create a custom boilerplate that you can use to develop your own full-stack web application!`);
// console.log(`PLEASE NOTE: This application is best used by those who already have a basic outline of an application in place. You will want to know what type of database you are using, as well as the names of your models.`);
// console.log(`==========================================================================================================================================================================================================================================`);
// console.log('');


let setProjectName = (str) => {
    ProjectDetails.name = str;
}

let setProjectDatabase = (str) => {
    ProjectDetails.database = str;
}

let setProjectModels = (...str) => {
    ProjectDetails.models = str;
}

let setProjectFolderStructure = (str) => {
    ProjectDetails.folderStructure = str;
}




setProjectName("Zoo");



console.log(ProjectDetails.name);


// setProjectModels('Lion', ['Tiger'], ['Bear']);

setProjectFolderStructure('isolated')

console.log(ProjectDetails);

setProjectFolderStructure(ProjectDetails.folderStructure)

buildFolderStructure()




