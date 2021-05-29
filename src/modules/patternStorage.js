export default class PatternStorage {
    constructor(storage) {
        this.storage = storage;
        this.key = "patterns";
    }

    async getPatterns() {
        return await this.storage.getValue(this.key, []);
    }

    async getPattern(id) {
        const patterns = await this.getPatterns();
        return patterns.find(pattern => pattern.id == id);
    }

    async removePattern(id) {
        const patterns = await this.getPatterns();
        const newPatterns = patterns.filter(pattern => pattern.id != id);
        await this.storage.setValue(this.key, newPatterns);

        return await this.getPatterns();
    }

    async addOrUpdatePattern(pattern) {
        const patterns = await this.getPatterns();

        const existingPatternIndex = patterns.findIndex(p => p.id == pattern.id);
        if (existingPatternIndex > -1) {
            patterns[existingPatternIndex] = pattern;
        }
        else {
            const maxId = patterns.length ? patterns.map(pattern => pattern.id) : 0;
            pattern.id = maxId + 1;

            patterns.push(pattern);
        }

        await this.storage.setValue(this.key, patterns);
        return await this.getPatterns();
    }
}
