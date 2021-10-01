---
layout: layouts/lesson
pagination:
  data: lessons
  size: 1
  alias: lesson
permalink: "lessons/{{ lesson | lessonslug(lessons) }}/"
eleventyComputed:
  title: "{{ lesson.title }}"
---

{% from "macros.njk" import icon, emoji %}

# {{ lesson.title }}

[Slides {{ emoji("▶") }}](slides/)

Video and other resources
