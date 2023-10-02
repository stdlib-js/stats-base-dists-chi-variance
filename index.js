// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Math.floor;function n(r){return e(r)===r}var t=Number.NEGATIVE_INFINITY;function i(r){return Math.abs(r)}var a,o=2147483647,u=2146435072,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,s=Object.prototype.hasOwnProperty,l="function"==typeof Symbol?Symbol:void 0,p="function"==typeof l?l.toStringTag:"",y=f&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return c.call(r);n=r[p],a=p,e=null!=(i=r)&&s.call(i,a);try{r[p]=void 0}catch(e){return c.call(r)}return t=c.call(r),e?r[p]=n:delete r[p],t}:function(r){return c.call(r)},g="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,e,n;if("function"!=typeof v)return!1;try{e=new v(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(g&&n instanceof Uint32Array||"[object Uint32Array]"===y(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,w=a,b="function"==typeof Float64Array,m="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m([1,3.14,-3.14,NaN]),n=e,r=(b&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=h,N="function"==typeof Uint8Array,U="function"==typeof Uint8Array?Uint8Array:null,I="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,256,257]),n=e,r=(N&&n instanceof Uint8Array||"[object Uint8Array]"===y(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,k=_,x="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,e,n;if("function"!=typeof F)return!1;try{e=new F(e=[1,3.14,-3.14,65536,65537]),n=e,r=(x&&n instanceof Uint16Array||"[object Uint16Array]"===y(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?j:function(){throw new Error("not implemented")};var T,O={uint16:S,uint8:k};(T=new O.uint16(1))[0]=4660;var V=52===new O.uint8(T.buffer)[0],$=!0===V?1:0,G=new E(1),H=new w(G.buffer);function W(r){return G[0]=r,H[$]}function C(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var L=-.16666666666666632;function P(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(L+i*n):r-(i*(.5*e-t*n)-e-t*L)}var M,R,Z=1048575,X=!0===V?0:1,Y=new E(1),q=new w(Y.buffer);!0===V?(M=1,R=0):(M=0,R=1);var z={HIGH:M,LOW:R},B=new E(1),D=new w(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,e){return D[J]=r,D[K]=e,B[0]}var rr=Number.POSITIVE_INFINITY,er=1023;function nr(r){return r===rr||r===t}var tr="function"==typeof Object.defineProperty?Object.defineProperty:null,ir=Object.defineProperty;function ar(r){return"number"==typeof r}function or(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function ur(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+or(i):or(i)+r,t&&(r="-"+r)),r}var fr=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function sr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!ar(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=ur(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=ur(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===cr.call(r.specifier)?cr.call(n):fr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function lr(r){return"string"==typeof r}var pr=Math.abs,yr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase,vr=String.prototype.replace,dr=/e\+(\d)$/,hr=/e-(\d)$/,wr=/^(\d+)$/,br=/^(\d+)e/,mr=/\.0$/,Ar=/\.0*e/,_r=/(\..*[^0])0*e/;function Er(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!ar(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":pr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=vr.call(n,_r,"$1e"),n=vr.call(n,Ar,"e"),n=vr.call(n,mr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=vr.call(n,dr,"e+0$1"),n=vr.call(n,hr,"e-0$1"),r.alternate&&(n=vr.call(n,wr,"$1."),n=vr.call(n,br,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===gr.call(r.specifier)?gr.call(n):yr.call(n)}function Nr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Ur(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Nr(t):Nr(t)+r}var Ir=String.fromCharCode,Sr=isNaN,kr=Array.isArray;function xr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Fr(r){var e,n,t,i,a,o,u,f,c;if(!kr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(lr(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=xr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Sr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Sr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=sr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Sr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Sr(a)?String(t.arg):Ir(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Er(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ur(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ur(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var jr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Tr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Or(r){var e,n,t,i;for(n=[],i=0,t=jr.exec(r);t;)(e=r.slice(i,jr.lastIndex-t[0].length)).length&&n.push(e),n.push(Tr(t)),i=jr.lastIndex,t=jr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Vr(r){return"string"==typeof r}function $r(r){var e,n,t;if(!Vr(r))throw new TypeError($r("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Or(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Fr.apply(null,n)}var Gr,Hr,Wr=Object.prototype,Cr=Wr.toString,Lr=Wr.__defineGetter__,Pr=Wr.__defineSetter__,Mr=Wr.__lookupGetter__,Rr=Wr.__lookupSetter__,Zr=function(){try{return tr({},"x",{}),!0}catch(r){return!1}}()?ir:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Cr.call(r))throw new TypeError($r("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Cr.call(n))throw new TypeError($r("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Mr.call(r,e)||Rr.call(r,e)?(t=r.__proto__,r.__proto__=Wr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Lr&&Lr.call(r,e,n.get),o&&Pr&&Pr.call(r,e,n.set),r};function Xr(r,e,n){Zr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===V?(Gr=1,Hr=0):(Gr=0,Hr=1);var Yr={HIGH:Gr,LOW:Hr},qr=new E(1),zr=new w(qr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e,n,t){return qr[0]=r,e[t]=zr[Br],e[t+n]=zr[Dr],e}function Kr(r){return Jr(r,[0,0],1,0)}Xr(Kr,"assign",Jr);var Qr=[0,0];function re(r,e){var n,t;return Kr.assign(r,Qr,1,0),n=Qr[0],n&=o,t=W(e),Q(n|=t&=2147483648,Qr[1])}function ee(e,n,t,a){return r(e)||nr(e)?(n[a]=e,n[a+t]=0,n):0!==e&&i(e)<22250738585072014e-324?(n[a]=4503599627370496*e,n[a+t]=-52,n):(n[a]=e,n[a+t]=0,n)}Xr((function(r){return ee(r,[0,0],1,0)}),"assign",ee);var ne=[0,0],te=[0,0];function ie(e,n){var i,a;return 0===n||0===e||r(e)||nr(e)?e:(ee(e,ne,1,0),n+=ne[1],n+=function(r){var e=W(r);return(e=(e&u)>>>20)-er|0}(e=ne[0]),n<-1074?re(0,e):n>1023?e<0?t:rr:(n<=-1023?(n+=52,a=2220446049250313e-31):a=1,Kr.assign(e,te,1,0),i=te[0],i&=2148532223,a*Q(i|=n+er<<20,te[1])))}function ae(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var oe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ue=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fe=16777216,ce=5.960464477539063e-8,se=ae(20),le=ae(20),pe=ae(20),ye=ae(20);function ge(r,n,t,i,a,o,u,f,c){var s,l,p,y,g,v,d,h,w;for(y=o,w=i[t],h=t,g=0;h>0;g++)l=ce*w|0,ye[g]=w-fe*l|0,w=i[h-1]+l,h-=1;if(w=ie(w,a),w-=8*e(.125*w),w-=d=0|w,p=0,a>0?(d+=g=ye[t-1]>>24-a,ye[t-1]-=g<<24-a,p=ye[t-1]>>23-a):0===a?p=ye[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,g=0;g<t;g++)h=ye[g],0===s?0!==h&&(s=1,ye[g]=16777216-h):ye[g]=16777215-h;if(a>0)switch(a){case 1:ye[t-1]&=8388607;break;case 2:ye[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ie(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=ye[g];if(0===h){for(v=1;0===ye[o-v];v++);for(g=t+1;g<=t+v;g++){for(c[f+g]=oe[u+g],l=0,h=0;h<=f;h++)l+=r[h]*c[f+(g-h)];i[g]=l}return ge(r,n,t+=v,i,a,o,u,f,c)}}if(0===w)for(t-=1,a-=24;0===ye[t];)t-=1,a-=24;else(w=ie(w,-a))>=fe?(l=ce*w|0,ye[t]=w-fe*l|0,a+=24,ye[t+=1]=l):ye[t]=0|w;for(l=ie(1,a),g=t;g>=0;g--)i[g]=l*ye[g],l*=ce;for(g=t;g>=0;g--){for(l=0,v=0;v<=y&&v<=t-g;v++)l+=ue[v]*i[g+v];pe[t-g]=l}for(l=0,g=t;g>=0;g--)l+=pe[g];for(n[0]=0===p?l:-l,l=pe[0]-l,g=1;g<=t;g++)l+=pe[g];return n[1]=0===p?l:-l,7&d}function ve(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)se[f]=c<0?0:oe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*se[o+(f-c)];le[f]=i}return ge(r,e,4,le,u,4,a,o,se)}var de=Math.round;function he(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=de(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(W(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(W(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var we=1.5707963267341256,be=6077100506506192e-26,me=2*be,Ae=3*be,_e=4*be,Ee=[0,0,0],Ne=[0,0];function Ue(r,e){var n,t,i,a,f,c,s;if((i=W(r)&o|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(i&Z)?he(r,i,e):i<=1073928572?r>0?(s=r-we,e[0]=s-be,e[1]=s-e[0]-be,1):(s=r+we,e[0]=s+be,e[1]=s-e[0]+be,-1):r>0?(s=r-2*we,e[0]=s-me,e[1]=s-e[0]-me,2):(s=r+2*we,e[0]=s+me,e[1]=s-e[0]+me,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?he(r,i,e):r>0?(s=r-3*we,e[0]=s-Ae,e[1]=s-e[0]-Ae,3):(s=r+3*we,e[0]=s+Ae,e[1]=s-e[0]+Ae,-3):1075388923===i?he(r,i,e):r>0?(s=r-4*we,e[0]=s-_e,e[1]=s-e[0]-_e,4):(s=r+4*we,e[0]=s+_e,e[1]=s-e[0]+_e,-4);if(i<1094263291)return he(r,i,e);if(i>=u)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Y[0]=r,q[X]}(r),s=Q(i-((t=(i>>20)-1046)<<20|0),n),f=0;f<2;f++)Ee[f]=0|s,s=16777216*(s-Ee[f]);for(Ee[2]=s,a=3;0===Ee[a-1];)a-=1;return c=ve(Ee,Ne,t,a),r<0?(e[0]=-Ne[0],e[1]=-Ne[1],-c):(e[0]=Ne[0],e[1]=Ne[1],c)}var Ie=[0,0],Se=3.141592653589793;function ke(r){return n(r/2)}function xe(r){return ke(r>0?r-1:r+1)}var Fe=Math.sqrt,je=!0===V?0:1,Te=new E(1),Oe=new w(Te.buffer);function Ve(r,e){return Te[0]=r,Oe[je]=e>>>0,Te[0]}function $e(r){return 0|r}var Ge=!0===V?1:0,He=new E(1),We=new w(He.buffer);function Ce(r,e){return He[0]=r,We[Ge]=e>>>0,He[0]}var Le=1048576,Pe=[1,1.5],Me=[0,.5849624872207642],Re=[0,1.350039202129749e-8],Ze=1048576,Xe=1083179008,Ye=1e300,qe=1e-300,ze=[0,0],Be=[0,0];function De(e,a){var u,f,c,s,l,p,y,g,v,d,h,w,b,m;if(r(e)||r(a))return NaN;if(Kr.assign(a,ze,1,0),l=ze[0],0===ze[1]){if(0===a)return 1;if(1===a)return e;if(-1===a)return 1/e;if(.5===a)return Fe(e);if(-.5===a)return 1/Fe(e);if(2===a)return e*e;if(3===a)return e*e*e;if(4===a)return(e*=e)*e;if(nr(a))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:i(r)<1==(e===rr)?0:rr}(e,a)}if(Kr.assign(e,ze,1,0),s=ze[0],0===ze[1]){if(0===s)return function(r,e){return e===t?rr:e===rr?0:e>0?xe(e)?r:0:xe(e)?re(rr,r):rr}(e,a);if(1===e)return 1;if(-1===e&&xe(a))return-1;if(nr(e))return e===t?De(-0,-a):a<0?0:rr}if(e<0&&!1===n(a))return(e-e)/(e-e);if(c=i(e),u=s&o|0,f=l&o|0,y=l>>>31|0,p=(p=s>>>31|0)&&xe(a)?-1:1,f>1105199104){if(f>1139802112)return function(r,e){return(W(r)&o)<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,a);if(u<1072693247)return 1===y?p*Ye*Ye:p*qe*qe;if(u>1072693248)return 0===y?p*Ye*Ye:p*qe*qe;h=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Ve(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Be,c)}else h=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,v,d,h,w,b,m,A,_,E;return m=0,n<Le&&(m-=53,n=W(e*=9007199254740992)),m+=(n>>20)-er|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=Le),o=Ve(i=(w=(e=Ce(e,n))-(c=Pe[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Ce(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Ve(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=Ve(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+Re[_])-((g=Ve(g=(p=.9617967009544373*l)+y+(s=Me[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=v,r}(Be,c,u);if(w=(d=(a-(g=Ve(a,0)))*h[0]+a*h[1])+(v=g*h[0]),Kr.assign(w,ze,1,0),b=$e(ze[0]),m=$e(ze[1]),b>=Xe){if(0!=(b-Xe|m))return p*Ye*Ye;if(d+8008566259537294e-32>w-v)return p*Ye*Ye}else if((b&o)>=1083231232){if(0!=(b-3230714880|m))return p*qe*qe;if(d<=w-v)return p*qe*qe}return w=function(r,e,n){var t,i,a,u,f,c,s,l,p,y;return p=((l=r&o|0)>>20)-er|0,s=0,l>1071644672&&(i=Ce(0,((s=r+(Ze>>p+1)>>>0)&~(Z>>(p=((s&o)>>20)-er|0)))>>>0),s=(s&Z|Ze)>>20-p>>>0,r<0&&(s=-s),e-=i),r=$e(r=W(c=1-((c=(a=.6931471824645996*(i=Ve(i=n+e,0)))+(u=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=u-(c-a))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?ie(c,s):Ce(c,r)}(b,v,d),p*w}var Je=Math.ceil;function Ke(r){return r<0?Je(r):e(r)}var Qe=1.4426950408889634,rn=1/(1<<28);function en(e){var n;return r(e)||e===rr?e:e===t?0:e>709.782712893384?rr:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<rn?1+e:function(r,e,n){var t,i,a,o;return ie(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-.6931471803691238*(n=Ke(e<0?Qe*e-.5:Qe*e+.5)),1.9082149292705877e-10*n,n)}function nn(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=en(r),2.5066282746310007*(n=r>143.01608?(t=De(r,.5*r-.25))*(t/n):De(r,r-.5)/n)*e}function tn(r,e){return e/((1+.5772156649015329*r)*r)}function an(a){var f,c,s,l;if(n(a)&&a<0||a===t||r(a))return NaN;if(0===a)return function(r){return 0===r&&1/r===t}(a)?t:rr;if(a>171.61447887182297)return rr;if(a<-170.5674972726612)return 0;if((c=i(a))>33)return a>=0?nn(a):(f=0==(1&(s=e(c)))?-1:1,(l=c-s)>.5&&(l=c-(s+=1)),l=c*function(r){var e;if(e=W(r),(e&=o)<=1072243195)return e<1045430272?r:P(r,0);if(e>=u)return NaN;switch(3&Ue(r,Ie)){case 0:return P(Ie[0],Ie[1]);case 1:return C(Ie[0],Ie[1]);case 2:return-P(Ie[0],Ie[1]);default:return-C(Ie[0],Ie[1])}}(Se*l),f*Se/(i(l)*nn(c)));for(l=1;a>=3;)l*=a-=1;for(;a<0;){if(a>-1e-9)return tn(a,l);l/=a,a+=1}for(;a<2;){if(a<1e-9)return tn(a,l);l/=a,a+=1}return 2===a?l:l*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(a-=2)}return function(e){var n;return r(e)||e<0?NaN:(n=function(e){return r(e)||e<0?NaN:1.4142135623730951*an((e+1)/2)/an(e/2)}(e),e-n*n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).variance=e();
//# sourceMappingURL=index.js.map
