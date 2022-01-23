---
title: Bindings again
---

<section>

<section data-auto-animate data-auto-animate-id="bindings">

## "Bindings"?

</section>

<section data-auto-animate data-auto-animate-id="bindings">

## "Bindings"?

We've used them before&mdash;variables are bindings.

</section>

</section>


<section>

<section>

## Variables

</section>

<section data-auto-animate>

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
</code></pre>

</section>

<section data-auto-animate>

What does this do again? {data-id="varbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
</code></pre>

</section>

<section data-auto-animate>

Think of it this way: we're binding the name `x` to the string value `"Hey there"`, so that we can refer to it later as `x`. {data-id="varbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
</code></pre>

</section>

<section data-auto-animate>

[Because we're using `let`, we can always]{.block} bind the name again to another value later. {data-id="varbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
x = "Hi"
</code></pre>

</section>

<section data-auto-animate>

[We can't do this with `const` because it creates]{.block} a _constant_ binding that cannot be changed. {data-id="varbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const x = "Hey there"
x = "Hi" // TypeError!
</code></pre>

</section>

<section data-auto-animate>

After declaring, we can use the name to refer to its bound value. {data-id="varbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
console.log(x)
</code></pre>

</section>

<section data-auto-animate>

Since the name just refers to a value, we can operate on the name as we would on the value. {data-id="varbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
console.log(x.length)
</code></pre>

</section>

<section data-auto-animate>

We can create a new variable to refer to the value of a previous one. Now we have two names bound to the same value. Note that we're **not** binding a variable to another. {data-id="varbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
let y = x
// x and y both refer to "Hey there"
</code></pre>

</section>

<section data-auto-animate>

[What if we reassign one of them?]{.block} Well, then only that binding changes. {data-id="varbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
let x = "Hey there"
let y = x
x = "Hi"
// x now refers to "Hi",
// but y still refers to "Hey there"
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="bindName">

### Reserved names

We learnt some rules on naming variables before. [But there's more.]{.block .fragment .fade-up} {data-id=bindNameDesc}

</section>

<section data-auto-animate data-auto-animate-id="bindName">

Some words are <i>reserved</i> in JavaScript, usually because they have special meanings. We can't use these words as identifiers (i.e. binding names). {data-id=bindNameDesc}

</section>

<section data-auto-animate data-auto-animate-id="bindName">

These are the reserved words in JavaScript today: {data-id=bindNameDesc}

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
{.!list-none style="columns: 4;"}

</section>

<section data-auto-animate data-auto-animate-id="bindName">

You don't have to memorise these invalid names however. If you try to you use one of them as a binding name, JavaScript will complain. {data-id=bindNameDesc}

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

What does this do? {data-id="diffDesc"}

<pre data-id="diff"><code data-line-numbers data-trim class="language-js">
let x = 5
let x = 6
</code></pre>

</section>

<section data-auto-animate>

You can't redeclare an existing variable _in the same scope_. {data-id="diffDesc"}

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

What does this do? {data-id="scopeDesc"}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6
}
</code></pre>

</section>

<section data-auto-animate>

This is allowed because the curly brackets create a <i>block</i> [and the block in turn creates a new <i>scope</i> for its variables.]{.block} {data-id="scopeDesc"}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6
}
</code></pre>

</section>

<section data-auto-animate>

In that scope, the new `x` <i>shadows</i> the old one {data-id="scopeDesc"}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6
  console.log(x) // 6
}
</code></pre>

</section>

<section data-auto-animate>

But only in that scope. {data-id="scopeDesc"}

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

We call the outermost scope <i>the global scope</i> [and variables declared there, <i>global variables</i>.]{.block} {data-id="scopeDesc"}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5 // x is a global variable
if (true) {
  let x = 6
  console.log(x)
}
</code></pre>

</section>

<section data-auto-animate>

Conversely, variables declared in a block are <i>local</i> to the block. {data-id="scopeDesc"}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  let x = 6 // x is local to the block
  console.log(x)
}
</code></pre>

</section>

<section data-auto-animate>

We have some global bindings already available to us. For example, `Number`, `String`, `Boolean`, `Object`, `Array`, `console`, and even `undefined`. {data-id="scopeDesc"}

</section>

<section data-auto-animate>

Variables are <i>visible</i> in their scope and in inner scopes. {data-id="scopeDesc"}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
if (true) {
  console.log(x) // 5
}
</code></pre>

</section>

<section data-auto-animate>

You can't access a variable where it's not visible. {data-id="scopeDesc"}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
if (true) {
  let x = 6
}
console.log(x) // ReferenceError: x is not defined
</code></pre>

</section>

<section data-auto-animate>

The same rules apply to deeper scopes {data-id="scopeDesc"}

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
  console.log(z) // ReferenceError: z is not defined
}
</code></pre>

</section>

<section data-auto-animate>

Note that you can't use a variable before it is declared, [even in the same scope.]{.block} {data-id="scopeDesc"}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
// ReferenceError: Cannot access 'x' before initialization
console.log(x)
let x = 5
</code></pre>

</section>

<section data-auto-animate>

You can also use a block on its own, though this is very rare. {data-id="scopeDesc"}

<pre data-id="scope"><code data-line-numbers data-trim class="language-js">
let x = 5
{
  let x = 6
  console.log(x) // 6
}
</code></pre>

</section>

<section data-auto-animate>

A block is really just a statement [that's used to group other statements.]{.block} {data-id="scopeDesc"}

</section>

</section>


<section>

<section data-auto-animate data-auto-animate-id="otherbind">

## Any other binding?

</section>

<section data-auto-animate data-auto-animate-id="otherbind">

## Any other binding?

Yes, the properties of an object.

</section>

</section>

<section data-auto-animate>

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const user = {
  name: 'Isa'
}
</code></pre>

</section>

<section data-auto-animate>

Once again, what does this do? {data-id="objbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const user = {
  name: 'Isa'
}
</code></pre>

</section>

<section data-auto-animate>

We're creating an object with a property called `name` that is bound to the string `'Isa'`. The object doesn't "contain" the string; it merely has something linking it to the string. {data-id="objbindDesc"}

<pre data-id="varbind"><code data-line-numbers data-trim class="language-js">
const user = {
  name: 'Isa'
}
</code></pre>

</section>

<section data-auto-animate>

Objects are mutable so we can change what the properties are bound to. We can even add and remove properties. {data-id="objbindDesc"}

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

You'll get `undefined` if you try to access a property that doesn't exist. {data-id="objbindDesc"}

<pre data-id="varbind"><code data-line-numbers="" data-trim class="language-js">
const user = {
  name: 'Isa'
}

console.log(user.phoneNumber) // undefined
</code></pre>

</section>

<section data-auto-animate>

Consider this example. What will be the values of `user.address.city` and `user2.address.city`? {data-id="objbindDesc"}

<pre data-id="varbind"><code data-line-numbers="1-4|5-8|10" data-trim class="language-js">
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

Both will change to `'Gwarinpa'` because the two [`address` properties refer to the same object.]{.block} {data-id="objbindDesc"}

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

If you really want different address objects, [you can duplicate one with the spread operator.]{.block} {data-id="objbindDesc"}

<pre data-id="varbind"><code data-line-numbers="7|10|12-13" data-trim class="language-js">
const user = {
  name: 'Isa',
  address: { city: 'Asokoro', state: 'Abuja' },
}
const user2 = {
  name: 'Amal',
  address: { ...user.address },
}

user2.address.city = 'Gwarinpa'

console.log(user.address.city) // still 'Asokoro'
console.log(user2.address.city) // 'Gwarinpa'
</code></pre>

</section>

<section data-auto-animate>

Or, well, for this simple example 🙃: {data-id="objbindDesc"}

<pre data-id="varbind"><code data-line-numbers="5-8|10-11" data-trim class="language-js">
const user = {
  name: 'Isa',
  address: { city: 'Asokoro', state: 'Abuja' },
}
const user2 = {
  name: 'Amal',
  address: { city: 'Gwarinpa', state: 'Abuja' },
}

console.log(user.address.city) // 'Asokoro'
console.log(user2.address.city) // 'Gwarinpa'
</code></pre>

</section>

</section>
