"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[5],{3005:function(e,i,n){n.r(i),n.d(i,{default:function(){return u}});var t=n(8152),s=n(6871),r="BtnGoBack_btn__0x9Fq",c=n(184);function a(e){var i=e.title,n=(0,s.TH)(),t=(0,s.s0)();return(0,c.jsx)("button",{type:"button",className:r,onClick:function(){console.log(t),t(n.state||"/")},children:i})}var l=n(3504),o={details:"MovieCard_details__Qoddy",info:"MovieCard_info__+zYXA",img:"MovieCard_img__ix0cR","info-title":"MovieCard_info-title__CB9wG"};function d(e){var i=e.movieId,n=e.movie,t=n.poster_path,r=n.title,a=n.overview,d=n.genres,h=n.release_date,v=n.vote_average,u=h.split("").splice(0,4).join("");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:o.details,children:[(0,c.jsx)("img",{className:o.img,src:"https://image.tmdb.org/t/p/w500"+t,alt:r,width:"300"}),(0,c.jsxs)("div",{className:o.wrap,children:[(0,c.jsxs)("h1",{children:[r," (",u,")"]}),(0,c.jsxs)("p",{children:["User csore: ",v]}),(0,c.jsx)("h2",{children:"Overview"}),(0,c.jsx)("p",{children:a}),(0,c.jsx)("h3",{children:"Genres"}),(0,c.jsx)("p",{children:d.map((function(e){return(0,c.jsxs)("span",{children:[e.name," "]},e.id)}))})]})]}),(0,c.jsxs)("div",{className:o.info,children:[(0,c.jsx)("h2",{className:o["info-title"],children:"Additional information"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(l.OL,{to:"/movies/".concat(i,"/cast"),className:function(e){return e.isActive?o.activeLink:o.link},children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.OL,{to:"/movies/".concat(i,"/reviews"),className:function(e){return e.isActive?o.activeLink:o.link},children:"Reviews"})})]})]}),(0,c.jsx)(s.j3,{})]})}var h=n(2791),v=n(9186);function u(){var e=(0,s.UO)().movieId,i=(0,h.useState)(null),n=(0,t.Z)(i,2),r=n[0],l=n[1];return(0,h.useEffect)((function(){(0,v.ld)(e).then((function(e){l(e)})).catch((function(e){return e}))}),[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:"Go Back"}),r&&(0,c.jsx)(d,{movieId:e,movie:r})]})}}}]);
//# sourceMappingURL=5.eab85d12.chunk.js.map