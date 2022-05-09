---
title: Blog
eleventyExcludeFromCollections: true
---

Yayy, you found the blog!

```json
{{ collections | inspect }}
```

{% for post in collections.post %}
* [{{ post.data.title }}]({{ post.url | url }})
{% endfor %}
