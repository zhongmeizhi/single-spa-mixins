export class GlobalBus {

	constructor() {
		this.globalBus = {};
	}

	on(name = 'unknown', fn = () => {}) {
		if (typeof fn != 'function') {
			throw(`${name} 不是一个函数`);
		}
		let fnPools = this.globalBus[name];
		if (fnPools) {
			fnPools.push(fn);
		} else {
			this.globalBus[name] = [fn];
		}
	}

	emit(name, ...args) {
		let fnPools = this.globalBus[name];
		if (fnPools) {
			fnPools.forEach(fn => fn.apply(fn, args));
		}
	}

	destroy(name = 'unknown', target = () => {}) {
		let fnPools = this.globalBus[name];
		if (fnPools) {
			let idx = fnPools.findIndex(fn => fn === target);
			fnPools.splice(idx, 1)
		}
	}
}