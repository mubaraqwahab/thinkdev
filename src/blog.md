---
layout: layouts/auxiliary
title: Blog
---

Yayy, you found the blog!

{% set posts = collections.post %}
{% if site.context == 'production' %}
  {% set posts = posts | rejectattr('draft', true) %}
{% endif %}

{% for post in posts | reverse -%}
1. [{{ post.data.title }}]({{ post.url }})
{% endfor %}
