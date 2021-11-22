---
title: Values and types
excerpt: >
  Values are at the heart of programming.
  In this lesson, we'll look at some of JavaScript's primitive types of values and how to manipulate them.
  We'll also cover expressions, statements, and variables.
---

{% from "macros.njk" import iconed, youtubePlayer %}

## {{ iconed("Video") }}

{{ youtubePlayer("xjaPC_B2okk") }}

## {{ iconed("Exercises") }}

You can do these exercises in the Node <abbr>REPL</abbr> (read-eval-print loop) or in a JavaScript file.

<div class="note">

**Tip:** If you're using the REPL, you can type <kbd>Ctrl</kbd> + <kbd>D</kbd> to exit the REPL when you're done. And if you're using a file, don't forget to use `console.log()` to view your results.

</div>

1. Write and run the code samples in the slides to see how they work. Change things and even make intentional mistakes to see how the results change. You'll build a good mental model of JavaScript this way. You'll also get comfortable with writing JavaScript and recognising the errors you'll encounter later on.

1. Suppose we have the following string:
   ```js
   const str = "Some random string";
   ```
   We've seen that `str[0]` will give us the first character, `str[1]` will give the second, and so on. How do we get the _last_ character?
   (**Hint:** use the string's length.)

1. Given this string:
    ```js
    const message = 'His name is Isa'
    ```
    Declare a new variable with the same value, but with the word 'Isa' replaced with 'Amal', and 'His' with 'Her'. Of course, you could just do something like:
    ```js
    const message2 = 'Her name is Amal'
    ```
     But there's a string method to do this dynamically. Find it out and use it to replace the words.

## {{ iconed("Extras") }}

### The `var` keyword

We learnt about the `const` and `let` keywords for declaring variables, but there's a third keyword, `var`, that you might find in JavaScript code:

```js
var x = 1;
```

You can reassign the variable like you can with `let`. However, the variable behaves differently (and rather strangely) than both `let` and `const` variables.

We don't need `var` for our purposes, but we may discuss it later when we look at some of the finer details of JavaScript. I'm only mentioning it here so you know it's a thing 🙂.

### Static typing, dynamic typing

When declaring a variable in some programming languages, such as C++, you must specify its type. (There are some exceptions, such as when the type can be deduced.)

```c++
int x = 1;
float y = 2.3 * 5.9;
string name = "Isa";
bool done = true;

// The right-hand side is clearly a string.
// No need to specify it, you can use auto instead.
auto surname = "Abba";
```

You can't change the type of a variable after declaring it in these languages:

```c++
int x = 4;
// Error.
// x was declared as an int, you can't assign a string to it
x = "Hello";
```

We say that these languages are <i>statically typed</i>. On the other hand, languages like JavaScript that don't have these constraints are <i>dynamically typed</i>.

Which brings me to a final point &hellip;

### <q>JavaScript is an interpreted language</q>

I've said this before, but I didn't explain. I've also said that code in a programming language needs to be translated to machine language before it can be run. When we run Node, however, we see no translation taking place; all we see is the output of our code. That's because Node _interprets_ our code. For some languages, such as C++, we must first run a compiler to generate an <i>executable</i> (which is basically a file containing machine code) before running the executable.
