import * as singleSpa from 'single-spa';

const prefix = (prefix) => ({hash}) => {
    if (hash) {
        return hash.startsWith(`#${prefix}`)
    } else {
        return true
    }
};

export async function loadApp(name, hash, appURL, customProps) {
    singleSpa.registerApplication(name, () => SystemJS.import(appURL), prefix(hash), customProps);
}