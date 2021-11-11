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

## {{ iconed("Exercises") }}

You can do these exercises in the Node REPL (read-eval-print loop) or in a JavaScript file.

<aside>

**Tip:** If you're using the REPL, you can type <kbd>Ctrl</kbd> + <kbd>D</kbd> to exit the REPL when you're done. And if you're using a file, don't forget to use `console.log()` to view your results.

</aside>

1. Write and run the code samples in the slides to see how they work. Test the invalid ondes too, and try to understand the error messages. Then correct the errors.

   You may have some questions in your mind. _What if you removed a semicolon? Or you rearranged some part of the code? Why the space between a variable name and the `=`? Can you split things into multiple lines? How about converting a string like "abc" to a number?_ Make sure you try these out, and any other questions you have in your mind! You'll build a good mental model of JavaScript this way. You'll also get comfortable with writing JavaScript and recognising the errors you'll encounter later on.

### Working with strings

1. Suppose we have the following string:
   ```js
   const str = "Some random string";
   ```
   We've seen that `str[0]` will give us the first character, `str[1]` will give the second, and so on. How do we get the _last_ character?
   (**Hint:** use the string's length.)

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
// Error.
// You can't change a variable's type after declaring it.
x = "Hello";
```

We say that these languages are _statically typed_. On the other hand, languages like JavaScript that don't have these constraints are _dynamically typed_.

The restrictions in statically typed languages may appear to be an inconvenience, yet they have certain benefits. Knowing that the types won't change allows a compiler to optimise the code it generates in ways that would otherwise be difficult. Statically typed languages also offer superior developer experiences: the compiler can assist you better in finding bugs more quickly, and your code editor can make more intelligent suggestions.

Which brings me to a related point &hellip;

### <q>JavaScript is an interpreted language</q>

I've said this before, but I didn't explain. I've also said that code in a programming language needs to be translated to machine language before it can be run. When we run Node, however, we see no translation taking place; all we see is the output of our code. That's because Node _interprets_ our code. For some languages, such as C++, we must first run a compiler to generate an _executable_ (which is basically a file containing machine code) before running the executable.
