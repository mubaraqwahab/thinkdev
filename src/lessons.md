---
layout: layouts/lesson
pagination:
  data: lessons
  size: 1
  alias: lesson
permalink: "lessons/{{
    (pagination.pageNumber + 1) | string | padstart(2, '0')
  }}-{{ lesson.title | slug }}/"
---

# {{ lesson.title }}

[Slides](slides/)

Video and other resources
