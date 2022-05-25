---
title: Logical operators
draft: true
excerpt: >-
---

## Video

TODO

## Exercises

1. TODO: Reading exercise.

1. Filenames typically end in suffixes like ".pdf". These suffixes are called <i>file extensions</i> and they're used to indicate the type of file. The ".pdf" in "logic.pdf" indicates that logic.pdf is a PDF document.

    Some file types have several file extensions. A Word document may have a ".doc" extension or a ".docx" extension.

    The following table lists some file types and their associated file extension(s):

    | File type | File extension(s) |
    | --- | --- |
    | Word document | .doc, .docx |
    | Excel worksheet | .xls, .xlsx |
    | PowerPoint presentation | .ppt, .pptx |
    | PDF document | .pdf |

    {.w-auto}

    Using the table, complete the following program so that it prints the file type of the `filename` variable. The variable is currently set to `'slides.pptx'`, so the program should print something like <samp>slides.pptx is a PowerPoint presentation</samp>. If you set the value of `filename` to a different string like `'ebook.pdf'`, then the program should print something like <samp>ebook.xls is an Excel worksheet</samp>.

    You should use a logical operator to test for file types like "Word document" that have several extensions.

    ```js
    const filename = 'slides.pptx'

    // Your task: complete the program.
    ```

    **Hint:** You can test if a string has a given suffix with the [string `.endsWith` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith).

## Extras

### `if` expression

Remember that the `if` statement is a _statement_. It's not an expression so it doesn't produce a value.
Why's this important? Well, consider the following piece of code, where we assign a value to the `remark`
variable depending on some condition (the condition doesn't really matter; what matters is how we write the code):

```js
let remark;
if (condition) {
  remark = "yes";
} else {
  remark = "no";
}
```

Rewriting it as follows is invalid because we're treating the `if` statement like an expression:

```js
let remark = if (condition) {
  "yes";
} else {
  "no";
}
```

However, it is sometimes convenient to use an expression to make a decision.
For this, JavaScript has a <i>conditional operator</i>. It looks like this:

```js
expression1 ? expression2 : expression3
```

Here's how it works: if `expression1` is truthy, then the result of the operation
will be the value of `expression2`. But if it's falsy, the result will be the value of `expression3`.

We can rewrite the `if` statement example as below:

```js
let remark = condition ? "yes" : "no"
```

If the condition is truthy, the `remark` variable will be assigned the value `"yes"`;
if it's falsy, `remark` will be assigned `"no"`.

### Unary, binary, ternary

Many operators in JavaScript, like the addition operator (`+`), the OR operator (`||`), and the AND operator (`&&`), take two operands, as in:

```js
2 + 3;
true || false;
'hi' && 'hey';
```

Thus we call them <i>binary operators</i>.

Others like `typeof` and NOT (`!`) that take a single operand are <i>unary operators</i>.
The conditional operator (`? :`) is the only <i>ternary operator</i>, taking three operands.
