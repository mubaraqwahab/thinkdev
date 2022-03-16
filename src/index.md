---
layout: layouts/home
---

{% from "macros.njk" import icon %}

# {{ site.title }}

<b class="lead">{{ site.description }}</b>

## What we'll do

* Learn how to break down problems
* Express solutions in a programming language (JavaScript)
* Get familiar with the command line
* Practise documenting, testing, and debugging
* Use some common data structures and algorithms
{class="list-['✔']"}

## Lessons

{% for lesson in collections.all | eleventyNavigation %}
  1. [{{ lesson.title }}]({{ lesson.url | url }})
{%- endfor %}

## Format

<!-- We'll meet on Saturdays for a discussion and review of the previous week's lesson. On Sundays, we'll meet for a new lesson. Meetings will hold on Zoom from 12:00 p.m. to 12:40 p.m. -->

Each lesson page (see [the outline above]({{ "📃 Outline" | hashlink | url }})) contains the slides, recorded meetings, exercises, etc., for that lesson. The slides are in two formats: an interactive presentation that you can view on this site and a PDF version that you can download.

<div class="note note-info">

**Tip:** Press the question mark key (<kbd>?</kbd>) when viewing the interactive slides to see a list of keyboard shortcuts.

</div>

## Credits

{% set bindingsLesson = collections.all | eleventyNavigation | find('title', 'Bindings again') %}

* [<cite>Think Python</cite> by Allen Downey](https://greenteapress.com/wp/think-python-2e/). The book is also known by the title <i>How to Think Like a Computer Scientist</i>. Yes, it inspired this course's title 🙂.
* The [<cite>MDN Web Docs</cite>](https://developer.mozilla.org/en-US/docs/Web/JavaScript). My primary reference for this course. It's a great place to learn JavaScript and other things web-related.
* [<cite class="quoted">Eloquent JavaScript</cite>](https://eloquentjavascript.net/). An introductory yet thorough book on programming in modern JavaScript.
* [<cite>The ECMAScript Language Specification</cite>](https://tc39.es/ecma262/) (ECMA 262). The document that formally defines what the JavaScript language is.
* The prerelease draft of the [<cite>Just JavaScript</cite> course](). The course focuses on building a good mental model of JavaScript. It inspired the fifth episode of this thinkdev course, [{{ bindingsLesson.title or "Bindings again" }}]({{ bindingsLesson.url | url }}).

And just for fun 😃 ...

I built this site with [<cite>Eleventy</cite>](https://www.11ty.dev/), [<cite>Tailwind CSS</cite>](https://tailwindcss.com/), and [<cite>reveal.js</cite>](https://revealjs.com/) (for the slides), and hosted it on [<cite>Netlify</cite>](http://netlify.com/).
