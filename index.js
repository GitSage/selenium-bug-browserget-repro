const {Builder, By} = require('selenium-webdriver');

(async function example() {
	let browser = await new Builder()
		.forBrowser('internet explorer')
		.build();
	let startTime = new Date().getTime();
	let numLoops = 0;

	while(true) {
		let currentTime = new Date().getTime();
		numLoops++;
		process.stdout.write(`\rReloads: ${numLoops}, elapsed time: ${getElapsedTimeString(startTime, currentTime)}        `);
		await browser.get('https://google.com');
		await browser.findElement(By.name('q')).sendKeys('This will crash soon');
	}
})();

function getElapsedTimeString(startTime, endTime) {
	let elapsedSeconds = Math.floor((endTime - startTime) / 1000);

	let date = new Date(null);
	date.setSeconds(elapsedSeconds);
	return date.toISOString().substr(11, 8);
}