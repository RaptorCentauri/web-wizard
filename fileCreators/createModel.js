import databaseTypeCreator from "./databaseTypeCreator";

const createModel = (model, database) => {

    let modelFile =
    `
    const getAll${model} = async () => {
        const all${model} = await ${databaseTypeCreator('mysql', model)}

        return all${model}
    }

    const getOne${model} = async (id) => {
        const one${model} = await

        return one${model}
    }

    const add${model} = async (${model}) => {
        const new${model} = await

        return new${model}
    }

    const update${model} = async (id, ${model}) => {
        const updated${model} = await

        return updated${model}
    }

    const delete${model} = async (id) => {
        const deleted${model} = await

        return deleted${model}
    }

    export {getAll${model}, add${model}, update${model}, delete${model}}
    `

    return modelFile;
}

export default createModel