---
title: Introduction
excerpt: >
  This first episode will introduce you to the course,
  including what we'll cover, the format, and the software
  you'll need to get started.
---

{% from "macros.njk" import iconed %}

## {{ iconed("Video") }}

I forgot to record the meeting 🙈.

## {{ iconed("Exercise") }}

1. Install these software on your computer; they'll provide us the environment to write and run JavaScript programs.
   * [Node.js v14+](https://nodejs.org/en/)
   * [Visual Studio Code (<abbr>VS Code</abbr>)](https://code.visualstudio.com/)
   * A terminal. You can use the default terminals on Mac and Linux; on Windows, use [Git Bash](https://git-scm.com/downloads)
1. (Optional) Customise VS Code by choosing a theme, etc.
1. Create a new JavaScript file, type code in it to display your name, and run the file.


## {{ iconed("Extras") }}

You'll find an "extras" section in the lesson pages. This is where I'll add some extra information that I left out of the slides. I _strongly_ recommend that you read them.

### On Node.js

I said that we'd be running our JavaScript code with Node.js. We don't actually _need_ Node for this; our computers already have browsers that can run JavaScript. However, I feel it would be somewhat distracting working in the browser, especially because we won't be creating a web app or anything like that. (We may build _parts_ of a web app though 🙃.) Also, one of the goals of this course is to learn to work in a terminal, and using Node forces us to do so.

Outside of the browser, Node isn't the only place where we can run JavaScript. There's also [Deno](https://deno.land/). It's new, and it was created by Node's creator, Ryan Dahl, to address some of Node's issues. (You can watch Ryan's [initial announcement of Deno](https://youtu.be/M3BM9TB-8yA), if you're curious.) We'll prefer Node over Deno because it's more mature and better-known; Node was released in 2009, whereas Deno was released in 2018.

### Why programming anyway? 🤔

You can think of programming as a way to tell the computer what you want it to do. This then means
that you must "speak" the language of the computer (called <i>machine language</i>). However, machine language is quite difficult to learn&mdash;it's "zeroes and ones", as they say. Over time, people have developed higher-level languages in order to make it easier to instruct the computer. JavaScript is one of these "high-level languages". These languages still have to be translated into machine language in order for the computer to understand them. The translation is usually done by sophisticated programs called <i>compilers</i>.

But, you might wonder, why don't we just program in our human languages? The problem is that these languages (called <i>natural languages</i>) are very ambiguous. The same word/phrase/clause can mean very different things depending on the context. For example, the phrase "what's up?" can be used as a greeting, but it can also be a literal question, as in "what is above?". These types of ambiguity are avoided in programming languages (and in [<i>formal languages</i>](https://www.dictionary.com/browse/formal-language#editors-notes-section-0) in general). We want to be as clear as possible when talking to the computer in order to get predictable results.
