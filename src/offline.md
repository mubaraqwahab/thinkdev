---
layout: layouts/page
title: You're offline
permalink: offline.html
---

{% from "macros.njk" import script %}

Don't worry, we'll reload this page for you once the network is back.

{{ script('offline.js') }}
