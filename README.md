# NMA Static Site Generated via Eleventy 
A static version of the NMA site, geberated using 11ty.

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
* add support for taxonomy collections (e.g. categories + tags )
* add prettier to fix formatting (temp fix = disable auto-format-on-save via VS Code manually, for now)