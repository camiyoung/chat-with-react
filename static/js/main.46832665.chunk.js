(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var c,r=n(1),s=n.n(r),a=n(57),u=n.n(a),o=(n(65),n(7)),i=(n(66),n(27)),j=n(4),h=(n(67),n(0)),m=function(e){var t=e.chatService,n=e.setUsername,c=Object(r.useState)(""),s=Object(o.a)(c,2),a=s[0],u=s[1],i=Object(j.g)();return Object(h.jsx)("div",{className:"join",children:Object(h.jsxs)("div",{className:"join_container",children:[Object(h.jsx)("h1",{className:"heading",children:" Chat Service with React \ud83d\udc8c "}),Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("input",{placeholder:"Enter Username...",className:"joinInput",type:"text",onChange:function(e){return u(e.target.value)}}),Object(h.jsx)("button",{className:"join_button",type:"submit",onClick:function(e){e.preventDefault(),n(a),t.signup(a).catch((function(e){return console.error(e)})),i.push({pathname:"/chat",state:{username:a}})},children:"Sign In"})]})]})})},l=n(23),f=n(2),b=n.n(f),p=n(5),O=(n(74),function(e){var t=e.currentRoom,n=e.user,c=t;return Object(h.jsxs)("header",{className:"header",children:[c?Object(h.jsx)("h1",{className:"headertext",children:c}):Object(h.jsx)("h1",{className:"headertext",children:"\ud604\uc7ac \ubaa9\ub85d"}),Object(h.jsxs)("h4",{className:"headerUser",children:[" ",n]})]})}),d=function(e){var t=e.room,n=e.onClickRoom;return Object(h.jsx)("li",{className:"room ",onClick:function(){n(t)},children:Object(h.jsx)("div",{className:"title",children:t})})},x=function(e){var t=e.roomList,n=e.onClickRoom;return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"rooms",children:t.map((function(e){return Object(h.jsx)(d,{room:e.title,onClickRoom:n})}))})})},v=n(22),k=n(59),g=function(e){var t=e.users;return Object(h.jsxs)("ul",{className:"usersList",children:[Object(h.jsx)("li",{className:"users-icon",children:Object(h.jsx)(v.a,{icon:k.a,size:"lg"})}),t&&t.map((function(e){return Object(h.jsx)("li",{className:"user",children:Object(h.jsx)("div",{className:"username",children:e})})}))]})},R=function(e){var t=e.user,n=e.message,c=n.sender===t?"me":"others";return"admin"===n.user&&(c="admin"),Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"message ".concat(c),children:[Object(h.jsx)("div",{className:"text ".concat(c),children:n.message}),"me"!==c&&"admin"!==c&&Object(h.jsx)("div",{className:"sender",children:n.sender})]})})},w=function(e){var t=e.messages,n=e.user;return Object(h.jsx)("ul",{className:"messages",children:t&&t.map((function(e){return Object(h.jsx)(R,{user:n,message:e})}))})},N=function(e){var t=e.sendMessage,n=e.currentRoom,c=Object(r.useRef)(),s=Object(r.useRef)();return Object(h.jsx)("form",{ref:s,className:"inputform",onSubmit:function(e){e.preventDefault(),t(c.current.value,n),s.current.reset()},children:Object(h.jsx)("input",{ref:c,className:"textInput",type:"text"})})},y=function(e){var t=e.currentRoom,n=e.message,c=e.user,s=e.users,a=e.sendMessage,u=e.myChatList,i=Object(r.useState)([]),j=Object(o.a)(i,2),m=j[0],f=j[1],b=Object(r.useState)(),p=Object(o.a)(b,2),O=p[0],d=p[1];return Object(r.useEffect)((function(){u&&u.forEach((function(e){e.title===t&&f(e.messages)}))}),[t,u]),Object(r.useEffect)((function(){n&&t===n.sentRoom&&f((function(e){var t={sender:n.sender,message:n.message};return[].concat(Object(l.a)(e),[t])}))}),[n,t]),Object(r.useEffect)((function(){s&&t===s.title&&d(s.users)}),[s,t]),Object(h.jsxs)("div",{className:"chatRoom",children:[Object(h.jsxs)("div",{className:"chatArea",children:[Object(h.jsx)(w,{messages:m,user:c}),Object(h.jsx)(N,{sendMessage:a,currentRoom:t,setMessages:f})]}),Object(h.jsx)(g,{users:O})]})},C=Object(r.memo)((function(e){var t=e.currentRoom,n=e.roomList,c=e.onClickRoom,r=e.user,s=e.sendMessage,a=e.users,u=e.message,o=e.myChatList;return Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(O,{currentRoom:t,user:r}),Object(h.jsx)("div",{className:"chatContainer",children:"list"===t?Object(h.jsx)(x,{roomList:n,onClickRoom:c}):Object(h.jsx)(y,{message:u,user:r,users:a,sendMessage:s,currentRoom:t,myChatList:o})})]})})),S=(n(77),n(38)),L=function(e){var t=e.onRoomListBtn,n=e.setActiveStatus;return Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("div",{className:"btn_roomlist",onClick:t,children:Object(h.jsx)(v.a,{icon:S.b,size:"lg"})}),Object(h.jsx)("div",{className:"btn_newchat",onClick:n,children:Object(h.jsx)(v.a,{icon:S.a,size:"lg"})})]})},E=function(e){var t=e.title,n=e.onClickRoom,c=e.hasNew,r=Object(j.g)();return Object(h.jsxs)("li",{onClick:function(){n(t),r.push("/chat/".concat(t))},className:"mychat",children:[Object(h.jsx)("span",{className:"chat_title",children:t}),Object(h.jsx)("span",{className:"isNew ".concat(c),children:"!"})]})},M=function(e){var t=e.roomList,n=e.onClickRoom,c=e.addMyChat,r=e.username;e.message,e.currentRoom;return Object(h.jsx)("ul",{className:"myChatRoomList",children:t&&t.map((function(e){return Object(h.jsx)(E,{title:e.title,onClickRoom:n,addMyChat:c,username:r,hasNew:e.hasNew})}))})},U=function(e){var t=e.roomList,n=e.onClickRoom,c=e.onRoomListBtn,s=e.onNewChatBtn,a=e.addMyChat,u=e.username,i=e.message,m=e.currentRoom,l=Object(r.useState)(!1),f=Object(o.a)(l,2),b=f[0],p=f[1],O=Object(r.useRef)(),d=Object(j.g)();return Object(h.jsxs)("div",{className:"sideBar",children:[b?Object(h.jsxs)("form",{className:"make-form",children:[Object(h.jsx)("input",{ref:O}),Object(h.jsxs)("div",{className:"form_buttons",children:[Object(h.jsx)("div",{className:"button make",onClick:function(e){e.preventDefault(),p(!1),""!==O.current.value&&(s(O.current.value),d.push("/chat/".concat(O.current.value)))},children:Object(h.jsx)("h3",{children:"\uc0dd\uc131"})}),Object(h.jsx)("div",{className:"button close",onClick:function(e){e.preventDefault(),p(!1)},children:Object(h.jsx)("h3",{children:"\ub2eb\uae30"})})]})]}):Object(h.jsx)(L,{onRoomListBtn:c,setActiveStatus:function(){p(!b)},onClickRoom:n,username:u}),Object(h.jsx)(M,{roomList:t,onClickRoom:n,addMyChat:a,username:u,currentRoom:m,message:i})]})},B=n(60),T=n.n(B),_=function(e){var t=e.chatService,n=e.username,s=e.baseURL,a=Object(r.useState)(),u=Object(o.a)(a,2),i=u[0],m=u[1],f=Object(r.useState)([]),O=Object(o.a)(f,2),d=O[0],x=O[1],v=Object(r.useState)([]),k=Object(o.a)(v,2),g=k[0],R=k[1],w=Object(r.useState)(),N=Object(o.a)(w,2),y=N[0],S=N[1],L=Object(r.useState)(),E=Object(o.a)(L,2),M=E[0],B=E[1],_=Object(r.useState)([]),J=Object(o.a)(_,2),D=J[0],I=J[1],z=Object(j.g)();Object(r.useEffect)((function(){(c=T()(s)).emit("signin",{username:n}),m("list")}),[n]);var A=Object(r.useCallback)(Object(p.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRoomList();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),[t]),G=Object(r.useCallback)(function(){var e=Object(p.a)(b.a.mark((function e(n){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRoom(n);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),P=Object(r.useCallback)(function(){var e=Object(p.a)(b.a.mark((function e(n){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMyRooms(n);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),q=Object(r.useCallback)(function(){var e=Object(p.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.joinRoom(n,c);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,n]);function F(e){return H.apply(this,arguments)}function H(){return(H=Object(p.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.joinRoom(n,c).then((function(e){return I(e)})).catch((function(e){return console.error(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})))()}),[A]),Object(r.useEffect)((function(){Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(n);case 2:t=e.sent,I(t.rooms);case 4:case"end":return e.stop()}}),e)})))()}),[i,P,n]),Object(r.useEffect)((function(){D&&D.forEach((function(e){e.title===i&&R(e.messages)}))}),[i,D]),Object(r.useEffect)((function(){t.getRoom(i).then((function(e){B(e.users)})).catch((function(e){return console.error(e)}))}),[t,i]);var K=Object(r.useCallback)((function(e,t){e&&c.emit("sendMessage",e,t,n)}),[n]),Q=Object(r.useCallback)(function(){var e=Object(p.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!1,D.forEach((function(e){e.title===t&&(n=!0)})),n){e.next=9;break}return e.next=6,q(t);case 6:I((function(e){return[].concat(Object(l.a)(e),[{title:t,messages:[]}])})),c.emit("user list",{title:t}),c.emit("join",t);case 9:return e.next=11,G(t);case 11:r=e.sent,B(r),m(t);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[D,q,G]),V=function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m("list"),z.push("/chat"),e.next=4,A();case 4:t=e.sent,x(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=Object(r.useCallback)(function(){var e=Object(p.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x((function(e){return[].concat(Object(l.a)(e),[{title:c}])})),e.next=3,t.postRoom(n,c);case 3:Q(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,Q,n]);return Object(r.useEffect)((function(){c.on("message",(function(e){S(e)})),c.on("users",(function(e){B(e)}))}),[]),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(U,{roomList:D,addMyChat:F,message:y,currentRoom:i,onClickRoom:Q,onRoomListBtn:V,onNewChatBtn:W,username:n}),Object(h.jsx)(C,{roomList:d,currentRoom:i,onClickRoom:Q,addMyChat:F,user:n,sendMessage:K,messages:g,users:M,myChatList:D,message:y})]})};var J=function(e){var t=e.chatService,n=e.baseURL,c=Object(r.useState)(),s=Object(o.a)(c,2),a=s[0],u=s[1];return Object(h.jsx)(i.a,{basename:"/chat-with-react",children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:"/",children:!a&&Object(h.jsx)(m,{chatService:t,setUsername:function(e){u(e)}})}),Object(h.jsx)(j.b,{path:"/chat",children:a?Object(h.jsx)(_,{chatService:t,username:a,baseURL:n}):Object(h.jsx)(j.a,{to:"/"})})]})})},D=n(39),I=n(29),z=n(30),A=function(){function e(t){Object(I.a)(this,e),this.baseURL=t}return Object(z.a)(e,[{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=Object(p.a)(b.a.mark((function e(t,n){var c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseURL).concat(t),Object(D.a)(Object(D.a)({},n),{},{headers:{"Content-Type":"application/json"}}));case 2:return c=e.sent,e.prev=3,e.next=6,c.json();case 6:r=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:if(!(c.status>299||c.status<200)){e.next=15;break}throw"http\ud1b5\uc2e0 \ubb38\uc81c \ud83e\udd2a",new Error("http\ud1b5\uc2e0 \ubb38\uc81c \ud83e\udd2a");case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t,n){return e.apply(this,arguments)}}())}]),e}(),G="https://chatapp-with-react.herokuapp.com",P=new(function(){function e(t){Object(I.a)(this,e),this.http=t}return Object(z.a)(e,[{key:"signup",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/signup",{method:"POST",body:JSON.stringify({username:t})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRoomList",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/chat",{method:"GET"}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMyRooms",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/user/".concat(t),{method:"GET"}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"postRoom",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/chat",{method:"POST",body:JSON.stringify({username:t,title:n})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"joinRoom",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/user/".concat(n),{method:"POST",body:JSON.stringify({username:t})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRoom",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/chat/".concat(t),{method:"GET"}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(new A(G));u.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(J,{chatService:P,baseURL:G})}),document.getElementById("root"))},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},74:function(e,t,n){},77:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.46832665.chunk.js.map