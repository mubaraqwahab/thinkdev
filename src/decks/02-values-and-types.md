---
title: Values and types
---

<section>

<section data-auto-animate data-auto-animate-id="fl">

![]({{ '/assets/images/futurelearn-featured.png?nf_resize=fit&w=912' | url }}){aria-labelledby="futureLearnFeaturedLabel" width=912}

<small id="futureLearnFeaturedLabel" class="italic">A screenshot of the featured courses on [FutureLearn](https://www.futurelearn.com/).</small>

</section>


<section data-auto-animate data-auto-animate-id="fl">

Text

![A screenshot highlighting some pieces of text in the featured courses section on FutureLearn.]({{ '/assets/images/futurelearn-featured-text.png?nf_resize=fit&w=912' | url }}){width=912}

</section>


<section data-auto-animate data-auto-animate-id="fl">

Numbers

![A screenshot highlighting some numbers in the featured courses section on FutureLearn.]({{ '/assets/images/futurelearn-featured-nums.png?nf_resize=fit&w=912' | url }}){width=912}

</section>


<section data-auto-animate data-auto-animate-id="fl">

Alternatives

![A screenshot highlighting some alternative elements in the featured courses section on FutureLearn.]({{ '/assets/images/futurelearn-featured-alts.png?nf_resize=fit&w=912' | url }}){width=912}

</section>

</section>



<section>

<section data-auto-animate>

## How do we represent these values?

</section>


<section data-auto-animate>

## How do we represent these values?

* We use <i>strings</i> for text:
  * `"Most popular"`
  * `'Installed'`
* We use <i>booleans</i> to choose between alternatives {.fragment .fade-up}
  * `true`, `false`

</section>


<section>

### What about numbers?

* Many languages differentiate between types of numbers. {.fragment .fade-up}
* <i>Integer</i> types (<i>int</i>) for 20, -7, &hellip; {.fragment .fade-up}
* <i>Floating point</i> types (<i>float</i>) for 3.2, -0.789, &hellip; {.fragment .fade-up}

</section>


<section>

### But in JavaScript ...

... a number is just a <i>number</i>. {.fragment .fade-up}

</section>

</section>



<section>

<section>

## `typeof` a value

Use the `typeof` keyword to get the type of a value:

```js
typeof "Hi"       // "string"
typeof 12.34      // "number"
typeof 3_000_000  // "number"
typeof false      // "boolean"
```

</section>


<section data-auto-animate data-auto-animate-id=comments>

### Comments

* Use comments to explain pieces of your code.
* The language ignores them.

</section>


<section data-auto-animate data-auto-animate-id=comments>

### Comments

* Use comments to explain pieces of your code.
* The language ignores them.

```js
// Line comment

/* Block comment
can span
multiple lines. */
```

</section>

</section>


<!-- <section>

## Operations on numbers

* Values aren't so useful alone.
* Operations make them useful. {.fragment .fade-up}
* We can do the usual arithmetics on numbers: {.fragment .fade-up}
  * `+`, `-`, `/`, `*`
* Precedence rules (BODMAS) applies.

</section> -->



<section>

<section data-auto-animate>

## Expressions

</section>


<section data-auto-animate>

## Expressions

Things that have value. {data-id="exprDesc"}

</section>


<section>

* The simplest expressions are literals: {data-id=exprDesc}
  * `1`, `"Hi"`, `true`.
* But they're not so useful alone. {.fragment .fade-up}

</section>


<section data-auto-animate>

You can use operators to build complex expressions: {data-id="exprDesc"}

<pre data-id="expr"><code data-line-numbers data-trim class="language-js">
1 - 2;            // -1
50 * 70 / 67 + 9; // 61.2388&hellip;
typeof true;      // "boolean"
</code></pre>

</section>


<section data-auto-animate>

Wrapping an expression in brackets doesn't change it's value: {data-id="exprDesc"}

<pre data-id="expr"><code data-line-numbers data-trim class="language-js">
(1 - 2);            // -1
(50 * 70 / 67 + 9); // 61.2388&hellip;
(typeof true);      // "boolean"
</code></pre>

</section>


<section data-auto-animate>

Operator precedence rules apply, even to non-arithmetic operators: {data-id="exprDesc"}

<pre data-id="expr"><code data-line-numbers data-trim class="language-js">
(50 * 70 / 67 + 9); // 61.2388&hellip;
50 * 70 / (67 + 9); // 46.0526&hellip;
typeof (2 - 1);     // "number"
</code></pre>

</section>


<section data-auto-animate data-auto-animate-duration="0.7">

You can use an expression where a value is expected: {data-id="exprDesc"}

<pre data-id="expr"><code data-line-numbers data-trim class="language-js">
typeof (50 * 70 / 67 + 9)
console.log(typeof true)
</code></pre>

</section>

</section>



<section>

## What if we wanted to store the&nbsp;value&nbsp;of an expression?

</section>



<section>

<section data-auto-animate>

## Variables

</section>


<section data-auto-animate>

## Variables

<pre data-id="vars"><code data-line-numbers="1,2" data-trim class="language-js">
// Declare a variable
const costPerItem = 3000
</code></pre>

</section>


<section data-auto-animate>

## Variables

<pre data-id="vars"><code data-line-numbers="4,5" data-trim class="language-js">
// Declare a variable
const costPerItem = 3000

// Use the variable
console.log(costPerItem * 10)
</code></pre>

</section>


<section>

### How to name variables

* First character must be a letter, underscore `_`, or dollar sign `$`. {.fragment .fade-up}
  * E.g, `x`, `$`, `_`
* Following characters may include numbers {.fragment .fade-up}
  * Valid: `y2`, `first_name`, `_LAST_NAME_`, `$10`
  * Invalid: `2a`, `middle name`
* Names are case-sensitive {.fragment .fade-up}
  * `message`, `Message`, `MESSAGE` are different variables.

</section>


<section>

The JavaScript convention is [`camelCase` 🐪]{.text-6xl .block .leading-normal}

</section>


<section>

### Variables that vary

* A `const` variable is <i>constant</i>; it always refers to the same value.
* That's usually fine, but sometimes we'd like to reassign a variable to a different value. {.fragment .fade-up}

</section>


<section>

Consider an online shopping cart:

![]({{ '/assets/images/cart-quantity.jpg?nf_resize=fit&w=460' | url }}){aria-labelledby="tarbiyahCartScreenshot" width=460}

<small id="tarbiyahCartScreenshot" class="italic">Screenshot of cart from [Tarbiyah Books Plus](https://tarbiyahbooksplus.com/)</small>

</section>


<section data-auto-animate>

<pre data-id="let"><code data-line-numbers data-trim class="language-js">
const quantity = 1

// When the user clicks the plus button,
// increase the quantity.
quantity = quantity + 1
</code></pre>

</section>


<section data-auto-animate>

<pre data-id="let"><code data-line-numbers="5,6" data-trim class="language-js">
const quantity = 1

// When the user clicks the plus button,
// increase the quantity.
quantity = quantity + 1
// Error: Assignment to constant variable
</code></pre>

</section>


<section data-auto-animate>

Use the `let` keyword instead:

<pre data-id="let"><code data-line-numbers data-trim class="language-js">
let quantity = 1

quantity = quantity + 1

console.log(quantity) // 2
</code></pre>

</section>


<section data-auto-animate>

Addition assignment operator

<pre data-id="let"><code data-line-numbers="3" data-trim class="language-js">
let quantity = 1

quantity += 1

console.log(quantity) // 2
</code></pre>

</section>


<section data-auto-animate>

Increment operator

<pre data-id="let"><code data-line-numbers="3" data-trim class="language-js">
let quantity = 1

quantity++

console.log(quantity) // 2
</code></pre>

</section>


<section data-auto-animate>

You can initialize a `let` variable with a value after declaring it:

<pre data-id="let"><code data-line-numbers="1,3,4" data-trim class="language-js">
let quantity;

// initialize after declaring
quantity = 1

quantity++

console.log(quantity) // 2
</code></pre>

</section>


<section data-auto-animate>

Its value will be `undefined` until you initialize it:

<pre data-id="let"><code data-line-numbers="3" data-trim class="language-js">
let quantity;

console.log(quantity) // undefined

// initialize after declaring
quantity = 1

quantity++

console.log(quantity) // 2
</code></pre>

</section>

</section>



<section>

## Absence of value

* Special values: `undefined` and `null`.
* `null` is often used for an intentionally absent value.

</section>



<section>

<section>

## Operations on strings

</section>


<section data-auto-animate>

### Joining strings {data-id="strOpHeading"}

Also known as <i>concatenation</i>:

<pre data-id="concatstr"><code data-line-numbers data-trim class="language-js">
const firstName = "Mubaraq"
const lastName = "Wahab"

const fullName = firstName + lastName
// "MubaraqWahab"
</code></pre>

</section>


<section  data-auto-animate>

<!-- ### Joining strings {data-id="strOpHeading"} -->

<!-- Also known as <i>concatenation</i>: -->

<pre data-id="concatstr"><code data-line-numbers="4-6" data-trim class="language-js">
const firstName = "Mubaraq"
const lastName = "Wahab"

// Better
const fullName = firstName + " " + lastName
// "Mubaraq Wahab"
</code></pre>

</section>


<section data-auto-animate>

### Interpolation {data-id="strOpHeading"}

You can use special strings called <i>template literals</i> to interpolate:

<pre data-id="concatstr"><code data-line-numbers="" data-trim class="language-js">
const firstName = "Mubaraq"
const lastName = "Wahab"

const fullName = `${firstName} ${lastName}`
// "Mubaraq Wahab"
</code></pre>

</section>


<section data-auto-animate>

### Get a character from a string {data-id="strOpHeading"}

Use square brackets to specify an <i>index</i> (starting from zero):

<pre data-id="concatstr"><code data-line-numbers="" data-trim class="language-js">
//                 0123456
const firstName = "Mubaraq"

const initial = firstName[0] // "M"
const second = firstName[1] // "u"
// and so on...
</code></pre>

</section>


<section data-auto-animate>

### Get part of a string {data-id="strOpHeading"}

Use the `slice` method:

<pre data-id="concatstr"><code data-line-numbers="" data-trim class="language-js">
//                 0123456
const firstName = "Mubaraq"

const firstThreeLetters = firstName.slice(0, 3)
// "Mub"
const thirdToEnd = firstName.slice(2)
// "baraq"
</code></pre>

</section>


<section data-auto-animate>

### Does a string include this? {data-id="strOpHeading"}

Use the `includes` method to check if a string includes another:

<pre data-id="concatstr"><code data-line-numbers="" data-trim class="language-js">
const firstName = "Mubaraq"

firstName.includes('ba')
// true
firstName.includes('ab')
// false
</code></pre>

</section>


<section data-auto-animate>

### How long is a string? {data-id="strOpHeading"}

Use the `length` property to get the length of a string:

<pre data-id="concatstr"><code data-line-numbers="" data-trim class="language-js">
const firstName = "Mubaraq"

firstName.length
// 7
</code></pre>

</section>


<section data-auto-animate>

### String to number {data-id="strOpHeading"}

You need to convert a string to a number sometimes, [such as when working with user input:]{.block} {data-id=strOpDesc}

<pre data-id="concatstr"><code data-line-numbers data-trim class="language-js">
// Assume this is from user input
const input = "20"

// Careful here! Result is "203"
input + 3
</code></pre>

</section>


<section data-auto-animate>

Use the `Number` function to convert a string to a number: {data-id=strOpDesc}

<pre data-id="concatstr"><code data-line-numbers="4-8" data-trim class="language-js">
// Assume this is from user input
const input = "20"

// Convert to number first!
const inputAsNumber = Number(input)

// Result is 23
inputAsNumber + 3
</code></pre>

</section>


<section data-auto-animate>

Or use the `+` operator: {data-id=strOpDesc}

<pre data-id="concatstr"><code data-line-numbers="4-5" data-trim class="language-js">
// Assume this is from user input
const input = "20"

// An idiomatic way
const inputAsNumber = +input

// Result is 23
inputAsNumber + 3
</code></pre>

</section>


<section data-auto-animate>

### Number to string {data-id="strOpHeading"}

The opposite is possible too, using the `String` function: {data-id=strOpDesc}

<pre data-id="concatstr"><code data-line-numbers data-trim class="language-js">
const num = 20

// Result is "20"
const numAsString = String(num)
</code></pre>

</section>

<section data-auto-animate>

Or the `toString` method: {data-id=strOpDesc}

<pre data-id="concatstr"><code data-line-numbers="3-4" data-trim class="language-js">
const num = 20

// Result is "20"
const numAsString = num.toString()
</code></pre>

</section>

<section data-auto-animate>

Or even concatenating with an empty string:{data-id=strOpDesc}

<pre data-id="concatstr"><code data-line-numbers="3-4" data-trim class="language-js">
const num = 20

// Result is "20"
const numAsString = "" + num
</code></pre>

</section>

<section data-auto-animate>

### UPPERCASE, lowercase {data-id="strOpHeading"}

<pre data-id="concatstr"><code data-line-numbers="" data-trim class="language-js">
const firstName = "Mubaraq"

firstName.toUpperCase()
// "MUBARAQ"

firstName.toLowerCase()
// "mubaraq"
</code></pre>

</section>

</section>



<section>

<section data-auto-animate data-auto-animate-id=stmts>

## Statements

</section>


<section data-auto-animate data-auto-animate-id=stmts>

## Statements

* A program is a sequence of statements.
* Statements are executed one after another.

</section>


<section data-auto-animate>

<pre data-id="stmtcode"><code data-line-numbers="" data-trim class="language-js">
const name = 'Mubaraq'
const message = 'Hello ' + name
typeof message
</code></pre>

</section>


<section data-auto-animate>

A variable declaration is a statement:

<pre data-id="stmtcode"><code data-line-numbers="1,2" data-trim class="language-js">
const name = 'Mubaraq'
const message = 'Hello ' + name
typeof message
</code></pre>

</section>


<section data-auto-animate>

An expression can act as a statement too:

<pre data-id="stmtcode"><code data-line-numbers="3" data-trim class="language-js">
const name = 'Mubaraq'
const message = 'Hello ' + name
typeof message
</code></pre>

</section>


<section data-auto-animate>

You can't use a statement as an expression:

<pre data-id="stmtcode"><code data-line-numbers="1,2" data-trim class="language-js">
// Error!
const message = 'Hello ' + (const name = 'Mubaraq')
typeof message
</code></pre>

</section>


<section data-auto-animate>

An assignment is an expression:

<pre data-id="stmtcode"><code data-line-numbers="1,2" data-trim class="language-js">
let name
const message = 'Hello ' + (name = 'Mubaraq')
typeof message
</code></pre>

</section>
