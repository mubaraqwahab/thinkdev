---
layout: layouts/home
---

{% from "macros.njk" import icon %}

# {{ site.title }}

{{ site.description }} {.lead}

## 📃 Outline

{% for lesson in collections.all | eleventyNavigation %}
  1. [{{ lesson.title }}]({{ lesson.url | url }}) {{ lesson.emoji }}
{%- endfor %}

## Credits

* This course is loosely based on the book ["Think Python" by Allen Downey](https://greenteapress.com/wp/think-python-2e/). The book is also known by the title _How to Think Like a Computer Scientist_. Yes, it inspired this course's title.
* The slides were made with [reveal.js](https://revealjs.com/).