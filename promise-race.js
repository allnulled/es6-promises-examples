Promise.race([
	new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log("out of time in second 2");
			resolve();
		}, 2000);
	}),
	new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log("out of time in second 3");
			resolve();
		}, 3000);
	}),
	new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log("ok in second 1");
			resolve();
		}, 1000);
	})
]).then(function() {
	console.log("Finished!");
});