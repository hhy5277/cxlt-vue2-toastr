!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.cxltToastr=e():t.cxltToastr=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=13)}([function(t,e,n){t.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(6),o=n(5);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports={default:n(15),__esModule:!0}},function(t,e){},function(t,e){},function(t,e,n){var r=n(46)(n(14),n(47),null,null);r.options.__file="/Users/chengxulvtu/Documents/github/cxlt-vue2-toastr/src/Toastr.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] Toastr.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=n.n(r),i=n(12),s=n.n(i),u=n(11),c=(n.n(u),n(10)),a=(n.n(c),{install:function(t,e){function n(n,i){var u=t.extend(s.a),c=o()(e,n,{type:i}),a=new u({el:document.createElement("div"),propsData:c});return r.push(a),a}e||(e={});var r=[];t.prototype.$toast={success:function(t){return n(t,"success")},info:function(t){return n(t,"info")},warn:function(t){return n(t,"warning")},error:function(t){return n(t,"error")},removeAll:function(){r.forEach(function(t){t.hideToastr()}),r=[]}}}});e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CxltToastr",data:function(){return{progress:{hideEta:0,percent:0,intervalId:null},show:!1,defaultIcons:{success:n(44),info:n(43),warning:n(45),error:n(42)}}},props:{type:{type:String,default:"success"},position:{type:String,default:"top center"},title:{type:String},message:{type:String},closeButton:{type:Boolean,default:!0},progressBar:{type:Boolean,default:!1},icon:{type:String},timeOut:{default:"1500"},showMethod:{type:String,default:"fadeIn"},hideMethod:{type:String,default:"fadeOut"},showDuration:{default:"1000"},hideDuration:{default:"1000"},delay:{default:"0"},successColor:{type:String},infoColor:{type:String},warningColor:{type:String},errorColor:{type:String},color:{type:String}},beforeMount:function(){var t=document.querySelector(".cxlt-toastr-container.toast-"+this.positionClass);t||(t=document.createElement("div"),t.classList.add("cxlt-toastr-container"),t.classList.add("toast-"+this.positionClass),document.body.appendChild(t)),t.appendChild(this.$el)},mounted:function(){var t=this;setTimeout(function(){return t.showToastr()},this.delay)},computed:{positionClass:function(){return this.position.split(" ").join("-")},enterActiveClass:function(){return"animated "+this.showMethod},leaveActiveClass:function(){return"animated "+this.hideMethod},toastBackgroundColor:function(){return this.color?this.color:"success"===this.type&&this.successColor?this.successColor:"info"===this.type&&this.infoColor?this.infoColor:"warning"===this.type&&this.warningColor?this.warningColor:"error"===this.type&&this.errorColor?this.errorColor:null},iconSrc:function(){return this.icon?this.icon:this.defaultIcons[this.type]}},methods:{showToastr:function(){var t=this;this.show=!0,this.sto=setTimeout(function(){return t.hideToastr()},this.timeOut),this.progressBar&&(this.progress.hideEta=(new Date).getTime()+parseFloat(this.timeOut),this.progress.intervalId=setInterval(function(){return t.refreshProgress()},10))},hideToastr:function(){clearTimeout(this.sto),clearTimeout(this.progress.intervalId),this.show=!1},refreshProgress:function(){this.progress.percent=(this.progress.hideEta-(new Date).getTime())/this.timeOut*100},beforeEnter:function(t){t.style.animationDuration=this.showDuration+"ms"},afterEnter:function(t){this.$el.classList.add("animated"),this.$el.classList.add(this.showMethod)},beforeLeave:function(t){t.style.animationDuration=this.hideDuration+"ms"}}}},function(t,e,n){n(41),t.exports=n(4).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(8),o=n(37),i=n(36);t.exports=function(t){return function(e,n,s){var u,c=r(e),a=o(c.length),f=i(s,a);if(t&&n!=n){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(16);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(3),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(2),o=n(4),i=n(20),s=n(25),u=function(t,e,n){var c,a,f,l=t&u.F,A=t&u.G,p=t&u.S,d=t&u.P,h=t&u.B,g=t&u.W,v=A?o:o[e]||(o[e]={}),y=v.prototype,m=A?r:p?r[e]:(r[e]||{}).prototype;A&&(n=e);for(c in n)(a=!l&&m&&void 0!==m[c])&&c in v||(f=a?m[c]:n[c],v[c]=A&&"function"!=typeof m[c]?n[c]:h&&a?i(f,r):g&&m[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?i(Function.call,f):f,d&&((v.virtual||(v.virtual={}))[c]=f,t&u.R&&y&&!y[c]&&s(y,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(28),o=n(33);t.exports=n(0)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(0)&&!n(1)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(31),o=n(29),i=n(32),s=n(38),u=n(6),c=Object.assign;t.exports=!c||n(1)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=s(t),c=arguments.length,a=1,f=o.f,l=i.f;c>a;)for(var A,p=u(arguments[a++]),d=f?r(p).concat(f(p)):r(p),h=d.length,g=0;h>g;)l.call(p,A=d[g++])&&(n[A]=p[A]);return n}:c},function(t,e,n){var r=n(17),o=n(26),i=n(39),s=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(24),o=n(8),i=n(18)(!1),s=n(34)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,a=[];for(n in u)n!=s&&r(u,n)&&a.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(30),o=n(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(35)("keys"),o=n(40);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(2),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(7),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(7),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(23);r(r.S+r.F,"Object",{assign:n(27)})},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADJUlEQVRoQ+2a/VEVMRTFz60ArQCsQK1A6AArECrQDoQOoAKhAu0AqECoQKhAO4hzmMBk9+XjJNl9C29e/mKGZDe/3HM/cvcZNmTYhnBgC5KypHPuDYD3APYTc64B3JnZvynVMIlFnHMfAHwBcASAIMq4B/ALwKWZ3SoLcnO6QJxz3PwJgL3OjRDqxMwuW5/TBOKco2x+TAAw3jeBjs2M8qsaVSBe/98BfKt6S/3kMwCnNX4kg3iIKwD0h3UM+s2BCiOBeGf+OYOUSgdCqX1WgkERxFvi9wIQT5CE+ViyTBZkATmlLFSUWQmETve1ZP81/f/czJJBJgniQyyd+yUNOn80NOdA/lT4xQ0AWo/5RbXgOQBuiqf8STytezN7F5sbBXHOsdRgwlMGSwzOfxziWia9i2AN/2aVoIzB2qcFKRDVGgMIESa6EeecChO1ygqIzxkMt6VxY2apCjdlmShEcACUmiIzhuNBoRkDUU+GiYrVa3KMZJaF8LI8BMDEWxorESwG8lcsxbPhcCQzhD6R2mWPvAYgPgESRB3FU1YfJAaJ8HFvw2w/BqHma3NHN0wDBIEGOWUMwksSy/Ta0QzTCMH9scznfh/HVCB8VjVMB8SsIFUwnRBbEMVnNkJa1RCjPKPWdeGBZp19Y8Ivm2uvPyH6eoetzB3BKZYsUR7MbNAUjNVa6vX2xReN7FspZfy1mR1kCsDY5axUxrM8Sl4NgneVy3gvL7ZgdgV5XZjZ8XheIdmlLlaMXM83zcy7V2S1UqI0hsQBjJixx1ddFSJZPeSaD6pV+HDe7OhbvBgpp8o1vMDxYsbmgyInrolaI2kRL6+WnCKosWtKfTvIw6gRrGt34uK2Bp0HYYKkbPgpbclxR/nl+r9qE5sdCyWKzQH7wE8ZXU3sIIoxt9Ax1w1DiMNJPisEMOuWWVFOofmL0gon+y4L78lqf7dVauwL8+Oo/Am7CiSwDkMz88DUUqOUjmb/GJooRWihXiAC0ALPje1aUzZZJALEYMCMzsyuQnHzDCAscZb9wUDs1LwfESz3E47bGv0r1pnEIsqL5p6zBZn7hGuf/x/5tYxCBjNscgAAAABJRU5ErkJggg=="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAER0lEQVRoQ+2ajVEUQRCFuyNQIxAiECIQIhAjkItAiECMQIlAiACMQC4CIQLvIhAiaOtt9Zx9s71787dbhWVXXVHA3u580697enqWqZGJyB4RvSWiA/3gd3ysrYgIn3v9LJkZv1cb19xBB/+BiE6dQafeGiBfieh7DVQRiIhg1j8qQOqAU667IqLPJUBZICLykoi+jACsiejWyMcbfJDeERG9HqAD0DkzP6bQ45pkEBGBfAABGGsYPKRxmzuTKs0TIjpzoACxYGZMzE5LAhGRb44XHgDAzJi9atOJunCA8IzzXQ8YBVEp3RARZBDsiYgumBleaG4iAu8A6IW5+R0RvR+T2iCIQvzQVBruCS+c5Eool1YlB0m9Md9Fyj4eghkDAYT1xDUzI05mMxGBbJHeg90x87E3ABfEiYkiCE3T7/TBWCcwq1nmwFwyM+S3ZT0QDToEd7BSCGQjxJc16DwpC9kvOTC9+2yBaFz8Min2gZmR97NNRJA+bcDiHo/M/Cr7ZkQkIvBmiBnce9/GSwxiNYnsdFAa2CIirpaZk1J+/F1NAIAJk7OllM1NVc8/zQ2wshan2AGPPDFzvKAmO0hTMxblYPBKV3RaEOuNYkmFJ4hIsxiJ4gUDD6XNxisdiLoNsREMpUH1iq1eBhAMJUx21nIkhiXAJqPOKwEEK+kn/dKameN9RLL757hQRKxXuhAIIPBGGHxVbMwEgnUkxMqKmffZkdUmgFoMSuVFLWRl4g+TbkOhA7GaayYrnSAsiGEdQnxgIWuytY3ktQAIUix2ezB3+S/xjIigYsUe3tpgrZT7jGi1vwSIfWCT+NAK4bc3OC5cEJ3sZRPUEiA20FEmA6zahlZ2LcWrnyEiqMxRocNWALGlxHMFof8gu7Q3s7T+LY/Y5f65xsh6kvQL2c0grV76tQti0bbWi5cZQOy2o1sQbYnSFWC7Ajnl/zOA2PWvK1H6BViDemhKEHfMqudefZ8y62PXTAxiy/iu0PU2Vk3kNTFIb/802VZ3KhCn7/Z3q6vyslngnpkPa+Q1IYj1xnbzQUGwAWrZDnL7WjXVb1I7yPEKunmHpTu6EY8UbaU1U2GiQ1/Mb9ApCC5CBgvdvGKJtW7QiQggwrYZXdC9wZapwsSNtStmXuTGS8sGnXM6MN7EDoON9vH4cykMZrCqQedApB0rGJi4eVAEk+tJe70DgRcM7OHT5vJdR2+AiY+/mrV0hiCdVhIuxbHfUfbRmwl+HMzYtg6yGQ5DL2tmewQCrSmU6LZrv9Szy8Fz96SzCidmus6FAl23ABIRnBUCIO47J/XakkBMNsPqH59CFb9LohLCGSOKwBgAKfY09aguGcRIDRsxe9JqHQIoxFX46TkLwYpBh5/eNfDy2SSvcETZBAOBDIaAStUGAMRfdn84yyPx6Ha8S5IKU/wui31AFYjjJcjFvngWv/2DQdsXz9DUzp59b4b+AJFTg4IAQeQDAAAAAElFTkSuQmCC"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABiklEQVRoQ+3Y4VHDMAwF4PcmgBE6AiPABBwbMAKMwgSMwAjABh2hTABMYM53bi+kThzLlqP0nL+pXX+SHetEXMjDC3GgQ6xlsmekZ0QpAn1rKQVWPO2mMuKcuwZwD+BA8nOo3gzEOXcD4A3ALgBeSD4dMZuABMQ7AJ+R00PytH7zkCkEgC+Sx+zYLlFmEL8AbknuzW+tHITHmNxauQiTEAnCHESKMAUpQZiBlCJMQGogVofUQkQhoTDbDS8bcUk6M7Am4gzinHsE8Br+/wPAA8mf2pDaiBjke1SY+RLgriZGAxGD+OhfjTJQDaOFSG2toacYo4mYOuzDc1IFo42Y/PyODn0RpgVi9h6pgWmFSF6IJZiWiCTE/0CCaY1YBMnFrIFYDFmKWQuRBVmAeQ59p38tGwBnjYLaJU82JIGJra8JQgTJwDRDiCELME0RRZAZTHNEMSSCWQVRBRIwvlPu+7B7kgeNr1JqTpOdxtSiY+87RBI1zTE9I5rRlczdMyKJmuaYnhHN6Erm/gOnUwJCWY8N3gAAAABJRU5ErkJggg=="},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADbUlEQVRoQ+1Z0XXUMBDcqQBSAaQCkgpIKgAqIFQAVABUQFIBUAFJBSQVcFRAUgFJBcObe9Jh6yR7ZcsPXjj9OLmz7B3Nzmq0B7snA/cEh+2A/GtM7hj5rxgh+drMngfQ5wDOllqAxVKL5DczO0oCvwRwvASYRYCQfGNmHwsBvwLwuTWY5kBIPjSzn2amq8ZVuD4N11sz2wega7OxBJBTM5M2NO7M7HEAtTKzB+HzMwBirdloCoTkgZl970T3AcB7/U9S13ed7w4BCFyT0RpIV+A3AMTGZpC8NrNH4YOmwm8GhOSJmX3qxH0M4DIBoiomsHG8AHDegpImQILAlVKRgQsAcf/oxUlS4KLwxZBSbLbwWwFJ819V6ToAfBKQ/FDAJAVWVS2OjY7mMDMbSCmwIPyvHZa0+kqlVUb4a+B/G0hP4GZ2EFZeFSmyEWNcATgMTOn7ZsKfxQhJ6UCrviVekiys8F4Ams7dKg41DM0FolyPAr8CsPFWA0A2AafCB7BfE3z33slAxvLcCaS4gdYCmgQkCFzlNvqpLcvhAaJgSXYtjcqwynG18KcCkS7iPrH2U+leUAFEi6HAow/7AkCba9WoBkIy3Z2zttwLJLAy6grGUE0BUhR4YkdKVStbnRLhr8v0WPCTxZ45MBUdbIkRANnFyzD9FoD04xpuRjIHpsFcJikz+CyJoujBQorp5PgyzKk6gNUA6b4kK/AktSRizYlgLszsZMgghsWaJHwXkLm0u3Ij3FSTvtUaIak9Q5uXhlxs/LsmRve9JLs+zXUAG2XEc2ByR+i80Vvi3YzUCjyNM5jK2IjQ7u8+DSbFYlT4g4wk9kECl0V32YcMk8Lp7mkFG+TuvBSBDHVEPBlCUqsYbUeccgtgzzM/lOPsyTM3fwjIYEdkKJiQkr+yLyxsiKXneTsvpV129qGnwMgdgOiYXcQMHd4GxV7TERlhJdf/rbId8fmezssWI2MHJtcy/tnctN/ILYsF/awwqbPo6bz0gHgm1ABpee/YAqdAun7qJnZEWgY09VmZzkvPtKZAetbAzHotz6lBNJynNI0Njl6zIwWSs94N42j6qN6RIAUicYqFdCNrGkGDh8llHHWLR65qqU+lHbX3k0CDl7d6hNL/NLVKo+631duXfs4OyNIrXPv8HSO1K7b0/feGkd8QasVCy9vvvgAAAABJRU5ErkJggg=="},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var c=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}}),u.computed=c}return{esModule:o,exports:i,options:u}}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":t.enterActiveClass,"leave-active-class":t.leaveActiveClass},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave}},[t.show?n("div",{staticClass:"toast",class:["toast-"+t.type],style:{backgroundColor:t.toastBackgroundColor}},[t.closeButton?n("button",{staticClass:"toast-close-button",attrs:{role:"button"},on:{click:t.hideToastr}},[t._v("×")]):t._e(),t._v(" "),t.progressBar?n("div",{staticClass:"toast-progress",style:"width: "+t.progress.percent+"%"}):t._e(),t._v(" "),n("div",{staticClass:"toast-icon"},[n("img",{attrs:{src:t.iconSrc}})]),t._v(" "),n("div",{staticClass:"toast-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"toast-message"},[t._v(t._s(t.message))])]):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0}])});
//# sourceMappingURL=cxlt-vue2-toastr.js.map