export function get({
    key,
    defaultValue
}) {
    try {
        const value = window.localStorage.getItem(key);

        if (value === null) {
            return defaultValue;
        }

        return JSON.parse(value);
    } catch (err) {
        return defaultValue;
    }
}

export function set({ key, value }) {
    try {
        if (value === null || value === undefined) {
            window.localStorage.removeItem(key);
        } else {
            window.localStorage.setItem(key, JSON.stringify(value));
        }

        return true;
    } catch (err) {
        return false;
    }
}