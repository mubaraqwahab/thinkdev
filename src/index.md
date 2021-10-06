---
layout: layouts/home
---

{% from "macros.njk" import icon, emoji %}

# {{ site.title }}

Lorem ipsum... {.lead}

## {{ emoji('📃') }} Outline

{% for lesson in collections.lesson | arraysort("data.order") %}
  1. [{{ lesson.data.title }}]({{ lesson.url | url }})
{%- endfor %}
