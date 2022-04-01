// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-mean@esm/index.mjs";var a=s,i=t,m=e;var r=function(s,t){var e;return a(s)||a(t)||s<=0||t<=0?NaN:(e=m(s,t),t*t*i(1+2/s)-e*e)};export{r as default};
//# sourceMappingURL=index.mjs.map
