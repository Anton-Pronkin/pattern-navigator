export default class PatternStorage {
    constructor(storage) {
        this.storage = storage;
        this.key = "patterns";
        this.cache = {
            patterns: new Map(),
            expirationTime: Date.now()
        }
    }

    async getPatterns() {
        return await this.get(this.key, []);
    }

    async getPattern(id) {
        const patterns = await this.getPatterns();
        return patterns.find(pattern => pattern.id == id);
    }

    async removePattern(id) {
        const patterns = await this.getPatterns();
        const newPatterns = patterns.filter(pattern => pattern.id != id);
        await this.set(this.key, newPatterns);

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

        await this.set(this.key, patterns);
        return await this.getPatterns();
    }

    async get(key, defaultValue) {
        if (this.cache.expirationTime > new Date() && this.cache.patterns.has(key)) {
            return this.cache.patterns.get(key);
        }

        const value = await this.storage.getValue(key, defaultValue);
        this.setCache(key, value);

        return value;
    }

    async set(key, value) {
        await this.storage.setValue(key, value);
        this.setCache(key, value);
    }

    setCache(key, value) {
        this.cache.patterns.set(key, value);

        const date = new Date();
        date.setSeconds(date.getSeconds() + 5);
        this.cache.expirationTime = date;
    }
}
