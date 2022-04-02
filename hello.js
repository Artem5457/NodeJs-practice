const EventEmmiter = require('events');
const celebrity = new EventEmmiter();

// Subscribe to celebrity for Observer 1
celebrity.addListener('race', (result) => {
	if (result === 'win') {
		console.log('Congratulations! You are the best!');
	}
});

// Subscribe to celebrity for Observer 2
celebrity.on('race', (result) => {
	if (result === 'win') {
		console.log('Boo I could have better than that!');
	}													
});

process.on('exit', (code) => {
	console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');

function history(a, b) {
	return a * b;
}

console.log(history(6, 8));

