const myssqlCreator = () => {

    let mysqlFile =
    `
    select = async (tableName, col, expr, val) => {
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

    delete = async (tableName, col, val) => {
        let queryString = \`DELETE FROM \${tableName} WHERE \${col} IN \${val}\`

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

// export default myssqlCreator



const select = async (tableName, col, expr, val) => {
    let queryString;

    if(!col){
        queryString = `SELECT * FROM ${tableName}`;
    }
    else{
        queryString = `SELECT * FROM ${tableName} WHERE ${col} ${expr} ${val}`;
    }
    console.log(queryString);
    
        // try {
        //     let dbResult = await connection.query(queryString);
        //     return dbResult;
        // } catch (err) {
        //     console.log(err)
        // }
    }




    select('products', 'price', '<', 5000)
// db = {



//     selectSpecific: function (tableOne, tableTwo, colOne, colTwo, colThree, value, cb) {

//         let queryString = `SELECT * FROM ${tableOne} JOIN ${tableTwo} ON ${tableOne}.${colOne} = ${tableTwo}.${colTwo} WHERE ${tableOne}.${colThree} = ${value}`
//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },

//     verify: function (tableName, colOne, colTwo, userName, password, cb) {
//         let queryString = `SELECT * FROM ${tableName} WHERE ${colOne}="${userName}" AND ${colTwo}="${password}"`

//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });

//     }

// }
