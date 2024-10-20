# slangs ![Downloads](https://img.shields.io/npm/dt/slangs.svg)

![](https://github.com/kuntalojha/slangs/blob/main/hero.jpg)

## Overview

The `slangs` package provides a simple and efficient way to retrieve slang words in multiple languages, including English, Bengali, and French. Users can fetch all available slangs, get random slangs from a specific language, and even specify the number of slangs they want to receive.

## Installation

To install the `slangs` package, simply include it in your project:

[![npm](https://img.shields.io/npm/v/slangs.svg)](https://www.npmjs.com/package/slangs)
![License](https://img.shields.io/npm/l/slangs.svg)
![Downloads](https://img.shields.io/npm/dt/slangs.svg)

```bash
 npm install slangs
```

| Package Manager | Command           |
| --------------- | ----------------- |
| **Yarn**        | `yarn add slangs` |
| **PNPM**        | `pnpm add slangs` |
| **BUN**         | `bun add slangs`  |

## Usage

### Importing the Package

To use the `slangs` package in your project, you can import it using CommonJS syntax:

```javascript
const { slangs, random, languages } = require('slangs');
```

For projects using ES6 modules, you can also import it as follows:

```javascript
import { slangs, random, languages } from 'slangs';
```

### Functionality `slangs`, `random`, and `languages`

**The `slangs` function supports the following parameters:**

- **language**: A string specifying the language for which you want to retrieve slangs. Supported languages include:

  - `english`
  - `bengali`
  - `french`

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

// Get slangs from an unsupported language
console.log(slangs('spanish', 2));
// Returns "Sorry, we don't support spanish yet."

// Get random slangs from an unsupported language
console.log(random('spanish', 2));
// Returns "Sorry, we don't support spanish yet."
```

## Contributing

Contributions to the `slangs` package are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit). See the [LICENSE](LICENSE) file for more details.
