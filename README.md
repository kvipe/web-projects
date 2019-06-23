# kvipe web projects portfolio page

## Getting started

``` bash
# install dependencies
$ npm install
```

There are 3 Gulp tasks:
- css (convert and combine .less files to the entire style.css file)
- js (combine .js files to the main.js with babel and uglify stages)
- htmltemplate (projects data store in .json file and it requires tool for building html based on this data)

For detailed explanation on how Gulp tasks work, checkout official [Gulp](https://gulpjs.com) docs.

In particular I would like to note that it's using [smart-grid](https://github.com/dmitry-lavrik/smart-grid) as Grid system.