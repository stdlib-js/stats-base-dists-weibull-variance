// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-mean@esm/index.mjs";function i(i,m){var a;return s(i)||s(m)||i<=0||m<=0?NaN:(a=e(i,m),m*m*t(1+2/i)-a*a)}export{i as default};
//# sourceMappingURL=index.mjs.map