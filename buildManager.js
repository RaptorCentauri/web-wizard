import fs from 'fs-extra';

const buildManager = async (string, array) => {
    for (const iterator of array) {
        try {
            await fs.outputFile(`./${string}/${iterator}-manager/${iterator}-routes.js`, "routes");
        } catch (err) {
            console.log(err);
        }

        try {
            await fs.outputFile(`./${string}/${iterator}-manager/${iterator}-model.js`, "models");
        } catch (err) {
            console.log(err);
        }

        try {
            await fs.outputFile(`./${string}/${iterator}-manager/${iterator}-files.js`, "files");
        } catch (err) {
            console.log(err);
        }

        try {
            await fs.outputFile(`./${string}/${iterator}-manager/${iterator}-validator.js`, "validator");
        } catch (err) {
            console.log(err);
        }
    }
}

export default buildManager


