---
title: Collections
excerpt: >
  In programming, we often have many
  different values that describe an entity,
  or values that suggest a list. We'll look at
  two data structures in JavaScript that can be
  used to represent these entities and lists.
---

{% from "macros.njk" import iconed %}

## {{ iconed("Video") }}

TODO

<!--

Consider string.split() and array.join()

Consider object.keys() and object.values()

 -->

## {{ iconed("Exercises") }}

Do these exercises in a JavaScript file. (From now on, we won't be using the REPL so much.)

1. Pick any app or website (or some other software) of your choice and identify some entities and lists in it. Try representing those entities and lists using JavaScript objects and arrays.

1. TODO: Export to CSV

1. TODO: Import from CSV

1. TODO: JSON

<!-- TODO: P.S. Talk about why the "find out" exercises and talk about the importance of loops. Consider doing something that necessitates decision making -->

<!-- 1. You may have heard of <abbr>CSV</abbr> before. It stands for _comma-separated values_ and it's a file format for storing data in rows and columns. A CSV file looks like this:
    ```csv
    Country,Capital,Continent,Estimated Population
    Nigeria,Abuja,Africa,
    Australia,Sydney,Australia,
    ``` -->

## {{ iconed("Extras") }}

### Other JavaScript types

We've discussed these types so far: number, boolean,
string, undefined, null, and object (including arrays).
All of them, except object, are _primitive_ types,
and one thing common to primitives is that they are immutable.

There are two more primitive types in JavaScript as of today: bigint and symbol.

The bigint type is used to represent very large integers
that the number type cannot correctly represent.
Bigints are written like regular integers, but they must end with an "n",
as in `123456789987654321n`.

The symbol type is used to represent unique values.
A symbol is created using the `Symbol` function,
as in `Symbol()`. Symbols can also be used as keys in objects.

These two types aren't used so often, so we may not even
cover them during the meetings. Nonetheless, you should know that they exist.

### `typeof` quirks

We've seen one supposedly odd behaviour of `typeof`&mdash;it
tells us that an array is an object. There's yet another strange behaviour.
If you run `typeof null`, you'll get <samp>"object"</samp>.
However, `null` is not an object. A quick search reveals that [the reason for this is historical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) and we just have to live with it.

A final thing to note is that when you run `typeof` on an undeclared variable, the result is <samp>"undefined"</samp>:

```js
typeof x
// There's no variable x declared above,
// so the result is "undefined".
```
