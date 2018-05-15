const dbCreator = (dbType) => {
    switch (dbType) {
        case `mysql`: mysqlCreator()
            break;

        case `mongodb`: mongoCreator()
            break;
    
        default:
            break;
    }

}

export default dbCreator