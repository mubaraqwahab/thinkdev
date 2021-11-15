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

## {{ iconed("Exercise") }}

TODO

## {{ iconed("Extras") }}

### Other <abbr title="JavaScript">JS</abbr> types

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
