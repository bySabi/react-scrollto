# react-scrollto
A React component for animate scroll to React component

## Installation

```
$ npm install react-scrollto --save
```

## Description


## Usage

```
```

# `scrollSpy` component need style definition
```
.invisible {
  visibility: hidden;
}
```

# Custom animation
Animate behavior can be customize

Ex:

```
<ScrollTo dest={SampleCode} animate={{offset: 20, duration: 600}} className="nav-link">Home</ScrollTo>
```

### default animation
```
{ offset: 0, duration: 400, easing: easeOutQuad }
```
This setting is equivalent to default jQuery.animate `easing: swing`

## Easing functions links

* [jQuery easings](http://api.jqueryui.com/easings/)
* [Robert Penner's Easing Functions](http://robertpenner.com/easing/)
* [Javascript source code](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js)

## Contributing
* Documentation improvement
* Feel free to send any PR

## LICENSE
MIT
