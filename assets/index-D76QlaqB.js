(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const I=6048e5,B=864e5,p=Symbol.for("constructDateFrom");function y(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&p in e?e[p](t):e instanceof Date?new e.constructor(t):new Date(t)}function h(e,t){return y(t||e,e)}let j={};function x(){return j}function D(e,t){var u,c,d,m;const n=x(),r=(t==null?void 0:t.weekStartsOn)??((c=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((m=(d=n.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,a=h(e,t==null?void 0:t.in),i=a.getDay(),o=(i<r?7:0)+i-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function S(e,t){return D(e,{...t,weekStartsOn:1})}function A(e,t){const n=h(e,t==null?void 0:t.in),r=n.getFullYear(),a=y(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=S(a),o=y(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const u=S(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function q(e){const t=h(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function G(e,...t){const n=y.bind(null,t.find(r=>typeof r=="object"));return t.map(n)}function F(e,t){const n=h(e,t==null?void 0:t.in);return n.setHours(0,0,0,0),n}function R(e,t,n){const[r,a]=G(n==null?void 0:n.in,e,t),i=F(r),o=F(a),u=+i-q(i),c=+o-q(o);return Math.round((u-c)/B)}function J(e,t){const n=A(e,t),r=y(e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),S(r)}function V(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function $(e){return!(!V(e)&&typeof e!="number"||isNaN(+h(e)))}function z(e,t){const n=h(e,t==null?void 0:t.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const U={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},K=(e,t,n)=>{let r;const a=U[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function W(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Z={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},tt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},et={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},nt={date:W({formats:Z,defaultWidth:"full"}),time:W({formats:tt,defaultWidth:"full"}),dateTime:W({formats:et,defaultWidth:"full"})},rt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},at=(e,t,n,r)=>rt[e];function v(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,u=n!=null&&n.width?String(n.width):o;a=e.formattingValues[u]||e.formattingValues[o]}else{const o=e.defaultWidth,u=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[o]}const i=e.argumentCallback?e.argumentCallback(t):t;return a[i]}}const it={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ot={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},st={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ut={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ct={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},dt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},lt=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},mt={ordinalNumber:lt,era:v({values:it,defaultWidth:"wide"}),quarter:v({values:ot,defaultWidth:"wide",argumentCallback:e=>e-1}),month:v({values:st,defaultWidth:"wide"}),day:v({values:ut,defaultWidth:"wide"}),dayPeriod:v({values:ct,defaultWidth:"wide",formattingValues:dt,defaultFormattingWidth:"wide"})};function P(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const o=i[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(u)?ht(u,g=>g.test(o)):ft(u,g=>g.test(o));let d;d=e.valueCallback?e.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d;const m=t.slice(o.length);return{value:d,rest:m}}}function ft(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function ht(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function gt(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;const u=t.slice(a.length);return{value:o,rest:u}}}const wt=/^(\d+)(th|st|nd|rd)?/i,yt=/\d+/i,bt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Mt={any:[/^b/i,/^(a|c)/i]},kt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ot={any:[/1/i,/2/i,/3/i,/4/i]},vt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Pt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Dt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},St={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},xt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Tt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Wt={ordinalNumber:gt({matchPattern:wt,parsePattern:yt,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),quarter:P({matchPatterns:kt,defaultMatchWidth:"wide",parsePatterns:Ot,defaultParseWidth:"any",valueCallback:e=>e+1}),month:P({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any"}),day:P({matchPatterns:Dt,defaultMatchWidth:"wide",parsePatterns:St,defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:xt,defaultMatchWidth:"any",parsePatterns:Tt,defaultParseWidth:"any"})},Yt={code:"en-US",formatDistance:K,formatLong:nt,formatRelative:at,localize:mt,match:Wt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Et(e,t){const n=h(e,t==null?void 0:t.in);return R(n,z(n))+1}function pt(e,t){const n=h(e,t==null?void 0:t.in),r=+S(n)-+J(n);return Math.round(r/I)+1}function Q(e,t){var m,g,k,O;const n=h(e,t==null?void 0:t.in),r=n.getFullYear(),a=x(),i=(t==null?void 0:t.firstWeekContainsDate)??((g=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((O=(k=a.locale)==null?void 0:k.options)==null?void 0:O.firstWeekContainsDate)??1,o=y((t==null?void 0:t.in)||e,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const u=D(o,t),c=y((t==null?void 0:t.in)||e,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const d=D(c,t);return+n>=+u?r+1:+n>=+d?r:r-1}function qt(e,t){var u,c,d,m;const n=x(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(d=n.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,a=Q(e,t),i=y((t==null?void 0:t.in)||e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),D(i,t)}function Ft(e,t){const n=h(e,t==null?void 0:t.in),r=+D(n,t)-+qt(n,t);return Math.round(r/I)+1}function s(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const w={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return s(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):s(n+1,2)},d(e,t){return s(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return s(e.getHours()%12||12,t.length)},H(e,t){return s(e.getHours(),t.length)},m(e,t){return s(e.getMinutes(),t.length)},s(e,t){return s(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return s(a,t.length)}},M={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},C={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return w.y(e,t)},Y:function(e,t,n,r){const a=Q(e,r),i=a>0?a:1-a;if(t==="YY"){const o=i%100;return s(o,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):s(i,t.length)},R:function(e,t){const n=A(e);return s(n,t.length)},u:function(e,t){const n=e.getFullYear();return s(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return s(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return w.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=Ft(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):s(a,t.length)},I:function(e,t,n){const r=pt(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):s(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):w.d(e,t)},D:function(e,t,n){const r=Et(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):s(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return s(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return s(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return s(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=M.noon:r===0?a=M.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=M.evening:r>=12?a=M.afternoon:r>=4?a=M.morning:a=M.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):w.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):w.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):w.s(e,t)},S:function(e,t){return w.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return L(r);case"XXXX":case"XX":return b(r);case"XXXXX":case"XXX":default:return b(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return L(r);case"xxxx":case"xx":return b(r);case"xxxxx":case"xxx":default:return b(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+N(r,":");case"OOOO":default:return"GMT"+b(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+N(r,":");case"zzzz":default:return"GMT"+b(r,":")}},t:function(e,t,n){const r=Math.trunc(+e/1e3);return s(r,t.length)},T:function(e,t,n){return s(+e,t.length)}};function N(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+t+s(i,2)}function L(e,t){return e%60===0?(e>0?"-":"+")+s(Math.abs(e)/60,2):b(e,t)}function b(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=s(Math.trunc(r/60),2),i=s(r%60,2);return n+a+t+i}const H=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},X=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Ct=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return H(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",H(r,t)).replace("{{time}}",X(a,t))},Nt={p:X,P:Ct},Lt=/^D+$/,Ht=/^Y+$/,It=["D","DD","YY","YYYY"];function At(e){return Lt.test(e)}function Qt(e){return Ht.test(e)}function Xt(e,t,n){const r=_t(e,t,n);if(console.warn(r),It.includes(e))throw new RangeError(r)}function _t(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Bt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,jt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Gt=/^'([^]*?)'?$/,Rt=/''/g,Jt=/[a-zA-Z]/;function Y(e,t,n){var m,g,k,O;const r=x(),a=r.locale??Yt,i=r.firstWeekContainsDate??((g=(m=r.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??1,o=r.weekStartsOn??((O=(k=r.locale)==null?void 0:k.options)==null?void 0:O.weekStartsOn)??0,u=h(e,n==null?void 0:n.in);if(!$(u))throw new RangeError("Invalid time value");let c=t.match(jt).map(f=>{const l=f[0];if(l==="p"||l==="P"){const T=Nt[l];return T(f,a.formatLong)}return f}).join("").match(Bt).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const l=f[0];if(l==="'")return{isToken:!1,value:Vt(f)};if(C[l])return{isToken:!0,value:f};if(l.match(Jt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+l+"`");return{isToken:!1,value:f}});a.localize.preprocessor&&(c=a.localize.preprocessor(u,c));const d={firstWeekContainsDate:i,weekStartsOn:o,locale:a};return c.map(f=>{if(!f.isToken)return f.value;const l=f.value;(Qt(l)||At(l))&&Xt(l,t,String(e));const T=C[l[0]];return T(u,l,a.localize,d)}).join("")}function Vt(e){const t=e.match(Gt);return t?t[1].replace(Rt,"'"):e}const $t={dateInput:document.querySelector("#date"),timeInput:document.querySelector("#time"),run(){this.setMinDateAndTime(),this.addDateChangeListener()},setMinDateAndTime(){const e=new Date,t=Y(e,"yyyy-MM-dd"),n=Y(e,"HH:mm");this.dateInput.setAttribute("min",t),this.timeInput.setAttribute("min",n)},addDateChangeListener(){this.dateInput.addEventListener("change",()=>{const e=new Date(this.dateInput.value),t=new Date;e.toDateString()===t.toDateString()?this.timeInput.setAttribute("min",Y(t,"HH:mm")):this.timeInput.removeAttribute("min")})}},zt={openModalButton:document.querySelector(".add"),modalDialog:document.querySelector("dialog"),closeModalButton:document.querySelector(".modalClose"),modalDate:document.querySelector("#date"),modalTime:document.querySelector("#time"),modalTask:document.querySelector("#task"),openModal:function(){this.openModalButton.addEventListener("click",()=>{this.modalDialog.showModal(),$t.run()})},closeModal:function(){this.closeModalButton.addEventListener("click",e=>{e.preventDefault(),this.modalDate.value&&this.modalTime.value&&this.modalTask.value&&(Ut(this.modalDate.value,this.modalTime.value,this.modalTask.value),this.modalTask.value=""),this.modalDialog.close()})},run:function(){this.openModal(),this.closeModal()}};zt.run();class _{constructor(t,n,r,a=null){this.id=a||Date.now().toString(),this.date=t,this.time=n,this.task=r}createTaskDomElement(){const t=document.createElement("div");return t.classList.add("task-item"),t.dataset.id=this.id,t.innerHTML=`
            <div class="top"> 
                <span>${this.date}</span> 
                <span>${this.time}</span> 
            </div>
            <div class="bottom">
            <p>${this.task}</p> 
            <button class="delete-task">Delete</button>
            </div>
        `,t.querySelector(".delete-task").addEventListener("click",()=>{Zt(this.id),t.remove()}),t}}function Ut(e,t,n){const r=new _(e,t,n),a=r.createTaskDomElement(),i=document.querySelector("main");i&&(i.appendChild(a),Kt(r))}function Kt(e){const t=E();t.push(e),localStorage.setItem("tasks",JSON.stringify(t))}function E(){const e=localStorage.getItem("tasks");return e?JSON.parse(e):[]}function Zt(e){let t=E();t=t.filter(n=>n.id!==e),localStorage.setItem("tasks",JSON.stringify(t))}function te(){const e=E(),t=document.querySelector("main");t&&e.length>0&&e.forEach(n=>{const r=new _(n.date,n.time,n.task,n.id);t.appendChild(r.createTaskDomElement())})}document.addEventListener("DOMContentLoaded",te);
