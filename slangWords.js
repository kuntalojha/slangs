// slangWords.js
const assameseSlangs = require('./languages/assamese');
const bengaliSlangs = require('./languages/bengali');
const englishSlangs = require('./languages/english');
const frenchSlangs = require('./languages/french');
const hindiSlangs = require('./languages/hindi');
const kannadaSlangs = require('./languages/kannada');
const marathiSlangs = require('./languages/marathi');
const odiaSlangs = require('./languages/odia');
const tamilSlangs = require('./languages/tamil');
const teluguSlangs = require('./languages/telugu');
const genzSlangs = require('./languages/genz');

// Combine slangs into an object
const words = {
  assamese: assameseSlangs,
  bengali: bengaliSlangs,
  english: englishSlangs,
  french: frenchSlangs,
  hindi: hindiSlangs,
  kannada: kannadaSlangs,
  marathi: marathiSlangs,
  odia: odiaSlangs,
  tamil: tamilSlangs,
  telugu: teluguSlangs,
  genz: genzSlangs,
};

module.exports = words; // Exporting the words object
