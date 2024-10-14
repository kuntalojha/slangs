const { slangs, random, languages } = require('./index');

// Get list of supported languages
console.log(languages());

// Get all slangs
console.log(slangs()); // Get all slangs

// Get a random Bengali slang (1 slang)
console.log(slangs('bengali', 1)); // Returns 1 random Bengali slang

// Get 4 random Bengali slangs
console.log(slangs('bengali', 4)); // Returns 4 random Bengali slangs

// Get 3 random slangs from English
console.log(slangs('english', 3)); // Returns 3 random English slangs

// Get random slangs from unsupported language
console.log(slangs('spanish', 2)); // Returns []

console.log(random()); // Get all slangs

// Get a random Bengali slang (1 slang)
console.log(random('bengali', 1)); // Returns 1 random Bengali slang

// Get 4 random Bengali slangs
console.log(random('bengali', 4)); // Returns 4 random Bengali slangs

// Get 3 random slangs from English
console.log(random('english', 3)); // Returns 3 random English slangs

// Get random slangs from unsupported language
console.log(random('spanish', 2)); // Returns []
