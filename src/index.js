var starWarNames = require('./starwars.json');
var randomName = require('unique-random-array');
module.exports = {
	all: starWarNames,
	random: randomName(starWarNames)
}