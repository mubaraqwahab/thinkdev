---
title: Making decisions
---

<section>

![]({{ '/assets/images/futurelearn-featured-alts.webp' | url }})

</section>



<section>

<section>

## First, let's learn how to do some&nbsp;basic&nbsp;comparison

</section>


<section data-auto-animate>

The relational operators:

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
3 > 2    // true
8 < 5    // false
9 >= 13  // false
6 <= 6   // true
</code></pre>

</section>


<section data-auto-animate>

Use the <i>strict equality operator</i> `===` to determine if two values are equal:

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
2 === 5 - 3           // true
89.0 === 89           // true
10 === '10'           // false
'hello' === 'Hello'   // false
true === false        // false
</code></pre>

</section>


<section data-auto-animate>

There's a strict inequality counterpart:

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
2 !== 5 - 3           // false
89.0 !== 89           // false
10 !== '10'           // true
'hello' !== 'Hello'   // true
true !== false        // true
</code></pre>

</section>


<section data-auto-animate>

No two objects have the same value, even if they look alike:

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
const obj1 = { prop: "value" }
const obj2 = { prop: "value" }
console.log(obj1 === obj2) // false 😕
</code></pre>

</section>


<section data-auto-animate>

But, same object, same value:

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
const obj1 = { prop: "value" }
const obj2 = obj1
console.log(obj1 === obj2) // true
</code></pre>

</section>

</section>



<section>

Let's get to making decisions now. {.h3}

</section>



<section>

<section>

## The `if` statement

</section>


<section data-auto-animate>

```js
if (expression) {
  statement1
  statement2
  ...
}
```

</section>


<section data-auto-animate>

```js
if (expression) {
  statement1
  statement2
  ...
}
```

If `expression` is `true`, execute the statements in the curly brackets. Otherwise, ignore the statements.

</section>


<section>

Let's consider the FutureLearn example. {.h3}

</section>


<section data-auto-animate>

We represented a course like so in the previous lesson:

<pre data-id="if"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Museum as a Site and ...',
  rating: 4.6,
  reviewsCount: 75,
  isNew: false,
  isPartOfAnExpertTrack: false,
}
</code></pre>

</section>


<section data-auto-animate>

Let's determine if the course has a rating:

<pre data-id="if"><code data-line-numbers="6" data-trim class="language-js">
const course = {
  rating: 4.6,
  // ...
}

course.rating !== 0.0 // true
</code></pre>

</section>


<section data-auto-animate>

Now we can act accordingly:

<pre data-id="if"><code data-line-numbers="6-8" data-trim class="language-js">
const course = {
  rating: 4.6,
  // ...
}

if (course.rating !== 0) {
  console.log(`Rating: ${course.rating}`)
}
</code></pre>

</section>


<section data-auto-animate>

Let's add some logs around the `if` statement for clarity:

<pre data-id="if"><code data-line-numbers="6-10" class="language-js" data-trim>
const course = {
  rating: 4.6,
  // ...
}

console.log('Before decision')
if (course.rating !== 0) {
  console.log(`Rating: ${course.rating}`)
}
console.log('After decision')
</code></pre>

</section>


<section>

Here's the output:

TODO: Improve the CSS of the &lt;samp&gt;s

<pre data-id="if"><samp>Before decision
Rating: 4.6
After decision
</samp></pre>

</section>


<section>

What if the rating is `0`?

<pre data-id="if"><code data-line-numbers="2" class="language-js" data-trim>
const course = {
  rating: 0,
  // ...
}

console.log('Before decision')
if (course.rating !== 0) {
  console.log(`Rating: ${course.rating}`)
}
console.log('After decision')
</code></pre>

</section>


<section>

Then the output is just this:

<pre data-id="if"><samp>Before decision
After decision
</samp></pre>

</section>


<section>

How do we print a different message? {.h3}

</section>

</section>



<section>

<section>

## `else`

</section>


<section>

<pre data-id="if"><code data-line-numbers="7-11|9-11" class="language-js" data-trim>
const course = {
  rating: 0,
  // ...
}

console.log('Before decision')
if (course.rating !== 0) {
  console.log(`Rating: ${course.rating}`)
} else {
  console.log('No rating')
}
console.log('After decision')

</code></pre>

</section>


<section>

The result:

<pre data-id="if"><samp>Before decision
No rating
After decision
</samp></pre>

</section>


<section>

Let's consider another example. {.h3}

</section>


<section>

![]({{ '/assets/images/ussd-screenshot.webp' | url }}){width=400 aria-labelledby="ussdLabel"}

<small id="ussdLabel" class="italic">A USSD menu with different options to choose from.</small>

</section>


<section>

How do we express the several alternatives? {.h3}

</section>

</section>



<section>

<section>

## `else if`

</section>


<section data-auto-animate>

<pre data-id="if"><code data-line-numbers="" class="language-js" data-trim>
const choice = 1 // Could be any other number

if (choice === 1) {
  console.log('Open Account')
} else if (choice === 2) {
  console.log('Account Balance')
} // ...
</code></pre>

</section>


<section data-auto-animate>

You can use a final `else` to handle any other choice.

<pre data-id="if"><code data-line-numbers="8-10" class="language-js" data-trim>
const choice = 1 // Could be any other number

if (choice === 1) {
  console.log('Open Account')
} else if (choice === 2) {
  console.log('Account Balance')
} // ...
else {
  console.log('Invalid choice')
}
</code></pre>

</section>

</section>



<section>

<section>

TODO: Reduce this and the next slide to one.

We can now make decisions based&nbsp;on&nbsp;single&nbsp;conditions {.h3}

</section>


<section data-auto-animate>

But what if we have multiple conditions? {.h3}

</section>


<section data-auto-animate>

But what if we have multiple conditions? {.h3}

[E.g., accept an uploaded file if it's an image]{.block} [and it's not larger than 2MB]{.block}

</section>


<section>
  <iframe style="aspect-ratio: 16/9" width=100% src="/demos/index.html"></iframe>
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

* The result is `false` if `expr` is `true`.
* The result is `true` if `expr` is `false`.

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


<section data-auto-animate data-auto-animate-id="and">

### AND

`expr1 && expr2`

Both expressions must be `true` for the result to be `true`.

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

One expressions must be `true` for the result to be `true`.

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

TODO: The final thing must be about truthiness. Move the conditional op and terms (unary, binary, binary) to extras.

</section>

</section>
