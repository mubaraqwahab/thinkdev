---
layout: layouts/home
---

{% from "macros.njk" import icon %}

# Think like a developer

Lorem ipsum... {.lead}

<h2 class="flex items-center">
  {{ icon('list-ul', class='mr-3 mt-1', width='18', height='18') }} Outline
</h2>

{% for lesson in lessons %}
  {% set paddedIndex = loop.index | string | padstart(2, '0') -%}
  1. [{{ lesson.title }}](/lessons/{{ lesson | lessonslug(lessons) }}/)
{%- endfor %}
