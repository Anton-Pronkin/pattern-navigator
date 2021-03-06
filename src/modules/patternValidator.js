export default class PatternValidator {
    constructor(pattern) {
        this.pattern = pattern;
        this.validatedPattern = null;
        this.errorMessage = null;
    }

    validate() {
        if (!PatternValidator.validateId(this.pattern.id)) {
            return this.invalid("Pattern id is not valid.");
        }

        if (!PatternValidator.validateName(this.pattern.name)) {
            return this.invalid("Pattern name is not valid.");
        }

        if (!PatternValidator.validateRegExp(this.pattern.regexp)) {
            return this.invalid("Pattern regexp is not valid.");
        }

        if (!PatternValidator.validateUrl(this.pattern.url)) {
            return this.invalid("Pattern url is not valid.");
        }

        if (!PatternValidator.validateUrl(this.pattern.title)) {
            return this.invalid("Pattern title is not valid.");
        }

        return this.valid();
    }

    static validateId(id) {
        return this.validateNonNegativeNumber(id);
    }

    static validateName(name) {
        return this.validateNonEmptyText(name);
    }

    static validateRegExp(regexp) {
        return this.validateNonEmptyText(regexp);
    }

    static validateUrl(url) {
        return this.validateNonEmptyText(url);
    }

    static validateTitle(title) {
        return this.validateNonEmptyText(title);
    }

    static validateNonNegativeNumber(value) {
        return typeof value == "number" && !isNaN(value) && value >= 0;
    }

    static validateNonEmptyText(value) {
        return typeof value == "string" && value.length > 0;
    }

    valid() {
        this.validatedPattern = {
            id: this.pattern.id,
            name: this.pattern.name,
            regexp: this.pattern.regexp,
            title: this.pattern.title,
            url: this.pattern.url
        };

        return true;
    }

    invalid(message) {
        this.errorMessage = message;
        return false;
    }
}
