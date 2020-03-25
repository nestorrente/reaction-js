/*!
 * Reaction.js v0.3.1
 * https://github.com/nestorrente/reactionjs
 * 
 * Released under the MIT License.
 * 
 * Build date: 2020-03-25T17:42:11.000Z
 */
var Reaction=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){
/*!
 * EventBus v1.0.5
 * https://github.com/nestorrente/event-bus
 * 
 * Released under the MIT License.
 * 
 * Build date: 2020-03-19T12:08:01.489Z
 */
window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){function t(){this.listeners={}}return t.prototype.on=function(t,e){return this.listeners.hasOwnProperty(t)||(this.listeners[t]=[]),this.listeners[t].push(e),this},t.prototype.off=function(t,e){return this.listeners.hasOwnProperty(t)&&(void 0!==e?this.removeListener(t,e):this.removeAllListeners(t)),this},t.prototype.removeListener=function(t,e){var n=this.listeners[t].indexOf(e);-1!==n&&this.listeners[t].splice(n,1),this.removeListenersArrayIfEmpty(t)},t.prototype.removeListenersArrayIfEmpty=function(t){0===this.listeners[t].length&&this.removeAllListeners(t)},t.prototype.removeAllListeners=function(t){delete this.listeners[t]},t.prototype.once=function(t,e){var n=this,r=function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];e.apply(void 0,i),n.off(t,r)};return this.on(t,r)},t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(this.listeners.hasOwnProperty(t))for(var r=0,i=this.listeners[t];r<i.length;r++){var o=i[r];try{o.apply(void 0,e)}catch(t){console.error(t)}}return this},t}();e.default=r}])},function(t,e,n){"use strict";n.r(e),n.d(e,"ref",(function(){return v})),n.d(e,"reactive",(function(){return l})),n.d(e,"computed",(function(){return g})),n.d(e,"watch",(function(){return x})),n.d(e,"nextTick",(function(){return _}));var r=Object.prototype.toString;function i(t){return null!=t&&"object"==typeof t&&"[object Object]"===r.apply(t)}var o=n(0),u=n.n(o),a=new(function(){function t(){this.eventBus=new u.a}return t.prototype.addReadListener=function(t){this.eventBus.on("read",t)},t.prototype.removeReadListener=function(t){this.eventBus.off("read",t)},t.prototype.triggerReadEvent=function(t,e,n){this.eventBus.trigger("read",t,e,n)},t.prototype.addInvalidateListener=function(t){this.eventBus.on("invalidate",t)},t.prototype.removeInvalidateListener=function(t){this.eventBus.off("invalidate",t)},t.prototype.triggerInvalidateEvent=function(t,e){this.eventBus.trigger("invalidate",t,e)},t.prototype.addChangeListener=function(t){this.eventBus.on("change",t)},t.prototype.removeChangeListener=function(t){this.eventBus.off("change",t)},t.prototype.triggerChangeEvent=function(t,e,n,r){this.eventBus.trigger("change",t,e,n,r)},t}());function c(t){return null!=t&&"object"==typeof t&&!!t.__ref__}function s(t){return null!=t&&"object"==typeof t&&!!t.__reactive_id__}function l(t){if(s(t))return t;if(!i(t))throw new Error("Cannot observe value:"+t);return p(t)}function f(t){return null==t||"object"!=typeof t||s(t)||c(t)?t:i(t)?p(t):Array.isArray(t)?function(t){for(var e=0;e<t.length;++e)t[e]=f(t[e]);return t}(t):t}function p(t){var e=function(){var t={};return Object.defineProperty(t,"__reactive_id__",{value:!0}),t}();for(var n in t)if(t.hasOwnProperty(n)){d(e,n,t);var r=t[n];t[n]=f(r)}return e}function d(t,e,n){Object.defineProperty(t,e,{enumerable:!0,get:function(){var r=n[e];return a.triggerReadEvent(t,e,r),c(r)?r.value:r},set:function(r){var i=n[e],o=c(i),u=o?i.value:i;if(u!==r){var s=f(r);o?i.value=s:n[e]=s,a.triggerInvalidateEvent(t,e),a.triggerChangeEvent(t,e,s,u)}}})}function v(t){if(c(t))return t;var e=l({value:t});return Object.defineProperty(e,"__ref__",{value:!0}),e}var h=new(function(){function t(){}return t.prototype.executeAndListenForDependencies=function(t){var e=[],n=this.createDependencyListener(e);a.addReadListener(n);var r=t();return a.removeReadListener(n),{dependencies:e,result:r}},t.prototype.createDependencyListener=function(t){return function(e,n){return t.push({object:e,propName:n})}},t}()),y=function(){function t(t,e){this.callback=function(t){if("function"==typeof t)return t;return function(){return t.value}}(t),this.options=e,this.dependencies=[],this.invalidated=!0,this.dependencyInvalidationListener=this.dependencyInvalidationListener.bind(this),a.addInvalidateListener(this.dependencyInvalidationListener)}return t.prototype.dependencyInvalidationListener=function(t,e){!this.invalidated&&this.isDependency(t,e)&&this.invalidate()},t.prototype.isDependency=function(t,e){return this.dependencies.some((function(n){return n.object===t&&n.propName===e}))},t.prototype.stop=function(){a.removeInvalidateListener(this.dependencyInvalidationListener),this.invalidate()},t.prototype.invalidate=function(){this.invalidated||(this.dependencies=[],this.invalidated=!0,this.onInvalidate())},t.prototype.onInvalidate=function(){(0,this.options.onInvalidate)()},t.prototype.getResult=function(){return this.invalidated&&this.recompute(),this.executionResult},t.prototype.recompute=function(){var t=h.executeAndListenForDependencies(this.callback),e=this.executionResult;this.dependencies=t.dependencies,this.executionResult=t.result,this.invalidated=!1,this.onRecompute(this.executionResult,e)},t.prototype.onRecompute=function(t,e){(0,this.options.onRecompute)(t,e)},t}();function g(t){var e=new y(t,{onInvalidate:function(){a.triggerInvalidateEvent(n,"value")},onRecompute:function(t,e){t!==e&&a.triggerChangeEvent(n,"value",t,e)}}),n=function(t){var e={get value(){var e=t();return a.triggerReadEvent(this,"value",e),e},set value(t){throw new Error("Cannot modify the value of a readonly reference")}};return Object.defineProperty(e,"__ref__",{value:!0}),e}((function(){return e.getResult()}));return n}var b=function(){function t(){this.callback=null}return t.prototype.registerCallback=function(t){this.callback=t},t.prototype.execute=function(){this.callback&&(this.callback(),this.callback=null)},t}();function _(t){setTimeout(t,0)}var m,R=function(){function t(){this.cleanupCallbackRegister=new b,this.invalidated=!1,this.stopped=!1}return t.prototype.init=function(){this.watcherInstance=this.createWatcher(),this.afterWatcherCreation(this.watcherInstance)},t.prototype.createWatcher=function(){var t=this;return new y(this.getWatcherSource(),{onInvalidate:function(){t.invalidated||t.stopped||(_((function(){t.onNextTickAfterWatcherInvalidate(t.watcherInstance)})),t.invalidated=!0)},onRecompute:function(){t.invalidated=!1}})},t.prototype.stop=function(){this.stopped||(this.stopped=!0,this.cleanupCallbackRegister.execute(),this.watcherInstance.stop())},t}(),O=(m=function(t,e){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),j=function(t){function e(e){var n=t.call(this)||this;return n.callback=e,n}return O(e,t),e.prototype.getWatcherSource=function(){var t=this;return function(){return t.callback((function(e){t.cleanupCallbackRegister.registerCallback(e)}))}},e.prototype.onNextTickAfterWatcherInvalidate=function(t){this.cleanupCallbackRegister.execute(),t.getResult()},e.prototype.afterWatcherCreation=function(t){t.getResult()},e}(R),w=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),k=function(t){function e(e,n){var r=t.call(this)||this;return r.source=e,r.callback=n,r}return w(e,t),e.prototype.getWatcherSource=function(){return this.source},e.prototype.onNextTickAfterWatcherInvalidate=function(t){var e=this,n=t.getResult();this.lastResult!==n?(this.cleanupCallbackRegister.execute(),this.callback(n,this.lastResult,(function(t){e.cleanupCallbackRegister.registerCallback(t)})),this.lastResult=n):this.invalidated=!1},e.prototype.afterWatcherCreation=function(t){var e=this,n=t.getResult();this.callback(n,this.lastResult,(function(t){e.cleanupCallbackRegister.registerCallback(t)})),this.lastResult=n},e}(R);function x(t,e){var n=function(t,e){return void 0===e?new j(t):new k(t,e)}(t,e);return n.init(),function(){return n.stop()}}}]);
//# sourceMappingURL=reaction.bundle.js.map