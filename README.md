# Generate Password, Id and Hex-Code

The `@cranet/gen-random` npm package is a versatile utility designed to simplify the creation of random identifiers, secure passwords, and color hexcodes. Whether you need a unique ID for database entries, a strong password for security purposes, or a random hex color for design, this package provides a simple and efficient solution. With customizable options for length and complexity, it’s ideal for developers looking to enhance their projects with robust randomization capabilities.

## Installation

```bash
$ npm install @cranet/gen-random
```

## Quick start

First you need to integrate @cranet/gen-random into your application.

```javascript
// common js
const {
  generateHexCode,
  generateId,
  generatePass,
} = require("@cranet/gen-random");

// module
import { generateHexCode, generateId, generatePass } from "@cranet/gen-random";
```

### generate random id

The `generatePass` function is part of the `@cranet/gen-random` npm package. This function generates a secure random password based on the specified length and customization options.

```javascript
const myPassword = generatePass();
console.log(myPassword); // "GC9WOk/2"

/* This function take two parameter
  length - default = 8
  options - default = {
    lowercase: true,
    uppercase: true,
    number: true,
    symbol: true
  }
*/
generatePass(length, options);

// you can generate a customize password

const len = 12; // it should be 4 and above

// make a option object
const myOption = {
  lowercase: false,
  number: false,
};

const customPassword = generatePass(len, myOption);
//or
const customPassword = generatePass(12, { lowercase: false, number: false });

console.log(customPassword); // "4n17f4j69mh8"
```

### generate random Id's

The `generateId` function is part of the `@cranet/gen-random` npm package. This function generates a random identifier based on the specified length and customization options.

```javascript
const newId = generateId();
console.log(newId); // "mO08G3aGsmSy08"

// customize this id

/* This function take two parameters
   
    first:  id-length, defalut = 14
    secound:  special - character, default: false

*/

const idLength = 20; // make a length
const specialChar = true; // default specialChar = false;

const customId = generateId(idLength, specialChar);
// or
const customId = generateId(20, true);

console.log(customId); // "?9p&5w@E7V>vMAq<G%>m"
```

### generate random hex-code

The `generateHexCode` function is part of the `@cranet/gen-random` npm package. This function generates a random hexadecimal color code.

```javascript
// this function does not take any parameter and return a string
const hexColor = generateHexCode();

console.log(hexColor); // "#8D2794"
```
