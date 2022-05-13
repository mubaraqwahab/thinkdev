---
title: Making decisions
---

<section>

![A screenshot highlighting some alternative elements in the featured courses section on FutureLearn.]({{ '/assets/images/futurelearn-featured-alts.webp' | url }})

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

Use the <i>strict equality operator</i> to determine if two values are equal:

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

course.rating !== 0 // true
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

<pre data-id="if"><code data-line-numbers="9-11|7-11" class="language-js" data-trim>
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
<small id="ussdLabel">A USSD menu with different options to choose from.</small>

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

You can use a final `else` to handle any other choice:

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

We can now make decisions based on single&nbsp;conditions. {.h3}

</section>


<section>

What if we have many conditions? {.h3}

</section>


<section>

![]({{ '/assets/images/laptop-filters.webp' | url }}){aria-labelledby=laptopFiltersLabel}
<small id="laptopFiltersLabel">A hypothetical e-commerce app with a list of laptops for sale and several&nbsp;options&nbsp;to&nbsp;filter&nbsp;the laptops.</small>

</section>

</section>



<section>

<section>

## Logical operators

[OR]{.inline-block .fragment .fade-up}[, AND]{.inline-block .fragment .fade-down}[, and NOT.]{.inline-block .fragment .fade-right}

</section>


<section>

### OR

</section>


<section>

![The e-commerce laptop list filtered to show only Apple and Microsoft laptops.]({{ '/assets/images/laptop-filters-or.webp' | url }})

</section>


<section data-auto-animate>

Let's assume each laptop looks like this:

<pre data-id=or><code data-line-numbers="" class="language-js" data-trim>
const laptop = {
  title: 'MacBook Pro 13"',
  brand: 'Apple',
  screenSize: 13,
  // ...
}
</code></pre>

</section>


<section data-auto-animate>

OR syntax:

<pre data-id=or><code data-line-numbers="" class="language-js" data-trim>
expression1 || expression2
</code></pre>

One expression must be `true` for the result to be `true`.

</section>


<section data-auto-animate>

<pre data-id="or"><code data-line-numbers="" class="language-js" data-trim>
const { brand } = laptop
if (brand === 'Apple' || brand === 'Microsoft') {
  console.log("It's an Apple or Microsoft laptop.")
}
</code></pre>

</section>


<section>

### AND

</section>


<section>

![The e-commerce laptop list filtered to show only 14-inch Apple laptops.]({{ '/assets/images/laptop-filters-and.webp' | url }})

</section>


<section data-auto-animate>

AND syntax:

<pre data-id="and"><code data-line-numbers="" class="language-js" data-trim>
expression1 && expression2
</code></pre>

Both expressions must be `true` for the result to be `true`.

</section>


<section data-auto-animate>

<pre data-id="and"><code data-line-numbers="" class="language-js" data-trim>
const { brand, screenSize } = laptop
if (brand === 'Apple' && screenSize === 14) {
  console.log("It's a 14-inch Apple laptop.")
}
</code></pre>

</section>


<section>

### NOT

</section>


<section>

![The e-commerce laptop list filtered to show all but the 13-inch laptops.]({{ '/assets/images/laptop-filters-not.webp' | url }})

</section>


<section data-auto-animate>

NOT syntax:

<pre data-id="not"><code data-line-numbers="" class="language-js" data-trim>
!expression
</code></pre>

* If `expression` is `true`, the result is `false`.
* If `expression` is `false`, the result is `true`.

</section>


<section data-auto-animate>

We wrote this previously:

<pre data-id="not"><code data-line-numbers="" class="language-js" data-trim>
const { brand, screenSize } = laptop
if (brand === 'Apple' && screenSize === 14) {
  console.log("It's a 14-inch Apple laptop.")
}
</code></pre>

</section>


<section data-auto-animate>

Let's invert it:

<pre data-id="not"><code data-line-numbers="2|3" class="language-js" data-trim>
const { brand, screenSize } = laptop
if (!(brand === 'Apple' && screenSize === 14)) {
  console.log("It's not a 14-inch Apple laptop.")
}
</code></pre>

</section>

</section>



<section>

<section>

## One final thing &hellip;

</section>


<section>

The expressions used in making decisions don't have to be boolean; JavaScript automatically converts them. {.h3}

</section>


<section data-auto-animate>

We did this before:

<pre data-id="truthy"><code data-line-numbers="" class="language-js" data-trim>
if (course.rating !== 0) {
  console.log(`Rating: ${course.rating}`)
}
</code></pre>

</section>


<section data-auto-animate>

We could write it this way too:

<pre data-id="truthy"><code data-line-numbers="1" class="language-js" data-trim>
if (course.rating) {
  console.log(`Rating: ${course.rating}`)
}
</code></pre>

</section>


<section data-auto-animate>

The following values convert to `false`; we call them <i>falsy</i> values:

<pre data-id="truthy"><code data-line-numbers="" class="language-js" data-trim>
Boolean(0)          // false
Boolean("")         // false
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(false)      // false
</code></pre>

</section>


<section data-auto-animate>

All other values convert to `true`, so they are <i>truthy</i>:

<pre data-id="truthy"><code data-line-numbers="" class="language-js" data-trim>
Boolean(3.4)              // true
Boolean("thinkdev")       // true
Boolean({ key: 'value' }) // true
Boolean({})               // true
Boolean([1, 2])           // true
Boolean([])               // true
Boolean(true)             // true
</code></pre>

</section>

</section>
