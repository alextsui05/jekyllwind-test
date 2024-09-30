---
layout: post
title: "Hello again Jekyll"
---

Hello again Jekyll!

I was looking into rebuilding a personal site and was bouncing back and forth between a few options.
I wanted something simple, and what could be simpler than straight HTML, CSS, and Javascript?
As those are all static files, deploying would be as simple as uploading it to a web server.
Choosing Github pages, the cost of operating that is basically free.
This seemed like a place to start, until I thought it would be nice to share and discuss code snippets.
This makes it difficult without some tool support.
This brought me back to Jekyll.

Jekyll is a static site generator that comes with some useful features, including rendering blocks of syntax highlighted code.
You can render blocks of code by using the provided [`highlight`](https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting) Liquid tag.
For example, here's a block of CSS that's applied to paragraphs on this page:

```css
.mod_post p {
  text-indent: 20px;
  padding-bottom: 10px;
} 
```

# Tailwind

I decided I also wanted to learn how to work with Tailwind so I configured it into this project.
I'm aware that Tailwind shines when you're able to apply the utility classes to style elements the way you like.
I do intend to create some more freeform content to get some frontend practice, and Jekyll gives you the freedom and flexibility to use HTML.
But Jekyll's appeal is that it supports publishing pages in Markdown, and Tailwind becomes less applicable in this mode ~~as there's no obvious way to attach utility classes~~.
Actually, there are these things called [_inline attribute lists_](https://kramdown.gettalong.org/syntax.html#block-ials){:.underline} that let you style block and inline elements on the fly.
Together with a layout that is properly styled with some base CSS, it feels like publishing a website is very flexible and ergonomic in 2024.

# Nested CSS Support

One point of confusion for me had to do with nested CSS support.
At work we used Sass to be able to write CSS like this:

```css
.mod_dialog {
  h1 {
    font-size: 16pt;
  }

  p {
    padding: 5px 0;
  }
}
```

This gets processed into the following:

```css
.mod_dialog h1 {
  font-size: 16pt;
}

.mod_dialog p {
  padding: 5px 0;
}
```

As you can see, the first style has less duplication, so it's more readable and maintainable.
At the very least, it saves on typing.
If it's not too much trouble, it would be nice to have this feature.
I was wondering if Tailwind supports this out of the box, and the answer seems to be yes, as long as you configure the bundled `postcss-nested` plugin.
To verify that the plugin works, write some nested CSS and view the output gets processed down into non-nested rules.
Make sure the CSS is actually used in your HTML, otherwise Tailwind will purge it from the output CSS.

Interestingly enough, even if the processing doesn't work and the nested CSS gets passed through to the output CSS, a modern browser may still be able to parse it.
Here is a screenshot of Firefox Dev Tools where the nested CSS is properly interpreted:

![Cool beans]({{ "/assets/img/2024-09-29-nested-css.png" | relative_url }})

By the way, the `&` ampersand is called the [nesting selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector#browser_compatibility).
This is based on a recent version of the [Nesting Module specification](https://drafts.csswg.org/css-nesting/#nest-selector) that describes the sort of behavior that I've come to expect from working with Sass at work.
In particular, the nesting selectors are optional.
It was in the older, initial specification that the nesting selector is required when followed by an identifier e.g. `h1` or `p` - see the explanation at the end of the [Nesting Style Rules](https://www.w3.org/TR/css-nesting-1/#nesting).
Fortunately, it seems that this strict behavior has been made optional, and we don't need to worry about it if we use `postcss-nested`.
