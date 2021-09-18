---
layout: layouts/home
---

# Hello, world

Lorem ipsum...

## Outline

{% for lesson in lessons %}
  {% set paddedIndex = loop.index | string | padstart(2, '0') -%}
  1. [{{ lesson.title }}](/lessons/{{ paddedIndex }}-{{ lesson.title | slug }}/)
{%- endfor %}
