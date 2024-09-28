# jekyllwind-test

This is a test project that deploys a Jekyll + Tailwind site to Github pages.

Here is the blog that I referred to for the starter code:

https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/

# Local dev

Since `_config.yml` is configured with Github pages in mind, running Jekyll locally will not have proper pathing.
We can override this by specifying another config file like so:

```
bundle exec jekyll serve --config _config.yml,dev.yml
```
