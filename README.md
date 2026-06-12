# slangs !

>  A multilingual slang dictionary and random slang generator featuring English, Hindi, Bengali, Tamil, Telugu, Marathi, Odia, Assamese, French, Kannada, and more. Created by [@kuntalojha](https://github.com/kuntalojha) as a fun open-source project for developers, language enthusiasts, and anyone interested in exploring slang across different languages. 

![slangs](https://github.com/kuntalojha/slangs/blob/main/hero.jpg)

## Overview 
[![npm](https://img.shields.io/npm/v/slangs.svg)](https://www.npmjs.com/package/slangs)
![License](https://img.shields.io/npm/l/slangs.svg)
![Downloads](https://img.shields.io/npm/dt/slangs.svg)

The `slangs` package provides a simple and efficient way to retrieve slang words in multiple languages, including English, Bengali, and French. Users can fetch all available slangs, get random slangs from a specific language, and even specify the number of slangs they want to receive.

--- 
## 🌍 Supported Languages

| Language | Slangs | Language | Slangs |
| -------- | ------ | -------- | ------ |
| Assamese | 165+   | Bengali  | 200+   |
| English  | 220+   | French   | 200+   |
| Hindi    | 215+   | Kannada  | 230+   |
| Marathi  | 220+   | Odia     | 145+   |
| Tamil    | 220+   | Telugu   | 200+   |
---

## Installation
To install the `slangs` package, simply include it in your project:

```bash
 npm install slangs
```

| Package Manager | Command           |
| --------------- | ----------------- |
| **Yarn**        | `yarn add slangs` |
| **PNPM**        | `pnpm add slangs` |
| **BUN**         | `bun add slangs`  |

--- 
## 🔑 API Reference

| Function                  | Return Type | Description                                                                     |
| ------------------------- | ----------- | ------------------------------------------------------------------------------- |
| `slangs()`                | `Object`    | Returns all available slang datasets grouped by language.                       |
| `slangs(language)`        | `string[]`  | Returns slang words for the specified language.                                 |
| `slangs(language, count)` | `string[]`  | Returns the requested number of slang words from the specified language.        |
| `random()`                | `string`    | Returns a random slang word from all available languages.                       |
| `random(language)`        | `string`    | Returns a random slang word from the specified language.                        |
| `random(language, count)` | `string[]`  | Returns the requested number of random slang words from the specified language. |
| `languages()`             | `string[]`  | Returns a list of all supported languages.                                      |

---

## Usage Instructions

### Importing the Package

- To use the `slangs` package in your project, you can import it using CommonJS syntax:

```javascript
const { slangs, random, languages } = require('slangs');
```

For projects using ES6 modules, you can also import it as follows:

```javascript
import { slangs, random, languages } from 'slangs';
```

## Functionality

> The `slangs` package provides the following functions: `slangs`, `random`, and `languages`

### The `slangs` Function:

- **language**: A string specifying the language for which you want to retrieve slangs. Supported languages include:
  - **Assamese**: `assamese`
  - **Bengali**: `bengali`
  - **English**: `english`
  - **French**: `french`
  - **Hindi**: `hindi`
  - **Kannada**: `kannada`
  - **Marathi**: `marathi`
  - **Odia**: `odia`
  - **Tamil**: `tamil`
  - **Telugu**: `telugu`
  - **Genz**: `genz`

- **count**: An optional integer specifying the number of slangs to return. Defaults to `1` if not provided.

### Example Usage `languages`

- **The `languages` function retrieves the list of supported languages for the `slangs` package.**

- To get the list of supported languages, you can call the `languages` function:

```javascript
const { languages } = require('slangs');

// Get the list of supported languages
console.log(languages());
// Returns an array of supported languages
```

### Example Usage `slangs`

To use the `slangs` package in your project, you can use the following examples:

1. **Get All Slangs**

   To get all available slangs from the package:

   ```javascript
   const { slangs } = require('slangs');
   console.log(slangs());
   ```

2. **Get a Random Slang**

   To get a slang from a specific language:

   ```javascript
   console.log(slangs('bengali'));
   ```

3. **Get Multiple Slangs**

   To get a specific number of slangs from a given language:

   ```javascript
   console.log(slangs('english', 3));
   // Get 3  English slangs
   ```

   If the requested number exceeds the available slangs, the function will return only the available ones.

4. **Unsupported Language Handling**

   If a language is not supported, the function will return a message indicating that support is unavailable:

   ```javascript
   console.log(slangs('spanish', 2));
   // Returns "Sorry, we don't support spanish yet."
   ```

### Return Values

- When a valid language is specified, the function returns an array of slangs.
- If the language is unsupported, it returns a string message indicating the lack of support.

### Example Usage `random`

1. **Get All `random` Slangs**

   To get all available slangs from the package:

   ```javascript
   console.log(random());
   ```

2. **Get a Random Slang**

   To get a random slang from a specific language:

   ```javascript
   console.log(random('bengali'));
   ```

3. **Get Multiple Random Slangs**

   To get a specific number of random slangs from a given language:

   ```javascript
   console.log(random('english', 3));
   // Get 3 random English slangs
   ```

   If the requested number exceeds the available slangs, the function will return only the available ones.

4. **Unsupported Language Handling**

   If a language is not supported, the function will return a message indicating that support is unavailable:

   ```javascript
   console.log(random('spanish', 2));
   // Returns "Sorry, we don't support spanish yet."
   ```

### Return Values

- When a valid language is specified, the function returns anrandom array of slangs.
- If the language is unsupported, it returns a string message indicating the lack of support.

## Example Implementation

Here’s a full example of how to implement the `slangs` package:

```javascript
const { slangs, random, languages } = require('slangs');

// Get the list of supported languages
console.log(languages());
// Returns an array of supported languages

// Get all slangs
console.log(slangs());

// Get all random slangs
console.log(random());

// Get a  Bengali slang
console.log(slangs('bengali'));

// Get a random Bengali slang
console.log(random('bengali'));

// Get 4  Bengali slangs
console.log(slangs('bengali', 4));

// Get 4 random Bengali slangs
console.log(random('bengali', 4));

// Get 3 slangs from English
console.log(slangs('english', 3));

// Get 3 random slangs from English
console.log(slangs('english', 3));

// Get 4 slangs from Hindi
console.log(slangs('hindi', 4));

// Get 4 random slangs from Hindi
console.log(random('hindi', 4));

// Get slangs from an unsupported language
console.log(slangs('spanish', 2));
// Returns "Sorry, we don't support spanish yet."

// Get random slangs from an unsupported language
console.log(random('spanish', 2));
// Returns "Sorry, we don't support spanish yet."
```

## 🎉 What's New in 1.1.0-beta.9 and later

### 🔥 Gen Z Slang Support Added
> The `slangs` package now includes slang terms from the Gen Z generation.

```js
const { slangs, random } = require('slangs');

console.log(random('genz'));
// Example: ["rizz"]

console.log(random('genz', 5));
// Example: ["sus", "delulu", "slay", "mid", "bet"]
```

### ✨ Popular Gen Z Terms Included

- rizz • sus • delulu • slay • no cap • bussin • drip • mid • bet • goated • aura • cooked • locked in • touch grass • brainrot • ratio • caught in 4k • based • cringe • cheugy • flex • salty And many more!

- Stay tuned as the Gen Z collection continues to grow with future updates.


## Contributing

Contributions to the `slangs` package are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit). See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

**Kuntal Ojha**

- GitHub: [@kuntalojha](https://github.com/kuntalojha)
- npm: [@kuntalojha](https://www.npmjs.com/~kuntalojha)
- LinkedIn: [@mrkuntalojha](https://linkedin.com/in/mrkuntalojha)
- X (Twitter): [@kuntalojha](https://twitter.com/kuntalojha)
- Instagram: [@mrkuntalojha](https://instagram.com/mrkuntalojha)

---

## 🤝 Contributing

Contributions, feature requests, and suggestions are welcome!

If you'd like to improve the slang dataset, add support for new languages, fix issues, or enhance the package, feel free to open an issue or submit a pull request.

---

## ❤️ Support the Project

<p align="center">
  <a href="https://kuntalojha.github.io/payment/">
    <img src="https://img.shields.io/badge/☕%20Buy%20Me%20a%20Chai-Support-orange?style=for-the-badge" alt="Buy Me a Chai">
  </a>
</p>

<p align="center">
  🌍 Building multilingual language tools<br>
  💬 Slang Dictionaries • 📚 Language Data • 🚀 Developer Utilities
</p>

<p align="center">
  <i>Your support helps maintain and expand the slang database with more languages and better coverage.</i>
</p>

---

<h3 align="center">
  <i>Made with ❤️ by Kuntal Ojha</i>
</h3>
