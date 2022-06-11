---
title: Bindings again
draft: true
excerpt: >
  This lesson explores how the concepts of bindings and scopes relate to variables in JavaScript.
---

## Video

TODO

## Exercises

The exercises below are reading exercises. Study the programs given and try to determine their outputs, **without running them**. You might find it helpful to draw how the variables are attached to values with a pen and paper.

Confirm your answers by running each program, only after you've attempted to guess its output.

1. ```js
   let text = "JavaScript";
   let language = text;
   text = text.toUpperCase();

   console.log(text);
   console.log(language);
   ```

2. ```js
   let x = 10;
   if (true) {
     console.log(x);
     let x = 30;
   }
   ```

3. ```js
   let y = 10;
   if (true) {
     y = 20;
   }
   if (true) {
     let y = 30;
   }
   console.log(y);
   ```

4. ```js
   const person = {
     firstName: "Mubaraq",
     lastName: "Wahab",
     address: {
       state: "Lagos",
       country: "Nigeria"
     }
   };

   person.firstName = "Isa";
   console.log(person);

   const address = person.address;
   address.state = "Abuja";
   console.log(person);

   person = "Elleman";
   console.log(person);
   ```

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
