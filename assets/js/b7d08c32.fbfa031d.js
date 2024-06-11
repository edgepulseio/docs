"use strict";(self.webpackChunkedge_docs=self.webpackChunkedge_docs||[]).push([[966],{3731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(4848),s=t(8453);const r={sidebar_position:2},a="Integrate SDK",o={id:"Android/integrate-sdk",title:"Integrate SDK",description:"Let's start coding in your Android project!",source:"@site/docs/Android/integrate-sdk.md",sourceDirName:"Android",slug:"/Android/integrate-sdk",permalink:"/docs/Android/integrate-sdk",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation Guide",permalink:"/docs/Android/installation-guide"},next:{title:"Congratulations!",permalink:"/docs/Android/congratulations"}},d={},l=[{value:"Initialize and Start EdgePulse",id:"initialize-and-start-edgepulse",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"integrate-sdk",children:"Integrate SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Let's start coding in your ",(0,i.jsx)(n.strong,{children:"Android"})," project!"]}),"\n",(0,i.jsx)(n.h2,{id:"initialize-and-start-edgepulse",children:"Initialize and Start EdgePulse"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Import the EdgePulse module at the top of your main file:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",metastring:'title="main.kt"',children:"import com.edge.pulse.EdgePulse\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Create a variable for EdgePulse that is accessible throughout the class:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",metastring:'title="main.kt"',children:"lateinit var edgePulse: EdgePulse\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Initialize EdgePulse in your ",(0,i.jsx)(n.code,{children:"onCreate"})," or ",(0,i.jsx)(n.code,{children:"init"})," function, providing the application context and your access token:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",metastring:'title="main.kt"',children:'edgePulse = EdgePulse(context, "<YOUR_ACCESS_TOKEN>")\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Before starting EdgePulse, request the necessary location permissions from the user programmatically. For example:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",metastring:'title="main.kt"',children:"val permissions = arrayOf(\n   android.Manifest.permission.ACCESS_FINE_LOCATION,\n   android.Manifest.permission.ACCESS_COARSE_LOCATION,\n   android.Manifest.permission.ACCESS_BACKGROUND_LOCATION\n)\nActivityCompat.requestPermissions(this, permissions, REQUEST_CODE_LOCATION)\n``\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Once EdgePulse is initialized and permissions are granted, start the SDK tracking:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",metastring:'title="main.kt"',children:"edgePulse.start()\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);