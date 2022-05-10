---
layout: layouts/auxiliary
title: Blog
---

<b class="lead">Yayy, you found the blog! Here, I'll share some personal thoughts and anecdotes relating to this course.</b>

## Articles

{% set postDataList = collections.post | mapprop('data') %}
{% if site.context == 'production' %}
  {% set postDataList = postDataList | rejectattr('draft', true) %}
{% endif %}

<ol class="pl-0 list-none">
  {% for postData in postDataList | reverse -%}
    <li class="pl-0">
      <b><a href="{{ postData.page.url | url }}">{{ postData.title }}</a></b> &mdash;
      <time datetime="{{ postData.date | isodatestring }}">{{ postData.date | shortdate }}</time>
    </li>
  {% endfor -%}
</ol>
