Promise.resolve(0)
	.then(function(data) {
		return new Promise(function(resolve, reject) {
			setTimeout(() => {
				console.log("ok taking 1 second");
				resolve();
			}, 1000);
		});
	})
	.then(function(data) {
		return new Promise(function(resolve, reject) {
			setTimeout(() => {
				console.log("reok taking 2 seconds");
				resolve();
			}, 2000);
		});
	})
	.then(function(data) {
		return new Promise(function(resolve, reject) {
			setTimeout(() => {
				console.log("rereok taking 3 seconds");
				resolve();
			}, 3000);
		});
	})
	.then(function() {
		console.log("Finished!");
	});
