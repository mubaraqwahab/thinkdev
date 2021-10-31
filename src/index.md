---
layout: layouts/home
---

{% from "macros.njk" import icon %}

# {{ site.title }}

<!-- Lorem ipsum... {.lead} -->

## 📃 Outline

{% for lesson in collections.all | eleventyNavigation %}
  1. [{{ lesson.title }}]({{ lesson.url | url }}) {{ lesson.emoji }}
{%- endfor %}
