const words = require('./slangWords'); // Import using CommonJS

const slangs = (language, count = 1) => {
  const slangList = words[language];

  // Check if the language is supported
  if (!slangList) {
    return `Sorry, we don't support ${language} yet.`; // Return message for unsupported languages
  }

  // Adjust count if it exceeds the number of available slangs
  const maxCount = Math.min(count, slangList.length);

  const selectedSlangs = [];
  while (selectedSlangs.length < maxCount) {
    const randomIndex = Math.floor(Math.random() * slangList.length);
    const selectedSlang = slangList[randomIndex];

    // Ensure the same slang is not selected again
    if (!selectedSlangs.includes(selectedSlang)) {
      selectedSlangs.push(selectedSlang);
    }
  }

  return selectedSlangs; // Returns an array of random slangs
};

// Export the slangs function
module.exports = slangs;
