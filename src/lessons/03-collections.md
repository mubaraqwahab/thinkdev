---
title: Collections (draft)
excerpt: >
  In programming, we often find that we have many
  different values that describe an entity,
  or values that suggest a list. We'll look at
  two data structures in JavaScript that can be
  used to represent these entities and lists.
---

{% from "macros.njk" import iconed %}

## {{ iconed("Video") }}

TODO

## {{ iconed("Exercise") }}

TODO

## {{ iconed("Extras") }}

### Other JS types

So far, we've discussed these types: number, boolean,
string, undefined, null, and object (including arrays).
All these types, except object, are _primitive_ types,
and one thing common to primitives is that they are immutable.

It turns out that there are, as of today, two more primitive
types in JavaScript: bigint and symbol.

The bigint type is used to represent very large integers
that the number type cannot correctly represent.
Bigints are written like regular integers, but must end with an "n",
as in `123456789987654321n`.

The symbol type is used to represent unique values.
A symbol is created using the `Symbol` function,
as in `Symbol()`.

These two types aren't used so often, so we might not even
discuss them during the meetings. Nonetheless, it's good that
you know they exist.

### `typeof` quirks

We've seen one presumably odd behaviour of `typeof`&mdash;it
tells us that an array is an object. There's yet a stranger behaviour.
If you run `typeof null`, you'll get <samp>"object"</samp>.
`null` is not an object, however. If you do [a quick search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)
you'll find that the reason is historical and we just have to live with it.

TODO: mention type of undeclared variable
