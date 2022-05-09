---
layout: layouts/auxiliary
title: Blog
---

Yayy, you found the blog!

{% for post in collections.post %}
1. [{{ post.data.title }}]({{ post.url }})
{% endfor %}