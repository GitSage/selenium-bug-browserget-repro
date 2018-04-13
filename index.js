const {Builder, By} = require('selenium-webdriver');

let browser;

/**
 * Purpose of this test:
 * Check if IE breaks with rapidly reloading Google
 * RESULT: breaks
 */
(async function example() {
	browser = await new Builder()
		.forBrowser('internet explorer')
		.build();
	let startTime = new Date().getTime();
	let currentTime;
	let numLoops = 0;

	while(true) {
		currentTime = new Date().getTime();
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