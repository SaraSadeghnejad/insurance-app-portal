import{c as l,u as h,a as d,j as e,b as p}from"./index-CB30c5ic.js";import{u as x,B as i}from"./button-KbSaEI-Q.js";import{D as m,a as g,b as u,c as a}from"./dropdown-menu-cEVIhpGc.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],k=l("moon",j);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],w=l("sun",y),C=()=>{const{i18n:s}=x(),t=h(),n=d(),r=c=>{s.changeLanguage(c).then(()=>{const o=new URLSearchParams(n.search);o.set("lng",c),t({search:o.toString()})})};return e.jsxs(m,{children:[e.jsx(g,{asChild:!0,children:e.jsxs(i,{variant:"outline",size:"icon",children:[e.jsx("span",{children:s.language.toUpperCase()})," "]})}),e.jsxs(u,{align:"end",children:[e.jsx(a,{onClick:()=>r("tr"),children:"Turkish"}),e.jsx(a,{onClick:()=>r("es"),children:"Spanish"}),e.jsx(a,{onClick:()=>r("en"),children:"English"})]})]})};function N(){const{setTheme:s}=p();return e.jsxs(m,{children:[e.jsx(g,{asChild:!0,children:e.jsxs(i,{variant:"outline",size:"icon",children:[e.jsx(w,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),e.jsx(k,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),e.jsx("span",{className:"sr-only",children:"Toggle theme"})]})}),e.jsxs(u,{align:"end",children:[e.jsx(a,{onClick:()=>s("light"),children:"Light"}),e.jsx(a,{onClick:()=>s("dark"),children:"Dark"}),e.jsx(a,{onClick:()=>s("system"),children:"System"})]})]})}const v=()=>{const{t:s}=x(),t=h(),n=d();return e.jsx("header",{className:"sticky text-gray-900 dark:text-white top-0 z-50 bg-white dark:bg-gray-800 shadow-lg",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16 items-center",children:[e.jsx("h1",{className:" text-xs sm:text-2xl font-bold text-gray-900 dark:text-white",children:s("smart_insurance")}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(C,{}),e.jsx(N,{}),e.jsx(i,{className:"text-gray-900 dark:text-white bg-white dark:bg-gray-800",onClick:()=>{n.pathname==="/register"?t("/"):t("/register")},children:n.pathname==="/register"?s("home"):s("register")})]})]})})})};export{v as default};
