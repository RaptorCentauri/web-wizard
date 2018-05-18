import ProjectDetails from "./ProjectDetails";
import FolderBuilder from "./folderBuilder";

class ProjectBuilder{
    constructor(obj){
        this.name = obj.name;
        this.database = obj.database;
        this.models = obj.models;
        this.folderStructure = obj.folderStructure;
    }

    buildFolderStructure = () =>{
        if(this.folderStructure === 'grouped'){
            FolderBuilder.buildGrouped(this.name, this.models)
        }
        if (this.folderStructure === 'isolated') {
            FolderBuilder.buildIsolated(this.name, this.models)
        }
    }

}







let myProj = new ProjectBuilder(ProjectDetails);

myProj.buildFolderStructure();
