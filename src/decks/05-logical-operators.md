---
title: Logical operators
---

<section>

<section>

We learnt how to make decisions based&nbsp;on&nbsp;simple&nbsp;conditions. {.h3}

</section>


<section>

But what if we have complex conditions? {.h3}

</section>


<section>

![]({{ '/assets/images/laptop-filters.webp' | url }}){aria-labelledby=laptopFiltersLabel}
<small id="laptopFiltersLabel">A hypothetical e-commerce app with a list of laptops for sale and several&nbsp;options&nbsp;to&nbsp;filter&nbsp;the laptops.</small>

</section>

</section>



<section>

<section data-auto-animate>

## Logical operators

</section>


<section data-auto-animate data-auto-animate-duration=0.6>

## Logical operators

OR[, AND]{.inline-block .fragment .fade-down}[, and NOT.]{.inline-block .fragment .fade-right}

</section>

</section>



<section>

<section>

## OR

</section>


<section>

![The e-commerce laptop list filtered to show only Apple and Microsoft laptops.]({{ '/assets/images/laptop-filters-or.webp' | url }})

</section>


<section data-auto-animate>

Let's assume each laptop looks like this:

<pre data-id=or><code data-line-numbers="" class="language-js" data-trim>
const laptop = {
  title: 'MacBook Pro 13"',
  brand: 'Apple',
  screenSize: 13,
  // ...
}
</code></pre>

</section>


<section data-auto-animate>

OR syntax:

<pre data-id=or><code data-line-numbers="" class="language-js" data-trim>
expression1 || expression2
</code></pre>

One expression must be `true` for the result to be `true`.

</section>


<section data-auto-animate>

<pre data-id="or"><code data-line-numbers="" class="language-js" data-trim>
const { brand } = laptop
if (brand === 'Apple' || brand === 'Microsoft') {
  console.log("It's an Apple or Microsoft laptop.")
}
</code></pre>

</section>

</section>



<section>

<section>

## AND

</section>


<section>

![The e-commerce laptop list filtered to show only 14-inch Apple laptops.]({{ '/assets/images/laptop-filters-and.webp' | url }})

</section>


<section data-auto-animate>

AND syntax:

<pre data-id="and"><code data-line-numbers="" class="language-js" data-trim>
expression1 && expression2
</code></pre>

Both expressions must be `true` for the result to be `true`.

</section>


<section data-auto-animate>

<pre data-id="and"><code data-line-numbers="" class="language-js" data-trim>
const { brand, screenSize } = laptop
if (brand === 'Apple' && screenSize === 14) {
  console.log("It's a 14-inch Apple laptop.")
}
</code></pre>

</section>


<section>

### Let's take a more complex example

</section>


<section>

![The e-commerce laptop list filtered to show only 13 or 14-inch Apple or Microsoft laptops.]({{ '/assets/images/laptop-filters-and-or.webp' | url }})

</section>


<section data-auto-animate>

<pre data-id="and"><code data-line-numbers="2-5" class="language-js" data-trim>
const { brand, screenSize } = laptop
if (
  brand === 'Apple' || brand === 'Microsoft'
  <span class="inline-block fragment fade-down">screenSize === 13 || screenSize === 14</span>
) {
  console.log(
    "It's a 13 or 14-inch Apple or Microsoft laptop."
  )
}
</code></pre>

</section>


<section data-auto-animate>

AND has higher precedence than OR:

<pre data-id="and"><code data-line-numbers="2-5|6-8" class="language-js" data-trim>
const { brand, screenSize } = laptop
if (
  (brand === 'Apple' || brand === 'Microsoft') &&
  (screenSize === 13 || screenSize === 14)
) {
  console.log(
    "It's a 13 or 14-inch Apple or Microsoft laptop."
  )
}
</code></pre>

</section>

</section>



<section>

<section>

## NOT

</section>


<section>

![The e-commerce laptop list filtered to show all but the 13-inch laptops.]({{ '/assets/images/laptop-filters-not.webp' | url }})

</section>


<section data-auto-animate>

NOT syntax:

<pre data-id="not"><code data-line-numbers="" class="language-js" data-trim>
!expression
</code></pre>

* If `expression` is `true`, the result is `false`.
* If `expression` is `false`, the result is `true`.

</section>


<section data-auto-animate>

We wrote this previously:

<pre data-id="not"><code data-line-numbers="" class="language-js" data-trim>
const { brand, screenSize } = laptop
if (brand === 'Apple' && screenSize === 14) {
  console.log("It's a 14-inch Apple laptop.")
}
</code></pre>

</section>


<section data-auto-animate>

Let's invert it (NOT has higher precedence than AND):

<pre data-id="not"><code data-line-numbers="2|3" class="language-js" data-trim>
const { brand, screenSize } = laptop
if (!(brand === 'Apple' && screenSize === 14)) {
  console.log("It's not a 14-inch Apple laptop.")
}
</code></pre>

</section>

</section>



<section>

<section>

## "Truthiness"

</section>


<section>

Conditions don't have to be boolean; JavaScript automatically converts them. {.h3}

</section>


<section data-auto-animate>

We did this in the previous lesson:

<pre data-id="truthy"><code data-line-numbers="" class="language-js" data-trim>
if (course.rating !== 0) {
  console.log(`Rating: ${course.rating}`)
}
</code></pre>

</section>


<section data-auto-animate>

We could write it this way too:

<pre data-id="truthy"><code data-line-numbers="1" class="language-js" data-trim>
if (course.rating) {
  console.log(`Rating: ${course.rating}`)
}
</code></pre>

</section>


<section data-auto-animate>

The following values convert to `false`; we call them <i>falsy</i> values:

<pre data-id="truthy"><code data-line-numbers="" class="language-js" data-trim>
Boolean(0)          // false
Boolean("")         // false
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(false)      // false
</code></pre>

</section>


<section data-auto-animate>

All other values convert to `true`, so they are <i>truthy</i>:

<pre data-id="truthy"><code data-line-numbers="" class="language-js" data-trim>
Boolean(3.4)              // true
Boolean("thinkdev")       // true
Boolean({ key: 'value' }) // true
Boolean({})               // true
Boolean([1, 2])           // true
Boolean([])               // true
Boolean(true)             // true
</code></pre>

</section>

</section>



<section>

<section>

## Redefining the logical operations

</section>


<section data-auto-animate>

The NOT operation returns `true` if the <i>operand</i> is falsy, [and `false` if the operand is truthy.]{.block}

<pre data-id="redef-log-ops"><code data-line-numbers="" class="language-js" data-trim>
!true   // false
!0      // true
!"hi"   // false
</code></pre>

</section>


<section data-auto-animate>

The OR operation returns the first truthy operand. [If there's none, it returns the last operand.]{.block}

<pre data-id="redef-log-ops"><code data-line-numbers="" class="language-js" data-trim>
true || false;            // true
0 || null;                // null
"hi" || "hey" || "hello"; // "hi"
</code></pre>

</section>


<section data-auto-animate>

The AND operation returns the first falsy operand. [If there's none, it returns the last operand.]{.block}

<pre data-id="redef-log-ops"><code data-line-numbers="" class="language-js" data-trim>
true && false;            // false
0 && null;                // 0
"hi" && "hey" && "hello"; // "hello"
</code></pre>

</section>


<section>

### Short-circuit evaluation

</section>


<section data-auto-animate>

Open your REPL and type:

<pre data-id="circuit"><code data-line-numbers="" class="language-js" data-trim>
abc && false;
</code></pre>

</section>


<section data-auto-animate>

There's no reference (i.e. variable) called `abc`:

<pre data-id="circuit"><code data-line-numbers="" class="language-js" data-trim>
abc && false;
// Uncaught ReferenceError: abc is not defined
</code></pre>

</section>


<section data-auto-animate>

Rearrange and `abc` will be ignored:

<pre data-id="circuit"><code data-line-numbers="" class="language-js" data-trim>
false && abc;
// false
</code></pre>

</section>


<section data-auto-animate>

It applies to the OR operation too:

<pre data-id="circuit"><code data-line-numbers="" class="language-js" data-trim>
abc || true;
// Uncaught ReferenceError: abc is not defined

true || abc;
// true
</code></pre>

</section>

</section>
