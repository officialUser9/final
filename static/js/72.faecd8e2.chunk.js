"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[72],{3923:(e,i,t)=>{t.r(i),t.d(i,{default:()=>K});var r=t(9950),n=t(9254),o=t(9808),s=t(2346),l=t(8429),a=t(5603),d=t(4977),c=t(7073),h=t(2257),x=t(937),C=t(5111),p=t(2074),u=t(2854),m=t(2089),g=t(7987),j=t(4195),b=t(6457),f=t(3563),A=t(7535);const y=t.p+"static/media/user-1.479b494978354b339dab.jpg";var v=t(4414);const w=()=>{const[e,i]=(0,r.useState)(null),t=(0,l.Zp)();return(0,v.jsxs)(s.A,{children:[(0,v.jsx)(c.A,{size:"large","aria-label":"profile menu",color:"inherit","aria-controls":"profile-menu","aria-haspopup":"true",sx:{..."object"===typeof e&&{color:"primary.main"}},onClick:e=>{i(e.currentTarget)},children:(0,v.jsx)(u.A,{src:y,alt:"Profile",sx:{width:35,height:35}})}),(0,v.jsxs)(m.A,{id:"profile-menu",anchorEl:e,keepMounted:!0,open:Boolean(e),onClose:()=>{i(null)},anchorOrigin:{horizontal:"right",vertical:"bottom"},transformOrigin:{horizontal:"right",vertical:"top"},sx:{"& .MuiMenu-paper":{width:"200px"}},children:[(0,v.jsxs)(g.A,{children:[(0,v.jsx)(j.A,{children:(0,v.jsx)(C.vg7,{width:20})}),(0,v.jsx)(b.Ay,{button:!0,component:p.N_,to:"/profile",children:(0,v.jsx)(f.A,{primary:"My Profile"})})]}),(0,v.jsx)(s.A,{mt:1,py:1,px:2,children:(0,v.jsx)(A.A,{onClick:()=>{localStorage.removeItem("user_type"),localStorage.removeItem("accessToken"),t("/")},variant:"outlined",color:"primary",fullWidth:!0,children:"Logout"})})]})]})};var k=t(8001),H=t(7233),I=t(4745),M=t(5731),V=t(4341),S=t(6483);const L=e=>{let{open:i,onClose:t}=e;const[n,o]=(0,r.useState)({item1:1,item2:1,item3:1}),l={item1:10,item2:20,item3:30},a=(0,r.useMemo)((()=>Object.keys(n).reduce(((e,i)=>e+n[i]*l[i]),0)),[n]);return(0,v.jsxs)(k.Ay,{anchor:"right",open:i,onClose:t,sx:{"& .MuiDrawer-paper":{width:360,padding:2,display:"flex",flexDirection:"column",gap:2}},children:[(0,v.jsxs)(s.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[(0,v.jsx)(H.A,{variant:"h6",sx:{fontWeight:600},children:"Shopping Items"}),(0,v.jsx)(c.A,{onClick:t,children:(0,v.jsx)(C.MRt,{size:24})})]}),(0,v.jsx)(I.A,{}),(0,v.jsx)(M.A,{sx:{flexGrow:1},children:["item1","item2","item3"].map(((e,i)=>(0,v.jsxs)(b.Ay,{sx:{borderRadius:1,overflow:"hidden",mb:1,p:1,bgcolor:"background.default",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,v.jsxs)(s.A,{sx:{display:"flex",alignItems:"center"},children:[(0,v.jsx)("img",{src:"https://via.placeholder.com/50?text=Item+".concat(i+1),alt:"Item ".concat(i+1),style:{borderRadius:"50%",marginRight:10}}),(0,v.jsx)(f.A,{primary:"Item ".concat(i+1),secondary:"$".concat(l[e],".00")})]}),(0,v.jsxs)(s.A,{sx:{display:"flex",alignItems:"center"},children:[(0,v.jsx)(c.A,{onClick:()=>(e=>{o((i=>({...i,[e]:Math.max(i[e]-1,1)})))})(e),sx:{marginRight:1},children:(0,v.jsx)(C.YPw,{size:20})}),(0,v.jsx)(V.A,{value:n[e],readOnly:!0,sx:{width:50,textAlign:"center"},InputProps:{startAdornment:(0,v.jsx)(S.A,{position:"start",children:"$"})}}),(0,v.jsx)(c.A,{onClick:()=>(e=>{o((i=>({...i,[e]:i[e]+1})))})(e),sx:{marginLeft:1},children:(0,v.jsx)(C.uID,{size:20})})]})]},i)))}),(0,v.jsxs)(s.A,{sx:{mt:2,display:"flex",flexDirection:"column",gap:2},children:[(0,v.jsxs)(H.A,{variant:"h6",sx:{fontWeight:600},children:["Total: $",a.toFixed(2)]}),(0,v.jsx)(A.A,{variant:"contained",color:"primary",fullWidth:!0,sx:{borderRadius:2,boxShadow:3,"&:hover":{backgroundColor:"primary.dark",boxShadow:6}},onClick:t,children:"Checkout"})]})]})},q=(0,n.Ay)(a.A)((e=>{let{theme:i}=e;return{boxShadow:"none",background:i.palette.background.paper,justifyContent:"center",backdropFilter:"blur(4px)",[i.breakpoints.up("lg")]:{minHeight:"70px"}}})),z=(0,n.Ay)(d.A)((e=>{let{theme:i}=e;return{width:"100%",color:i.palette.text.secondary}})),D=e=>{const[i,t]=(0,r.useState)(!1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(q,{position:"sticky",color:"default",children:(0,v.jsxs)(z,{children:[(0,v.jsx)(c.A,{color:"inherit","aria-label":"menu",onClick:e.toggleMobileSidebar,sx:{display:{lg:"none",xs:"inline"}},children:(0,v.jsx)(C.dd8,{width:"20",height:"20"})}),(0,v.jsx)(s.A,{flexGrow:1}),(0,v.jsxs)(h.A,{spacing:1,direction:"row",alignItems:"center",children:[(0,v.jsx)(c.A,{size:"large","aria-label":"show notifications",color:"inherit",children:(0,v.jsx)(x.A,{variant:"dot",color:"primary",children:(0,v.jsx)(C.vrW,{size:"21",stroke:"1.5"})})}),(0,v.jsx)(c.A,{size:"large","aria-label":"shopping cart",color:"inherit",onClick:()=>{t(!0)},children:(0,v.jsx)(x.A,{badgeContent:0,color:"secondary",children:(0,v.jsx)(C.AMT,{size:"21",stroke:"1.5"})})}),(0,v.jsx)(w,{})]})]})}),(0,v.jsx)(L,{open:i,onClose:()=>{t(!1)}})]})};var Z=t(6589),O=t(3544),P=t(1397);const R=[{navlabel:!0,subheader:"Home"},{id:(0,P.uniqueId)(),title:"Dashboard",icon:C.C5x,href:"/dashboard"},{id:(0,P.uniqueId)(),title:"User List",icon:C.C5x,href:"/userlist"},{id:(0,P.uniqueId)(),title:"Agent List",icon:C.C5x,href:"/agentlist"},{id:(0,P.uniqueId)(),title:"Recording",icon:C.C5x,href:"/recordinglist"},{id:(0,P.uniqueId)(),title:"Product List",icon:C.C5x,href:"/productlist"},{id:(0,P.uniqueId)(),title:"Discount Coupon",icon:C.C5x,href:"/discountlist"},{id:(0,P.uniqueId)(),title:"Order Mangement",icon:C.C5x,href:"/ordermangement"},{id:(0,P.uniqueId)(),title:"Transaction Records",icon:C.C5x,href:"/transactionrecords"},{id:(0,P.uniqueId)(),title:"Permission",icon:C.C5x,href:"/permission"},{id:(0,P.uniqueId)(),title:"Languages",icon:C.C5x,href:"/languages"},{id:(0,P.uniqueId)(),title:"Vendor",icon:C.C5x,href:"/vendor"}],E=[{navlabel:!0,subheader:"Home"},{id:(0,P.uniqueId)(),title:"Dashboard",icon:C.C5x,href:"/dashboard"},{id:(0,P.uniqueId)(),title:"Chat",icon:C.C5x,href:"/chat"},{id:(0,P.uniqueId)(),title:"Product",icon:C.C5x,href:"/product"},{id:(0,P.uniqueId)(),title:"Order History",icon:C.C5x,href:"/orderhistory"},{id:(0,P.uniqueId)(),title:"Subscription",icon:C.C5x,href:"/subscription"}],W=[{navlabel:!0,subheader:"Home"},{id:(0,P.uniqueId)(),title:"Dashboard",icon:C.C5x,href:"/dashboard"},{id:(0,P.uniqueId)(),title:"Call History",icon:C.C5x,href:"/callhistory"},{id:(0,P.uniqueId)(),title:"Chat",icon:C.C5x,href:"/Chat"},{id:(0,P.uniqueId)(),title:"Reports",icon:C.C5x,href:"/reports"}],B=()=>{const e=localStorage.getItem("role_id");switch(console.log("User type: ".concat(e)),e){case"1":return R;case"3":return E;case"2":return W;default:return[]}};var F=t(4857);const T=e=>{let{item:i,level:t,pathDirect:r,onClick:o}=e;const s=i.icon,l=(0,F.A)(),a=(0,v.jsx)(s,{stroke:1.5,size:"1.3rem"}),d=(0,n.Ay)(b.Ay)((()=>({whiteSpace:"nowrap",marginBottom:"2px",padding:"8px 10px",borderRadius:"8px",backgroundColor:t>1?"transparent !important":"inherit",color:l.palette.text.secondary,paddingLeft:"10px","&:hover":{backgroundColor:l.palette.primary.light,color:l.palette.primary.main},"&.Mui-selected":{color:"white",backgroundColor:l.palette.primary.main,"&:hover":{backgroundColor:l.palette.primary.main,color:"white"}}})));return(0,v.jsx)(M.A,{component:"li",disablePadding:!0,children:(0,v.jsxs)(d,{button:!0,component:i.external?"a":p.k2,to:i.href,href:i.external?i.href:"",disabled:i.disabled,selected:r===i.href,target:i.external?"_blank":"",onClick:o,children:[(0,v.jsx)(j.A,{sx:{minWidth:"36px",p:"3px 0",color:"inherit"},children:a}),(0,v.jsx)(f.A,{children:(0,v.jsx)(v.Fragment,{children:i.title})})]})},i.id)};var N=t(1985);const _=e=>{let{item:i}=e;const t=(0,n.Ay)((e=>(0,v.jsx)(N.A,{disableSticky:!0,...e})))((e=>{let{theme:i}=e;return{...i.typography.overline,fontWeight:"700",marginTop:i.spacing(3),marginBottom:i.spacing(0),color:i.palette.text.primary,lineHeight:"26px",padding:"3px 12px"}}));return(0,v.jsx)(t,{children:i.subheader})},G=()=>{const{pathname:e}=(0,l.zy)(),i=e,t=B();return(0,v.jsx)(s.A,{sx:{px:3},children:(0,v.jsx)(M.A,{sx:{pt:0},className:"sidebarNav",children:t.map((e=>e.subheader?(0,v.jsx)(_,{item:e},e.subheader):(0,v.jsx)(T,{item:e,pathDirect:i},e.id)))})})},$=(t.p,()=>(0,v.jsx)(v.Fragment,{})),U=e=>{const i="270px";return(0,Z.A)((e=>e.breakpoints.up("lg")))?(0,v.jsx)(s.A,{sx:{width:i,flexShrink:0},children:(0,v.jsx)(k.Ay,{anchor:"left",open:e.isSidebarOpen,variant:"permanent",PaperProps:{sx:{width:i,boxSizing:"border-box"}},children:(0,v.jsxs)(s.A,{sx:{height:"100%"},children:[(0,v.jsx)(s.A,{px:3,children:(0,v.jsx)(O.A,{})}),(0,v.jsx)(s.A,{children:(0,v.jsx)(G,{})})]})})}):(0,v.jsxs)(k.Ay,{anchor:"left",open:e.isMobileSidebarOpen,onClose:e.onSidebarClose,variant:"temporary",PaperProps:{sx:{width:i,boxShadow:e=>e.shadows[8]}},children:[(0,v.jsx)(s.A,{px:2,children:(0,v.jsx)(O.A,{})}),(0,v.jsx)(G,{}),(0,v.jsx)($,{})]})},Y=(0,n.Ay)("div")((()=>({display:"flex",minHeight:"100vh",width:"100%"}))),J=(0,n.Ay)("div")((()=>({display:"flex",flexGrow:1,paddingBottom:"60px",flexDirection:"column",zIndex:1,backgroundColor:"transparent"}))),K=()=>{const[e,i]=(0,r.useState)(!0),[t,n]=(0,r.useState)(!1);return(0,v.jsxs)(Y,{className:"mainwrapper",children:[(0,v.jsx)(U,{isSidebarOpen:e,isMobileSidebarOpen:t,onSidebarClose:()=>n(!1)}),(0,v.jsxs)(J,{className:"page-wrapper",children:[(0,v.jsx)(D,{toggleSidebar:()=>i(!e),toggleMobileSidebar:()=>n(!0)}),(0,v.jsx)(o.A,{sx:{paddingTop:"20px",maxWidth:"1200px"},children:(0,v.jsx)(s.A,{sx:{minHeight:"calc(100vh - 170px)"},children:(0,v.jsx)(l.sv,{})})})]})]})}},3544:(e,i,t)=>{t.d(i,{A:()=>p});var r,n,o,s=t(2074),l=t(9950);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(null,arguments)}function d(e,i){let{title:t,titleId:s,...d}=e;return l.createElement("svg",a({width:174,height:26,viewBox:"0 0 174 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":s},d),t?l.createElement("title",{id:s},t):null,r||(r=l.createElement("path",{d:"M46.0268 23V5.12H49.1468L55.8428 14.216H54.3548L60.9068 5.12H64.0268V23H60.7388V8.84L62.0108 9.152L55.2188 18.2H54.8348L48.2108 9.152L49.2908 8.84V23H46.0268ZM73.5686 23.288C72.2886 23.288 71.1206 22.992 70.0646 22.4C69.0246 21.808 68.1926 21 67.5686 19.976C66.9606 18.952 66.6566 17.784 66.6566 16.472C66.6566 15.16 66.9606 13.992 67.5686 12.968C68.1926 11.944 69.0246 11.136 70.0646 10.544C71.1046 9.952 72.2726 9.656 73.5686 9.656C74.8486 9.656 76.0086 9.952 77.0486 10.544C78.0886 11.136 78.9126 11.944 79.5206 12.968C80.1446 13.976 80.4566 15.144 80.4566 16.472C80.4566 17.784 80.1446 18.952 79.5206 19.976C78.8966 21 78.0646 21.808 77.0246 22.4C75.9846 22.992 74.8326 23.288 73.5686 23.288ZM73.5686 20.408C74.2726 20.408 74.8886 20.24 75.4166 19.904C75.9606 19.568 76.3846 19.104 76.6886 18.512C77.0086 17.904 77.1686 17.224 77.1686 16.472C77.1686 15.704 77.0086 15.032 76.6886 14.456C76.3846 13.864 75.9606 13.4 75.4166 13.064C74.8886 12.712 74.2726 12.536 73.5686 12.536C72.8486 12.536 72.2166 12.712 71.6726 13.064C71.1286 13.4 70.6966 13.864 70.3766 14.456C70.0726 15.032 69.9206 15.704 69.9206 16.472C69.9206 17.224 70.0726 17.904 70.3766 18.512C70.6966 19.104 71.1286 19.568 71.6726 19.904C72.2166 20.24 72.8486 20.408 73.5686 20.408ZM88.9129 23.288C87.6489 23.288 86.5209 22.992 85.5289 22.4C84.5369 21.792 83.7529 20.968 83.1769 19.928C82.6009 18.888 82.3129 17.736 82.3129 16.472C82.3129 15.192 82.6009 14.04 83.1769 13.016C83.7529 11.992 84.5369 11.176 85.5289 10.568C86.5369 9.96 87.6569 9.656 88.8889 9.656C89.8809 9.656 90.7609 9.856 91.5289 10.256C92.3129 10.64 92.9289 11.184 93.3769 11.888L92.8969 12.536V4.832H96.0409V23H93.0649V20.48L93.4009 21.104C92.9529 21.808 92.3289 22.352 91.5289 22.736C90.7289 23.104 89.8569 23.288 88.9129 23.288ZM89.2489 20.408C89.9689 20.408 90.6009 20.24 91.1449 19.904C91.6889 19.568 92.1129 19.104 92.4169 18.512C92.7369 17.92 92.8969 17.24 92.8969 16.472C92.8969 15.72 92.7369 15.048 92.4169 14.456C92.1129 13.848 91.6889 13.376 91.1449 13.04C90.6009 12.704 89.9689 12.536 89.2489 12.536C88.5449 12.536 87.9129 12.712 87.3529 13.064C86.7929 13.4 86.3529 13.864 86.0329 14.456C85.7289 15.032 85.5769 15.704 85.5769 16.472C85.5769 17.24 85.7289 17.92 86.0329 18.512C86.3529 19.104 86.7929 19.568 87.3529 19.904C87.9129 20.24 88.5449 20.408 89.2489 20.408ZM105.158 23.288C103.814 23.288 102.638 22.984 101.63 22.376C100.622 21.768 99.8379 20.944 99.2779 19.904C98.7179 18.864 98.4379 17.712 98.4379 16.448C98.4379 15.136 98.7179 13.976 99.2779 12.968C99.8539 11.944 100.63 11.136 101.606 10.544C102.598 9.952 103.702 9.656 104.918 9.656C105.942 9.656 106.838 9.824 107.606 10.16C108.39 10.496 109.054 10.96 109.598 11.552C110.142 12.144 110.558 12.824 110.846 13.592C111.134 14.344 111.278 15.16 111.278 16.04C111.278 16.264 111.262 16.496 111.23 16.736C111.214 16.976 111.174 17.184 111.11 17.36H101.03V14.96H109.334L107.846 16.088C107.99 15.352 107.95 14.696 107.726 14.12C107.518 13.544 107.166 13.088 106.67 12.752C106.19 12.416 105.606 12.248 104.918 12.248C104.262 12.248 103.678 12.416 103.166 12.752C102.654 13.072 102.262 13.552 101.99 14.192C101.734 14.816 101.638 15.576 101.702 16.472C101.638 17.272 101.742 17.984 102.014 18.608C102.302 19.216 102.718 19.688 103.262 20.024C103.822 20.36 104.462 20.528 105.182 20.528C105.902 20.528 106.51 20.376 107.006 20.072C107.518 19.768 107.918 19.36 108.206 18.848L110.75 20.096C110.494 20.72 110.094 21.272 109.55 21.752C109.006 22.232 108.358 22.608 107.606 22.88C106.87 23.152 106.054 23.288 105.158 23.288ZM113.661 23V9.944H116.613V12.848L116.373 12.416C116.677 11.44 117.149 10.76 117.789 10.376C118.445 9.992 119.229 9.8 120.141 9.8H120.909V12.584H119.781C118.885 12.584 118.165 12.864 117.621 13.424C117.077 13.968 116.805 14.736 116.805 15.728V23H113.661ZM122.638 23V9.944H125.59V12.512L125.35 12.056C125.654 11.272 126.15 10.68 126.838 10.28C127.542 9.864 128.358 9.656 129.286 9.656C130.246 9.656 131.094 9.864 131.83 10.28C132.582 10.696 133.166 11.28 133.582 12.032C133.998 12.768 134.206 13.624 134.206 14.6V23H131.062V15.344C131.062 14.768 130.95 14.272 130.726 13.856C130.502 13.44 130.19 13.12 129.79 12.896C129.406 12.656 128.95 12.536 128.422 12.536C127.91 12.536 127.454 12.656 127.054 12.896C126.654 13.12 126.342 13.44 126.118 13.856C125.894 14.272 125.782 14.768 125.782 15.344V23H122.638ZM136.864 23V9.944H140.008V23H136.864ZM136.864 8.48V5.12H140.008V8.48H136.864ZM141.783 23V20.456L149.367 11.672L149.847 12.752H142.119V9.944H152.631V12.512L145.191 21.296L144.711 20.216H152.679V23H141.783ZM160.658 23.288C159.314 23.288 158.138 22.984 157.13 22.376C156.122 21.768 155.338 20.944 154.778 19.904C154.218 18.864 153.938 17.712 153.938 16.448C153.938 15.136 154.218 13.976 154.778 12.968C155.354 11.944 156.13 11.136 157.106 10.544C158.098 9.952 159.202 9.656 160.418 9.656C161.442 9.656 162.338 9.824 163.106 10.16C163.89 10.496 164.554 10.96 165.098 11.552C165.642 12.144 166.058 12.824 166.346 13.592C166.634 14.344 166.778 15.16 166.778 16.04C166.778 16.264 166.762 16.496 166.73 16.736C166.714 16.976 166.674 17.184 166.61 17.36H156.53V14.96H164.834L163.346 16.088C163.49 15.352 163.45 14.696 163.226 14.12C163.018 13.544 162.666 13.088 162.17 12.752C161.69 12.416 161.106 12.248 160.418 12.248C159.762 12.248 159.178 12.416 158.666 12.752C158.154 13.072 157.762 13.552 157.49 14.192C157.234 14.816 157.138 15.576 157.202 16.472C157.138 17.272 157.242 17.984 157.514 18.608C157.802 19.216 158.218 19.688 158.762 20.024C159.322 20.36 159.962 20.528 160.682 20.528C161.402 20.528 162.01 20.376 162.506 20.072C163.018 19.768 163.418 19.36 163.706 18.848L166.25 20.096C165.994 20.72 165.594 21.272 165.05 21.752C164.506 22.232 163.858 22.608 163.106 22.88C162.37 23.152 161.554 23.288 160.658 23.288Z",fill:"#11142D"})),n||(n=l.createElement("path",{d:"M20.1369 26C22.8983 26 25.1842 23.7425 24.6732 21.0288C24.3528 19.3274 23.8679 17.6594 23.2235 16.0502C21.9602 12.8958 20.1087 10.0295 17.7745 7.61522C15.4403 5.2009 12.6692 3.28575 9.61949 1.97913C8.11383 1.33406 6.55481 0.843538 4.96489 0.512196C2.26154 -0.0511821 0 2.23858 0 5V21C0 23.7614 2.23858 26 5 26H20.1369Z",fill:"#615DFF"})),l.createElement("g",{style:{mixBlendMode:"multiply"}},o||(o=l.createElement("path",{d:"M13.7013 26C10.9399 26 8.65395 23.7425 9.16502 21.0288C9.48544 19.3274 9.97031 17.6594 10.6147 16.0502C11.878 12.8958 13.7295 10.0295 16.0637 7.61522C18.3979 5.2009 21.169 3.28575 24.2187 1.97913C25.7244 1.33406 27.2834 0.843538 28.8733 0.512196C31.5767 -0.0511821 33.8382 2.23858 33.8382 5V21C33.8382 23.7614 31.5996 26 28.8382 26H13.7013Z",fill:"#3DD9EB"}))))}const c=l.forwardRef(d);t.p;var h=t(9254),x=t(4414);const C=(0,h.Ay)(s.N_)((()=>({height:"70px",width:"180px",overflow:"hidden",display:"block"}))),p=()=>(0,x.jsx)(C,{to:"/",children:(0,x.jsx)(c,{height:70})})}}]);