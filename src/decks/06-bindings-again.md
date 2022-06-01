---
title: Bindings again
---

{% from "macros.njk" import script %}

<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@latest/dist/svg.min.js"></script>

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


<section data-auto-animate data-auto-animate-id="j">

<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-miterlimit="10">
  <style>
  .fragment.draw-path.visible {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw 0.5s linear;
    animation-fill-mode: forwards;
  }
  @keyframes draw {
    from {
      stroke-dashoffset: 1;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  </style>
  <rect width="800" height="600" fill="#fff" />
  <g class="fragment">
    <path d="M222.4 274.3c0-5.7-4.62-10.33-10.32-10.33H91.9c-5.7 0-10.33 4.62-10.33 10.33v108.46c0 5.7 4.63 10.33 10.33 10.33h120.17c5.7 0 10.32-4.63 10.32-10.33V274.3Z" fill="#ebebeb"/>
    <!-- <text x="151.43" y="360" class="font-mono" font-size="64">x</text> -->
  </g>
  <g class="fragment">
    <path d="M718.42 218.95c0-6.65-5.4-12.04-12.04-12.04h-220c-6.64 0-12.03 5.4-12.03 12.04v130.24c0 6.64 5.4 12.04 12.04 12.04h220c6.64 0 12.03-5.4 12.03-12.04V218.95Z" fill="#ebebeb"/>
    <!-- <text x="475.28" y="242.47" class="font-mono" font-size="64">&quot;Hi&quot;</text> -->
  </g>
  <defs>
    <marker id="arrowhead" viewBox="0 0 10 10"
          refX="1" refY="5"
          orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
  <g fill="none" stroke="#000" stroke-width="4.94">
    <path d="M222.4 328.53s75.37-51.45 247.5-44.65" stroke-linejoin="round" stroke-miterlimit="1.5" marker-end="url(#arrowhead)" pathLength=1 class="fragment draw-path" />
    <!-- <path d="m459.1 276 10.8 7.88-11.42 6.94" /> -->
  </g>
</svg>

</section>


<section data-auto-animate data-auto-animate-id="j">

<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-miterlimit="10">
  <style>
  .fragment.draw-path.visible {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw 0.5s linear;
    animation-fill-mode: forwards;
  }
  @keyframes draw {
    from {
      stroke-dashoffset: 1;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  </style>
  <rect width="800" height="600" fill="#fff" />
  <g class="fragment">
    <path d="M222.4 274.3c0-5.7-4.62-10.33-10.32-10.33H91.9c-5.7 0-10.33 4.62-10.33 10.33v108.46c0 5.7 4.63 10.33 10.33 10.33h120.17c5.7 0 10.32-4.63 10.32-10.33V274.3Z" fill="#ebebeb"/>
    <!-- <text x="151.43" y="360" class="font-mono" font-size="64">x</text> -->
  </g>
  <g class="fragment">
    <path d="M718.42 218.95c0-6.65-5.4-12.04-12.04-12.04h-220c-6.64 0-12.03 5.4-12.03 12.04v130.24c0 6.64 5.4 12.04 12.04 12.04h220c6.64 0 12.03-5.4 12.03-12.04V218.95Z" fill="#ebebeb"/>
    <!-- <text x="475.28" y="242.47" class="font-mono" font-size="64">&quot;Hi&quot;</text> -->
  </g>
  <defs>
    <marker id="arrowhead" viewBox="0 0 10 10"
          refX="1" refY="5"
          orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
  <g fill="none" stroke="#000" stroke-width="4.94">
    <path d="M222.4 328.53s75.37-51.45 247.5-44.65" stroke-linejoin="round" stroke-miterlimit="1.5" marker-end="url(#arrowhead)" pathLength=1 class="fragment draw-path" />
    <!-- <path d="m459.1 276 10.8 7.88-11.42 6.94" /> -->
  </g>
</svg>

</section>


<!-- <section data-auto-animate>

Think of it this way: we're binding the name `x` to the string value `"Hey there"`, so that we can refer to it later as `x`.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
</code></pre>

</section> -->


<section data-auto-animate>

[Because we're using `let`, we can always]{.block} bind the name again to another value later:

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
x = 6
</code></pre>

</section>


<section>

TODO: image

</section>


<section data-auto-animate>

[We can't do this with `const` because it creates]{.block} a _constant_ binding that cannot be changed:

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const x = 5
x = 6 // Error!
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

We can also bind multiple names to the same value:

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
let y = x
</code></pre>

</section>


<section>

TODO: image

</section>


<section data-auto-animate>

What if we reassign one of them?

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = 5
let y = x
x = 6
</code></pre>

</section>


<section>

TODO: image

</section>

</section>



<section>

<section>

## Reserved words

</section>


<section>

* We learnt some rules on naming variables before, but there's one more rule you should know.
* Some words are <i>reserved</i> in JavaScript, usually because they have special meanings. {.fragment .fade-up}
* You can't use these words as names. {.fragment .fade-up}

</section>


<section>

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
let x = 6 // Error
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

This is allowed because the curly brackets create a <i>block</i> [and the block in turn creates a new <i>scope</i> for its variables.]{.block}

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

We call the outermost scope <i>the global scope</i> [and variables declared there, <i>global variables</i>:]{.block}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5 // x is a global variable
if (true) {
  let x = 6
  console.log(x)
}
</code></pre>

</section>


<section data-auto-animate>

Conversely, variables declared in a block are <i>local</i> to the block:

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6 // x is local to the block
  console.log(x)
}
</code></pre>

</section>


<section>

JavaScript has some built-in global bindings. For example, `console`, `Number`, `String`, and `Boolean`.

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
console.log(x) // Error
</code></pre>

</section>


<section data-auto-animate>

The same rules apply to deeper scopes:

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
let y = 7
if (true) {
  let x = 6
  if (true) {
    console.log(x) // 6
    console.log(y) // 7
    let z = 8
  }
  console.log(z) // Error
}
</code></pre>

</section>


<section data-auto-animate>

Note that you can't use a variable before it is declared, [even in the same scope:]{.block}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
console.log(x) // Error
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
