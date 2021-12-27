---
title: Making decisions
---

<section>

<section data-auto-animate>

![Screenshot of a YouTube video, showing the channel subscribe button]({{ '/assets/images/yt-subscribe.png?nf_resize=fit&w=660' | url }}){width=660 data-id="yt-sub"}

</section>

<section data-auto-animate>

![Screenshot of a YouTube video, showing the channel subscribed and notification buttons]({{ '/assets/images/yt-subscribed.png?nf_resize=fit&w=660' | url }}){width=660 data-id="yt-sub"}

</section>

<section>

![A USSD application menu showing the different options a user can choose from.]({{ '/assets/images/ussd-screenshot.png?nf_resize=fit&w=400' | url }}){width=400}

</section>

</section>


<section>

## First, let's learn how to do some basic comparison

</section>


<section>

<section>

## Relational operators

```js
3 > 2 // true
8 < 5 // false
9 >= 13 // false
6 <= 6 // true
```

</section>

<section data-auto-animate>

### Equality

Check if two values are equal with the strict equality operator `===`

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
2 === 5 - 3 // true
'hello' === 'hi' // false
true === false // false
'10' === 10 // false
89.0 === 89 // true
</code></pre>

</section>

<section data-auto-animate>

### Inequality

Check if two values are _not_ equal with the strict inequality operator `!==`

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
2 !== 5 - 3 // false
"hello" !== "hi" // true
true !== false // true
'10' !== 10 // true
89.0 !== 89 // false
</code></pre>

</section>

<section data-auto-animate>

### Equal objects?

No two objects have the same value, even if they are identical.

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
const obj1 = { prop: "value" }
const obj2 = { prop: "value" }
console.log(obj1 === obj2) // false 😕
</code></pre>

</section>

<section data-auto-animate>

### Equal objects?

But, same object, same value.

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
const obj1 = { prop: "value" }
const obj2 = obj1
console.log(obj1 === obj2) // true
</code></pre>

</section>

</section>


<section>

<section data-auto-animate data-auto-animate-id=truthy>

## Truthy and falsy expressions

We can classify expressions based on their truth value. {.fragment .fade-up}

</section>

<section data-auto-animate data-auto-animate-id=truthy>

## Truthy and falsy expressions

An expression that converts to the boolean value `true` is _truthy_.

<pre data-id="truthy"><code data-line-numbers data-trim class="language-js">
Boolean(10) // true
Boolean("think" + "dev") // true
Boolean({ x: 5 }) // true
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id=truthy>

## Truthy and falsy expressions

An expression that converts to the boolean value `false` is _falsy_.

<pre data-id="truthy"><code data-line-numbers data-trim class="language-js">
Boolean(0) // false
Boolean(null) // false
Boolean("") // false
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id=truthy>

## Truthy and falsy expressions

All expressions are truthy except a few which are falsy:

* `false` {.fragment .fade-up}
* `0` {.fragment .fade-up}
* `""` (empty string) {.fragment .fade-up}
* `null` {.fragment .fade-up}
* `undefined` {.fragment .fade-up}

</section>

</section>


<section>

## Let's get to making decisions now

</section>


<section>

<section data-auto-animate>

## The `if` statement

</section>

<section data-auto-animate>

## The `if` statement

```js
if (expression) {
  statement1
  statement2
  ...
}
```

If `expression` is truthy, execute the statements in the curly brackets. {.fragment}

</section>

<section>

### Let's consider the YouTube example

</section>

<section data-auto-animate data-auto-animate-id="h">

We could represent a user like so:

<pre data-id="if"><code data-line-numbers="" data-trim class="language-js">
const user = {
  name: "Mubaraq Wahab",
  subscriptions: ["National Geographic"],
  // ...
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="h">

And determine if they're subscribed to a certain channel.

<pre data-id="if"><code data-line-numbers="7" data-trim class="language-js">
const user = {
  name: "Mubaraq Wahab",
  subscriptions: ["National Geographic"],
  // ...
}

user.subscriptions.includes('National Geographic')
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="h">

Then we can act accordingly:

<pre data-id="if"><code data-line-numbers="7-9" data-trim class="language-js">
const user = {
  name: "Mubaraq Wahab",
  subscriptions: ["National Geographic"],
  // ...
}

if (user.subscriptions.includes('National Geographic')) {
  console.log('You are subscribed')
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="h">

Let's add some logs around the `if` statement for clarity.

<pre data-id="if"><code data-line-numbers="7-11" class="language-js" data-trim>
const user = {
  name: "Mubaraq Wahab",
  subscriptions: ["National Geographic"],
  // ...
}

console.log('Before decision')
if (user.subscriptions.includes('National Geographic')) {
  console.log('You are subscribed')
}
console.log('After decision')
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="h">

Output if the user is subscribed to National Geographic:

<pre data-id="if"><samp data-trim>
Before decision
You are subscribed
After decision
</samp></pre>

</section>

<section data-auto-animate data-auto-animate-id="h">

Otherwise, ...

<pre data-id="if"><code data-line-numbers="3,7-11" class="language-js" data-trim>
const user = {
  name: "Mubaraq Wahab",
  subscriptions: [],
  // ...
}

console.log('Before decision')
if (user.subscriptions.includes('National Geographic')) {
  console.log('You are subscribed')
}
console.log('After decision')
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="h">

... the output is just this

<pre data-id="if"><samp data-trim>
Before decision
After decision
</samp></pre>

How do we print a different message? {.fragment}

</section>

<section data-auto-animate data-auto-animate-id="else">

### `else`

</section>

<section data-auto-animate data-auto-animate-id="else">

### `else`

<pre data-id="if"><code data-line-numbers="4-6" class="language-js" data-trim>
console.log('Before decision')
if (user.subscriptions.includes('National Geographic')) {
  console.log('You are subscribed')
} else {
  console.log('You are not subscribed')
}
console.log('After decision')
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="else">

### `else`

The result?

<pre data-id="if"><samp data-trim>
Before decision
You are not subscribed
After decision
</samp></pre>

</section>

<section>

### Order of execution ("the control flow")

<pre data-id="if"><code data-line-numbers="1|3-6|8" data-trim class="language-js">
let quantity = 1

// When user clicks the minus button
if (quantity &gt; 1) {
  quantity--;
}

console.log(quantity)
</code></pre>

</section>

<section>

### `if` &hellip; `else`

```js

```

</section>

<section>

### `else if`

```js

```

</section>

</section>


<section>

<section>

## The `switch` statement

</section>

</section>


<!--
<section>

<section data-auto-animate>

## Logical operators

</section>

<section data-auto-animate>

## Logical operators

There are three: NOT, AND, and OR.

</section>

<section>

### NOT: in maths

([T]{.italic} for true, [F]{.italic} for false)

* NOT&nbsp; [T]{.italic} &nbsp;yields&nbsp; [F]{.italic}
* NOT&nbsp; [F]{.italic} &nbsp;yields&nbsp; [T]{.italic}

</section>

<section>

### NOT: in programming

`!expr`

* The result is `false` if `expr` is truthy.
* The result is `true` if `expr` is falsy.

<div class="fragment fade-up">

```js {data-line-numbers="1,2|4,5"}
"NOT operator" // truthy expr
!"NOT operator" // false

[].length // 0, which is falsy
!([].length) // true
```

</div>

</section>

<section>

### NOT to convert to boolean

You can use the NOT operator to convert a value to a boolean:

```js {data-line-numbers="1,2|3|5-6"}
0 // falsy value
!0 // true
!!0 // false

// Same as:
Boolean(0) // false
```

</section>

<section>

### AND: in maths

* [T]{.italic} &nbsp;AND&nbsp; [T]{.italic} &nbsp;yields&nbsp; [T]{.italic}
* [T]{.italic} &nbsp;AND&nbsp; [F]{.italic} &nbsp;yields&nbsp; [F]{.italic}
* [F]{.italic} &nbsp;AND&nbsp; [T]{.italic} &nbsp;yields&nbsp; [F]{.italic}
* [F]{.italic} &nbsp;AND&nbsp; [F]{.italic} &nbsp;yields&nbsp; [F]{.italic}

</section>

<section>

### AND: in programming

`expr1 && expr2`
* result is `expr2` if `expr1` is truthy
* result is `expr1` if `expr1` is falsy

</section>

<section data-auto-animate>

### AND example

![Screenshot of a YouTube video, showing the like button clicked]({{ '/assets/images/ms-store-screenshot-bool-highlighted.jpg?nf_resize=fit&w=700' | url }}){width=700}

</section>

<section data-auto-animate>

### AND example

```js {data-line-numbers=1-7|9-10|12-13}
// TODO: shortcircuiting
const app = {
  name: 'World of Tank Blitz',
  rating: 5,
  reviewsCount: 2,
  price: 0,
  status: 'Not Owned', // or "Owned" or "Installed"
}

// If this is true, write "free"
app.status === "Not Owned" && app.price === 0

// Also:
app.status === "Not Owned" && !app.price
```

</section>

<section>

### OR: in maths

* [T]{.italic} &nbsp;OR&nbsp; [T]{.italic} &nbsp;yields&nbsp; [T]{.italic}
* [T]{.italic} &nbsp;OR&nbsp; [F]{.italic} &nbsp;yields&nbsp; [T]{.italic}
* [F]{.italic} &nbsp;OR&nbsp; [T]{.italic} &nbsp;yields&nbsp; [T]{.italic}
* [F]{.italic} &nbsp;OR&nbsp; [F]{.italic} &nbsp;yields&nbsp; [F]{.italic}

</section>

<section>

### OR: in programming

`expr1 || expr2`
* result is `expr1` if `expr1` is truthy
* result is `expr2` if `expr1` is falsy

</section>

<section>

### OR: in programming

```js
const phoneInput = /* get phone num from user input */

// For default values
const phone = phoneInput || null
```

</section>

</section>

-->


<section>

## What about an expression?

</section>


<section>

<section data-auto-animate>

## The conditional operator

</section>

<section data-auto-animate>

## The conditional operator

`expr1 ? expr2 : expr3`

* result is `expr2` if `expr1` is truthy
* result is `expr3` otherwise

</section>

<section data-auto-animate>

## The conditional operator

<pre data-id="ternary"><code data-line-numbers data-trim class="language-js">
const n = 5;
const remark = n &gt; 0 ? "positive" : "not positive"
console.log(remark) // "positive"
</code></pre>

</section>

<section data-auto-animate>

## The conditional operator

<pre data-id="ternary"><code data-line-numbers data-trim class="language-js">
const n = -2;
const remark = n &gt; 0 ? "positive" : "not positive"
console.log(remark) // "not positive"
</code></pre>

</section>

<section data-auto-animate>

## The conditional operator

You can nest the operator

<pre data-id="ternary"><code data-line-numbers data-trim class="language-js">
const n = -2;
const remark = n &gt; 0
  ? "positive"
  : n &lt; 0
  ? "negative"
  : "zero"
console.log(remark) // "negative"
</code></pre>

</section>

<section data-auto-animate>

## The conditional operator

You can nest the operator

<pre data-id="ternary"><code data-line-numbers=1,7 data-trim class="language-js">
const n = 0;
const remark = n &gt; 0
  ? "positive"
  : n &lt; 0
  ? "negative"
  : "zero"
console.log(remark) // "zero"
</code></pre>

</section>

<section data-auto-animate>

## The conditional operator

It's called a _ternary_ operator, because it operates on three expressions.

</section>

</section>


