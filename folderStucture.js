import ProjectDetails from "./ProjectDetails";
import fs from 'fs-extra';
import createServerJS from "./fileCreators/createServerJS";
import createAPIRoutes from "./fileCreators/createAPIRoutes";
import createModel from "./fileCreators/createModel";

// createAPIRoutes


const buildGroupedFolderStructure = async (parentDir, arr) => {
    console.log('Building Grouped Folder Structure');
    

    //API ROUTES
    for (const element of arr) {
        try {
            await fs.outputFile(`./${parentDir}/routes/${element}-routes.js`, createAPIRoutes(element))
        } catch (err) {
            console.log(err);
        } 
    }

    //MODELS
    for (const element of arr) {
        try {
            await fs.ensureFile(`./${parentDir}/models/${element}-model.js`)
        } catch (err) {
            console.log(err);
        }
    }



    //ServerJS
        fs.outputFile(`./${parentDir}/server.js`, createServerJS() )
}


const buildIsolatedAPIRoutes = async (parentDir, modelName) => {
    try {
        await fs.outputFile(`./${parentDir}/${modelName}-manager/${modelName}-routes.js`, createAPIRoutes(modelName))
    } catch (err) {
        console.log(err);
    }
}

const buildIsolatedModel = async (parentDir, modelName) => {
    try {
        await fs.outputFile(`./${parentDir}/${modelName}-manager/${modelName}-model.js`, createModel(modelName))
    } catch (err) {
        console.log(err);
    }
}


const buildIsolatedFolderStructure = async (parentDir, arr) => {
    console.log('Building Isolated Folder Structure');

    for (const element of arr) {
        //API Route
        buildIsolatedAPIRoutes(parentDir, element);


        //Model
        buildIsolatedModel(parentDir, element);
        // try {
        //     await fs.outputFile(`./${parentDir}/${element}-manager/${element}-model.js`, 'modelfile')
        // } catch (err) {
        //     console.log(err);
        // }

        //Validtion
        try {
            await fs.outputFile(`./${parentDir}/${element}-manager/${element}-validator.js`, 'validatorfile')
        } catch (err) {
            console.log(err);
        }

        //Files
        try {
            await fs.outputFile(`./${parentDir}/${element}-manager/${element}-files.js`, 'filesfile')
        } catch (err) {
            console.log(err);
        }
        
    }




}



const buildFolderStructure= () =>{
    switch (ProjectDetails.folderStructure) {
        case 'grouped': buildGroupedFolderStructure(ProjectDetails.name, ProjectDetails.models);
            break;
        case 'isolated': buildIsolatedFolderStructure(ProjectDetails.name, ProjectDetails.models);
            break;
        default:
            break;
    }
}

export default buildFolderStructure;