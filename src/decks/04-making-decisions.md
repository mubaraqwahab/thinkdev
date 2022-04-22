---
title: Making decisions
---

<section>

<section data-auto-animate>

![]({{ '/assets/images/yt-subscribe.webp' | url }}){width=660 data-id="yt-sub" aria-labelledby="ytSubLabel"}

Screenshot of a YouTube video, showing the channel subscribe button {id="ytSubLabel" data-id=imglabel class="mt-0 text-[60%]"}

</section>

<section data-auto-animate>

![]({{ '/assets/images/yt-subscribed.webp' | url }}){width=660 data-id="yt-sub" aria-labelledby="ytSubedLabel"}

Screenshot of a YouTube video, showing the channel subscribed and notification buttons {id="ytSubedLabel" data-id=imglabel class="mt-0 text-[60%]"}


</section>

<section>

![]({{ '/assets/images/ussd-screenshot.webp' | url }}){width=400 aria-labelledby="ussdLabel"}

A USSD application menu showing the different options a user can choose from. {id="ussdLabel" class="mt-0 text-[60%]"}

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
'hello' !== 'hi' // true
true !== false // true
'10' !== 10 // true
89.0 !== 89 // false
</code></pre>

</section>

<section data-auto-animate>

### Equal objects?

No two objects have the same value, even if they look alike.

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

## Truthy and falsy values

We can classify values based on their "truth". {.fragment .fade-up}

</section>

<section data-auto-animate data-auto-animate-id=truthy>

## Truthy and falsy values

A value that converts to the boolean `true` is <i>truthy</i>.

<pre data-id="truthy"><code data-line-numbers data-trim class="language-js">
Boolean(10) // true
Boolean("think" + "dev") // true
Boolean({ x: 5 }) // true
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id=truthy>

## Truthy and falsy values

A value that converts to the boolean `false` is <i>falsy</i>.

<pre data-id="truthy"><code data-line-numbers data-trim class="language-js">
Boolean(0) // false
Boolean(null) // false
Boolean("") // false
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id=truthy>

## Truthy and falsy values

All values are truthy except a few which are falsy:

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
  subscriptions: ["National Geographic", "Elleman10"],
  // ...
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="h">

And determine if they're subscribed to a certain channel.

<pre data-id="if"><code data-line-numbers="7" data-trim class="language-js">
const user = {
  name: "Mubaraq Wahab",
  subscriptions: ["National Geographic", "Elleman10"],
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
  subscriptions: ["National Geographic", "Elleman10"],
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
  subscriptions: ["National Geographic", "Elleman10"],
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

<pre data-id="if"><samp>Before decision
You are subscribed
After decision
</samp></pre>

</section>

<section data-auto-animate data-auto-animate-id="h">

Otherwise, ...

<pre data-id="if"><code data-line-numbers="3|7-11" class="language-js" data-trim>
const user = {
  name: "Mubaraq Wahab",
  subscriptions: ["Elleman10"],
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

<pre data-id="if"><samp>Before decision
After decision
</samp></pre>

How do we print a different message? {.fragment}

</section>

<section data-auto-animate data-auto-animate-id="else">

### `else`

</section>

<section data-auto-animate data-auto-animate-id="else">

### `else`

<pre data-id="if"><code data-line-numbers="4-6|1-7" class="language-js" data-trim>
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

<pre data-id="if"><samp>Before decision
You are not subscribed
After decision
</samp></pre>

</section>

<section data-auto-animate data-auto-animate-id="else">

### Let's consider another example

<pre data-id="if"><code data-line-numbers="1-7" class="language-js" data-trim>
const n = 3;

if (n &gt; 0) {
  console.log(n, 'is positive')
} else {
  console.log(n, 'is negative')
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="else">

### Let's consider another example

<pre data-id="if"><code data-line-numbers="5-8" class="language-js" data-trim>
const n = 3;

if (n &gt; 0) {
  console.log(n, 'is positive')
} else {
  // Wrong: n could be zero.
  console.log(n, 'is negative')
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="else">

### `else if`

<pre data-id="if"><code data-line-numbers="5-7" class="language-js" data-trim>
const n = 3;

if (n &gt; 0) {
  console.log(n, 'is positive')
} else if (n &lt; 0) {
  console.log(n, 'is negative')
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="else">

### `else if`

<pre data-id="if"><code data-line-numbers="7-9" class="language-js" data-trim>
const n = 3;

if (n &gt; 0) {
  console.log(n, 'is positive')
} else if (n &lt; 0) {
  console.log(n, 'is negative')
} else {
  console.log(n, 'is zero')
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="else">

### `else if`

We can have many `else if`s too.

<pre data-id="if"><code data-line-numbers="5-8" class="language-js" data-trim>
const n = 3;

if (n &gt; 0) {
  console.log(n, 'is positive')
} else if (n &lt; 0) {
  console.log(n, 'is negative')
} else if (n === 0) {
  console.log(n, 'is zero')
} else {
  // do something else
}
</code></pre>

</section>

<!-- <section>

### Order of execution ("the control flow")

</section> -->

</section>


<section>

<section>

## We can now make decisions based on simple conditions

</section>

<section>

### But what if we have complex conditions?

[E.g., accept an uploaded file if it's an image]{.block} [and it's not larger than 2MB]{.block} {.fragment .fade-up}

</section>

</section>


<section>

<section>

## We'll use logical operators

[NOT]{.inline-block .fragment .fade-down}[, AND]{.inline-block .fragment .fade-up}[, and OR.]{.inline-block .fragment .fade-right}

</section>

<section data-auto-animate data-auto-animate-id="not">

### NOT

`!expr`

* The result is `false` if `expr` is truthy.
* The result is `true` if `expr` is falsy.

</section>

<section data-auto-animate data-auto-animate-id="not">

### NOT

<pre data-id="not"><code data-line-numbers="1|3|5-8" class="language-js" data-trim>
const arr = []

console.log(arr.length) // 0, which is falsy

if (!arr.length) {
  console.log("The array is empty")
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="not">

### NOT

You can use it to convert a value to a boolean:

<pre data-id="not"><code data-line-numbers="1|2|3|5-6" class="language-js" data-trim>
null          // falsy value
!null         // true
!!null        // false

// Same as:
Boolean(null) // false
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="and">

### AND

`expr1 && expr2`

Both expressions must be truthy for the result to be truthy.

</section>

<section data-auto-animate data-auto-animate-id="and">

### AND

<pre data-id="and"><code data-line-numbers="" class="language-js" data-trim>
if (user && user.role === "ADMIN") {
  // Show something only admins should see
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="or">

### OR

`expr1 || expr2`

[At least one of the expressions must be truthy]{.block} [for the result to be truthy.]{.block}

</section>

<section data-auto-animate data-auto-animate-id="or">

### OR

<pre data-id="or"><code data-line-numbers="" class="language-js" data-trim>
if (filename.endsWith(".docx") || filename.endsWith(".doc")) {
  console.log(filename, "is a Word document")
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="or">

### OR

It's fine to break long lines

<pre data-id="or"><code data-line-numbers="" class="language-js" data-trim>
if (
  filename.endsWith(".docx") ||
  filename.endsWith(".doc")
) {
  console.log(filename, "is a Word document")
}
</code></pre>

</section>

</section>


<section>

<section>

## One final thing &hellip;

</section>

<section data-auto-animate data-auto-animate-id="ifIsStmt">

### Remember that `if` is a _statement_

</section>

<section data-auto-animate data-auto-animate-id="ifIsStmt">

### Remember that `if` is a _statement_

So the following is invalid

<pre data-id="ifIsStmt"><code data-line-numbers="" class="language-js" data-trim>
const n = 8

// Error
const remark = if (n % 2 === 0) {
  "It is even"
} else {
  "It is odd"
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="ifIsStmt">

### Remember that `if` is a _statement_

And we would have to do this instead

<pre data-id="ifIsStmt"><code data-line-numbers="3|5-9" class="language-js" data-trim>
const n = 8

let remark

if (n % 2 === 0) {
  remark = "It is even"
} else {
  remark = "It is odd"
}
</code></pre>

</section>

<section>

### But JS has an "`if` expression" too &hellip;

</section>

</section>


<section>

<section data-auto-animate>

## The conditional operator

</section>

<section data-auto-animate>

## The conditional operator

`expr1 ? expr2 : expr3`

[If `expr1` is truthy, the result is `expr2`.]{.block} [Otherwise, the result is `expr3`.]{.block}

</section>

<section data-auto-animate>

## The conditional operator

<pre data-id="ternary"><code data-line-numbers data-trim class="language-js">
const n = 8;
const remark = n % 2 === 0 ? "It is even" : "It is odd"
console.log(remark) // "It is even"
</code></pre>

</section>

<section data-auto-animate>

## The conditional operator

* It's called a <i>ternary</i> operator, because it operates on three expressions.

* Similarly, the NOT operator is a <i>unary</i> operator because it operates on a single expression, while the AND and OR operators are <i>binary</i> because they operate on two expressions. {.fragment .fade-up}

</section>

</section>


