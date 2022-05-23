---
title: Logical operators
draft: true
excerpt: >-
---

## Video

TODO

## Exercises

TODO

## Extras

### `if` expression

Remember that the `if` statement is a _statement_. It's not an expression so it doesn't produce a value.
Why's this important? Well, consider the following piece of code, where we assign a value to the `remark`
variable depending on some condition (the condition doesn't really matter; what matters is how we write the code):

```js
let remark;
if (condition) {
  remark = "yes";
} else {
  remark = "no";
}
```

Rewriting it as follows is invalid because we're treating the `if` statement like an expression:

```js
let remark = if (condition) {
  "yes";
} else {
  "no";
}
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
