const words = require('../slangWords'); // Import using CommonJS

const slangs = (language, count = 1) => {
  // If no language is provided, return all slangs for all languages
  if (!language) {
    return Object.keys(words).reduce((acc, lang) => {
      acc[lang] = words[lang]; // Add each language's slangs to the result
      return acc;
    }, {});
  }

  const slangList = words[language];

  // Check if the language is supported
  if (!slangList) {
    return `Sorry, we don't support ${language} yet.`; // Message for unsupported languages
  }

  // Adjust count if it exceeds the number of available slangs
  const maxCount = Math.min(count, slangList.length);

  // Return the first 'maxCount' slangs from the list
  return slangList.slice(0, maxCount);
};

module.exports = { slangs }; // Export using CommonJS
