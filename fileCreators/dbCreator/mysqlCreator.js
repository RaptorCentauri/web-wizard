const myssqlCreator = () => {

    let mysqlFile =
    `
    selectAll = async (tableName) => {
        let queryString = \`SELECT * FROM \${ tableName }\`;

        try {
            let dbResult = await connection.query(queryString);
            return dbResult;
        } catch (err) {
            console.log(err)
        }
    }


    //NOTE: col and val can be arrays
     insert = async (tableName, col, val ) => {

        let queryString = \`INSERT INTO \${ tableName } (\${ col }) VALUES(\${ val })\`

        try {
            let dbResult = await connection.query(queryString);
            return dbResult;
        } catch (err) {
            console.log(err)
        }
    }

    update = async (tableName, col, val, clauseCol, clauseVal) => {
        let queryString = \`UPDATE \${ tableName } SET \${ col } = \${ val } WHERE \${ clauseCol } = \${ clauseVal }\`;

        try {
            let dbResult = await connection.query(queryString);
            return dbResult;
        } catch (err) {
            console.log(err)
        }
    }












        





    
    `

    return mysqlFile
}

export default myssqlCreator






db = {



    selectSpecific: function (tableOne, tableTwo, colOne, colTwo, colThree, value, cb) {

        let queryString = `SELECT * FROM ${tableOne} JOIN ${tableTwo} ON ${tableOne}.${colOne} = ${tableTwo}.${colTwo} WHERE ${tableOne}.${colThree} = ${value}`
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    verify: function (tableName, colOne, colTwo, userName, password, cb) {
        let queryString = `SELECT * FROM ${tableName} WHERE ${colOne}="${userName}" AND ${colTwo}="${password}"`

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    }

}
