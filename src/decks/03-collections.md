---
title: Collections
---

<section>

<section>

Let's revisit the FutureLearn courses example:

![A screenshot of the featured courses on FutureLearn]({{ '/assets/images/futurelearn-featured.webp' | url }})

</section>


<section>

## How do we represent it in code?

</section>


<section data-auto-animate>

<pre data-id="entvars"><code data-line-numbers data-trim class="language-js">
let courseTitle = 'The Museum as a Site and ...'
let courseRating = 4.6
let courseReviewsCount = 75
let courseIsNew = false
let courseIsPartOfAnExpertTrack = false
</code></pre>

</section>


<section data-auto-animate>

<pre data-id="entvars"><code data-line-numbers="7-11|13-23" data-trim class="language-js">
let courseTitle = 'The Museum as a Site and ...'
let courseRating = 4.6
let courseReviewsCount = 75
let courseIsNew = false
let courseIsPartOfAnExpertTrack = false

let course2Title = 'Fundamentals of Business ...'
let course2Rating = 0
let course2ReviewsCount = 0
let course2IsNew = true
let course2IsPartOfAnExpertTrack = false

let course3Title = 'Young People and Mental Health'
let course3Rating = 4.7
let course3ReviewsCount = 649
let course3IsNew = false
let course3IsPartOfAnExpertTrack = false

let course4Title = 'International Logistics: A ...'
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

We need a better way to represent an "entity" that&nbsp;has&nbsp;different "attributes". {.h3}

</section>

</section>



<section>

<section>

## Objects

</section>

<section>

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const course = {
  title: 'The Museum as a Site and ...',
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
  title: 'The Museum as a Site and ...'
}
</code></pre>

</section>


<section data-auto-animate>

Add more properties; separate by commas (last comma is optional):

<pre data-id="obj"><code data-line-numbers data-trim class="language-js">
const course = {
  title: 'The Museum as a Site and ...',
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
  "&@+/": "...",
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
  "&@+/": "...",
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

// equivalent to
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

console.log(course.title) // The Fundamentals of ...
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
  isNew: true,
}

course.'reviews count'++ // Error
</code></pre>

</section>


<section data-auto-animate>

Use the bracket notation instead for such properties:

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: true,
}

course['reviews count']++

console.log(course['reviews count']) // 1
</code></pre>

</section>


<section data-auto-animate>

You can add a property:

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: true,
}

course.rating = 0

console.log(course.rating) // 0
</code></pre>

</section>

<section data-auto-animate>

And delete a property too:

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: true,
}

delete course['reviews count']

console.log(course['reviews count']) // undefined
</code></pre>

</section>


<section>

### Objects are <i>mutable</i>

</section>


<section>

In contrast, numbers, strings, and booleans are <i>immutable</i>:

```js
const str = "Strings are immutable"

// Try to change 'Strings' to 'Springs'
str[1] = 'p' // No error, but it doesn't work

console.log(str) // Strings are immutable
```

</section>


<section data-auto-animate>

### Does an object have a property? {data-id="useobjHeading"}

Use the `in` operator to check if an object has a property:

<pre data-id="useobj"><code data-line-numbers data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  'reviews count': 0,
  isNew: true,
}

console.log("title" in course)  // true
console.log("rating" in course) // false
</code></pre>

</section>


<section data-auto-animate>

### Pack variables into an object {data-id="useobjHeading"}

It's common to have variables that you want to pack into an object:

<pre data-id="useobj"><code data-line-numbers data-trim class="language-js">
const title = 'The Fundamentals of Business Strategy'
const reviewsCount = 0
const isNew = true
</code></pre>

</section>


<section data-auto-animate>

You can set the object properties manually:

<pre data-id="useobj"><code data-line-numbers="5-9" data-trim class="language-js">
const title = 'The Fundamentals of Business Strategy'
const reviewsCount = 0
const isNew = true

const course = {
  title: title,
  reviewsCount: reviewsCount,
  isNew: isNew,
}
</code></pre>

</section>


<section data-auto-animate>

Or use the shorthand form:

<pre data-id="useobj"><code data-line-numbers="5-9" data-trim class="language-js">
const title = 'The Fundamentals of Business Strategy'
const reviewsCount = 0
const isNew = true

const course = {
  title,
  reviewsCount,
  isNew,
}
</code></pre>

</section>


<section data-auto-animate>

### How about unpacking? {data-id="useobjHeading"}

It may be tedious to type the `course.` prefix sometimes

<pre data-id="useobj"><code data-line-numbers="" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  reviewsCount: 0,
  isNew: true,
}
</code></pre>

</section>


<section data-auto-animate>

You can unpack the properties you need into variables:

<pre data-id="useobj"><code data-line-numbers="7-8" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  reviewsCount: 0,
  isNew: true,
}

const title = course.title
const reviewsCount = course.reviewsCount
</code></pre>

</section>


<section data-auto-animate>

There's also a shorter way; it's called <i>destructuring</i>:

<pre data-id="useobj"><code data-line-numbers="9" data-trim class="language-js">
const course = {
  title: 'The Fundamentals of Business Strategy',
  reviewsCount: 0,
  isNew: true,
}

const { title, reviewsCount } = course
</code></pre>

</section>


<section data-auto-animate>

### Copy an object into a new one {data-id="useobjHeading"}

You may want to copy the properties of one object into a new one:

<pre data-id="useobj"><code data-line-numbers data-trim class="language-js">
const ratingInfo = {
  rating: 0,
  reviewsCount: 0,
}

const course = {
  title: 'The Fundamentals of Business Strategy',
  isNew: true,
  // You want rating and reviewsCount here.
}
</code></pre>

</section>


<section data-auto-animate>

Here's one way to do it:

<pre data-id="useobj"><code data-line-numbers="9-10" data-trim class="language-js">
const ratingInfo = {
  rating: 0,
  reviewsCount: 0,
}

const course = {
  title: 'The Fundamentals of Business Strategy',
  isNew: true,
  rating: ratingInfo.rating,
  reviewsCount: ratingInfo.reviewsCount,
}
</code></pre>

</section>


<section data-auto-animate>

Another way is to <i>spread</i> the object:

<pre data-id="useobj"><code data-line-numbers="9" data-trim class="language-js">
const ratingInfo = {
  rating: 0,
  reviewsCount: 0,
}

const course = {
  title: 'The Fundamentals of Business Strategy',
  isNew: true,
  ...ratingInfo,
}
</code></pre>

</section>

</section>



<section>

<section>

## Let's update the original example to&nbsp;use objects

</section>


<section>

<pre data-id="entvars"><code data-line-numbers="1-7|9-15|17-23|25-31" data-trim class="language-js">
const course = {
  title: 'The Museum as a Site and ...',
  rating: 4.6,
  reviewsCount: 75,
  isNew: false,
  isPartOfAnExpertTrack: false,
}

const course2 = {
  title: 'Fundamentals of Business ...',
  rating: 0,
  reviewsCount: 0,
  isNew: true,
  isPartOfAnExpertTrack: false,
}

const course3 = {
  title: 'Young People and Mental Health',
  rating: 4.7,
  reviewsCount: 649,
  isNew: false,
  isPartOfAnExpertTrack: false,
}

const course4 = {
  title: 'International Logistics: A ...',
  rating: 0,
  reviewsCount: 0,
  isNew: false,
  isPartOfAnExpertTrack: true,
}
</code></pre>

</section>


<section>

What if we could collect the courses in a "list" of some sort? {.h3}

</section>

</section>



<section>

<section>

## Arrays

</section>


<section data-auto-animate data-auto-animate-id="arrintro">

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Khadija"]
</code></pre>

</section>


<section data-auto-animate data-auto-animate-id="arrintro">

The elements can be of different types:

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const arr = ["hi", 12.34, true]
</code></pre>

</section>


<section data-auto-animate>

### Access an array element {data-id="usearrHeading"}

Arrays are ordered and can be indexed, like strings:

<pre data-id="arrIntro"><code data-line-numbers="1,2,4|1,2,6,7" data-trim class="language-js">
//              0       1      2
const people = ["Amal", "Isa", "Khadija"]

console.log(people[0]) // "Amal"

// Replace "Isa" with "Elleman"
people[1] = "Elleman"
</code></pre>

</section>


<section data-auto-animate>

### How long is this array? {data-id="usearrHeading"}

Use the `length` property to get the length of an array.

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Khadija"]

console.log(people.length) // 3
</code></pre>

</section>


<section data-auto-animate>

### Push to an array {data-id="usearrHeading"}

Use the `push` method to add an item to the end of an array:

<pre data-id="arrIntro"><code data-line-numbers="" data-trim class="language-js">
const people = ["Amal", "Isa", "Khadija"]

people.push("Habeeb")

console.log(people)
// ["Amal", "Isa", "Khadija", "Habeeb"]
</code></pre>

</section>


<section data-auto-animate>

### Pop from an array {data-id="usearrHeading"}

Use the `pop` method to remove the last element of an array:

<pre data-id="arrIntro"><code data-line-numbers="" data-trim class="language-js">
const people = ["Amal", "Isa", "Khadija"]

people.pop()

console.log(people)
// ["Amal", "Isa"]
</code></pre>

</section>


<section data-auto-animate>

### Does an array have an element? {data-id="usearrHeading"}

The `includes` method tells if an array contains a certain element:

<pre data-id="arrIntro"><code data-line-numbers data-trim class="language-js">
const people = ["Amal", "Isa", "Khadija"]

people.includes("Isa")      // true
people.includes("Mubaraq")  // false
</code></pre>

</section>


<section data-auto-animate>

### Get a portion of an array {data-id="usearrHeading"}

Use the `slice` method:

<pre data-id="arrIntro"><code data-line-numbers="1-4|1-2,5" data-trim class="language-js">
//              0       1      2
const people = ["Amal", "Isa", "Khadija"]

people.slice(0, 2)  // ["Amal", "Isa"]
people.slice(1)     // ["Isa", "Khadija"]
</code></pre>

</section>


<section data-auto-animate>

### Spread an array into another {data-id="usearrHeading"}

<pre data-id="arrIntro"><code data-line-numbers="" data-trim class="language-js">
const names = ["Habeeb", "Mubaraq"]
const people = ["Amal", "Isa", "Khadija", ...names]

console.log(people)
// ["Amal", "Isa", "Khadija", "Habeeb", "Mubaraq"]
</code></pre>

</section>

</section>



<section>

<section>

## Arrays are also mutable &hellip;

</section>


<section>

&hellip; because they are objects. {.h3}

</section>


<section data-auto-animate>

<pre data-id="arrAsObj"><code data-line-numbers="" data-trim class="language-js">
const people = ["Amal", "Isa", "Khadija"]

console.log(typeof people)
// object 😲
</code></pre>

</section>

</section>



<section>

<section>

## Finally &hellip;

</section>


<section>

```js {data-line-numbers="1-8|9-15|16-22|23-30"}
const courses = [
  {
    title: 'The Museum as a Site and ...',
    rating: 4.6,
    reviewsCount: 75,
    isNew: false,
    isPartOfAnExpertTrack: false,
  },
  {
    title: 'Fundamentals of Business ...',
    rating: 0,
    reviewsCount: 0,
    isNew: true,
    isPartOfAnExpertTrack: false,
  },
  {
    title: 'Young People and Mental Health',
    rating: 4.7,
    reviewsCount: 649,
    isNew: false,
    isPartOfAnExpertTrack: false,
  },
  {
    title: 'International Logistics: A ...',
    rating: 0,
    reviewsCount: 0,
    isNew: false,
    isPartOfAnExpertTrack: true,
  },
]
```

</section>

</section>
