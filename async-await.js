class Example {
	async method1() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				console.log("method 1!");
				resolve();
			}, 1000);
		});
	}

	async method2() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				console.log("method 2!");
				resolve();
			}, 2000);
		});
	}

	async previousMethods() {
		await this.method1();
		await this.method2();
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				console.log("all together!");
				resolve();
			}, 3000);
		});
	}

	async allTogether() {
		await this.previousMethods();
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				console.log("Finished!");
				resolve();
			}, 4000);
		});
	}

}

new Example().allTogether().then(function() {
	console.log("Hello after all!");
});
