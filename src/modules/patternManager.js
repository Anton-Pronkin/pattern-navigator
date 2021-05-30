export default class PatternManager {
    constructor(patternStorage) {
        this.patternStorage = patternStorage;
        this.initializeGroupRegExps();
    }

    initializeGroupRegExps() {
        this.cachedGroupRegExps = [];
        for (let i = 0; i < 10; i++) {
            const regexp = new RegExp("\\$" + i + "\\b", "g");
            this.cachedGroupRegExps.push(regexp);
        }
    }

    async findFirstMatch(text) {
        const patterns = await this.patternStorage.getPatterns();

        for (const pattern of patterns) {
            const match = text?.match(pattern.regexp);
            if (!match || !match.length) {
                return null;
            }

            const title = this.resolveRegExp(match, pattern.title);
            const url = this.resolveRegExp(match, pattern.url);

            return { title, url };
        }

        return null;
    }

    resolveRegExp(match, text) {
        let resolvedText = text;
        for (let i = 0; i < match.length && i < 10; i++) {
            resolvedText = resolvedText.replace(this.cachedGroupRegExps[i], match[i]);
        }

        return resolvedText;
    }
}
