---
layout: layouts/slides
title: Introduction
---

<section> <!-- 1 -->

<section> <!-- 1.0 -->

## What is this course?

Consider it an introductory course to _programming concepts_. {.fragment .fade-up}

</section> <!-- 1.0 -->

<section> <!-- 1.1 -->

### What to expect

At the end of the course you should:

* be comfortable using a programming language {.fragment .fade-up}
* be familiar with the command line {.fragment .fade-up}
* know how to document, test, and debug simple programs {.fragment .fade-up}
* know some basic data structures and algorithms {.fragment .fade-up}
* and more! {.fragment .fade-up}

</section> <!-- 1.1 -->

<section> <!-- 1.2 -->

### What not to expect

* You won't be an "expert" programmer (I'm not myself!) {.fragment .fade-in}
* We're not going to build an app or website {.fragment .fade-in}

</section> <!-- 1.2 -->

</section> <!-- 1 -->

<section> <!-- 2 -->

## Motivation

<!--
* I want you to be confident writing programs
* breaking down complex concepts
* improve dev skills
 -->
<!-- TODO: Remove this; it's just to test -->
```js {data-line-numbers}
module.exports = function (eleventyConfig) {
  // Allow markdown attributes
  const markdownLib = markdownIt({ html: true })
    .use(markdownItBracketedSpans)
    .use(markdownItAttrs)
  eleventyConfig.setLibrary("md", markdownLib)

  eleventyConfig.addNunjucksFilter("inspect", (obj) =>
    util.inspect(obj, { depth: 3 })
  )
}
```

</section> <!-- 2 -->

<section> <!-- 3 -->

<section data-background-image="{{ '/assets/images/js.svg' | url }}" data-background-size="200px" data-background-repeat="space" data-background-opacity="0.15"> <!-- 3.0 -->

## We'll use JavaScript

</section> <!-- 3.0 -->

<section data-transition="zoom"> <!-- 3.1 -->

### Why?

* It's a ubiquitous language: it's the "language" used in browsers, it's also used to build desktop and mobile apps, backends, command line programs, and developer tools!  {.fragment .fade-up}
* It's among the most popular languages (Source?) {.fragment .fade-up}
* It's the language I'm most accustomed to 🙃 {.fragment .fade-up}

</section> <!-- 3.1 -->

</section> <!-- 3 -->

<section> <!-- 4 -->

## Software we'll use

* [Node.js v14+](https://nodejs.org/en/){rel="noopener"} {.fragment .fade-up}
* [Visual Studio Code](https://code.visualstudio.com/){rel="noopener"} {.fragment .fade-up}
* A terminal {.fragment .fade-up}

</section> <!-- 4 -->

<section> <!-- 5 -->

## Resources

* The course website [thinkdev.netlify.app](https://thinkdev.netlify.app)

</section> <!-- 5 -->