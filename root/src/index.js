import * as singleSpa from 'single-spa';
import { GlobalBus } from './globalBus'
import { loadApp } from './helper'

(function init() {
    const globalBus = new GlobalBus();

    const loadingPromises = [
				loadApp('app1', '/app1', '/app1/micro.js', null, globalBus),
				loadApp('app2', '/app2', '/app2/micro.js', null, globalBus),
				loadApp('navbar', '', '/navbar/micro.js', null, globalBus)
				// loadApp('app1', '/app1', '/app1/micro.js', '/app1/store.js', globalBus)
				// loadApp('app2', '/app2', '/app32/micro.js', null, null)
    ];

    Promise.all(loadingPromises).then(() => {
			singleSpa.start();
		});

})()
