export default class PatternManager {
    findFirstMatch(text) {
        // Use test pattern
        const pattern = /PROJECT-\d{1,5}/;
    
        const match = text?.match(pattern)?.[0];
        if (!match) {
            return null;
        }

        return {
            pattern: match,
            title: `Open ${match} in your issue tracker`,
            url: `test-url/${match}`
        }
    }
}
