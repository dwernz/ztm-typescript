/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations

// Strings
// Can use both single or double quotes.
// No exact standard of which one, just remain consistent in the code base.
const courseName = "typescript";
const courseName2 = 'typescript';

// Back quotes is also acceptable, but typically reserved for not just a normal string.
const courseName3 = `typescript`;

// No difference between char and string with TypeScript.

// Numbers
const amount = 10;
const fraction = 10.5;

// Will expand to 1000.
const oneThousand = 1e3;

// Octals, used with Linux permissions, but not used often.
const allPermissions = 0o777;

// Hexadecimal
const hexByte = 0xff;

// Binary
const binary = 0b0100001;

// Big Integer
const bigInt = 9000n;

// Boolean
const yes = true;
const no = false;

// undefined
// unknown data, missing
const missing = undefined;

// We're telling the computer that the data is not there.
const empty = null;

// const does not allow reassignment of variables.
// let does allow it.
// old standard was using the keyword var, but not used much anymore.
let someNum = 0;
someNum = 1;
someNum = 2;

// Cannot declare/initialize a variable with the same name.
// let someNum = 5;

// Because the scope is different, someNum is able to be declared/initialized as a separate variable.
// This one is only accessible by this block, where as the above is a global variable.
// Typically not seen in production as often, but common in testing.
// Each test block can test different things.
{
    let someNum = 5;
}

// uninitialized.
// Set the data later, but not yet.
let hello;

// Must initialize a const variable.
// const whoops;