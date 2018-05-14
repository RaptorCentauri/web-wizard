const createModel = (model) => {
    let modelFile =
    `
    const getAll${model} = async () => {

    }

    const getOne${model} = async (id) => {

    }

    const add${model} = async (${model}) => {

    }

    const update${model} = async (id, ${model}) => {

    }

    const delete${model} = async (id) => {

    }

    export {getAll${model}, add${model}, update${model}, delete${model}}
    `

    return modelFile;
}

export default createModel