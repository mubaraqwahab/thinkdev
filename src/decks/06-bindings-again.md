---
title: Bindings again
---

{% from "macros.njk" import script %}

<script src="{{ '/svgdotjs/svg.min.js' | url }}" defer></script>
{# <script src="{{ '/svgdotjs/svg.pathmorphing.min.js' | url }}" defer></script> #}
{{ script('animate-paths.js') }}

<section>

<section>

## Variables

</section>


<section data-auto-animate>

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
</code></pre>

</section>


<section data-auto-animate>

What does this do again?

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
</code></pre>

</section>


<section data-transition="fade-in slide-out">

<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.5">

  <path class="fragment draw-path" pathLength=1 data-fragment-index=2 data-id="wire-x" d="M142.03 138.68s20.55 1.96 46.5-6.66c22.47-7.47 27.14-10.34 60.92-11.74" fill="none" stroke="#ec4899" stroke-width="2"/>
  <g class="fragment" data-fragment-index=1 data-id="val-5">
    <path d="M292.86 107.03c0-2.85-2.31-5.16-5.16-5.16h-33.1a5.16 5.16 0 0 0-5.15 5.16v26.5c0 2.84 2.31 5.15 5.15 5.15h33.1c2.85 0 5.16-2.3 5.16-5.15v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round"/>
    <text x="265.32" y="127.17" class="font-mono text-xl" fill="#0a0918">5</text>
  </g>
  <g data-id="var-x">
    <circle cx="124.59" cy="138.68" r="17.45" fill="#fffb46" stroke="#fffb46" stroke-linecap="round"/>
    <text x="118.59" y="143.56" class="font-mono text-xl" fill="#0a0918">x</text>
  </g>
</svg>

</section>


<section data-auto-animate>

[Because we're using `let`, we can always]{.block} bind the name again to another value later:

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
x = 6
</code></pre>

</section>


<section data-auto-animate data-auto-animate-id="let">

<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.5">

  <path data-id="wire-x" d="M138.46 120.28s12.38 3.55 37.17-8c22.47-10.47 36.14-18.68 70.25-18.41" fill="none" stroke="#ec4899" stroke-width="2"/>
  <g data-id="val-5">
    <path d="M289.29 80.62a5.16 5.16 0 0 0-5.16-5.16h-33.1a5.16 5.16 0 0 0-5.15 5.16v26.5c0 2.85 2.3 5.16 5.15 5.16h33.1c2.85 0 5.16-2.31 5.16-5.16v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round"/>
    <text x="261.75" y="100.76" class="font-mono text-xl" fill="#0a0918">5</text>
  </g>
  <g data-id="val-6" class="fragment">
    <path d="M296.43 142.88a5.16 5.16 0 0 0-5.16-5.16h-33.1a5.16 5.16 0 0 0-5.15 5.16v26.5c0 2.85 2.31 5.16 5.16 5.16h33.1c2.84 0 5.15-2.31 5.15-5.16v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round"/>
    <text x="268.89" y="163.02" class="font-mono text-xl" fill="#0a0918">6</text>
  </g>
  <g data-id="var-x">
    <circle cx="121.02" cy="120.28" r="17.45" fill="#fffb46" stroke="#fffb46" stroke-linecap="round"/>
    <text x="115.02" y="125.16" class="font-mono text-xl" fill="#0a0918">x</text>
  </g>
</svg>

</section>


<section data-auto-animate data-auto-animate-id="let">

<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.5">

  <path data-id="wire-x" d="M138.46 120.28s22.47-2.63 42.67 10.72c14.58 9.63 26.28 30.86 71.9 25.13" fill="none" stroke="#ec4899" stroke-width="2"/>
  <g data-id="val-5">
    <path d="M289.29 80.62a5.16 5.16 0 0 0-5.16-5.16h-33.1a5.16 5.16 0 0 0-5.15 5.16v26.5c0 2.85 2.3 5.16 5.15 5.16h33.1c2.85 0 5.16-2.31 5.16-5.16v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round"/>
    <text x="261.75" y="100.76" class="font-mono text-xl" fill="#0a0918">5</text>
  </g>
  <g data-id="val-6">
    <path d="M296.43 142.88a5.16 5.16 0 0 0-5.16-5.16h-33.1a5.16 5.16 0 0 0-5.15 5.16v26.5c0 2.85 2.31 5.16 5.16 5.16h33.1c2.84 0 5.15-2.31 5.15-5.16v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round"/>
    <text x="268.89" y="163.02" class="font-mono text-xl" fill="#0a0918">6</text>
  </g>
  <g data-id="var-x">
    <circle cx="121.02" cy="120.28" r="17.45" fill="#fffb46" stroke="#fffb46" stroke-linecap="round"/>
    <text x="115.02" y="125.16" class="font-mono text-xl" fill="#0a0918">x</text>
  </g>
</svg>

</section>


<section data-auto-animate>

[We can't do this with `const` because it creates]{.block} a _constant_ binding that cannot be changed:

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const x = 5
x = 6 // TypeError: Assignment to constant variable
</code></pre>

</section>


<section data-auto-animate>

After declaring, we can use the name to refer to its bound value:

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
console.log(x) // 5
</code></pre>

</section>


<section data-auto-animate>

We can operate on the name as we would on the value:

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
console.log(x + 2) // 7
</code></pre>

</section>


<section data-auto-animate>

We can also bind a name to the value of another name:

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
let y = x
</code></pre>

</section>


<section>

<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.5">

  <path data-id="wire-x" d="M138.46 120.28s12.38 3.55 37.17-8c22.47-10.47 36.14-18.68 70.25-18.41" fill="none" stroke="#ec4899" stroke-width="2" class="fragment highlight-current-stroke" data-fragment-index=3 />
  <path data-id="wire-y" d="M184.46 156.76s14.8.3 29.67-6.55c22.22-10.24 9.14-50.1 31.75-56.34" fill="none" stroke="#ec4899" stroke-width="2" class="fragment draw-path" pathLength=1 data-fragment-index=5 />
  <g data-id="val-5">
    <path d="M289.29 80.62a5.16 5.16 0 0 0-5.16-5.16h-33.1a5.16 5.16 0 0 0-5.15 5.16v26.5c0 2.85 2.3 5.16 5.15 5.16h33.1c2.85 0 5.16-2.31 5.16-5.16v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round" class="fragment highlight-current-stroke" data-fragment-index=4 />
    <text x="261.75" y="100.76" class="font-mono text-xl" fill="#0a0918">5</text>
  </g>
  <g data-id="var-x">
    <circle cx="121.02" cy="120.28" r="17.45" fill="#fffb46" stroke="#fffb46" stroke-linecap="round" class="fragment highlight-current-stroke" data-fragment-index=2 />
    <text x="115.02" y="125.16" class="font-mono text-xl" fill="#0a0918">x</text>
  </g>
  <g data-id="var-y" class="fragment" data-fragment-index=1>
    <circle cx="167.02" cy="157.28" r="17.45" fill="#fffb46" stroke="#fffb46" stroke-linecap="round"/>
    <text x="161.09" y="159.97" class="font-mono text-xl" fill="#0a0918">y</text>
  </g>
</svg>

</section>


<section data-auto-animate>

What if we reassign one of them?

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
let y = x
x = 6
</code></pre>

</section>


<section data-auto-animate data-auto-animate-id="twovars">

<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.5">

  <path data-id="wire-x" d="M142.03 134.93s12.38 3.55 37.17-8c22.47-10.46 36.14-18.67 70.25-18.4" fill="none" stroke="#ec4899" stroke-width="2"/>
  <path data-id="wire-y" d="M188.03 171.42s14.8.3 29.67-6.56c22.22-10.23 9.14-50.1 31.75-56.33" fill="none" stroke="#ec4899" stroke-width="2"/>
  <g data-id="val-5">
    <path d="M292.86 95.27c0-2.84-2.31-5.15-5.16-5.15h-33.1a5.16 5.16 0 0 0-5.15 5.15v26.51c0 2.84 2.31 5.15 5.15 5.15h33.1a5.16 5.16 0 0 0 5.16-5.15v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round"/>
    <text x="265.32" y="115.42" class="font-mono text-xl" fill="#0a0918">5</text>
  </g>
  <g data-id="val-6" class="fragment">
    <path d="M239.15 65.77c0-2.84-2.31-5.15-5.16-5.15h-33.1a5.16 5.16 0 0 0-5.15 5.15v26.51c0 2.84 2.31 5.15 5.16 5.15H234a5.16 5.16 0 0 0 5.15-5.15v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round"/>
    <text x="211.62" y="85.92" class="font-mono text-xl" fill="#0a0918">6</text>
  </g>
  <g data-id="var-x">
    <circle cx="124.59" cy="134.93" r="17.45" fill="#fffb46" stroke="#fffb46" stroke-linecap="round"/>
    <text x="118.59" y="139.81" class="font-mono text-xl" fill="#0a0918">x</text>
  </g>
  <g data-id="var-y">
    <circle cx="170.59" cy="171.93" r="17.45" fill="#fffb46" stroke="#fffb46" stroke-linecap="round"/>
    <text x="164.66" y="174.62" class="font-mono text-xl" fill="#0a0918">y</text>
  </g>
</svg>

</section>


<section data-auto-animate data-auto-animate-id="twovars">

<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.5">

  <path data-id="wire-x" d="M142.03 134.42s10.41 1.97 19.17-9.42c18.56-29.82 12.43-36.24 34.54-45.97" fill="none" stroke="#ec4899" stroke-width="2"/>
  <path data-id="wire-y" d="M188.03 171.42s14.8.3 29.67-6.56c22.22-10.23 9.14-50.1 31.75-56.33" fill="none" stroke="#ec4899" stroke-width="2"/>
  <g data-id="val-5">
    <path d="M292.86 95.27c0-2.84-2.31-5.15-5.16-5.15h-33.1a5.16 5.16 0 0 0-5.15 5.15v26.51c0 2.84 2.31 5.15 5.15 5.15h33.1a5.16 5.16 0 0 0 5.16-5.15v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round"/>
    <text x="265.32" y="115.42" class="font-mono text-xl" fill="#0a0918">5</text>
  </g>
  <g data-id="val-6">
    <path d="M239.15 65.77c0-2.84-2.31-5.15-5.16-5.15h-33.1a5.16 5.16 0 0 0-5.15 5.15v26.51c0 2.84 2.31 5.15 5.16 5.15H234a5.16 5.16 0 0 0 5.15-5.15v-26.5Z" fill="#1ae6c1" stroke="#1ae6c1" stroke-linecap="round"/>
    <text x="211.62" y="85.92" class="font-mono text-xl" fill="#0a0918">6</text>
  </g>
  <g data-id="var-x">
    <circle cx="124.59" cy="134.93" r="17.45" fill="#fffb46" stroke="#fffb46" stroke-linecap="round"/>
    <text x="118.59" y="139.81" class="font-mono text-xl" fill="#0a0918">x</text>
  </g>
  <g data-id="var-y">
    <circle cx="170.59" cy="171.93" r="17.45" fill="#fffb46" stroke="#fffb46" stroke-linecap="round"/>
    <text x="164.66" y="174.62" class="font-mono text-xl" fill="#0a0918">y</text>
  </g>
</svg>

</section>

</section>



<section>

<section>

## Reserved words

</section>


<section>

You can't use some words as names because they are reserved for special use in JavaScript. {.h4}

</section>


<section data-transition="slide-in zoom-out">

* `await`
* `break`
* `case`
* `catch`
* `class`
* `const`
* `continue`
* `debugger`
* `default`
* `delete`
* `do`
* `else`
* `enum`
* `export`
* `extends`
* `false`
* `finally`
* `for`
* `function`
* `if`
* `implements`
* `import`
* `interface`
* `in`
* `instanceof`
* `let`
* `new`
* `null`
* `package`
* `private`
* `protected`
* `public`
* `return`
* `static`
* `super`
* `switch`
* `this`
* `throw`
* `true`
* `try`
* `typeof`
* `var`
* `void`
* `while`
* `with`
* `yield`
{.list-none style="columns: 4;"}

</section>


<section>

You don't have to memorise them; [JavaScript will complain if you use any of them as a name:]{.block}

```js
let if = 5 // SyntaxError: Unexpected token 'if'
```

</section>

</section>



<section>

<section>

## Now, let's try something different

</section>


<section data-auto-animate>

<pre data-id="diff"><code data-line-numbers data-trim class="language-js">
let x = 5
</code></pre>

</section>


<section data-auto-animate>

What does this do?

<pre data-id="diff"><code data-line-numbers data-trim class="language-js">
let x = 5
let x = 6
</code></pre>

</section>


<section data-auto-animate>

You can't redeclare an existing variable _in the same scope_.

<pre data-id="diff"><code data-line-numbers data-trim class="language-js">
let x = 5
let x = 6 // SyntaxError
</code></pre>

</section>

</section>



<section>

<section>

## Scope

</section>


<section data-auto-animate>

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6
}
</code></pre>

</section>


<section data-auto-animate>

This is allowed because the braces create a <i>block</i> [and the block in turn creates a new <i>scope</i> for its variables.]{.block}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6
}
</code></pre>

</section>


<section data-auto-animate>

In that scope, the new `x` <i>shadows</i> the old one:

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6
  console.log(x) // 6
}
</code></pre>

</section>


<section data-auto-animate>

But only in that scope:

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6
  console.log(x) // 6
}
console.log(x) // 5
</code></pre>

</section>


<section data-auto-animate>

We say that variables declared in a block are <i>local</i> to the block:

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6 // x is local to the block
  console.log(x)
}
</code></pre>

</section>


<section>

JavaScript also has a <i>global scope</i> containing several built-in bindings. Some global bindings we've already used are `console`, `Number`, `String`, and `Boolean`. {.h4}

</section>


<section data-auto-animate>

Variables are <i>visible</i> in their scope and in inner scopes:

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  console.log(x) // 5
}
</code></pre>

</section>


<section data-auto-animate>

You can't access a variable where it's not visible:

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
if (true) {
  let x = 6
}
console.log(x) // ReferenceError
</code></pre>

</section>


<section data-auto-animate>

The same rules apply to deeper scopes:

<pre data-id="scope"><code data-line-numbers="1-11|6|5-9|3,4,10,11" data-trim class="language-js">
let x = 5
let y = 7
if (true) {
  let x = 6
  if (true) {
    console.log(x)
    console.log(y)
    let z = 8
  }
  console.log(z)
}
</code></pre>

</section>


<section data-auto-animate>

The same rules apply to deeper scopes:

<pre data-id="scope"><code data-line-numbers="6|7|5-9|3,4,10,11|1,2" data-trim class="language-js">
let x = 5
let y = 7
if (true) {
  let x = 6
  if (true) {
    console.log(x) // 6
    console.log(y)
    let z = 8
  }
  console.log(z)
}
</code></pre>

</section>


<section data-auto-animate>

The same rules apply to deeper scopes:

<pre data-id="scope"><code data-line-numbers="7|1-11|10|3,4,10,11|1,2" data-trim class="language-js">
let x = 5
let y = 7
if (true) {
  let x = 6
  if (true) {
    console.log(x) // 6
    console.log(y) // 7
    let z = 8
  }
  console.log(z)
}
</code></pre>

</section>


<section data-auto-animate>

The same rules apply to deeper scopes:

<pre data-id="scope"><code data-line-numbers="10" data-trim class="language-js">
let x = 5
let y = 7
if (true) {
  let x = 6
  if (true) {
    console.log(x) // 6
    console.log(y) // 7
    let z = 8
  }
  console.log(z) // ReferenceError
}
</code></pre>

</section>


<section>

A final note is that you can't use a variable [before it is declared, even in the same scope:]{.block}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
console.log(x) // ReferenceError
let x = 5
</code></pre>

</section>

</section>


<!--
<section>

<section>

TODO: discuss object props in meeting instead!

## Object properties are bindings too

</section>


<section data-auto-animate>

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const user = {
  name: 'Isa'
}
</code></pre>

</section>


<section data-auto-animate>

Once again, what does this do?

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const user = {
  name: 'Isa'
}
</code></pre>

</section>


<section>

TODO: image

</section>


<section data-auto-animate>

We're creating an object with a property called `name` that is bound to the string `'Isa'`. The object doesn't "contain" the string; it merely has something linking it to the string.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const user = {
  name: 'Isa'
}
</code></pre>

</section>


<section data-auto-animate>

Objects are mutable so we can change what the properties are bound to. We can even add and remove properties:

<pre data-id="varbind"><code data-line-numbers="5-7" data-trim class="language-js">
const user = {
  name: 'Isa'
}

user.name = 'Amal'
user.email = 'amal@example.com'
delete user.email
</code></pre>

</section>


<section data-auto-animate>

You'll get `undefined` if you try to access a property that doesn't exist:

<pre data-id="varbind"><code data-line-numbers="" data-trim class="language-js">
const user = {
  name: 'Isa'
}

console.log(user.phoneNumber) // undefined
</code></pre>

</section>


<section data-auto-animate>

What will be the values of `user.address.city` and `user2.address.city`?

<pre data-id="varbind"><code data-line-numbers="" data-trim class="language-js">
const user = {
  name: 'Isa',
  address: { city: 'Asokoro', state: 'Abuja' },
}
const user2 = {
  name: 'Amal',
  address: user.address,
}

user2.address.city = 'Gwarinpa'
</code></pre>

</section>


<section>

TODO: image

</section>


<section data-auto-animate>

Both will change to `'Gwarinpa'` because the two [`address` properties refer to the same object.]{.block}

<pre data-id="varbind"><code data-line-numbers="" data-trim class="language-js">
const user = {
  name: 'Isa',
  address: { city: 'Asokoro', state: 'Abuja' },
}
const user2 = {
  name: 'Amal',
  address: user.address,
}

user2.address.city = 'Gwarinpa'
</code></pre>

</section>


<section data-auto-animate>

If you really want different address objects, [you can duplicate one with the spread syntax.]{.block}

<pre data-id="varbind"><code data-line-numbers="7|12-13" data-trim class="language-js">
const user = {
  name: 'Isa',
  address: { city: 'Asokoro', state: 'Abuja' },
}
const user2 = {
  name: 'Amal',
  address: { ...user.address },
}

user2.address.city = 'Gwarinpa'
</code></pre>

</section>


<section>

TODO: image

</section>


<section data-auto-animate>

Or, well, for this simple example 🙃:

<pre data-id="varbind"><code data-line-numbers="5-8|10-11" data-trim class="language-js">
const user = {
  name: 'Isa',
  address: { city: 'Asokoro', state: 'Abuja' },
}
const user2 = {
  name: 'Amal',
  address: { city: 'Gwarinpa', state: 'Abuja' },
}
</code></pre>

</section>

</section> -->
