---
layout: layouts/home
---

{% from "macros.njk" import icon %}

# {{ site.title }}

Lorem ipsum... {.lead}

## 📃 Outline

{% for lesson in collections.lesson | arraysort("data.order") %}
  1. [{{ lesson.data.title }}]({{ lesson.url | url }}) 👋🏾
{%- endfor %}
1. Values 🔢
1. Making decisions ❔
1. Using functions ➗
1. Testing 🧪
1. Developer tools and resources 🛠
1. Source control ⚙
1. Repetition 🔁
1. Modules 📦
1. Data structures 🏛
1. Exceptions ❌
1. JavaScript quirks 🤓