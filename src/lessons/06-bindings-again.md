---
title: Bindings again
draft: true
excerpt: >
  This lesson explores how the concepts of bindings and scopes relate to variables in JavaScript.
---

## Video

TODO

## Exercises

TODO

## Extras

### One declaration, many variables

We know how to declare many variables:

```js
let a = 1;
let b = 2;
```

We can also do these in the same declaration (note the use of the comma `,`):

```js
let a = 1, b = 2;
```

This works with `const` too:

```js
const a = 1, b = 2;
```

### Keywords and reserved words

You might come across these two terms, keyword and reserved word. How are they different? Let's define them:

A <dfn>keyword</dfn> is a word in a programming language that has a special meaning. The word `if` in JavaScript is a keyword because it's used to start an `if` statement.

A <dfn>reserved word</dfn> is a word that is not a valid name. The word `if` in JavaScript is also a reserved word because you can't use it as a (variable) name.

Most keywords in JavaScript are also reserved words, and vice versa, so we'll use the two terms interchangeably for our purposes.
