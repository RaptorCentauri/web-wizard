
    const getAllTiger = async () => {
        const allTiger = await db.getAll(`Tiger`)

        return allTiger
    }

    const getOneTiger = async (id) => {
        const oneTiger = await

        return oneTiger
    }

    const addTiger = async (Tiger) => {
        const newTiger = await

        return newTiger
    }

    const updateTiger = async (id, Tiger) => {
        const updatedTiger = await

        return updatedTiger
    }

    const deleteTiger = async (id) => {
        const deletedTiger = await

        return deletedTiger
    }

    export {getAllTiger, addTiger, updateTiger, deleteTiger}
    