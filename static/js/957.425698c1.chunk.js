"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{957:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var t=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),u=r(689),o=r(87),l=r(390),d=r(184),h=function(e){var n=e.movie,r=n.title,t=n.genres,a=n.release_date,c=n.overview,s=n.vote_average,i=n.poster_path,u=(s/10*100).toFixed(0),o="https://image.tmdb.org/t/p/w300/".concat(i);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:o,alt:"film-card"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:r}),(0,d.jsxs)("h3",{children:["Release: ",a]}),(0,d.jsxs)("p",{children:["User score: ",u,"%"]}),(0,d.jsx)("h2",{children:"Overwiew"}),(0,d.jsx)("p",{children:c}),(0,d.jsx)("h2",{children:"Genre"}),(0,d.jsx)("p",{children:t&&t[0].name})]})]})})},p=function(){var e,n,r=(0,u.TH)(),c=(0,i.useRef)(null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),p=(0,u.UO)().movieId,f=(0,i.useState)({}),v=(0,a.Z)(f,2),x=v[0],j=v[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.BG)(n);case 3:r=e.sent,j(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();e(p)}),[p]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("h1",{children:["MovieDetails: ",p]}),(0,d.jsx)(o.rU,{to:c.current,children:"Go back"}),(0,d.jsx)(h,{movie:x}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(u.j3,{})})]})}},390:function(e,n,r){r.d(n,{BG:function(){return d},LI:function(){return l},_k:function(){return o}});var t=r(861),a=r(757),c=r.n(a),s=r(243),i="https://api.themoviedb.org/3",u="0638d4937acfae28483912f2b585d98b",o=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=957.425698c1.chunk.js.map