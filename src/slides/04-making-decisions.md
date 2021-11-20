---
title: Making decisions
---

<section>

## TODO: slide 1

![]({{ '/assets/images/decisions-youtube-like-btn-cropped.png?nf_resize=fit&w=' | url }})

</section>


<section>

<section>

## Relational operators

Also known as _comparison operators_.

```js
3 > 2 // true
5 < 8 // false
9 >= 13 // false
6 <= 6 // true
```

</section>

<section data-auto-animate>

### Equality

Check if two values are equal with the strict equality operator `===`

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
2 === 5 - 3 // true
"hello" === "hi" // false
true === false // false
</code></pre>

</section>

<section data-auto-animate>

### Inequality

Check if two values are _not_ equal with the strict inequality operator `!==`

<pre data-id="eq"><code data-line-numbers data-trim class="language-js">
2 !== 5 - 3 // false
"hello" !== "hi" // true
true !== false // true
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

* NOT [T]{.italic} yields [F]{.italic}
* NOT [F]{.italic} yields [T]{.italic}

</section>

<section>

### NOT: in programming

`!expr`

* The result is `false` if `expr` is truthy.
* The result is `true` if `expr` is falsy.

<div class="fragment">

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

* [T]{.italic} AND [T]{.italic} yields [T]{.italic}
* [T]{.italic} AND [F]{.italic} yields [F]{.italic}
* [F]{.italic} AND [T]{.italic} yields [F]{.italic}
* [F]{.italic} AND [F]{.italic} yields [F]{.italic}

</section>

<section>

### AND: in programming

`expr1 && expr2`
* result is `expr2` if `expr1` is truthy
* result is `expr1` if `expr1` is falsy

</section>

<section>

### AND: in programming

TODO:

* common use
* shortcircuiting

```js

```

</section>

<section>

### OR: in maths

* [T]{.italic} OR [T]{.italic} yields [T]{.italic}
* [T]{.italic} OR [F]{.italic} yields [T]{.italic}
* [F]{.italic} OR [T]{.italic} yields [T]{.italic}
* [F]{.italic} OR [F]{.italic} yields [F]{.italic}

</section>

<section>

### OR: in programming

`expr1 || expr2`
* result is `expr1` if `expr1` is truthy
* result is `expr2` if `expr1` is falsy

</section>

<section>

### OR: in programming

TODO:

* common use
* default values
* shortcircuiting

```js

```

</section>

</section>


<section>

<section data-auto-animate>

## The `if` statement

</section>

<section data-auto-animate>

## The `if` statement

```js
if (expr) {
  // code here
}
```

</section>

<section>

TODO: code snippet on control flow

</section>

<section>

### One-liner if

```js

```

</section>

<section>

### On blocks and scope

`let` and `const` variables are _block-scoped_.

```js

```

</section>

<section>

### `if` &hellip; `else if`

```js

```

</section>

<section>

### `if` &hellip; `else`

```js

```

</section>

</section>


<section>

<section>

## The `switch` statement

</section>

</section>


<section>

## Conditional expression

A _ternary__ operator

</section>