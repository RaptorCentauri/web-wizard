
    const getAllLion = async () => {
        const allLion = await db.getAll(`Lion`)

        return allLion
    }

    const getOneLion = async (id) => {
        const oneLion = await

        return oneLion
    }

    const addLion = async (Lion) => {
        const newLion = await

        return newLion
    }

    const updateLion = async (id, Lion) => {
        const updatedLion = await

        return updatedLion
    }

    const deleteLion = async (id) => {
        const deletedLion = await

        return deletedLion
    }

    export {getAllLion, addLion, updateLion, deleteLion}
    