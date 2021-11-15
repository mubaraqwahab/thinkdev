---
layout: layouts/home
---

{% from "macros.njk" import icon %}

# {{ site.title }}

{{ site.description }} {.lead}

<!-- We'll learn how to do this and do that, and even more stuff. By the end of the course, you should be:

* able to do A
* also able to do B and C -->

## 📃 Outline

{% for lesson in collections.all | eleventyNavigation %}
  1. [{{ lesson.title }}]({{ lesson.url | url }})
{%- endfor %}

## Credits

* This course is loosely based on the book ["Think Python" by Allen Downey](https://greenteapress.com/wp/think-python-2e/). The book is also known by the title, _How to Think Like a Computer Scientist_. Yes, it inspired this course's title.
* My primary reference is the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript). It's a great place to learn JavaScript and other things web-related.
* I made the slides with [reveal.js](https://revealjs.com/) and I'm very pleased with it 😊.