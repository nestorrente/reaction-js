/*!
 * @license
 * Reaction.js v0.3.3
 * https://github.com/nestorrente/reactionjs
 * 
 * Released under the MIT License.
 * 
 * Build date: 2020-08-18T21:16:21.625Z
 */
var Reaction=function(n){var r={};function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=n,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,n){window,t.exports=function(n){var r={};function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=n,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){function t(){this.listeners={}}return t.prototype.on=function(t,e){return this.listeners.hasOwnProperty(t)||(this.listeners[t]=[]),this.listeners[t].push(e),this},t.prototype.off=function(t,e){return this.listeners.hasOwnProperty(t)&&(void 0!==e?this.removeListener(t,e):this.removeAllListeners(t)),this},t.prototype.removeListener=function(t,e){var n=this.listeners[t].indexOf(e);-1!==n&&this.listeners[t].splice(n,1),this.removeListenersArrayIfEmpty(t)},t.prototype.removeListenersArrayIfEmpty=function(t){0===this.listeners[t].length&&this.removeAllListeners(t)},t.prototype.removeAllListeners=function(t){delete this.listeners[t]},t.prototype.once=function(n,r){var i=this,o=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];r.apply(void 0,t),i.off(n,o)};return this.on(n,o)},t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(this.listeners.hasOwnProperty(t))for(var r=0,i=this.listeners[t];r<i.length;r++){var o=i[r];try{o.apply(void 0,e)}catch(t){console.error(t)}}return this},t}();e.default=r}])},function(t,e,n){"use strict";n.r(e),n.d(e,"ref",function(){return g}),n.d(e,"reactive",function(){return d}),n.d(e,"computed",function(){return R}),n.d(e,"watch",function(){return M}),n.d(e,"watchEffect",function(){return T}),n.d(e,"nextTick",function(){return x});var r=Object.prototype.toString;function i(t){return null!=t&&"object"==typeof t&&"[object Object]"===r.apply(t)}var o=n(0),a=n.n(o);function u(){this.eventBus=new a.a}var c=new(u.prototype.addReadListener=function(t){this.eventBus.on("read",t)},u.prototype.removeReadListener=function(t){this.eventBus.off("read",t)},u.prototype.triggerReadEvent=function(t,e,n){this.eventBus.trigger("read",t,e,n)},u.prototype.addInvalidateListener=function(t){this.eventBus.on("invalidate",t)},u.prototype.removeInvalidateListener=function(t){this.eventBus.off("invalidate",t)},u.prototype.triggerInvalidateEvent=function(t,e){this.eventBus.trigger("invalidate",t,e)},u.prototype.addChangeListener=function(t){this.eventBus.on("change",t)},u.prototype.removeChangeListener=function(t){this.eventBus.off("change",t)},u.prototype.triggerChangeEvent=function(t,e,n,r){this.eventBus.trigger("change",t,e,n,r)},u),s="__ref__";function l(t){return null!=t&&"object"==typeof t&&!!t[s]}var p="__reactive_id__";function f(t){return null!=t&&"object"==typeof t&&t[p]}function d(t){if(f(t))return t;if(!i(t))throw new Error("Cannot observe value:"+t);return h(t)}function v(t){return null==t||"object"!=typeof t||f(t)||l(t)?t:i(t)?h(t):Array.isArray(t)?function(t){for(var e=0;e<t.length;++e)t[e]=v(t[e]);return t}(t):t}function h(t){var e,n=(e={},Object.defineProperty(e,p,{value:!0}),e);for(var r in t)if(t.hasOwnProperty(r)){y(n,r,t);var i=t[r];t[r]=v(i)}return n}function y(o,a,u){Object.defineProperty(o,a,{enumerable:!0,get:function(){var t=u[a];return c.triggerReadEvent(o,a,t),l(t)?t.value:t},set:function(t){var e=u[a],n=l(e),r=n?e.value:e;if(r!==t){var i=v(t);n?e.value=i:u[a]=i,c.triggerInvalidateEvent(o,a),c.triggerChangeEvent(o,a,i,r)}}})}function g(t){if(l(t))return t;var e=d({value:t});return Object.defineProperty(e,s,{value:!0}),e}function b(){}var m=new(b.prototype.executeAndListenForDependencies=function(t){var e=[],n=this.createDependencyListener(e);c.addReadListener(n);var r=t();return c.removeReadListener(n),{dependencies:e,result:r}},b.prototype.createDependencyListener=function(n){return function(t,e){return n.push({object:t,propName:e})}},b);function _(t,e){var n;this.callback="function"!=typeof(n=t)?function(){return n.value}:n,this.options=e,this.dependencies=[],this.invalidated=!0,this.dependencyInvalidationListener=this.dependencyInvalidationListener.bind(this),c.addInvalidateListener(this.dependencyInvalidationListener)}var O=(_.prototype.dependencyInvalidationListener=function(t,e){!this.invalidated&&this.isDependency(t,e)&&this.invalidate()},_.prototype.isDependency=function(e,n){return this.dependencies.some(function(t){return t.object===e&&t.propName===n})},_.prototype.stop=function(){c.removeInvalidateListener(this.dependencyInvalidationListener),this.invalidate()},_.prototype.invalidate=function(){this.invalidated||(this.dependencies=[],this.invalidated=!0,this.onInvalidate())},_.prototype.onInvalidate=function(){(0,this.options.onInvalidate)()},_.prototype.getResult=function(){return this.invalidated&&this.recompute(),this.executionResult},_.prototype.recompute=function(){var t=m.executeAndListenForDependencies(this.callback),e=this.executionResult;this.dependencies=t.dependencies,this.executionResult=t.result,this.invalidated=!1,this.onRecompute(this.executionResult,e)},_.prototype.onRecompute=function(t,e){(0,this.options.onRecompute)(t,e)},_);function R(t){var e,n,r=new O(t,{onInvalidate:function(){c.triggerInvalidateEvent(i,"value")},onRecompute:function(t,e){t!==e&&c.triggerChangeEvent(i,"value",t,e)}}),i=(e=function(){return r.getResult()},n={get value(){var t=e();return c.triggerReadEvent(this,"value",t),t},set value(t){throw new Error("Cannot modify the value of a readonly reference")}},Object.defineProperty(n,s,{value:!0}),n);return i}function j(){this.callback=null}var w=(j.prototype.registerCallback=function(t){this.callback=t},j.prototype.execute=function(){this.callback&&(this.callback(),this.callback=null)},j);function x(t){setTimeout(t,0)}function I(){this.cleanupCallbackRegister=new w,this.invalidated=!1,this.stopped=!1}var L,k,P=(I.prototype.init=function(){this.watcherInstance=this.createWatcher(),this.afterWatcherCreation(this.watcherInstance)},I.prototype.createWatcher=function(){var t=this;return new O(this.getWatcherSource(),{onInvalidate:function(){t.invalidated||t.stopped||(x(function(){t.stopped||t.onNextTickAfterWatcherInvalidate(t.watcherInstance)}),t.invalidated=!0)},onRecompute:function(){t.invalidated=!1}})},I.prototype.stop=function(){this.stopped||(this.stopped=!0,this.cleanupCallbackRegister.execute(),this.watcherInstance.stop())},I);function C(t){var e=k.call(this)||this;return e.callback=t,e}var A,E,S=((L=function(t,e){return(L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}L(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(C,k=P),C.prototype.getWatcherSource=function(){var e=this;return function(){return e.callback(function(t){e.cleanupCallbackRegister.registerCallback(t)})}},C.prototype.onNextTickAfterWatcherInvalidate=function(t){this.cleanupCallbackRegister.execute(),t.getResult()},C.prototype.afterWatcherCreation=function(t){t.getResult()},C);function W(t,e){var n=E.call(this)||this;return n.source=t,n.callback=e,n}var B=((A=function(t,e){return(A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}A(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(W,E=P),W.prototype.getWatcherSource=function(){return this.source},W.prototype.onNextTickAfterWatcherInvalidate=function(t){var e=this,n=t.getResult();this.lastResult!==n?(this.cleanupCallbackRegister.execute(),this.callback(n,this.lastResult,function(t){e.cleanupCallbackRegister.registerCallback(t)}),this.lastResult=n):this.invalidated=!1},W.prototype.afterWatcherCreation=function(t){this.lastResult=t.getResult()},W);function T(t){var e=new S(t);return e.init(),function(){return e.stop()}}function M(t,e){var n=new B(t,e);return n.init(),function(){return n.stop()}}}]);