"use strict";(self.webpackChunkedge_docs=self.webpackChunkedge_docs||[]).push([[37],{5442:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(4848),t=i(8453);const o={sidebar_position:1},r="Installation Guide",l={id:"iOS/installation-guide",title:"Installation Guide",description:"A quickstart guide to get started with EdgePulse on iOS",source:"@site/docs/iOS/installation-guide.md",sourceDirName:"iOS",slug:"/iOS/installation-guide",permalink:"/docs/iOS/installation-guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Integrate SDK",permalink:"/docs/iOS/sdk-integration"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add EdgePulse to Your Xcode Project",id:"add-edgepulse-to-your-xcode-project",level:2},{value:"Set Background Modes and Permissions",id:"set-background-modes-and-permissions",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,s.jsxs)(n.p,{children:["A quickstart guide to get started with ",(0,s.jsx)(n.strong,{children:"EdgePulse on iOS"})]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Xcode installed on your development machine"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"minimal"})," iOS development experience"]}),"\n",(0,s.jsx)(n.li,{children:"An EdgePulse account with an access token"}),"\n",(0,s.jsx)(n.li,{children:"A project with a minimum deployment target of iOS 16"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"add-edgepulse-to-your-xcode-project",children:"Add EdgePulse to Your Xcode Project"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open your project in Xcode."}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"File"})," > ",(0,s.jsx)(n.strong,{children:"Add Packages"})]}),"\n",(0,s.jsx)(n.li,{children:"Paste the following URL into the search bar:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://github.com/edgepulseio/edgepulse-ios\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Select the package and click ",(0,s.jsx)(n.strong,{children:"Add Package"})]}),"\n",(0,s.jsx)(n.li,{children:"Follow the prompts to integrate the package into your project"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"set-background-modes-and-permissions",children:"Set Background Modes and Permissions"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open your Xcode project and navigate to your target's ",(0,s.jsx)(n.strong,{children:"Info"})," tab."]}),"\n",(0,s.jsxs)(n.li,{children:["Add the following entries under ",(0,s.jsx)(n.strong,{children:"Required background modes"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Item 0: ",(0,s.jsx)(n.strong,{children:"App registers for location updates"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Set the necessary location permissions by adding the following to the ",(0,s.jsx)(n.code,{children:"Info.plist"})," file:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Privacy - Location Always Usage Description"})," ",(0,s.jsx)(n.code,{children:"Allow to track your location in the background"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Privacy - Location When In Use Usage Description"})," ",(0,s.jsx)(n.code,{children:"Allow to track your location"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Add the capability for accessing Wi-Fi information:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to your target's ",(0,s.jsx)(n.strong,{children:"Capabilities"})," tab."]}),"\n",(0,s.jsxs)(n.li,{children:["Enable ",(0,s.jsx)(n.strong,{children:"Access Wi-Fi Information"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);