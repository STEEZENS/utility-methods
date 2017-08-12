# utility-methods
====
A collection of commonly used utility methods.


### Strings

#### capitalize(str)
```js
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
```

#### abbreviate(str, characterCount)
```js
const abbreviate = (str, characterCount) => str.slice(0, characterCount);
```

#### uncamelize(str, separator = " ")
```js
const uncamelize = (str, separator = " ") => str.replace(/[A-Z]/g, letter => separator + letter.toLowerCase()).replace("/^" + separator + "/", "");
```

#### commalizeNumber(num)
```js
const commalizeNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
```


### Numbers

#### clamp(num, min, max)
```js
const clamp = (num, min, max) => Math.max(min, Math.min(num, max));
```

#### roundNumber(nnum, decimalPoints = 0)
```js
const roundNumber = (num, decimalPoints = 0) => {
    let multiplier = Math.pow(10, decimalPoints || 0);
    return Math.round(num * multiplier) / multiplier
};
```

#### getRandomNumber = (min, max, decimalPoints = 0)
```js
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
```


### Arrays

#### getRandomArrayValue(arr)
```js
const getRandomArrayValue = arr => arr[Math.floor(Math.random() * arr.length)];
```

#### shuffleArray(arr)
```js
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
```
