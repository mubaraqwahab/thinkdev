---
layout: layouts/home
---

{% from "macros.njk" import icon, emoji %}

# Think like a developer

Lorem ipsum... {.lead}

## {{ emoji('📃') }} Outline

{% for lesson in collections.lesson | reverse %}
  1. [{{ lesson.data.title }}]({{ lesson.url | url }})
{%- endfor %}
