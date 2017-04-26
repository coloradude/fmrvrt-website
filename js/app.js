(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var path = window.location.pathname
switch(path) {
  case '/':
    document.querySelector('#nav-home').classList.add('current')
    break
  case '/events.html':
    document.querySelector('#nav-events').classList.add('current')
    break
  case '/trail-map.html':
    document.querySelector('#nav-trail-map').classList.add('current')
    break
  case '/our-board.html':
    document.querySelector('#nav-our-board').classList.add('current')
    break
  }

// console.log('wtf')

// require('jquery')
// const $ = require('jquery')
// // require('./jquery.js')
// require('./bootstrap.min.js')
// // require('./jquery.mCustomScrollbar.concat.min.js')
// // require('./revolution.min.js')
// require('./jquery.fancybox.pack.js')
// require('./jquery.fancybox-media.js')
// require('./owl.js')
// require('./wow.js')
// require('./appear.js')
// require('./jquery.mixitup.js')
// require('./script.js')
// console.log('wtf')
// $(document).ready(() => {
//   $('.preloader').css('display', 'none')
// })

},{}]},{},[1])