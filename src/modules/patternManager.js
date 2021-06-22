export default class PatternManager {
    constructor(patternStorage) {
        this.patternStorage = patternStorage;
        this.initializeGroupRegExps();
    }

    initializeGroupRegExps() {
        this.cachedGroupRegExps = [];
        for (let i = 0; i < 10; i++) {
            const regexp = new RegExp("\\$" + i + "(?!\\d)", "g");
            this.cachedGroupRegExps.push(regexp);
        }
    }

    async findMatches(text) {
        const patterns = await this.patternStorage.getPatterns();

        const result = [];
        for (const pattern of patterns) {
            const matches = text?.matchAll(pattern.regexp) ?? [];
            
            for (const match of matches) {
                const title = this.resolveRegExp(match, pattern.title);
                const url = this.resolveRegExp(match, pattern.url);

                result.push({ title, url });
            }
        }

        const resultWithoutDuplicats = new Map(result.map(x => [x.title, x]));
        return Array.from(resultWithoutDuplicats.values());
    }

    resolveRegExp(match, text) {
        let resolvedText = text;
        for (let i = 0; i < match.length && i < 10; i++) {
            resolvedText = resolvedText.replace(this.cachedGroupRegExps[i], match[i]);
        }

        return resolvedText;
    }
}
