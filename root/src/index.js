import * as singleSpa from 'single-spa';
import { GlobalBus } from './globalBus'
import { loadApp } from './helper'

(function init() {
	
    window.globalBus = new GlobalBus();

    const loadingPromises = [
				loadApp('app1', '/app1', '/app1/micro.js', globalBus),
				loadApp('app2', '/app2', '/app2/micro.js', globalBus),
				loadApp('navbar', '', '/navbar/micro.js', globalBus)
    ];

    Promise.all(loadingPromises).then(() => {
			singleSpa.start();
		});

})()
