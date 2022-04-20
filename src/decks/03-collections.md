---
title: Collections
---

<section>

<section>

Let's revisit the FutureLearn courses example:

![]({{ '/assets/images/futurelearn-featured.webp' | url }}){aria-labelledby="futureLearnFeaturedLabel"}

</section>


<section>

## How do we represent it in code?

</section>


<section data-auto-animate>

<pre data-id="entvars"><code data-line-numbers data-trim class="language-js">
let courseTitle = 'The Museum as a Site ...'
let courseRating = 4.6
let courseReviewsCount = 75
let courseIsNew = false
let courseIsPartOfAnExpertTrack = false
</code></pre>

</section>


<section data-auto-animate>

<pre data-id="entvars"><code data-line-numbers="1-11|13-23" data-trim class="language-js">
let courseTitle = 'The Museum as a Site ...'
let courseRating = 4.6
let courseReviewsCount = 75
let courseIsNew = false
let courseIsPartOfAnExpertTrack = false

let course2Title = 'Fundamentals of ...'
let course2Rating = 0
let course2ReviewsCount = 0
let course2IsNew = true
let course2IsPartOfAnExpertTrack = false

let course3Title = 'Young People and ...'
let course3Rating = 4.7
let course3ReviewsCount = 649
let course3IsNew = false
let course3IsPartOfAnExpertTrack = false

let course4Title = 'International Logistics: ...'
let course4Rating = 0
let course4ReviewsCount = 0
let course4IsNew = false
let course4IsPartOfAnExpertTrack = true
</code></pre>

</section>


<section>

Things are getting unwieldy already; we have so many related variables that&nbsp;are&nbsp;not&nbsp;tied together ☹. {.h3}

</section>


<section>

We need a better way to represent "entities" that&nbsp;have&nbsp;different "attributes". {.h3}

</section>

</section>



<section>

<section>

## Objects

</section>

<section>

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const course = {
  title: 'The Museum as a Site ...',
  rating: 4.6,
  reviewsCount: 75,
  isNew: false,
  isPartOfAnExpertTrack: false,
}
</code></pre>

</section>


<section>

### Let's break it down

</section>


<section data-auto-animate>

Start with curly brackets:

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const course = {}
</code></pre>

</section>


<section data-auto-animate>

Add a property (a `key: value` pair):

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const course = {
  title: 'The Museum as a Site ...',
}
</code></pre>

</section>


<section data-auto-animate>

Add more properties; separate by commas (last comma is optional):

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const course = {
  title: 'The Museum as a Site ...',
  rating: 4.6,
  reviewsCount: 75,
  isNew: false,
  isPartOfAnExpertTrack: false,
}
</code></pre>

</section>


<section>

### How to name properties

</section>


<section data-auto-animate data-auto-animate-id='nameprops'>

Use strings:

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

The quotes are optional if the name is a valid variable name (i.e.&nbsp;an&nbsp;<i>identifier</i>) or a number:

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

The JavaScript way is also `camelCase`:

<pre data-id="objprop"><code data-line-numbers data-trim class="language-js">
const obj = {
  prop: "...",
  anotherProp: "...",
}
</code></pre>

</section>


<section data-auto-animate data-auto-animate-id='nameprops'>

Property names must be unique:

<pre data-id="objprop"><code data-line-numbers="1-4|6-9" data-trim class="language-js">
const obj = {
  prop: 1,
  prop: 2, // this overrides the previous one
}

// same as
const obj = {
  prop: 2
}
</code></pre>

</section>

</section>



<section>

<section>

## Using objects

</section>


<section data-auto-animate>

### Access a property {data-id="useobjHeading"}

Get the value of a property using the dot notation:

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: true,
}

console.log(course.title) // The Fundamentals of...
</code></pre>

</section>


<section data-auto-animate>

Set the value of a property too with the dot notation:

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: true,
}

course.isNew = false

console.log(course.isNew) // false
</code></pre>

</section>


<section data-auto-animate>

Be careful with property names that aren't identifiers:

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: false,
}

app.'reviews count'++ // Error
</code></pre>

</section>


<section data-auto-animate>

Use the bracket notation instead for such properties:

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: false,
}

app['reviews count']++

console.log(app['reviews count']) // 1
</code></pre>

</section>


<section data-auto-animate>

You can add a property:

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: false,
}

app.rating = 0

console.log(app.rating) // 0
</code></pre>

</section>

<section data-auto-animate>

And delete a property too:

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: false,
}

delete app['reviews count']

console.log(app['reviews count']) // undefined
</code></pre>

</section>


<section>

### Objects are <i>mutable</i>

</section>


<section>

In contrast, numbers, strings, and booleans, are <i>immutable</i>:

```js
const str = "Strings are immutable"

// Try to change 'Strings' to 'Springs'
str[1] = 'p' // No error, but it doesn't work

console.log(str) // Strings are immutable
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

There's also a shorter way! It's called <i>destructuring</i>.

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

Another way: <i>spread</i> the object with `...`

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

### &hellip; but how do we deal with so many similar entities?

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

### We need a "list" of some sort &hellip;

</section>

</section>



<section>

<section data-auto-animate>

## Arrays

</section>


<section data-auto-animate>

## Arrays

An <dfn>array</dfn> is a sequence of elements.

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]
</code></pre>

</section>


<section data-auto-animate>

## Arrays

Arrays are ordered and can be indexed, like strings

<pre data-id="arrIntro"><code data-line-numbers="1-4|1,2,6,7" data-trim class="language-js">
//              0       1      2
const people = ["Amal", "Isa", "Mubaraq"]

people[0] // "Amal"

// Replace "Isa" with "Elleman"
people[1] = "Elleman"
</code></pre>

</section>


<section data-auto-animate>

## Arrays

The elements can be of different types.

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const arr = ["string", 12.34, true]
</code></pre>

</section>


<section data-auto-animate>

### How long is this array? {data-id="usearrHeading"}

Use the `length` property to get the length of an array.

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

people.length // 3
</code></pre>

</section>


<section data-auto-animate>

### Pop and push {data-id="usearrHeading"}

Use the `pop` method to remove from the end, and&nbsp;`push`&nbsp;to&nbsp;add&nbsp;to&nbsp;the&nbsp;end.

<pre data-id="arrIntro"><code data-line-numbers="3-5|7-8" data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

const removed = people.pop()
console.log(removed) // "Mubaraq"
console.log(people) // ["Amal", "Isa"]

people.push("Ibrahim")
console.log(people) // ["Amal", "Isa", "Ibrahim"]
</code></pre>

</section>


<section data-auto-animate>

### Shift, unshift {data-id="usearrHeading"}

Like `pop` and `push`, but at the front of an array.

<pre data-id="arrIntro"><code data-line-numbers="3-5|7-8" data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

const removed = people.shift()
console.log(removed) // "Amal"
console.log(people) // ["Isa", "Mubaraq"]

people.unshift("Aisha")
console.log(people) // ["Aisha", "Isa", "Mubaraq"]
</code></pre>

</section>


<section data-auto-animate>

### Does an array have an element? {data-id="usearrHeading"}

Use the `includes` method to check if an array contains a certain element.

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

people.includes("Isa") // true
people.includes("Ibrahim") // false
</code></pre>

</section>


<section data-auto-animate>

### Get a portion of an array {data-id="usearrHeading"}

Use the `slice` method.

<pre data-id="arrIntro"><code data-line-numbers="1-4|1-2,5|1-2,7-8" data-trim class="language-js">
//              0       1      2
const people = ["Amal", "Isa", "Mubaraq"]

people.slice(0, 2) // ["Amal", "Isa"]
people.slice(1) // ["Isa", "Mubaraq"]

// Create a copy of the array
people.slice() // ["Amal", "Isa", "Mubaraq"]
</code></pre>

</section>


<section data-auto-animate>

### Spread an array into another {data-id="usearrHeading"}

<pre data-id="arrIntro"><code data-line-numbers="" data-trim class="language-js">
const names = ["Aisha", "Ibrahim"]
const people = ["Amal", "Isa", "Mubaraq", ...names]

console.log(people)
// ["Amal", "Isa", "Mubaraq", "Aisha", "Ibrahim"]
</code></pre>

</section>


<section data-auto-animate>

### Unpack an array {data-id="usearrHeading"}

Unpack array elements into variables.

<pre data-id="arrIntro"><code data-line-numbers="" data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

const first = people[0] // "Amal"
const second = people[1] // "Isa"
</code></pre>

</section>


<section data-auto-animate>

### Unpack an array {data-id="usearrHeading"}

Another way is to <i>destructure</i>

<pre data-id="arrIntro"><code data-line-numbers="1-4|6-8" data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

const [first, second] = people
// first is "Amal", second is "Isa"

// You can skip items too
const [, , third] = people
// third is "Mubaraq"
</code></pre>

</section>

</section>



<section>

<section>

## Arrays are also mutable &hellip;

</section>


<section data-auto-animate>

### &hellip; because they are objects

</section>


<section data-auto-animate>

### &hellip; because they are objects

<pre data-id="arrAsObj"><code data-line-numbers="" data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

typeof people
// "object" 😕
</code></pre>

</section>


<section data-auto-animate data-auto-animate-id="isarr">

### How do we check if something is an array?

</section>


<section data-auto-animate data-auto-animate-id="isarr">

### How do we check if something is an array?

Use the `Array.isArray` method.

<pre data-id="arrAsObj"><code data-line-numbers="" data-trim class="language-js">
const people = ["Amal", "Isa", "Mubaraq"]

Array.isArray(people)
// true
</code></pre>

</section>

</section>



<section>

## Finally &hellip;

```js {data-line-numbers="1-8|9-15|23-30"}
const apps = [
  {
    name: 'WhatsApp Desktop',
    rating: 4,
    reviewsCount: 70,
    price: 0,
    status: 'Owned',
  },
  {
    name: 'World of Tank Blitz',
    rating: 5,
    reviewsCount: 2,
    price: 0,
    status: 'Not Owned',
  },
  {
    name: 'Films & TV',
    rating: 4.8,
    reviewsCount: 237,
    price: 0,
    status: 'Installed',
  },
  {
    name: 'Microsoft Flight Simulator',
    rating: 5,
    reviewsCount: 1,
    price: 24999,
    status: 'Not Owned',
  }
]
```

</section>
