let seconds = 0;
let minutes = 0;
let hours = 0;

const runClock = () => {
	if (hours <= 23) {
		setInterval(() => {
			seconds += 1;
			if (seconds >= 60) {
				seconds = 0;
				minutes += 1;

				if (minutes >= 60) {
					minutes = 0;
					hours += 1;
				}
			}

			console.log(`${hours}:${minutes}:${seconds}`)
		}, 1000)
	} else {
		console.log("Process finished")
	}
}

runClock()