import ProjectDetails from "./ProjectDetails";

//There are two folder stucture options available: GROUPED and ISOLATED
//GROUPED EXAMPLE ===================================================
// ROOT-|
//      |ROUTES-|
//              |MODEL-ONE-ROUTE.JS
//              |MODEL-TWO-ROUTE.JS
//      |DB-CONTOLLER-|
//              |MODEL-ONE-DB.JS
//              |MODEL-TWO-DB.JS
//=====================================================================



//ISOLATED EXAMPLE ===================================================
// ROOT-|
//      |MODEL-ONE-MANAGER|
//              |MODEL-ONE-ROUTE.JS
//              |MODEL-ONE-DB.JS
//      |MODEL-TWO-MANAGER|
//              |MODEL-TWO-ROUTE.JS
//              |MODEL-TWO-DB.JS
//=====================================================================


switch (ProjectDetails.folderStructure) {

    case 'grouped': buildGroupedFolderStructure();
        
        break;

    case 'isolated': buildIsolatedFolderStructure();

        break;
    default:
        break;
}