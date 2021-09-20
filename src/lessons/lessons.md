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

# {{ lesson.title }}

[Slides](slides/)

Video and other resources
