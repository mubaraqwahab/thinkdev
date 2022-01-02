---
title: Making decisions
excerpt: >
  You'll notice that software behaves differently depending on the situation. A premium user of an app, for example, may have access to features that a regular user does not. In this episode, we'll discover how to decide the behaviour of our code in specific conditions.
---

{% from "macros.njk" import iconed, youtubePlayer %}

## {{ iconed("Videos") }}

### Lesson session

{{ youtubePlayer("7ni9fGevUos") }}

### Revision session

{{ youtubePlayer("") }}

## {{ iconed("Exercise") }}

1. This exercise is to help you get familiar with reading and understanding code.

    Read the code below carefully and try to make sense of it, but **don't run it**.

    ```js
    const newMessages = [
      {
        from: 'Amal',
        body: 'Hello, how are you?',
        time: '31 Dec 2021, 1:23 PM'
      },
      {
        from: 'Isa',
        body: "I'm just going there now",
        time: '31 Dec 2021, 10:16 AM'
      },
    ]

    const messageCount = newMessages.length
    let notification;

    if (!messageCount) {
      notification = "You have no new messages."
    } else if (messageCount === 1) {
      notification = "You have a new message."
    } else {
      notification = `You have ${messageCount} new messages.`
    }

    console.log(notification)
    ```

    What does the code do? What output do you expect? Observe that the `newMessages` array has two objects in it. If you removed one of the objects or both, or you added a new one, how would it affect the output of the code?

    Now run the code to see if it works as you expect. If you're correct, then well done; you're starting to get a hold of the language. If you're not, don't worry; it's all part of the learning process; try to figure out where you went wrong.

1. Rewrite the if statement in the code above using the conditional operator. Be sure that your new code gives the same result as before. (**Hint:** You might need to use two conditional operators, one within the other.)

1. TODO

## {{ iconed("Extras") }}

### Equality

Many programming languages use the double equals symbol `==` to compare if two values are equal. We've seen that JavaScript uses the triple equals `===` instead, and we call it the strict equality operator. However, JavaScript also supports the `==` operator for "loose" equality comparison (the formal term is <i>abstract equality comparison</i>).

The double equals operator works like the triple equals; it's difference is that it may convert the types of it's operands before comparing them. Let's take an example:

TODO: complete this.

### Short-circuit evalutaion

When you use the NOT operator, the result is always a boolean:

```js
console.log(!0) // true
console.log(!"hi") // false
```

This is not always the case with the AND and OR operators:

```js
console.log(0 && null) // 0
console.log([] && '') // ''
console.log("hi" && "hey" && "hello") // "hello"

console.log(0 || null) // null
console.log([] || '') // []
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

Start the Node REPL, type a word there, then hit <kbd>Enter</kbd>:

```js
word
```

You'll get an <samp>Uncaught ReferenceError: word is not defined</samp>. That's because JavaScript tried to evaluate what you typed, but it couldn't find any <i>reference</i> (e.g., a variable) called "word".

Now try this AND operation:

```js
false && word
```

There will be no error and the result will be `false`. That's because the first operand (i.e., `false`) is falsy; it is the result, and the other operand will not be evaluated.

However, switching the operands results in the same error since the first operand becomes an undefined reference that cannot be evaluated:

```js
word && false
// Uncaught ReferenceError: word is not defined
```

We can observe this with the OR operation too:

```js
true || word
// true

word || true
// Uncaught ReferenceError: word is not defined
```
