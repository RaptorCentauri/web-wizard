
    const getAllBear = async () => {
        const allBear = await db.getAll(`Bear`)

        return allBear
    }

    const getOneBear = async (id) => {
        const oneBear = await

        return oneBear
    }

    const addBear = async (Bear) => {
        const newBear = await

        return newBear
    }

    const updateBear = async (id, Bear) => {
        const updatedBear = await

        return updatedBear
    }

    const deleteBear = async (id) => {
        const deletedBear = await

        return deletedBear
    }

    export {getAllBear, addBear, updateBear, deleteBear}
    