---
layout: default
title: "Happy coding"
---

<div class="py-24 max-w-xl mx-auto text-center">
  <h1 class="text-xl mb-12">
    <span class="text-4xl block">
      Jekyllwind
    </span>

    <span class="uppercase font-light text-purple-500">
      A Jekyll + Tailwind CSS boilerplate
    </span>
  </h1>

  <h2>Build something beautiful with it ✌️</h2>
</div>

<div class="mx-auto max-w-4xl">
  <h1 class="text-4xl">Sample Code Snippets</h1>
  <h2 class="text-2xl">Ruby</h2>

{% highlight ruby linenos %}
[1, 2, 3].each do
  puts "Hello world"
end
{% endhighlight %}

  <h2 class="text-2xl">Html</h2>

{% highlight html %}
<h1>Hello world</h1>
{% endhighlight %}

  <h2 class="text-2xl">Javascript</h2>
  </div>

## Output

{% highlight js %}
console.log("Hello world");
{% endhighlight %}

## Source

```liquid
{% raw %}
{% highlight js %}
console.log("Hello world");
{% endhighlight %}
{% endraw %}
```

<h2 class="text-4xl">Posts</h2>
<ul>
  {% for post in site.posts %}
    <li>
      <span class="font-bold pr-2">{{ post.date | date: "%Y-%m-%d" }}</span><a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
