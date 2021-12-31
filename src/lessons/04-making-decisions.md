---
title: Making decisions
excerpt: >
  You'll notice that software behaves differently depending on the situation. A premium user of an app, for example, may have access to features that a regular user does not. In this episode, we'll discover how to decide the behaviour of our code in specific conditions.
---

{% from "macros.njk" import iconed, youtubePlayer %}

## {{ iconed("Video") }}

{{ youtubePlayer("") }}

## {{ iconed("Exercise") }}

1. Find decisions in real life (?)

1. Reading exercise
    ```js
    const newMessages = [
      {
        from: 'Amal',
        body: 'How are you?',
        time: '31 Dec 2021, 10:16 AM'
      },
      {
        from: 'Isa',
        body: "I'm just going there now",
        time: '31 Dec 2021, 1:23 PM'
      },
    ]

    const messageCount = newMessages.length
    let notification;

    if (!messageCount) {
      notification = "You have no new messages."
    } else if (messageCount === 1) {
      notification = "You have a new message."
    } else {
      notification = `You have ${messageCount} new messages.`
    }

    console.log(notification)
    ```

1.

## {{ iconed("Extras") }}

TODO
