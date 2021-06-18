import PatternValidator from "./patternValidator";

export default class ConfigurationManager {
    constructor(patternStorage, chromeManager) {
        this.patternStorage = patternStorage;
        this.chromeManager = chromeManager;
    }

    async export() {
        const patterns = await this.patternStorage.getPatterns();
        const content = JSON.stringify(patterns);

        const file = new Blob([content], { type: "application/json" });
        const url = URL.createObjectURL(file);

        this.chromeManager.saveAs(url, "pattern-navigator.json");
    }

    async import() {
        const patterns = await new Promise(this.importSync.bind(this));
        return this.patternStorage.savePatterns(patterns);
    }

    importSync(resolve, reject) {
        const fileElement = document.createElement("input");
        fileElement.type = 'file';
        fileElement.accept = '.json';

        fileElement.addEventListener('change', event => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = readerEvent => this.parsePatterns(readerEvent.target.result, resolve, reject);
                reader.readAsText(file);
            }
            else {
                return reject("File cannot be read.");
            }
        });

        fileElement.click();
    }

    parsePatterns(content, resolve, reject) {
        try {
            const patterns = JSON.parse(content);
            if (!Array.isArray(patterns)) {
                return reject("Content must be array.");
            }

            let results = [];
            for (let i = 0; i < patterns.length; i++) {
                const pattern = patterns[i];
                if (results.find(p => p.id == pattern.id)) {
                    return reject("Id must be unique.");
                }

                const validator = new PatternValidator(pattern);
                if (validator.validate()) {
                    results.push(validator.validatedPattern);
                }
                else {
                    reject(validator.errorMessage);
                }
            }

            return resolve(results);
        }
        catch {
            return reject("Unknown error.");
        }
    }
}