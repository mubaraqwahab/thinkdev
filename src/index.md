---
layout: layouts/home
---

# Hello, world

<p class="lead">Lorem ipsum...</p>

## Outline

{% for lesson in lessons %}
  {% set paddedIndex = loop.index | string | padstart(2, '0') -%}
  1. [{{ lesson.title }}](/lessons/{{ lesson | lessonslug(lessons) }}/)
{%- endfor %}
