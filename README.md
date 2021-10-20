# NMA Static Minimally Styled 11ty Site
Another eleventy test, this time from scratch with minimal config and no npm.

[View Demo](https://newmediaarts.github.io/nma_v4-static-minimal-base/dist/)

## Goals/Constraints:
* no npm (no package.json, no node modules, no npm install, etc)
* minimal config (easy to understand and get up and running right out of the box)
* support for relative paths (e.g. able to be staticly hosted in a sub-directory)
* Other key features:
    * html includes (thank you eleventy/nunjucks/liquid)
    * html files with mixed front matter + markup (thank you eleventy)

## To serve locally
If you have eleventy installed:

``` eleventy --serve ```

If you do not have eleventy installed but you have npx:

``` npx @11ty/eleventy --serve ```

## To-do Wish List
* add support for sass