// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number,o=e.NEGATIVE_INFINITY;function i(r){return Math.abs(r)}var a,f=2146435072,u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,l=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol:void 0,p="function"==typeof s?s.toStringTag:"",y=u&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return c.call(r);t=r[p],i=p,n=null!=(o=r)&&l.call(o,i);try{r[p]=void 0}catch(n){return c.call(r)}return e=c.call(r),n?r[p]=t:delete r[p],e}:function(r){return c.call(r)},v="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,w="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(v&&t instanceof Uint32Array||"[object Uint32Array]"===y(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var h,g=a,A="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(A&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var m,N=h,I="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(I&&t instanceof Uint8Array||"[object Uint8Array]"===y(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var T,S=m,j="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,65536,65537]),t=n,r=(j&&t instanceof Uint16Array||"[object Uint16Array]"===y(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var O,k={uint16:T,uint8:S};(O=new k.uint16(1))[0]=4660;var x=52===new k.uint8(O.buffer)[0],G=!0===x?1:0,H=new N(1),W=new g(H.buffer);function L(r){return H[0]=r,W[G]}function P(r,n){var t,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*e-r*n))}var Y=-.16666666666666632;function $(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(Y+o*t):r-(o*(.5*n-e*t)-n-e*Y)}var M,C=1048575,R="function"==typeof Float64Array,Z="function"==typeof Float64Array?Float64Array:null,X="function"==typeof Float64Array?Float64Array:void 0;M=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),t=n,r=(R&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?X:function(){throw new Error("not implemented")};var q,z,B,D=!0===x?0:1,J=new M(1),K=new g(J.buffer),Q="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;q=function(){var r,n,t;if("function"!=typeof rr)return!1;try{n=new rr([1,3.14,-3.14,NaN]),t=n,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?nr:function(){throw new Error("not implemented")},!0===x?(z=1,B=0):(z=0,B=1);var tr={HIGH:z,LOW:B},er=new q(1),or=new g(er.buffer),ir=tr.HIGH,ar=tr.LOW;function fr(r,n){return or[ir]=r,or[ar]=n,er[0]}var ur=Number.POSITIVE_INFINITY,cr=e.NEGATIVE_INFINITY,lr=1023,sr=Number.POSITIVE_INFINITY,pr=e.NEGATIVE_INFINITY;function yr(r){return r===sr||r===pr}var vr="function"==typeof Object.defineProperty?Object.defineProperty:null,dr=Object.defineProperty;function wr(r){return"number"==typeof r}function hr(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function gr(r,n,t){var e=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+hr(o):hr(o)+r,e&&(r="-"+r)),r}var Ar=String.prototype.toLowerCase,br=String.prototype.toUpperCase;function Fr(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!wr(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=gr(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=gr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===br.call(r.specifier)?br.call(t):Ar.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function mr(r){return"string"==typeof r}var Nr=Math.abs,Ir=String.prototype.toLowerCase,Er=String.prototype.toUpperCase,_r=String.prototype.replace,Tr=/e\+(\d)$/,Sr=/e-(\d)$/,jr=/^(\d+)$/,Ur=/^(\d+)e/,Vr=/\.0$/,Or=/\.0*e/,kr=/(\..*[^0])0*e/;function xr(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!wr(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":Nr(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=_r.call(t,kr,"$1e"),t=_r.call(t,Or,"e"),t=_r.call(t,Vr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_r.call(t,Tr,"e+0$1"),t=_r.call(t,Sr,"e-0$1"),r.alternate&&(t=_r.call(t,jr,"$1."),t=_r.call(t,Ur,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Er.call(r.specifier)?Er.call(t):Ir.call(t)}function Gr(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Hr(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Gr(e):Gr(e)+r}var Wr=String.fromCharCode,Lr=isNaN,Pr=Array.isArray;function Yr(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function $r(r){var n,t,e,o,i,a,f,u,c;if(!Pr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",f=1,u=0;u<r.length;u++)if(mr(e=r[u]))a+=e;else{if(n=void 0!==e.precision,!(e=Yr(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(o=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,Lr(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,Lr(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=Fr(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Lr(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Lr(i)?String(e.arg):Wr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=xr(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=gr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Hr(e.arg,e.width,e.padRight)),a+=e.arg||"",f+=1}return a}var Mr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cr(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Rr(r){var n,t,e,o;for(t=[],o=0,e=Mr.exec(r);e;)(n=r.slice(o,Mr.lastIndex-e[0].length)).length&&t.push(n),t.push(Cr(e)),o=Mr.lastIndex,e=Mr.exec(r);return(n=r.slice(o)).length&&t.push(n),t}function Zr(r){return"string"==typeof r}function Xr(r){var n,t;if(!Zr(r))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[Rr(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return $r.apply(null,n)}var qr=Object.prototype,zr=qr.toString,Br=qr.__defineGetter__,Dr=qr.__defineSetter__,Jr=qr.__lookupGetter__,Kr=qr.__lookupSetter__,Qr=function(){try{return vr({},"x",{}),!0}catch(r){return!1}}()?dr:function(r,n,t){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===zr.call(r))throw new TypeError(Xr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===zr.call(t))throw new TypeError(Xr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Jr.call(r,n)||Kr.call(r,n)?(e=r.__proto__,r.__proto__=qr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Br&&Br.call(r,n,t.get),a&&Dr&&Dr.call(r,n,t.set),r};function rn(r,n,t){Qr(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var nn,tn,en,on="function"==typeof Float64Array,an="function"==typeof Float64Array?Float64Array:null,fn="function"==typeof Float64Array?Float64Array:void 0;nn=function(){var r,n,t;if("function"!=typeof an)return!1;try{n=new an([1,3.14,-3.14,NaN]),t=n,r=(on&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?fn:function(){throw new Error("not implemented")},!0===x?(tn=1,en=0):(tn=0,en=1);var un={HIGH:tn,LOW:en},cn=new nn(1),ln=new g(cn.buffer),sn=un.HIGH,pn=un.LOW;function yn(r,n,t,e){return cn[0]=r,n[e]=ln[sn],n[e+t]=ln[pn],n}function vn(r){return yn(r,[0,0],1,0)}rn(vn,"assign",yn);var dn=[0,0];function wn(r,n){var t,e;return vn.assign(r,dn,1,0),t=dn[0],t&=2147483647,e=L(n),fr(t|=e&=2147483648,dn[1])}function hn(n,t,e,o){return r(n)||yr(n)?(t[o]=n,t[o+e]=0,t):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}rn((function(r){return hn(r,[0,0],1,0)}),"assign",hn);var gn,An,bn,Fn="function"==typeof Float64Array,mn="function"==typeof Float64Array?Float64Array:null,Nn="function"==typeof Float64Array?Float64Array:void 0;gn=function(){var r,n,t;if("function"!=typeof mn)return!1;try{n=new mn([1,3.14,-3.14,NaN]),t=n,r=(Fn&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Nn:function(){throw new Error("not implemented")},!0===x?(An=1,bn=0):(An=0,bn=1);var In={HIGH:An,LOW:bn},En=new gn(1),_n=new g(En.buffer),Tn=In.HIGH,Sn=In.LOW;function jn(r,n,t,e){return En[0]=r,n[e]=_n[Tn],n[e+t]=_n[Sn],n}function Un(r){return jn(r,[0,0],1,0)}rn(Un,"assign",jn);var Vn=[0,0],On=[0,0];function kn(n,t){var e,o;return 0===t||0===n||r(n)||yr(n)?n:(hn(n,Vn,1,0),t+=Vn[1],t+=function(r){var n=L(r);return(n=(n&f)>>>20)-lr|0}(n=Vn[0]),t<-1074?wn(0,n):t>1023?n<0?cr:ur:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,Un.assign(n,On,1,0),e=On[0],e&=2148532223,o*fr(e|=t+lr<<20,On[1])))}function xn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Gn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Hn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Wn=16777216,Ln=5.960464477539063e-8,Pn=xn(20),Yn=xn(20),$n=xn(20),Mn=xn(20);function Cn(r,t,e,o,i,a,f,u,c){var l,s,p,y,v,d,w,h,g;for(y=a,g=o[e],h=e,v=0;h>0;v++)s=Ln*g|0,Mn[v]=g-Wn*s|0,g=o[h-1]+s,h-=1;if(g=kn(g,i),g-=8*n(.125*g),g-=w=0|g,p=0,i>0?(w+=v=Mn[e-1]>>24-i,Mn[e-1]-=v<<24-i,p=Mn[e-1]>>23-i):0===i?p=Mn[e-1]>>23:g>=.5&&(p=2),p>0){for(w+=1,l=0,v=0;v<e;v++)h=Mn[v],0===l?0!==h&&(l=1,Mn[v]=16777216-h):Mn[v]=16777215-h;if(i>0)switch(i){case 1:Mn[e-1]&=8388607;break;case 2:Mn[e-1]&=4194303}2===p&&(g=1-g,0!==l&&(g-=kn(1,i)))}if(0===g){for(h=0,v=e-1;v>=a;v--)h|=Mn[v];if(0===h){for(d=1;0===Mn[a-d];d++);for(v=e+1;v<=e+d;v++){for(c[u+v]=Gn[f+v],s=0,h=0;h<=u;h++)s+=r[h]*c[u+(v-h)];o[v]=s}return Cn(r,t,e+=d,o,i,a,f,u,c)}}if(0===g)for(e-=1,i-=24;0===Mn[e];)e-=1,i-=24;else(g=kn(g,-i))>=Wn?(s=Ln*g|0,Mn[e]=g-Wn*s|0,i+=24,Mn[e+=1]=s):Mn[e]=0|g;for(s=kn(1,i),v=e;v>=0;v--)o[v]=s*Mn[v],s*=Ln;for(v=e;v>=0;v--){for(s=0,d=0;d<=y&&d<=e-v;d++)s+=Hn[d]*o[v+d];$n[e-v]=s}for(s=0,v=e;v>=0;v--)s+=$n[v];for(t[0]=0===p?s:-s,s=$n[0]-s,v=1;v<=e;v++)s+=$n[v];return t[1]=0===p?s:-s,7&w}function Rn(r,n,t,e){var o,i,a,f,u,c,l;for((i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(a=e-1),l=a+4,u=0;u<=l;u++)Pn[u]=c<0?0:Gn[c],c+=1;for(u=0;u<=4;u++){for(o=0,c=0;c<=a;c++)o+=r[c]*Pn[a+(u-c)];Yn[u]=o}return Cn(r,n,4,Yn,f,4,i,a,Pn)}var Zn=Math.round;function Xn(r,n,t){var e,o,i,a,f;return i=r-1.5707963267341256*(e=Zn(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=i-a,f-(L(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),t[0]=i-a,f-(L(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),t[0]=i-a)),t[1]=i-t[0]-a,e}var qn=1.5707963267341256,zn=6077100506506192e-26,Bn=2*zn,Dn=3*zn,Jn=4*zn,Kn=[0,0,0],Qn=[0,0];function rt(r,n){var t,e,o,i,a,u,c;if((o=2147483647&L(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(o&C)?Xn(r,o,n):o<=1073928572?r>0?(c=r-qn,n[0]=c-zn,n[1]=c-n[0]-zn,1):(c=r+qn,n[0]=c+zn,n[1]=c-n[0]+zn,-1):r>0?(c=r-2*qn,n[0]=c-Bn,n[1]=c-n[0]-Bn,2):(c=r+2*qn,n[0]=c+Bn,n[1]=c-n[0]+Bn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Xn(r,o,n):r>0?(c=r-3*qn,n[0]=c-Dn,n[1]=c-n[0]-Dn,3):(c=r+3*qn,n[0]=c+Dn,n[1]=c-n[0]+Dn,-3):1075388923===o?Xn(r,o,n):r>0?(c=r-4*qn,n[0]=c-Jn,n[1]=c-n[0]-Jn,4):(c=r+4*qn,n[0]=c+Jn,n[1]=c-n[0]+Jn,-4);if(o<1094263291)return Xn(r,o,n);if(o>=f)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return J[0]=r,K[D]}(r),c=fr(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Kn[a]=0|c,c=16777216*(c-Kn[a]);for(Kn[2]=c,i=3;0===Kn[i-1];)i-=1;return u=Rn(Kn,Qn,e,i),r<0?(n[0]=-Qn[0],n[1]=-Qn[1],-u):(n[0]=Qn[0],n[1]=Qn[1],u)}var nt=[0,0],tt=Number.POSITIVE_INFINITY,et=e.NEGATIVE_INFINITY,ot=3.141592653589793;function it(r){return t(r/2)}function at(r){return it(r>0?r-1:r+1)}var ft=Math.sqrt;function ut(r){return Math.abs(r)}var ct,lt,st,pt="function"==typeof Float64Array,yt="function"==typeof Float64Array?Float64Array:null,vt="function"==typeof Float64Array?Float64Array:void 0;ct=function(){var r,n,t;if("function"!=typeof yt)return!1;try{n=new yt([1,3.14,-3.14,NaN]),t=n,r=(pt&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?vt:function(){throw new Error("not implemented")},!0===x?(lt=1,st=0):(lt=0,st=1);var dt={HIGH:lt,LOW:st},wt=new ct(1),ht=new g(wt.buffer),gt=dt.HIGH,At=dt.LOW;function bt(r,n,t,e){return wt[0]=r,n[e]=ht[gt],n[e+t]=ht[At],n}function Ft(r){return bt(r,[0,0],1,0)}rn(Ft,"assign",bt);var mt,Nt="function"==typeof Float64Array,It="function"==typeof Float64Array?Float64Array:null,Et="function"==typeof Float64Array?Float64Array:void 0;mt=function(){var r,n,t;if("function"!=typeof It)return!1;try{n=new It([1,3.14,-3.14,NaN]),t=n,r=(Nt&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Et:function(){throw new Error("not implemented")};var _t=!0===x?0:1,Tt=new mt(1),St=new g(Tt.buffer);function jt(r,n){return Tt[0]=r,St[_t]=n>>>0,Tt[0]}function Ut(r){return 0|r}var Vt,Ot=e.NEGATIVE_INFINITY,kt=Number.POSITIVE_INFINITY,xt=2147483647,Gt="function"==typeof Float64Array,Ht="function"==typeof Float64Array?Float64Array:null,Wt="function"==typeof Float64Array?Float64Array:void 0;Vt=function(){var r,n,t;if("function"!=typeof Ht)return!1;try{n=new Ht([1,3.14,-3.14,NaN]),t=n,r=(Gt&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Wt:function(){throw new Error("not implemented")};var Lt=!0===x?1:0,Pt=new Vt(1),Yt=new g(Pt.buffer);function $t(r,n){return Pt[0]=r,Yt[Lt]=n>>>0,Pt[0]}var Mt=1048576,Ct=[1,1.5],Rt=[0,.5849624872207642],Zt=[0,1.350039202129749e-8],Xt=1048576,qt=1083179008,zt=1e300,Bt=1e-300,Dt=[0,0],Jt=[0,0];function Kt(n,e){var o,i,a,f,u,c,l,s,p,y,v,d,w,h;if(r(n)||r(e))return NaN;if(Ft.assign(e,Dt,1,0),u=Dt[0],0===Dt[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return ft(n);if(-.5===e)return 1/ft(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(yr(e))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:ut(r)<1==(n===kt)?0:kt}(n,e)}if(Ft.assign(n,Dt,1,0),f=Dt[0],0===Dt[1]){if(0===f)return function(r,n){return n===Ot?kt:n===kt?0:n>0?at(n)?r:0:at(n)?wn(kt,r):kt}(n,e);if(1===n)return 1;if(-1===n&&at(e))return-1;if(yr(n))return n===Ot?Kt(-0,-e):e<0?0:kt}if(n<0&&!1===t(e))return(n-n)/(n-n);if(a=ut(n),o=f&xt|0,i=u&xt|0,l=u>>>31|0,c=(c=f>>>31|0)&&at(e)?-1:1,i>1105199104){if(i>1139802112)return function(r,n){return(L(r)&xt)<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,e);if(o<1072693247)return 1===l?c*zt*zt:c*Bt*Bt;if(o>1072693248)return 0===l?c*zt*zt:c*Bt*Bt;v=function(r,n){var t,e,o,i,a,f;return t=(a=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=jt(e=(i=1.4426950216293335*o)+a,0))-i),r[0]=e,r[1]=t,r}(Jt,a)}else v=function(r,n,t){var e,o,i,a,f,u,c,l,s,p,y,v,d,w,h,g,A,b,F,m,N;return b=0,t<Mt&&(b-=53,t=L(n*=9007199254740992)),b+=(t>>20)-lr|0,t=1072693248|(F=1048575&t|0),F<=235662?m=0:F<767610?m=1:(m=0,b+=1,t-=Mt),a=jt(o=(g=(n=$t(n,t))-(c=Ct[m]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),u=$t(0,e+=m<<18),h=(i=o*o)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),u=jt(u=3+(i=a*a)+(h+=(f=A*(g-a*u-a*(n-(u-c))))*(a+o)),0),d=(y=-7.028461650952758e-9*(s=jt(s=(g=a*u)+(A=f*u+(h-(u-3-i))*o),0))+.9617966939259756*(A-(s-g))+Zt[m])-((v=jt(v=(p=.9617967009544373*s)+y+(l=Rt[m])+(w=b),0))-w-l-p),r[0]=v,r[1]=d,r}(Jt,a,o);if(d=(y=(e-(s=jt(e,0)))*v[0]+e*v[1])+(p=s*v[0]),Ft.assign(d,Dt,1,0),w=Ut(Dt[0]),h=Ut(Dt[1]),w>=qt){if(0!=(w-qt|h))return c*zt*zt;if(y+8008566259537294e-32>d-p)return c*zt*zt}else if((w&xt)>=1083231232){if(0!=(w-3230714880|h))return c*Bt*Bt;if(y<=d-p)return c*Bt*Bt}return d=function(r,n,t){var e,o,i,a,f,u,c,l,s,p;return s=((l=r&xt|0)>>20)-lr|0,c=0,l>1071644672&&(o=$t(0,((c=r+(Xt>>s+1)>>>0)&~(C>>(s=((c&xt)>>20)-lr|0)))>>>0),c=(c&C|Xt)>>20-s>>>0,r<0&&(c=-c),n-=o),r=Ut(r=L(u=1-((u=(i=.6931471824645996*(o=jt(o=t+n,0)))+(a=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=u-(o=u*u)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-i))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?kn(u,c):$t(u,r)}(w,p,y),c*d}var Qt=Math.ceil;function re(r){return r<0?Qt(r):n(r)}var ne=e.NEGATIVE_INFINITY,te=Number.POSITIVE_INFINITY,ee=1.4426950408889634,oe=1/(1<<28);function ie(n){var t;return r(n)||n===te?n:n===ne?0:n>709.782712893384?te:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<oe?1+n:function(r,n,t){var e,o,i,a;return kn(1-(n-(e=r-n)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(n-.6931471803691238*(t=re(n<0?ee*n-.5:ee*n+.5)),1.9082149292705877e-10*t,t)}function ae(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=ie(r),2.5066282746310007*(t=r>143.01608?(e=Kt(r,.5*r-.25))*(e/t):Kt(r,r-.5)/t)*n}function fe(r,n){return n/((1+.5772156649015329*r)*r)}function ue(e){var a,u,c,l;if(t(e)&&e<0||e===et||r(e))return NaN;if(0===e)return function(r){return 0===r&&1/r===o}(e)?et:tt;if(e>171.61447887182297)return tt;if(e<-170.5674972726612)return 0;if((u=i(e))>33)return e>=0?ae(e):(a=0==(1&(c=n(u)))?-1:1,(l=u-c)>.5&&(l=u-(c+=1)),l=u*function(r){var n;if(n=L(r),(n&=2147483647)<=1072243195)return n<1045430272?r:$(r,0);if(n>=f)return NaN;switch(3&rt(r,nt)){case 0:return $(nt[0],nt[1]);case 1:return P(nt[0],nt[1]);case 2:return-$(nt[0],nt[1]);default:return-P(nt[0],nt[1])}}(ot*l),a*ot/(i(l)*ae(u)));for(l=1;e>=3;)l*=e-=1;for(;e<0;){if(e>-1e-9)return fe(e,l);l/=e,e+=1}for(;e<2;){if(e<1e-9)return fe(e,l);l/=e,e+=1}return 2===e?l:l*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(e-=2)}return function(n,t){var e;return r(n)||r(t)||n<=0||t<=0?NaN:(e=function(n,t){return r(n)||r(t)||n<=0||t<=0?NaN:t*ue(1+1/n)}(n,t),t*t*ue(1+2/n)-e*e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).variance=n();
//# sourceMappingURL=index.js.map
