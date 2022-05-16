---
layout: layouts/page
title: Credits
---

References for the course content:

{% set bindingsLesson = collections.all | eleventyNavigation | find('title', 'Bindings again') %}

* The [<cite>MDN Web Docs</cite>](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
  My primary reference for this course. It's a great place to learn JavaScript and other things web-related.
* [<cite>Eloquent JavaScript</cite>](https://eloquentjavascript.net).
  An introductory yet thorough book on programming in modern JavaScript.
* [<cite>The ECMAScript Language Specification</cite>](https://tc39.es/ecma262/)</a> (ECMA 262).
  The document that formally defines what the JavaScript language is.
* The prerelease draft of the
  [<cite>Just JavaScript</cite> course](https://justjavascript.com/).
  The course focuses on building a good mental model of JavaScript.
  It inspired the fifth episode of this thinkdev course,
  [{{ bindingsLesson.title }}]({{ bindingsLesson.url | url }}).
* [<cite>Think Python</cite> by Allen Downey](https://greenteapress.com/wp/think-python-2e/).
  The book is also known by the title <i>How to Think Like a Computer Scientist</i>.
  Yes, it inspired this course's title 🙂.
