---
title: Introduction
excerpt: >-
  This first episode will introduce you to the course,
  what we'll cover, the format,
  and the software you'll need to get started.
---

<div class="callout callout-info">

**Tip:** Press the question mark key (<kbd class="key">?</kbd>) when playing the slides to see a list of keyboard shortcuts.

</div>

## Video

https://youtu.be/B5mqMzbsG8A

## Exercises

1. Install these software on your computer; they'll provide us the environment to write and run JavaScript programs.
   * [Node.js v14+](https://nodejs.org/en/)
   * [Visual Studio Code (<abbr>VS Code</abbr>)](https://code.visualstudio.com/)
   * A terminal. You can use the default terminals on Mac and Linux; on Windows, use [Git Bash](https://git-scm.com/downloads)
1. (Optional) Customise VS Code by choosing a theme, etc.
1. Create a new JavaScript file, type code in it to display your name, and run the file.


## Extras

You'll find an "extras" section like this one in the lesson pages. This is where I'll add some extra information (such as JavaScript peculiarities) that I left out of the slides. I _strongly_ recommend that you read them.

### On Node.js

I mentioned that we'd be using Node.js to run our JavaScript code. We don't actually _need_ Node for this; our computers already have browsers that can run JavaScript. However, I feel it would be distracting working in the browser, since we won't be building a web app. (We may build _parts_ of a web app though 🙃.) Also, one of the goals of this course is to learn to work in a terminal, and using Node forces us to do so.

Outside the browser, Node isn't the only tool that can run JavaScript. There's also [Deno](https://deno.land/). It's new, and it was created by Node's creator, Ryan Dahl, to address some of his regrets with Node. (You can watch his [initial announcement of Deno](https://youtu.be/M3BM9TB-8yA) if you're curious.) We're choosing Node over Deno for this course because it's more mature and better-known; Node was released in 2009, whereas Deno was released in 2018.

### Why programming anyway? 🤔

Computers can perform repetitive tasks much faster than us, so we'd like to delegate those tasks to them. But, we need a way to tell a computer what we want it to do. That's where programming comes in.

To instruct a computer, we must "speak" its language, the <i>machine language</i>. However, the language is difficult to learn &mdash; it's "zeroes and ones", as they say. Over time, people have developed higher-level languages that are closer to our human languages so that it's easier to program the computer. JavaScript is one of these "high-level languages".

We still have to translate these languages into machine language for the computer to understand. We use programs called <i>compilers</i> to do this translation. (A little irony here: we don't "compile" JavaScript when we use Node. Under the hood, Node translates our code as it runs it.)

You might wonder, <i>why don't we just program in our human languages?</i> The problem is that our languages are very ambiguous. The same word/phrase/clause can mean very different things depending on the context. For example, the phrase "what's up?" can be used as a greeting, but it can also be a literal question, as in "what is above?". Programming languages avoid this so that we get predictable results from the computer.
