---
title: Values and Types
---

<section>

<section data-auto-animate>

![]({{ '/assets/images/ms-store-screenshot.jpg?nf_resize=fit&w=700' | url }}){aria-labelledby="msStoreScreenshotLabel" width=700}

Screenshot of Microsoft Store {id="msStoreScreenshotLabel" class="text-[60%]"}

</section>

<section data-auto-animate>

### Text {data-id="storeLabelHeading"}

![Microsoft Store screenshot with text highlighted]({{ '/assets/images/ms-store-screenshot-text-highlighted.jpg?nf_resize=fit&w=700' | url }}){width=700}

</section>

<section data-auto-animate>

### Numbers  {data-id="storeLabelHeading"}

![Microsoft Store screenshot with numbers highlighted]({{ '/assets/images/ms-store-screenshot-num-highlighted.jpg?nf_resize=fit&w=700' | url }}){width=700}

</section>

<section data-auto-animate>

### Alternatives  {data-id="storeLabelHeading"}

![Microsoft Store screenshot with alternatives highlighted]({{ '/assets/images/ms-store-screenshot-bool-highlighted.jpg?nf_resize=fit&w=700' | url }}){width=700}

</section>

</section>


<section>

<section>

## These have "formal" names

* We represent text with <i>strings</i> {.fragment .fade-up}
  * `"Most popular"`
  * `'Installed'`
  * `'She\'s here'`
* We use <i>booleans</i> to choose between alternatives {.fragment .fade-up}
  * `true`, `false`

</section>

<section>

### What about numbers?

* Many languages differentiate between types of numbers. {.fragment .fade-up}
* <i>Integer</i> types (or <i>int</i>) for 1, 20, -7, &hellip; {.fragment .fade-up}
* <i>Floating point</i> types (or <i>float</i>) for 3.2, -0.789, &hellip; {.fragment .fade-up}

</section>

<section>

### But in JavaScript ...

... a number is just a <i>number</i>.

</section>

<section>

### `typeof`

Use `typeof` keyword to get the type of a value:

```js
typeof "Hi" // "string"
typeof 12.34 // "number"
typeof 3_000_000 // "number"
typeof false // "boolean"
```

</section>

</section>


<section data-auto-animate>

## Comments

Messages ignored by the language, just for the developer

</section>


<section data-auto-animate>

## Comments

Messages ignored by the language, just for the developer

```js
// Line comment

/* Block comment */

/*
Multiline
block
comment
*/
```

</section>


<section>

## Operations on numbers

* Values aren't so useful alone
* We can do the usual arithmetics: (`+`, `-`, `/`, `*`) {.fragment .fade-up}
* Modulus operator `%` (more on this later) {.fragment .fade-up}

</section>


<section>

<section data-auto-animate>

## Expressions

Things that have value. {data-id="exprDesc"}

<pre data-id="expr"><code data-line-numbers data-trim class="language-js">
"Hi 👋🏾";
20.9;
50 * 70 / 67 + 9;
typeof true;
</code></pre>

</section>

<section data-auto-animate>

## Expressions

You can wrap expressions in brackets. {data-id="exprDesc"}

<pre data-id="expr"><code data-line-numbers data-trim class="language-js">
("Hi 👋🏾");
(20.9);
((50 * 70) / (67 + 9));
(typeof true);
</code></pre>

</section>

<section data-auto-animate data-auto-animate-duration="0.7">

## Expressions

Values and expressions can usually replace each other. {data-id="exprDesc"}

<pre data-id="expr"><code data-line-numbers data-trim class="language-js">
typeof ((50 * 70) / (67 + 9));
typeof typeof true
</code></pre>

</section>

</section>


<section>

## What if we wanted to store&nbsp;an&nbsp;expression?

</section>


<section>

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

<section data-auto-animate>

## Variables

<pre data-id="vars"><code data-line-numbers="7,8" data-trim class="language-js">
// Declare a variable
const costPerItem = 3000

// Use the variable
console.log(costPerItem * 10)

// The right-hand side is always an expression
const costPer10Items = costPerItem * 10
</code></pre>

</section>

<section data-auto-animate data-auto-animate-duration="0.7" data-auto-animate-id="nameVars">

### How to name variables?

* First character must be a letter, underscore `_`, or dollar sign `$`. {.fragment .fade-up}
  * Valid: `x`, `$`, `_`
  * Invalid: `0`, `1`
* Following characters may include numbers {.fragment .fade-up}
  * Valid: `y2`, `first_name`, `_LAST_NAME_`, `$10`
  * Invalid: `2a`
* Names are case-sensitive {.fragment .fade-up}
  * `message`, `Message`, `MESSAGE` are different variables.

</section>

<section data-auto-animate data-auto-animate-duration="0.7" data-auto-animate-id="nameVars">

### How to name variables?

The JavaScript convention is [`camelCase` 🐪]{.text-6xl .block .leading-normal}

</section>

<section data-auto-animate>

### Variables that vary

* `const` variables are <i>constant</i>; they always refer to the same value.
* That's fine in many cases, but sometimes we need to change that reference. {.fragment .fade-up}

</section>

<section data-auto-animate>

### Variables that vary

Consider an e-commerce app

![]({{ '/assets/images/cart-quantity.jpg?nf_resize=fit&w=460' | url }}){aria-labelledby="tarbiyahCartScreenshot" width=460}

Screenshot of cart from [Tarbiyah Books Plus](https://tarbiyahbooksplus.com/) {class="text-[60%]" id="tarbiyahCartScreenshot"}

</section>

<section data-auto-animate>

### Variables that vary

<pre data-id="let"><code data-line-numbers data-trim class="language-js">
const quantity = 0

// When the user clicks the plus button,
// we should increase the quantity
quantity = quantity + 1
// Error: Assignment to constant variable
</code></pre>

</section>

<section data-auto-animate>

### Variables that vary

Use the `let` keyword instead

<pre data-id="let"><code data-line-numbers data-trim class="language-js">
let quantity = 0

quantity = quantity + 1

console.log(quantity) // 1
</code></pre>

</section>

<section data-auto-animate>

### Variables that vary

Addition assignment operator

<pre data-id="let"><code data-line-numbers="3" data-trim class="language-js">
let quantity = 0

quantity += 1

console.log(quantity) // 1
</code></pre>

</section>

<section data-auto-animate>

### Variables that vary

Increment operator

<pre data-id="let"><code data-line-numbers="3" data-trim class="language-js">
let quantity = 0

quantity++

console.log(quantity) // 1
</code></pre>

</section>

<section data-auto-animate>

### Variables that vary

You don't have to initialize a `let` variable with a value immediately.

<pre data-id="let"><code data-line-numbers="1,3,4" data-trim class="language-js">
let quantity; // value is undefined

// initialize after declaring
quantity = 0

quantity++

console.log(quantity) // 1
</code></pre>

</section>

</section>


<section>

## Empty values

* `undefined` and `null`.
* No hard rules on when to use which.
* Some use `null` for intentionally empty variables.

</section>


<section>

## Statements

Not everything is an expression; some things don't produce value. E.g., variable declaration

```js {data-line-numbers="1,2|4-7"}
// This is wrong! Declaration is not an expression
let a = const b = 10

// But this is valid; assignment is an expression
let a = 10
const b = a = 15
// a and b are now 15
```

</section>


<section>

<section>

## Operations on strings

</section>

<section data-auto-animate>

### Joining strings {data-id="strOpHeading"}

Also known as <i>concatenation</i>

<pre data-id="concatstr"><code data-line-numbers data-trim class="language-js">
const firstName = "Mubaraq"
const lastName = "Wahab"

const fullName = firstName + lastName
// "MubaraqWahab"
</code></pre>

</section>

<section  data-auto-animate>

### Joining strings {data-id="strOpHeading"}

Also known as <i>concatenation</i>

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

You can use special strings called <i>template literals</i> to interpolate.

<pre data-id="concatstr"><code data-line-numbers="4-5" data-trim class="language-js">
const firstName = "Mubaraq"
const lastName = "Wahab"

const fullName = `${firstName} ${lastName}`
// "Mubaraq Wahab"
</code></pre>

</section>

<section data-auto-animate>

### Get a character from a string {data-id="strOpHeading"}

Use square brackets to specify an <i>index</i> (starts from zero)

<pre data-id="concatstr"><code data-line-numbers="1,2,5-7" data-trim class="language-js">
//                 0123456
const firstName = "Mubaraq"
const lastName = "Wahab"

const initial = firstName[0] // "M"
const second = firstName[1] // "u"
// and so on...
</code></pre>

</section>

<section data-auto-animate>

### Get part of a string {data-id="strOpHeading"}

Use the `slice` method

<pre data-id="concatstr"><code data-line-numbers="5-8" data-trim class="language-js">
//                 0123456
const firstName = "Mubaraq"
const lastName = "Wahab"

const firstThreeLetters = firstName.slice(0, 3)
// "Mub"
const thirdToEnd = firstName.slice(2)
// "baraq"
</code></pre>

</section>

<section data-auto-animate>

### Is this part of a string? {data-id="strOpHeading"}

Use the `includes` method to check if a string includes another.

<pre data-id="concatstr"><code data-line-numbers="4-7" data-trim class="language-js">
const firstName = "Mubaraq"
const lastName = "Wahab"

firstName.includes('ba')
// true
firstName.includes('ab')
// false
</code></pre>

</section>

<section data-auto-animate>

### How long is a string? {data-id="strOpHeading"}

Use the `length` property to get the length of a string.

<pre data-id="concatstr"><code data-line-numbers="4-5" data-trim class="language-js">
const firstName = "Mubaraq"
const lastName = "Wahab"

firstName.length
// 7
</code></pre>

</section>

<section data-auto-animate>

### String to number {data-id="strOpHeading"}

You need to convert a string to a number sometimes, such as when working with user input.

<pre data-id="concatstr"><code data-line-numbers data-trim class="language-js">
// Assume this is from user input
const input = "20"

// Careful here! Result is "203"
input + 3
</code></pre>

</section>

<section data-auto-animate>

### String to number {data-id="strOpHeading"}

You need to convert a string to a number sometimes, such as when working with user input.

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

### String to number {data-id="strOpHeading"}

You need to convert a string to a number sometimes, such as when working with user input.

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

The other way round works too!

<pre data-id="concatstr"><code data-line-numbers data-trim class="language-js">
const num = 20

// Result is "20"
const numAsString = String(num)
</code></pre>

</section>

<section data-auto-animate>

### Number to string {data-id="strOpHeading"}

The other way round works too!

<pre data-id="concatstr"><code data-line-numbers="3-4" data-trim class="language-js">
const num = 20

// Result is "20"
const numAsString = num.toString()
</code></pre>

</section>

<section data-auto-animate>

### Number to string {data-id="strOpHeading"}

The other way round works too!

<pre data-id="concatstr"><code data-line-numbers="3-4" data-trim class="language-js">
const num = 20

// Result is "20"
const numAsString = "" + num
</code></pre>

</section>

<section data-auto-animate>

### UPPERCASE, lowercase {data-id="strOpHeading"}

<pre data-id="concatstr"><code data-line-numbers="3-4|6-7" data-trim class="language-js">
const firstName = "Mubaraq"

firstName.toUpperCase()
// "MUBARAQ"

firstName.toLowerCase()
// "mubaraq"
</code></pre>

</section>

</section>


<section>

## See also

* The [Mozilla Developer Network Web Documentation](https://developer.mozilla.org/){rel="noopener"} (MDN Web Docs)

</section>


<section>

## Exercise

Check the [website]({{ '/lessons/02-values-and-types' | url }})

</section>
