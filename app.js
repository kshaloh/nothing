const app = {
	init: () => {
		console.log('app running');
	},
	three: 'change made from local',
};

setTimeout(app.init, 1000);
