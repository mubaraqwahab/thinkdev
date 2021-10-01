---
layout: layouts/home
---

{% from "macros.njk" import icon, emoji %}

# Think like a developer

Lorem ipsum... {.lead}

## {{ emoji('📃') }} Outline

{% for lesson in lessons %}
  {% set paddedIndex = loop.index | string | padstart(2, '0') -%}
  1. [{{ lesson.title }}](/lessons/{{ lesson | lessonslug(lessons) }}/)
{%- endfor %}
