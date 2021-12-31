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

1. This exercise is to help you get familiar with reading and understanding code.

    Read the code below carefully and try to make sense of it, but **don't run it**.

    ```js
    const newMessages = [
      {
        from: 'Amal',
        body: 'Hello, how are you?',
        time: '31 Dec 2021, 1:23 PM'
      },
      {
        from: 'Isa',
        body: "I'm just going there now",
        time: '31 Dec 2021, 10:16 AM'
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

    What does the code do? What output do you expect? Observe that the `newMessages` array has two objects in it. If you removed one of the objects or both, or you added a new one, how would it affect the output of the code?

    Now run the code to see if it works as you expect. If you're correct, then well done; you're starting to get a hold of the language. If you're not, don't worry; it's all part of the learning process; try to figure out where you went wrong.

1. Writing

## {{ iconed("Extras") }}

TODO
