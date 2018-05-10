import ProjectDetails from "./ProjectDetails";
import {ensureDir} from 'fs-extra'

const buildGroupedFolderStructure = async (arr) => {
    console.log('money shot');

    for (const element of arr) {
        try {
            await ensureDir(`./MyNewTEStDIR/${element}`)
        } catch (err) {
            console.log(err);
        } 
    }

}



const buildFolderStructure= () =>{
    console.log('runin da func');
    console.log(ProjectDetails.folderStructure);
    

    
    switch (ProjectDetails.folderStructure) {

        case 'grouped': buildGroupedFolderStructure(ProjectDetails.models);

            break;

        case 'isolated': buildIsolatedFolderStructure();

            break;
        default:
            break;
    }
}

export default buildFolderStructure;