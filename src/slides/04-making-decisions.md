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

* `false`
* `0`
* `""` (empty string)
* `null`
* `undefined`

</section>

</section>


<section>

<section data-auto-animate>

## Logical operators

</section>

<section data-auto-animate>

## Logical operators

There are three:

* NOT
* AND
* OR

</section>

<section>

### NOT: in maths

NOT [T]{.italic} yields [F]{.italic}

NOT [F]{.italic} yields [T]{.italic}

</section>

<section>

### NOT: in programming

The NOT operator is `!` (exclamation mark).

`!expr` is `false` if `expr` is truthy, and `true` otherwise.

```js {data-line-numbers="1,2|4,5"}
"NOT operator" // truthy expr
!"NOT operator" // false

[].length // 0, which is falsy
!([].length) // true
```

</section>

<section>

### NOT to convert to boolean

You can use the NOT operator to convert a value to a boolean:

```js {data-line-numbers="1|2|3|5-6"}
0 // falsy value
!0 // true
!!0 // false

// Same as:
Boolean(0) // false
```

</section>

</section>