const englishSlangs = require('./languages/english');
const bengaliSlangs = require('./languages/bengali');
const frenchSlangs = require('./languages/french');
const hindiSlangs = require('./languages/hindi');

// Combine slangs into an object
const words = {
  english: englishSlangs,
  bengali: bengaliSlangs,
  french: frenchSlangs,
  hindi: hindiSlangs,
  // Add more languages as needed
};

module.exports = words; // Exporting the words object
