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

{% from "macros.njk" import icon %}

# {{ lesson.title }}

[Slides {{ icon('play-circle-fill', class="ml-2") }}](slides/){.inline-flex .items-center}

Video and other resources
