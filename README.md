# NMA Static Site Generated via Eleventy 
A static version of the NMA site, geberated using 11ty.

[View Demo on Netlify](https://nma-v4-static-minimal.netlify.app/)

## Goals/Constraints:
* minimal config (easy to understand and get up and running right out of the box)
* support for relative paths (e.g. able to be staticly hosted in a sub-directory)
* Other key features:
    * html includes (thank you eleventy/nunjucks/liquid)
    * html files with mixed front matter + markup (thank you eleventy)

## To serve locally

``` npm install ```
``` eleventy --serve ```

or:

``` npx @11ty/eleventy --serve ```

## To-do Wish List
* add support for sass
* add support for taxonomy collections (e.g. categories + tags )
* add prettier to fix formatting (temp fix = disable auto-format-on-save via VS Code manually, for now)