---
title: Values and Types
---

<section>

<section data-auto-animate>

![Microsoft Store screenshot]({{ '/assets/images/ms-store-screenshot.jpg' | url }})

</section>

<section data-auto-animate>

## Text {data-id="storeLabelHeading"}

![Microsoft Store screenshot with text highlighted]({{ '/assets/images/ms-store-screenshot-text-highlighted.jpg' | url }})

</section>

<section data-auto-animate>

## Numbers  {data-id="storeLabelHeading"}

![Microsoft Store screenshot with numbers highlighted]({{ '/assets/images/ms-store-screenshot-num-highlighted.jpg' | url }})

</section>

<section data-auto-animate>

## Alternatives  {data-id="storeLabelHeading"}

![Microsoft Store screenshot with alternatives highlighted]({{ '/assets/images/ms-store-screenshot-bool-highlighted.jpg' | url }})

</section>

</section>


<section>

<section>

## These have "formal" names

* We represent text with _strings_ {.fragment .fade-up}
  * `"Most popular"`
  * `'Installed'`
* We use _booleans_ to choose between alternatives {.fragment .fade-up}
  * `true`, `false`

</section>

<section>

### What about numbers?

* Many languages differentiate between types of numbers. {.fragment .fade-up}
* _Integer_ types (or _int_) for 1, 20, -7, &hellip; {.fragment .fade-up}
* _Floating point_ types (or _float_) for 3.2, -0.789, 1/9, &hellip; {.fragment .fade-up}

</section>

<section>

### But in JavaScript ...

... a number is just a _number_.

</section>

<section>

### `typeof`

Use `typeof` keyword to get the type of a value:

```js
typeof "Hi" // "string"
typeof 12.34 // "number"
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

* Values aren't so useful alone {.fragment .fade-up}
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

## What if we wanted to store an expression?

Solution: use a variable! {.fragment}

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

</section>

<section data-auto-animate data-auto-animate-duration="0.7" data-auto-animate-id="nameVars">

### How to name variables?

The JavaScript convention is [`camelCase` 🐪]{.text-6xl .block .leading-normal}

</section>

<section data-auto-animate>

### Variables that vary

* `const` variables are _constant_; they always refer to the same value. {.fragment .fade-up}
* That's fine in many cases, but sometimes we need to change that reference. {.fragment .fade-up}

</section>

<section data-auto-animate>

### Variables that vary

Consider an e-commerce app

<!-- TODO: image -->

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

</section>