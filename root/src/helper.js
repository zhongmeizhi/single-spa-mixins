import * as singleSpa from 'single-spa';

const prefix = (prefix) => ({hash}) => {
    if (hash) {
        return hash.startsWith(`#${prefix}`)
    } else {
        return true
    }
};

export async function loadApp(name, hash, appURL, storeURL, globalBus) {
    let storeModule = {}, customProps = {globalBus: globalBus};

    try {
        storeModule = storeURL ? await SystemJS.import(storeURL) : {storeInstance: null};
    } catch (e) {
        console.log(`Could not load store of app ${name}.`, e);
    }

    if (storeModule.storeInstance && globalBus) {
        customProps.store = storeModule.storeInstance;
        globalBus.registerStore(storeModule.storeInstance);
    }

    singleSpa.registerApplication(name, () => SystemJS.import(appURL), prefix(hash), customProps);
}