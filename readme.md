# AngularJS directive for responsive, fluid videos

An AngularJS directive for fluid videos for Responsive Design. Currently supports YouTube and Vimeo.

The video will always horizontally fill its parent element so this element should be responsive.

## Usage

To install using Bower and Grunt:

```bash
bower install angular-fluidVid --save
grunt bower-install
```

If you do not use Bower and Grunt, you can download the package and source the dependencies in your HTML.

1. Include `angular-fluidVid.js` in your HTML.
2. Add the `tinacious.fluidVid` module as an app dependency.
2. Implement the directive as an element attribute:

```html
<div fluid-video video-type="vimeo" video-id="56733081"></div>
```