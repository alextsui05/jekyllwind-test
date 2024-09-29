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
{: .text-4xl .py-5}

I decided I also wanted to learn how to work with Tailwind so I configured it into this project.
I'm aware that Tailwind shines when you're able to apply the utility classes to style elements the way you like.
I do intend to create some more freeform content to get some frontend practice, and Jekyll gives you the freedom and flexibility to use HTML.
But Jekyll's appeal is that it supports publishing pages in Markdown, and Tailwind becomes less applicable in this mode ~~as there's no obvious way to attach utility classes~~.
Actually, there are these things called [_inline attribute lists_](https://kramdown.gettalong.org/syntax.html#block-ials){:.underline} that let you style block and inline elements on the fly.
Together with a layout that is properly styled with some base CSS, it feels like publishing a website is very flexible and ergonomic in 2024.

