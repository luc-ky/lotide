# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @luc-ky/lotide`

**Require it:**

`const _ = require('@luc-ky/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts two arrays are equal 
* `assertEqual`: console logs if assertion is true or false 
* `assertObjectsEqual`: asserting two objects are equal
* `countLetters(string)`: returns an object with the count of each of the letters in the string
* `countOnly(array, object)`: returns counts for a subset of those items
* `eqArrays(array, array)`: compares two arrays for a perfect match 
* `eqObjects(object, object)`: returns if two objects are perfect match
* `findKey(object, callback)`: returns the first key which the callback returns a truthy value
* `findKeyByValue(object, value)`: scans the object and returns the first key which contains the given value
* `flatten(array)`: returns a flattened array
* `head(array)`: returns the first element of an array 
* `letterPositions(string)`: takes a sentence and returns the indices where each letter is found
* `map(array, callback)`: maps a new array based on the results of the callback function
* `middle(array)`: returns the middle elements of an array 
* `tail(array)`: returns all elements of an array except for the first 
* `takeUntil(array, callback)`: takes an array and a callback and returns a new array
* `without(array, itemsToRemove)`: returns the subset of a given array while removing unwanted elements