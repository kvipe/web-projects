# kvipe web projects portfolio page

## You can easily use my presets for your purposes

``` bash
# Firstly, install dependencies
$ npm install
```

As you may know, it's convenient to write sources separately and in a pretty style, but then combine them into a single uglified file. So, our sources are stored in the src folder. To get a build (in the dist folder) I decided to use [Gulp](https://gulpjs.com). For detailed explanation on what it is and how it works, checkout official docs. It's quite simple!

There are 3 Gulp tasks:
1. **css**: convert and combine .less files to the entire style.css file
2. **js**: combine .js files to the main.js with some intermediate stages
3. **htmltemplate**: the most dynamic part here are your own projects for which this project was created. That would be very tedious to add every new project to the portfolio html page by hands. Instead, I decided to use [mustache template engine for Gulp](https://www.npmjs.com/package/gulp-mustache). In this way we store an information about projects in .json file (src/data/projects.json im my case) and a template file (src/layout/index.mustache in my case) to which data will be transmitted and then rendered. Note that, outputting data with {{data}} always escapes html characters. Use {{{data}}} (triple mustache) if you don't want it escaped. Also, mustache supports conditions. For example, we can do not render some html tag if some data are a zero-length string.