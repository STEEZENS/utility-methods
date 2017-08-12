// capitalize the first character of a string
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// abbreviate a string to a given amount of characters
const abbreviate = (str, characterCount) => str.slice(0, characterCount);

// retrieve a single random value from an array
const getRandomArrayValue = arr => arr[Math.floor(Math.random() * arr.length)];

// swap out camelization with a given separator
const uncamelize = (str, separator = " ") => str.replace(/[A-Z]/g, letter => separator + letter.toLowerCase()).replace("/^" + separator + "/", "");

// add commas as thousands separator to number (note: this will convert your number to a string)
const commalizeNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// clamp a number between a max and min
const clamp = (num, min, max) => Math.max(min, Math.min(num, max));

// round a float to an optionally given decimal place
const roundNumber = (num, decimalPoints = 0) => {
    let multiplier = Math.pow(10, decimalPoints || 0);
    return Math.round(num * multiplier) / multiplier
};

// get a random number between a min and max and at an optionally given decimal point
const getRandomNumber = (min, max, decimalPoints = 0) => {
    let randomNumber;
	if (decimalPoints) {
		let floatingNumber = Math.random() * (max - min) + min;
		randomNumber = roundNumber(floatingNumber, decimalPoints);
	} else {
		randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	}
	return randomNumber;
};

// shuffle an array (currently mutates the array = no bueno!)
const shuffleArray = arr => {
    let currentIndex = arr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
};
