---
layout: layouts/home
---

{% from "macros.njk" import icon %}

# {{ site.title }}

{{ site.description }} {.lead}

<!-- We'll learn how to do this and do that, and even more stuff. By the end of the course, you should be:

* able to do A
* also able to do B and C -->

We'll learn how to break up problems and express solutions in a programming language (JavaScript); use the command line; document, test, and debug simple programs; implement and use some well-known data structures and algorithms; and more.

## 📃 Outline

{% for lesson in collections.all | eleventyNavigation %}
  1. [{{ lesson.title }}]({{ lesson.url | url }})
{%- endfor %}

## Format

We'll meet on Saturdays for a discussion and review of the previous week's lesson. On Sundays, we'll meet for a new lesson. Meetings will hold on Zoom from 12:00 p.m. to 12:40 p.m.

Each lesson page (see the [outline](#outline) above) contains the slides, recorded meetings, exercises, etc., for the lesson. The slides for each lesson are in two formats: an interactive presentation you can view on this site, and a PDF version you can download.

<div class="note">

**Tip:** Press the question mark key (<kbd>?</kbd>) when viewing the interactive slides to see a list of keyboard shortcuts.

</div>

---

## Credits

* This course is loosely based on the book ["Think Python" by Allen Downey](https://greenteapress.com/wp/think-python-2e/). The book is also known by the title, _How to Think Like a Computer Scientist_. Yes, it inspired this course's title.
* My primary reference is the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript). It's a great place to learn JavaScript and other things web-related.
* I made the slides with [reveal.js](https://revealjs.com/) and I'm very pleased with it 😊.