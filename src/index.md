---
layout: layouts/home
---

{% from "macros.njk" import icon %}

# {{ site.title }}

<b class="lead">{{ site.description }}</b>

We'll learn how to break down problems and express solutions in a programming language (JavaScript). Beyond that, we'll learn to use the command line, practice documenting, testing, and debugging simple programs, and we'll implement and use some common data structures and algorithms.

## 📃 Outline

{% for lesson in collections.all | eleventyNavigation %}
  1. [{{ lesson.title }}]({{ lesson.url | url }})
{%- endfor %}

## Format

We'll meet on Saturdays for a discussion and review of the previous week's lesson. On Sundays, we'll meet for a new lesson. Meetings will hold on Zoom from 12:00 p.m. to 12:40 p.m.

Each lesson page (see the [outline](#outline) above) contains the slides, recorded meetings, exercises, etc., for that lesson. The slides are in two formats: an interactive presentation that you can view on this site and a PDF version that you can download.

<div class="note">

**Tip:** Press the question mark key (<kbd>?</kbd>) when viewing the interactive slides to see a list of keyboard shortcuts.

</div>

---

## Credits

* This course is loosely based on the book [<cite class="quoted">Think Python</cite> by Allen Downey](https://greenteapress.com/wp/think-python-2e/). The book is also known by the title, <i>How to Think Like a Computer Scientist</i>. Yes, it inspired this course's title.
* My primary reference is the [<cite>MDN Web Docs</cite>](https://developer.mozilla.org/en-US/docs/Web/JavaScript). It's a great place to learn JavaScript and other things web-related.
* I made the slides with [<cite>reveal.js</cite>](https://revealjs.com/) and I'm very pleased with it 😊.