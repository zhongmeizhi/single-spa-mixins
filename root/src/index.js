import 'zone.js';
import * as singleSpa from 'single-spa';
// import { GlobalBus } from './globalBus'
import { loadApp } from './helper'

async function init() {
    // const globalBus = new GlobalBus();

    const loadingPromises = [];

    loadingPromises.push(loadApp('app1', '/app1', '/app1/micro.js', null, null));
    loadingPromises.push(loadApp('app2', '/app2', '/app2/micro.js', null, null));
    loadingPromises.push(loadApp('navbar', '', '/navbar/micro.js', null, null));

    // loadingPromises.push(loadApp('app1', '/app1', '/app1/micro.js', '/app1/store.js', globalBus));
    // loadingPromises.push(loadApp('app2', '/app2', '/app32/micro.js', null, null));

    await Promise.all(loadingPromises);

    singleSpa.start();
}

init();

