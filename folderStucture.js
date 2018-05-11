import ProjectDetails from "./ProjectDetails";
import fs from 'fs-extra';
import createServerJS from "./fileCreators/createServerJS";
import createAPIRoutes from "./fileCreators/createAPIRoutes";

// createAPIRoutes


const buildGroupedFolderStructure = async (parentDir, arr) => {

    
    console.log('money shot');
    
    // let parentDir = await ensureDir(`./${str}`)


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



const buildFolderStructure= () =>{
    console.log('runin da func');
    console.log(ProjectDetails.folderStructure);
    

    
    switch (ProjectDetails.folderStructure) {

        case 'grouped': buildGroupedFolderStructure(ProjectDetails.name, ProjectDetails.models);

            break;

        case 'isolated': buildIsolatedFolderStructure();

            break;
        default:
            break;
    }
}

export default buildFolderStructure;