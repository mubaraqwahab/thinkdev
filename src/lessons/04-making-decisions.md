---
title: Making decisions
excerpt: >
  Programs behave differently in different conditions. For example, some features of an app may only be available when a premium user is logged in. In this episode, we'll learn how to write programs that can make decisions.
---

## Video

https://youtu.be/lwbOViAwmaU

## Exercises

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

    if (messageCount === 0) {
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

### A shorter `if`

You may omit the braces in the `if` statement if there's only one statement within them. Take the following `if` statement for example:

```js
if (messageCount === 0) {
  notification = "You have no new messages.";
}
```

There's only one statement in the braces, so you may write it as:

```js
if (messageCount === 0)
  notification = "You have no new messages.";
```

If you have more than one statement, then you must use the braces:

```js
if (messageCount === 0) {
  notification = "You have no new messages.";
  console.log(notification)
}
```

Omitting the braces otherwise changes the meaning of the program:

```js
if (messageCount === 0)
  notification = "You have no new messages.";
  console.log(notification)

// The above is equivalent to:
if (messageCount === 0) {
  notification = "You have no new messages.";
}
console.log(notification)
```

You may also omit the braces in the `else if` and `else branches` if they contain only one statement:

```js
if (messageCount === 0)
  notification = "You have no new messages.";
else if (messageCount === 1)
  notification = "You have a new message.";
else
  notification = `You have ${messageCount} new messages.`;
```

The braces actually create something called a <i>block statement</i> ("block" for short), which is just a way to group other statements.

Anyway, when you're not sure, always use the braces.

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
