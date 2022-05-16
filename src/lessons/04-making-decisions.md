---
title: Making decisions
excerpt: >-
  Programs behave differently in different conditions. For example, some features of an app may only be available when a premium user is logged in. In this episode, we'll learn some JavaScript constructs that we can use to make such decisions.
---

## Videos

TODO

## Exercise

1. This exercise is to help you get familiar with reading and understanding code.

    Read the code below carefully and try to make sense of it, but **don't run it**.

    ```js
    const newMessages = [
      {
        from: 'Amal',
        body: 'When does it start?',
        time: '31 Dec 2021, 1:23 PM'
      },
      {
        from: 'Isa',
        body: "I'm just going there now",
        time: '31 Dec 2021, 10:16 AM'
      },
    ];

    const messageCount = newMessages.length;
    let notification;

    if (!messageCount) {
      notification = "You have no new messages.";
    } else if (messageCount === 1) {
      notification = "You have a new message.";
    } else {
      notification = `You have ${messageCount} new messages.`;
    }

    console.log(notification);
    ```

    What does the code do? What output do you expect? Observe that the `newMessages` array has two objects in it. If you removed one of the objects or both, or you added a new one, how would it affect the output of the code?

    Now run the code to see if it works as you expect. If you're correct, then well done; you're starting to get a hold of the language. If you're not, don't worry; it's all part of the learning process; try to figure out where you went wrong.

{% set valuesLesson = collections.all | eleventyNavigation | find('title', 'Values and types') -%}

1. Identify as many expressions and statements as you can in the code of the previous question. (You may need to review [{{ valuesLesson.title }}]({{ valuesLesson.url | url }}) for this.)

1. [Language codes](https://en.wikipedia.org/wiki/Language_code) are codes used to identify human languages. They're often used in websites to organise content into different languages. An example of such a website is [Wikipedia](https://www.wikipedia.org). If you visit a Wikipedia page, you might notice that the URL domain begins with a two-letter code, as in "<b>en</b>.wikipedia.org". The "en" indicates that the page is in English. Similarly, an Arabic page would have the domain "<b>ar</b>.wikipedia.org".

    The following table lists some languages and their codes:

    | Language | Code |
    | --- | --- |
    | Arabic | ar |
    | English | en |
    | French | fr |
    | Hausa | ha |
    | Igbo | ig |
    | Turkish | tr |
    | Yoruba | yo |

    {.w-auto}

    Complete the following program so that it prints the language that the `languageCode` variable corresponds to. The variable is currently set to `"en"`, so the program should print <samp>English</samp>. If you change the value to a different language code from the above table, like `"ha"`, the program should still work correctly.

    ```js
    const languageCode = 'en';

    // Your task: complete the program.
    ```

    (**Hint:** use the `if` statement and its branches to decide what language to print.)

## Extras

### `if` expression

Remember that the `if` statement is a _statement_. It's not an expression so it doesn't produce a value.
Why's this important? Well, consider the following piece of code, where we assign a value to the `remark`
variable depending on some condition (the condition doesn't really matter; what matters is how we write the code):

```js
let remark;
if (condition)
  remark = "yes";
else
  remark = "no";
```

Rewriting it as follows is invalid because we're treating the `if` statement like an expression:

```js
let remark = if (condition)
  "yes";
else
  "no";
```

However, it is sometimes convenient to use an expression to make a decision.
For this, JavaScript has a <i>conditional operator</i>. It looks like this:

```js
expression1 ? expression2 : expression3
```

Here's how it works: if `expression1` is truthy, then the result of the operation
will be the value of `expression2`. But if it's falsy, the result will be the value of `expression3`.

We can rewrite the `if` statement example as below:

```js
let remark = condition ? "yes" : "no"
```

If the condition is truthy, the `remark` variable will be assigned the value `"yes"`;
if it's falsy, `remark` will be assigned `"no"`.

### Unary, binary, ternary

We've discussed several operators in JavaScript, such as `typeof`, `+`, and even the conditional operator (`? :`).
Each operator takes some values known as <i>operands</i>. For example, the operands of the
`+` operator in the following addition are `3` and `4`:

```js
3 + 4
```

Many operators like the addition operator take two operands, so we call them <i>binary operators</i>.
Others like `typeof` that take a single operand are <i>unary operators</i>.
The conditional operator is the only <i>ternary operator</i>, taking three operands.

### Loose equality

Many programming languages use the double equals symbol `==` to compare if two values are equal. We've seen that JavaScript uses the triple equals `===` instead, which we call the strict equality operator. However, JavaScript also supports the `==` operator for "loose" equality comparison.

The double equals operator works like the triple equals; it's difference is that it converts the types of it's operands, if they're different, before comparing them. Let's take an example:

```js
// Strict equality
// Different types, different values
console.log(2 === '2') // false

// Loose equality
// The string will be converted to a number before comparing
console.log(2 == '2') // true
```

It's discouraged to use this operator because of [it's confusing behavior](https://dorey.github.io/JavaScript-Equality-Table/):

```js
console.log(false == null) // false
console.log(false == '')   // true
console.log([1] == '1')    // true
console.log([[]] == 0)     // true
```

There's a `!=` counterpart for loose inequality too.

### Short-circuit evaluation

When you use the NOT operator, the result is always a boolean:

```js
console.log(!0)    // true
console.log(!"hi") // false
```

This is not always the case with the AND and OR operators:

```js
console.log(0 && null) // 0
console.log([] && '')  // ''
console.log("hi" && "hey" && "hello") // "hello"

console.log(0 || null) // null
console.log([] || '')  // []
console.log("hi" || "hey" || "hello") // "hi"
```

How they work is fairly straightforward though.

The result of an AND operation is the value of its first falsy operand. When there's no falsy operand, the result is the last operand.

```js
console.log(0 && null)
// The result is 0 because it's the first falsy operand

console.log([] && '')
// The first falsy operand here is '', so it's the result

console.log("hi" && "hey" && "hello")
// There's no falsy operand here,
// so the result is the last operand, "hello"
```

The OR operation works in the opposite way. Its result is the value of its first truthy operand, but when there's no truthy operand, its result is the last operand.

```js
console.log(0 || null)
// There's no truthy operand here,
// so the result is the last operand, null

console.log([] || '')
// The first truthy operand here is [], so it's the result

console.log("hi" || "hey" || "hello")
// The result is "hi" because it's the first truthy operand
```

[A]{id=virtue style="scroll-margin-top: 5rem;"} virtue of this is that there is no need to evaluate subsequent operands once the result operand is known. We call this <i>short-circuit evaluation</i>, and it is indeed how the AND and OR operations work in JavaScript. Let's test it.

Start the Node REPL by typing `node` in your terminal and pressing <kbd class="key">Enter</kbd>. Then type any word in the REPL and press <kbd class="key">Enter</kbd>:

```js
word
```

You'll get an <samp>Uncaught ReferenceError: word is not defined</samp>. That's because JavaScript tried to evaluate what you typed, but it couldn't find any <i>reference</i> (e.g., a variable) called "word".

Now try this AND operation:

```js
false && word
```

There will be no error and the result will be `false`, though `word` is still not defined. That's because the first operand (`false`) is falsy; it is the result so JavaScript won't try to evaluate the second operand (`word`).

Switching the operands results in the same error since the first operand becomes an undefined reference that cannot be evaluated:

```js
word && false
// Uncaught ReferenceError: word is not defined
```

You'll observe this in the OR operation too:

```js
true || word
// true

word || true
// Uncaught ReferenceError: word is not defined
```
