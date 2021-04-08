export default class PatternManager {
    findFirstMatch(text) {
        // Use test pattern
        const pattern = /TEST-\d{1,5}/;
    
        const match = text?.match(pattern)?.[0];
        if (!match) {
            return null;
        }

        return {
            pattern: match,
            title: `Open ${match} in a new tab.`,
            url: `test-url/${match}`
        }
    }
}
