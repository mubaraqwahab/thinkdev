---
title: Bindings again
---

<section>

<section data-auto-animate data-auto-animate-id="bindings">

## What are "bindings"?

</section>

<section data-auto-animate data-auto-animate-id="bindings">

## What are "bindings"?

We're interested in the <b>bindings of names to values.</b>

</section>

<section data-auto-animate data-auto-animate-id="bindings">

## What are "bindings"?

We've used them before&mdash;variables are bindings.

</section>

</section>


<section>

<section data-auto-animate>

## Variables

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
</code></pre>

</section>

<section data-auto-animate>

## Variables

What does this do again?

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
</code></pre>

</section>

<section data-auto-animate>

## Variables

Think of it this way: we're binding the name <var>x</var> to the string value `"Hey there"`, so that we can refer to it later as <var>x</var>.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
</code></pre>

</section>

<section data-auto-animate>

## Variables

[Because we're using `let`, we can always]{.block} bind the name again to another value later.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
x = "Hi"
</code></pre>

</section>

<section data-auto-animate>

## Variables

[We can't do this with `const` because it creates]{.block} a _constant_ binding that cannot be changed.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const x = "Hey there"
x = "Hi" // TypeError!
</code></pre>

</section>

<section data-auto-animate>

## Variables

After declaring, we can use the name to refer to its bound value.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
console.log(x)
</code></pre>

</section>

<section data-auto-animate>

## Variables

Since the name just refers to a value, we can operate on the name as we would on the value.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
console.log(x.length)
</code></pre>

</section>

<section data-auto-animate>

## Variables

We can create a new variable to refer to the value of a previous one. Now we have two names bound to the same value. Note that we're **not** binding a variable to another.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
let y = x
// x and y both refer to "Hey there"
</code></pre>

</section>

<section data-auto-animate>

## Variables

[What if we reassign one of them?]{.block} Well, then only that binding changes.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
let y = x
x = "Hi"
// x now refers to "Hi",
// but y still refers to "Hey there"
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="bindName">

### Naming the bindings

We've learnt some rules on naming variables before. There are some words however that appear to be valid names but are not.

</section>

<section data-auto-animate data-auto-animate-id="bindName">

### Naming the bindings

Some words have special meanings in JavaScript; we call them <i>keywords</i>. There are also words reserved for future use by the language. We can't use keywords or reserved words as identifiers (i.e. binding names).

</section>

<section data-auto-animate data-auto-animate-id="bindName">

### Naming the bindings

These are the keywords and reserved words in JavaScript today:

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
{.!list-none style="columns: 5;"}

</section>

<section data-auto-animate data-auto-animate-id="bindName">

### Naming the bindings

In addition, you can't use the literal values `true`, `false`, and `null` to name a binding.

</section>

<section data-auto-animate data-auto-animate-id="bindName">

### Naming the bindings

You don't have to memorise these invalid names however. If you try to you use one of them as a binding name, JavaScript will complain.

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
let x = 6
// SyntaxError: Identifier 'x' has already been declared
</code></pre>

</section>

</section>


<section>

<section>

## Scope

</section>

<section data-auto-animate>

What does this do?

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

<section data-auto-animate data-auto-animate-id="contexts">

<div class="bg-white text-black p-5 rounded-lg w-5/6 mx-auto">
  <!-- <p id=glscope><i>Global scope</i></p> -->
  <p data-id="glvars"><code>x = 5</code></p>
  <div data-id="ylscope" class="bg-yellow-400 p-5 rounded-lg w-5/6 mx-auto mb-5">
    <!-- <p id=ylscopeLabel><i>Block scope</i></p> -->
    <p data-id="ylvars"><code>x = 6</code></p>
  </div>
</div>

</section>

<section data-auto-animate>

In that scope, the new `x` <i>shadows</i> the old one

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6
  console.log(x) // 6
}
</code></pre>

</section>

<section data-auto-animate>

But only in that scope.

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

We call the outermost scope <i>the global scope</i> and variables declared there, <i>global variables</i>. Conversely, variables declared in a block are <i>local</i> to the block.

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5 // x is a global variable
if (true) {
  let x = 6 // x is local to the block
  console.log(x)
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="contexts">

<div class="bg-white text-black p-6 rounded-lg" aria-labelledby="glscope">
  <p id=glscope><i>Global scope</i></p>
  <p data-id="glvars"><small><code>x = 5</code></small></p>
  <div data-id="ylscope" class="bg-yellow-400 p-6 rounded-lg">
    <p data-id="ylvars"><small><code>x = 6</code></small></p>
  </div>
</div>

</section>

<section data-auto-animate data-auto-animate-id="contexts">

<div class="bg-white text-black p-6 rounded-lg" aria-labelledby="glscope">
  <p><i>Global scope</i></p>
  <p data-id="glvars"><small><code>x = 5</code>, <code>arr = ['a','b','c']</code></small></p>
  <div data-id="ylscope" class="bg-yellow-400 p-6 rounded-lg">
    <p data-id="ylvars"><small><code>x = 6</code>, <code>firstName = 'Mubaraq'</code></small></p>
  </div>
</div>

</section>

<section data-auto-animate data-auto-animate-id="contexts">

<div class="bg-white text-black p-6 rounded-lg" aria-labelledby="glscope">
  <p><i>Global scope</i></p>
  <p data-id="glvars"><small><code>x = 5</code>, <code>arr = ['a','b','c']</code></small></p>
  <div data-id="ylscope" class="bg-yellow-400 p-6 rounded-lg">
    <p data-id="ylvars"><small><code>x = 6</code>, <code>firstName = 'Mubaraq'</code></small></p>
    <p><small><code>arr</code>? <code class="fragment">['a','b','c']</code></small></p>
  </div>
</div>

</section>

<section data-auto-animate data-auto-animate-id="contexts">

<div class="bg-white text-black p-6 rounded-lg" aria-labelledby="glscope">
  <p><i>Global scope</i></p>
  <p data-id="glvars"><small><code>x = 5</code>, <code>arr = ['a','b','c']</code></small></p>
  <p><small><code>firstName</code>? <code class="fragment">ReferenceError</code></small></p>
  <div data-id="ylscope" class="bg-yellow-400 p-6 rounded-lg">
    <p data-id="ylvars"><small><code>x = 6</code>, <code>firstName = 'Mubaraq'</code></small></p>
  </div>
</div>

</section>

<section data-auto-animate data-auto-animate-id="contexts">

<div class="bg-white text-black p-6 rounded-lg" aria-labelledby="glscope">
  <p><i>Global scope</i></p>
  <p data-id="glvars"><small><code>x = 5</code>, <code>arr = ['a','b','c']</code></small></p>
  <div data-id="ylscope" class="bg-yellow-400 p-6 rounded-lg">
    <p data-id="ylvars"><small><code>x = 6</code>, <code>firstName = 'Mubaraq'</code></small></p>
    <div data-id="blscope" class="bg-blue-400 text-gray-1000 p-6 rounded-lg">
      <p data-id="blvars"><small><code>done = true</code>, <code>firstName = 'Amal'</code></small></p>
    </div>
  </div>
</div>

</section>

<section data-auto-animate>

Note that you can't use a variable before it's bound to a value, [even when it's declared in the same scope.]{.block}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
console.log(x) // ReferenceError: Cannot access 'x' before initialization
let x = 5
</code></pre>

</section>

<section data-auto-animate>

You can also use a block on its own, though this is very rare.

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
{
  let x = 6
  console.log(x) // 6
}
</code></pre>

</section>

<section data-auto-animate>

One more thing&mdash;don't write an object where a statement is expected, or JavaScript will mistake it for a block

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
{

}
</code></pre>

</section>

</section>


<!-- <section>

<section data-auto-animate>

## Object bindings

We've seen a second type of binding: the properties of an object {.fragment .fade-up}

</section>

<section data-auto-animate>

## Object bindings

What does this do?

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const obj = {
  size: 5
}
</code></pre>

</section>

<section data-auto-animate>

## Object bindings

We're creating an object with a property called `size` bound to the number 5. The object doesn't "contain" 5, it merely has a named "rope" linked to the number 5.

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const obj = {
  size: 5
}
</code></pre>

</section>

<section data-auto-animate>

## Object bindings

Objects are mutable so we can change what the properties are bound to. We can even add and remove properties.

<pre data-id="varbind"><code data-line-numbers="5-7" data-trim class="language-js">
const obj = {
  size: 5
}

obj.size = 7
obj.speed = 10
delete obj.size
</code></pre>

</section>

<section data-auto-animate>

## Object bindings

What's the output of this?

<pre data-id="varbind"><code data-line-numbers="1-7|9-12|14|16-17" data-trim class="language-js">
const obj = {
  size: 5,
  address: {
    city: '',
    state: '',
  }
}

const obj2 = {
  size: 3,
  address: obj.address
}

obj2.address.city = ''

console.log(obj.address.city)
console.log(obj2.address.city)
</code></pre>

</section>

</section> -->
