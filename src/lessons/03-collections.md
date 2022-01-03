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

## {{ iconed("Videos") }}

### Lesson session

https://youtu.be/qQg4-Nx4ohk

### Revision session

https://youtu.be/NgxAcW7ppWo

## {{ iconed("Exercises") }}

Do these exercises in a JavaScript file. (From now on, we won't be using the REPL so much.)

1. I left some things out of the meeting to avoid bloating the slides. <i>What happens if you try to access a property that doesn't exist in an object? What about popping an empty array? Can you spread an object into an array or vice versa?</i> You may have your questions too. Try to get answers by experimenting.

1. Pick any app or website (or some other software) of your choice and identify some entities and lists in it. Try representing those entities and lists using JavaScript objects and arrays.

1. An object can have a property whose value is also an object. In this case, we say that the inner object is a <i>nested</i> object:

    ```js
    const user = {
      name: 'Random User',
      email: 'user123@example.com',
      // The value of address is a nested object
      address: {
        city: 'Jabi',
        state: 'Abuja'
      }
    }
    ```

    How would you access the `state` property of the nested `address` object? Try changing the value of the `city` property to something else, like "Gwarinpa".

1. An array can contain nested arrays too. When an array contains only array elements, as in the following example, we call it a <i>two-dimensional</i> array or a <i>matrix</i>. (The regular array is a <i>one-dimensional</i> array.)

    ```js
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    ```

    How would you access and change the number `7` of the nested array?

## {{ iconed("Extras") }}

### Other JavaScript types

We've discussed these types so far: number, boolean,
string, undefined, null, and object (including arrays).
All of them, except object, are <i>primitive</i> types,
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
