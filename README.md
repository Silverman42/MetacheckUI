# Metacheck

Metacheck is a free open-source tool for generating/checking metatags and metadata for webpages

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## About

I am often sluggish to add meta tags in about every webpage I develop but I am forced to do so due to the SEO significance of the tags. I developed Metacheck to help me auto generate HTML meta tag which i could easily embed in web pages i work on thereby increasing my development pace.
Metacheck inteface

In addition to the developement of the web interface, I developed a scraping engine using NodeJs and PuppeteerJs which scrapes for the meta-tags from websites and returns the website's meta information as a JSON data

It is a free web tool which is open to all web developers who face similar issues

## Development stack

- Nuxt
- TailwindCSS
