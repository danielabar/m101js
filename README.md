m101js
======

Weekly course notes from [MongoDB University M101JS: MongoDB for Node.js Developers](https://education.10gen.com/courses/10gen/M101JS/2013_August/about)

## About
This project is built using the [Yeoman generator for AngularJS](https://github.com/yeoman/generator-angular) and deployed to github pages.
This presents a slight challenge for deployment because GitHub wants to host the root of the "master" branch as the doc root, whereas yeoman wants your docroot to be hosted out of the "dist/".
The solution to this is explained [here](http://txt.fliglio.com/2013/04/publishing-a-yeoman-app-with-github-pages/) and [here](https://github.com/yeoman/yeoman/wiki/Deployment).

## Relative Links
Another challenge is getting the Angular generated relative links to work.
For example, when developing locally using ```grunt serve```, the root url is:
```
http://127.0.0.1:9000/#/
```

Now let's say you have a link such as:
```html
<a href="/#/awesome">My Awesome Link</a>
```

Locally, it gets generated as:
```
http://127.0.0.1:9000/#/awesome
```

However, once the ```dist``` dir is pushed to ```gh-pages``` branch, the root url will be something like:
```
http://danielabar.github.io/m101js/#/
```

And the ```awesome``` link will be generated as:
```
http://danielabar.github.io/#/awesome
```

This is a problem because it won't be found. For Github Pages, the url should actually be:
```
http://danielabar.github.io/m101js/#/awesome
```

The solution I came up with is to use [grunt-text-replace](https://github.com/yoniholmes/grunt-text-replace) to modify all urls with ```/# ``` to start with ```/m101js```.
The grunt task uses a regex to identify the urls, and a convenient callback function to do the replacement. It looks something like this:
```javascript
replace: {
  dist: {
    src: ['<%= yeoman.dist %>/views/main.html'],
    overwrite: true,
    replacements: [
      {
        from: /\/#\//g,
        to: function(matchedWord) {
          return '/m101js' + matchedWord;
        }
      }
    ]
  }
    }
```
An improvement could be to replace ```m101js``` with a project variable to make the solution more generic.
But overall, this feels a litle hack-ey, if anyone has a better solution, let me know.

## Development
Startup grunt in preview mode
```
grunt serve
```

Make changes, for example, to add a new route to week3 course notes
```
yo angular:route week3
```

Add content to ```week3.html``` and link to it from ```main.html```. Changes are automatically reflected in browser via grunt watch task.

## Build
Run the grunt build task
```
grunt
```

If it succeeds, you're ready to deploy.

## Deploy
The overall project is pushed to ```master``` branch, and git subtree is used to push the ```dist``` dir to ```gh-pages``` branch.
```
git add .
git commit -m "your message"
git push origin master
git subtree push --prefix dist origin gh-pages
```
