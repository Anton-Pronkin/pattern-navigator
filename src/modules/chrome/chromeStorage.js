import "chrome-extension-async";

export default class ChromeStorage {
    async getValue(key, defaultValue) {
        const values = await chrome.storage.local.get({
            [key]: defaultValue
        });

        return values[key];
    }

    async setValue(key, value) {
        return await chrome.storage.local.set({
            [key]: value
        });
    }
}
