---
title: Values and types
excerpt: >
  Values are at the heart of programming.
  In this lesson, we'll look at some of JavaScript's primitive types of values and how to manipulate them.
  We'll also cover expressions, statements, and variables.
emoji: 🔢
---

{% from "macros.njk" import iconed %}

## {{ iconed("Video") }}

TODO

## {{ iconed("Exercise") }}

TODO

## {{ iconed("Extras") }}

### The `var` keyword

We learnt about the `const` and `let` keywords for declaring variables, but there's a third keyword, `var`, that you might find in JavaScript code:

```js
var x = 1;
```

You can reassign the variable like you can with `let`. It does, however, behave differently (and rather strangely) than both `let` and `const` variables.

We don't need it for our purposes, but we may discuss it later when we look at some of the finer details of JavaScript. I'm only mentioning it here so you know it's a thing 🙂.

### Static typing, dynamic typing

When declaring a variable in some programming languages, such as C++, you must specify its type. (There are some exceptions, such as when the type can be deduced.)

```c++
int x = 1;
float y = 2.3 * 5.9;
string name = "Isa";
bool done = true;

// You can also use `auto` in C++ when the type can be deduced.
auto surname = "Abba";
```

You can't modify the type of a variable after declaring it in these languages:

```c++
int x = 4;
// Error. You can't change type after declaring variable
x = "Hello";
```

We say that these languages are _statically typed_. On the other hand, languages like JavaScript that don't have these constraints are _dynamically typed_.

The restrictions in statically typed languages may appear to be an inconvenience, yet they have certain benefits. Knowing that the types won't change allows a compiler to optimize the code it generates in ways that would otherwise be difficult. Statically typed languages also offer superior developer experiences: the compiler can assist you better in finding bugs more quickly, and your code editor can make more intelligent suggestions.

Which brings me to a related point &hellip;

### JavaScript is an interpreted language

TODO

<!-- I mentioned this before but I didn't explain it. Now it's time to do so.

In the extras of lesson 1, I said that programming languages need to be compiled to machine code before they can be executed. However, we don't see any compilation happening when we run `node filename.js`; all we see is the output of our code. That's because Node compiles and executes your JavaScript code in the same step; we say that Node _interprets_ your code. For some other languages, like C++, you have to first run the compiler to generate something called an _executable_ (which is essentially machine code), and then you run the executable separately.

Again, it may sound like a pain using a compiled language over an interpreted one, however, the former are amenable to optimizations and developer experiences that might be impractical for the latter. -->