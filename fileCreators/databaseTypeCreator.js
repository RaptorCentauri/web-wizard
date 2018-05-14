const databaseTypeCreator = (dbType, model) => {

    switch (dbType) {
        case 'mysql': return `db.getAll(\`${model}\`)`
            
            break;

        case 'mongodb': `db.getAllDocuments('${model}')`

            break;
    
        default:
            break;
    }


}

export default databaseTypeCreator