---
layout: layouts/auxiliary
title: Blog
---

Yayy, you found the blog!

{% set postDataList = collections.post | mapprop('data') %}
{% if site.context == 'production' %}
  {% set postDataList = postDataList | rejectattr('draft', true) %}
{% endif %}

{% for postData in postDataList | reverse -%}
1. [{{ postData.title }}]({{ postData.page.url }})
{% endfor %}
