"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=s(function(f,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-gamma/dist'),a=require('@stdlib/stats-base-dists-weibull-mean/dist');function c(e,r){var i;return u(e)||u(r)||e<=0||r<=0?NaN:(i=a(e,r),r*r*v(1+2/e)-i*i)}n.exports=c
});var q=t();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
