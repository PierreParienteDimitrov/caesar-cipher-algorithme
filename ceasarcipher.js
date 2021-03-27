const userInput = 'Le Tigre de Tasnamie';

// Initializing word
const word = userInput.toLowerCase().split(' ').join('');
console.log(word);

// Initializing alphabet arrat
const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
// Converting word into an array
const wordArr = word.split('');

const cesarWordArr = [];

const transform = () => {
	wordArr.map((el, index) => {
		for (i = 0; i < alphabetArray.length; i++) {
			if (el === alphabetArray[i]) {
				if (el !== 'z') {
					cesarWordArr.push(alphabetArray[i + 1]);
				} else if (el === 'z') {
					cesarWordArr.push(alphabetArray[0]);
				}

				console.log(cesarWordArr);
			}
		}
	});

	result();
};

const result = () => {
	const result = cesarWordArr.toString();
	console.log('------------');
	console.log(result);
};

transform();
