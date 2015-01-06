[![Build Status](https://magnum.travis-ci.com/zamiang/ea1.svg?token=7yXqk14mwos4nMgrf2G4&branch=master)](https://magnum.travis-ci.com/zamiang/ea1)

## Code for ea1.co

Site is built on Jekyll and deployed on S3. See the [Jeckyll docs](http://jekyllrb.com/) and the [s3_website docs](https://github.com/laurilehmijoki/s3_website)

Deploy the site by clicking here: [deploy the site]()

## Editing content on ea1.co

ea1.co is simply a group of markdown files that get combined with some
html to form a website.

### Adding  new team member, talk or job,

If you would like to simply create a new file in their respective directory. Copy
an exiting file so that the formatting is the same, edit it to suit
your needs and then deploy the site.

## Editing the ea1.co code

First clone this repository, cd into the directory and then run

```bash
$ bundle install
$ jekyll serve --watch
$ guard
```

That will give you a version of the site running locally.

### Editing styles

NOTE: Only edit .sass files. DO NOT edit any .css files. The sass
files will get compiled into the css. For more information please look
at the [sass]() documentation and the [compass]() documentation.

### Editing templates

The main homepage is index.html in the root directory of this
project. It contains most of the markup for ea1.co but some parts are
configureable such as the title, description, and contact email in
_config.yml.
