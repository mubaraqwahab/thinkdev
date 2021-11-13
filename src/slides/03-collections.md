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

</section>


<section data-auto-animate data-auto-animate-id='nameprops'>

## How to name a property?

</section>


<section data-auto-animate data-auto-animate-id='nameprops'>

## How to name a property?

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

## How to name a property?

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

## How to name a property?

Again, the JavaScript way is `camelCase`

<pre data-id="objprop"><code data-line-numbers data-trim class="language-js">
const obj = {
  prop: "...",
  anotherProp: "...",
}
</code></pre>

</section>


<section>

<section>

## Using objects

</section>

<section data-auto-animate>

### Get/set a property

**Dot notation**

<pre data-id="useobj"><code data-line-numbers="1-5|7|8|10" data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  status: 'Owned',
  123: null,
}

console.log(app.name) // 'WhatsApp Desktop'
app.status = 'Installed'

app.123 // Error
</code></pre>

</section>

<section data-auto-animate>

### Get/set a property

**Bracket notation**. Use this for property names that aren't valid identifiers

<pre data-id="useobj"><code data-line-numbers="10|7-8" data-trim class="language-js">
const app = {
  name: 'WhatsApp Desktop',
  status: 'Owned',
  123: null,
}

console.log(app['name']) // 'WhatsApp Desktop'
app['status'] = 'Installed'

app[123] // Works, result is null
</code></pre>

</section>

</section>