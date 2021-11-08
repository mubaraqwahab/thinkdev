---
title: Values and types
excerpt: >
  Values are at the heart of programming.
  In this lesson, we'll look at some of JavaScript's primitive types of values and how to manipulate them.
  We'll also cover expressions, statements, and variables.
emoji: 🔢
---

{% from "macros.njk" import iconed, youtubePlayer %}

## {{ iconed("Video") }}

{{ youtubePlayer("xjaPC_B2okk") }}

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

The restrictions in statically typed languages may appear to be an inconvenience, yet they have certain benefits. Knowing that the types won't change allows a compiler to optimise the code it generates in ways that would otherwise be difficult. Statically typed languages also offer superior developer experiences: the compiler can assist you better in finding bugs more quickly, and your code editor can make more intelligent suggestions.

Which brings me to a related point &hellip;

### JavaScript is an interpreted language

I've said this before. It's now time to explain.

Computers don't understand the programming languages we write code in, so we have to compile our code to machine language before running it. When we run Node, however, we see no compilation taking place; all we see is the output of our code. This is because Node compiles and executes JavaScript code in the same step, that is, it _interprets_ JavaScript. For some languages, such as C++, you must first run the compiler to generate an _executable_ (which is basically a file containing machine code) before running the executable.

It may sound like an interpreted language is more convenient to use than a compiled language, however, a compiled language enables certain optimisations and developer experiences that an interpreted language does not.
