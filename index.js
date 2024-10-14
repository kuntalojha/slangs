// Import the slang words
const words = require('./slangWords'); // Import using CommonJS
const { slangs } = require('./module/slangs'); // Import using CommonJS
const { random } = require('./module/random'); // Import using CommonJS

// Function to list supported languages
const languages = () => Object.keys(words);

// Export the slangs function
module.exports = { slangs, random, languages }; // Export using CommonJS
