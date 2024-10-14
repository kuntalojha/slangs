const words = require('../slangWords'); // Import using CommonJS

const random = (language, count = 1) => {
  // If no language is provided, return all slangs
  if (!language) {
    return Object.keys(words).reduce((acc, lang) => {
      acc[lang] = words[lang]; // Add each language's random to the result
      return acc;
    }, {});
  }

  const slangList = words[language];

  // Check if the language is supported
  if (!slangList) {
    return `Sorry, we don't support ${language} yet.`; // Return message for unsupported languages
  }

  // Adjust count if it exceeds the number of available random
  const maxCount = Math.min(count, slangList.length);

  const selectedrandom = [];
  while (selectedrandom.length < maxCount) {
    const randomIndex = Math.floor(Math.random() * slangList.length);
    const selectedSlang = slangList[randomIndex];

    // Ensure the same slang is not selected again
    if (!selectedrandom.includes(selectedSlang)) {
      selectedrandom.push(selectedSlang);
    }
  }

  return selectedrandom; // Returns an array of  random slangs
};

module.exports = { random }; // Export using CommonJS
