---
title: Collections
---

<section>

<section>

## The store example

![Screenshot of Microsoft Store]({{ '/assets/images/ms-store-screenshot.jpg?nf_resize=fit&w=700' | url }}){width=700}

</section>

<section data-auto-animate>

### How to represent in code?

<pre data-id="entvars"><code data-line-numbers data-trim class="language-js">
let appName = 'WhatsApp Desktop'
let appRating = 4
let appReviewsCount = 70
let appPrice = 0
let appStatus = 'Owned' // or 'Installed' or 'Not Owned'
</code></pre>

</section>

<section data-auto-animate>

### How to represent in code?

<pre data-id="entvars"><code data-line-numbers="1-11|13-23" data-trim class="language-js">
let appName = 'WhatsApp Desktop'
let appRating = 4
let appReviewsCount = 70
let appPrice = 0
let appStatus = 'Owned' // or 'Installed' or 'Not Owned'

let app2Name = 'World of Tank Blitz'
let app2Rating = 5
let app2ReviewsCount = 2
let app2Price = 0
let app2Status = 'Not Owned'

let app3Name = 'Films & TV'
let app3Rating = 4.8
let app3ReviewsCount = 237
let app3Price = 0
let app3Status = 'Installed'

let app4Name = 'Microsoft Flight Simulator'
let app4Rating = 5
let app4ReviewsCount = 1
let app4Price = 24999
let app4Status = 'Not Owned'
</code></pre>

</section>

<section data-auto-animate>

### How to represent in code?

Problem: so many variables that aren't tied together

</section>

<section>

### We need a way to represent entities with different parts

</section>

</section>


<section>

<section>

## Objects

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  price: 0,
  status: 'Owned',
}
</code></pre>

</section>

<section data-auto-animate>

### Let's break it down

</section>

<section data-auto-animate>

### Let's break it down

Start with curly brackets

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const app = {}
</code></pre>

</section>

<section data-auto-animate>

### Let's break it down

Add a property (`key: value`)

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop'
}
</code></pre>

</section>

<section data-auto-animate>

### Let's break it down

Add more properties, separated by commas (last comma is optional)

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  price: 0,
  status: 'Owned',
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id='nameprops'>

### How to name a property?

</section>

<section data-auto-animate data-auto-animate-id='nameprops'>

### How to name a property?

Use a string

<pre data-id="objprop"><code data-line-numbers data-trim class="language-js">
const obj = {
  "prop": "...",
  "another prop": "...",
  "$#@!": "...",
  "0": "...",
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id='nameprops'>

### How to name a property?

Quotes are optional if the name is a valid variable name (i.e. an _identifier_) or a number.

<pre data-id="objprop"><code data-line-numbers="2,5" data-trim class="language-js">
const obj = {
  prop: "...",
  "another prop": "...",
  "$#@!": "...",
  0: "...",
}
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id='nameprops'>

### How to name a property?

The JavaScript way is also `camelCase`

<pre data-id="objprop"><code data-line-numbers data-trim class="language-js">
const obj = {
  prop: "...",
  anotherProp: "...",
}
</code></pre>

</section>

</section>


<section>

<section>

## Using objects

</section>

<section data-auto-animate>

### Get/set a property {data-id="useobjHeading"}

**Dot notation**

<pre data-id="useobj"><code data-line-numbers="1-5|7-8|10-11|13" data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  status: 'Owned',
  123: null,
}

// Get a prop
console.log(app.name) // 'WhatsApp Desktop'

// Set (i.e. change) a prop
app.status = 'Installed'

app.123 // Error
</code></pre>

</section>

<section data-auto-animate>

### Get/set a property {data-id="useobjHeading"}

**Bracket notation**. For property names that aren't valid identifiers

<pre data-id="useobj"><code data-line-numbers="13|7-11" data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  status: 'Owned',
  123: null,
}

// Get a prop
console.log(app['name']) // 'WhatsApp Desktop'

// Set (i.e. change) a prop
app['status'] = 'Installed'

app[123] // Works, result is null
</code></pre>

</section>

<section data-auto-animate>

### Add/remove a property {data-id="useobjHeading"}

<pre data-id="useobj"><code data-line-numbers="7-8|10-11" data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  status: 'Owned',
  123: null,
}

// Add a prop
app.rating = 4

// Remove a prop
delete app[123]
</code></pre>

</section>

<section data-auto-animate data-auto-animate-id="mutable">

### Objects are _mutable_

* You can't change a number, string, or boolean intrinsically, because they are _immutable_.
* But you can change "parts" of an object!

</section>

<section data-auto-animate data-auto-animate-id="mutable">

### Objects are _mutable_

```js
const str = "Strings are immutable"

// Try to change 'Strings' to 'Springs'
str[1] = 'p' // No error, but it doesn't work

// Still "Strings are immutable"
console.log(str)
```

</section>

<section data-auto-animate>

### Does an object have a property? {data-id="useobjHeading"}

Use the `in` operator to check if an object has a property

<pre data-id="useobj"><code data-line-numbers data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  price: 0,
  status: 'Owned',
}

console.log("rating" in app) //true
console.log("downloadsCount" in app) // false
</code></pre>

</section>

<section data-auto-animate>

### Pack variables into an object {data-id="useobjHeading"}

It's common to have variables that you want to pack into an object

<pre data-id="useobj"><code data-line-numbers data-trim class="language-js">
const name = 'WhatsApp Desktop'
const rating = 4
const reviewsCount = 70
const price = 0
const status = 'Owned'
</code></pre>

</section>

<section data-auto-animate>

### Pack variables into an object {data-id="useobjHeading"}

It's common to have variables that you want to pack into an object

<pre data-id="useobj"><code data-line-numbers="7-13" class="language-js">const name = 'WhatsApp Desktop'
const rating = 4
const reviewsCount = 70
const price = 0
const status = 'Owned'

const app = {
  name: name,
  rating: rating,
  reviewsCount: reviewsCount,
  price: price,
  status: status,
}

</code></pre>

</section>

<section data-auto-animate>

### Pack variables into an object {data-id="useobjHeading"}

There's a shorter way

<pre data-id="useobj"><code data-line-numbers="7-13" data-trim class="language-js">
const name = 'WhatsApp Desktop'
const rating = 4
const reviewsCount = 70
const price = 0
const status = 'Owned'

const app = {
  name,
  rating,
  reviewsCount,
  price,
  status,
}
</code></pre>

</section>

<section data-auto-animate>

### How about unpacking? {data-id="useobjHeading"}

It may be tedious to type the `app.` prefix sometimes

<pre data-id="useobj"><code data-line-numbers="1-7" data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  price: 0,
  status: 'Owned',
}
</code></pre>

</section>

<section data-auto-animate>

### How about unpacking? {data-id="useobjHeading"}

We can unpack the properties we need into variables

<pre data-id="useobj"><code data-line-numbers="9-11" data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  price: 0,
  status: 'Owned',
}

const name = app.name
const rating = app.rating
// ...
</code></pre>

</section>

<section data-auto-animate>

### How about unpacking? {data-id="useobjHeading"}

There's also a shorter way! It's called _destructuring_.

<pre data-id="useobj"><code data-line-numbers="9" data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  price: 0,
  status: 'Owned',
}

const { name, rating } = app
</code></pre>

</section>

<section data-auto-animate>

### Reuse an object to create another {data-id="useobjHeading"}

Sometimes you want to create a new object with the properties of an existing object.

<pre data-id="useobj"><code data-line-numbers data-trim class="language-js">
const purchaseInfo = {
  price: 0,
  status: 'Owned',
}
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  // We want price and status here
}
</code></pre>

</section>

<section data-auto-animate>

### Reuse an object to create another {data-id="useobjHeading"}

One way to do it:

<pre data-id="useobj"><code data-line-numbers="9-10" data-trim class="language-js">
const purchaseInfo = {
  price: 0,
  status: 'Owned',
}
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  price: purchaseInfo.price,
  status: purchaseInfo.status,
}
</code></pre>

</section>

<section data-auto-animate>

### Reuse an object to create another {data-id="useobjHeading"}

Another way&mdash;_spread_ the object with `...`

<pre data-id="useobj"><code data-line-numbers="9" data-trim class="language-js">
const purchaseInfo = {
  price: 0,
  status: 'Owned',
}
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  ...purchaseInfo,
}
</code></pre>

</section>

</section>


<section>

<section>

## We've solved the issue of tying different parts to form entities &hellip;

</section>

<section>

## &hellip; but how do we deal with so many similar entities?

</section>

<section>

<pre data-id="entvars"><code data-line-numbers="1-15|17-31" data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  rating: 4,
  reviewsCount: 70,
  price: 0,
  status: 'Owned',
}

const app2 = {
  name: 'World of Tank Blitz',
  rating: 5,
  reviewsCount: 2,
  price: 0,
  status: 'Not Owned',
}

const app3 = {
  name: 'Films & TV',
  rating: 4.8,
  reviewsCount: 237,
  price: 0,
  status: 'Installed',
}

const app4 = {
  name: 'Microsoft Flight Simulator',
  rating: 5,
  reviewsCount: 1,
  price: 24999,
  status: 'Not Owned',
}
</code></pre>

</section>

<section>

## We need a "list" of some sort &hellip;

</section>

</section>


<section>

<section data-auto-animate>

## Arrays

</section>

<section data-auto-animate>

## Arrays

An array is a sequence of elements.

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]
</code></pre>

</section>

<section data-auto-animate>

## Arrays

Arrays are ordered and can be indexed, like strings

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
//              0       1      2
const people = ["Amal", "Isa", "Mubaraq"]

people[0] // "Amal"
people[1] // "Isa"
</code></pre>

</section>

<section data-auto-animate>

## Arrays

The elements can be of different types. We call this a _tuple_.

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const arr = ["string", 12.34, true]
</code></pre>

</section>

<section data-auto-animate>

## How long is this array?

Use the `length` property to get the length of an array.

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

people.length // 3
</code></pre>

</section>

<section data-auto-animate>

## Push and pop

Use the `push` and `pop` methods to add and remove elements at the end of an array.

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

// Remove "Mubaraq"
people.pop()

// Add "Ibrahim"
people.push("Ibrahim")
</code></pre>

</section>

<section data-auto-animate>

## Shift, unshift

Like `push` and `pop`, but at the front of an array.


<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

people.length // 3
</code></pre>

</section>

</section>
