(this["webpackJsonpreact-example"]=this["webpackJsonpreact-example"]||[]).push([[0],{12:function(e,t){e.exports={loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},saveToStorage:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),r=n.n(c),i=n(7),l=n.n(i),o=n(8),j=n(2),d=n(3),p=n(5),u=n(4),h=n(0),b=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:"app-header flex space-between",children:[Object(h.jsxs)("nav",{className:"left-nav flex align-center ",children:[Object(h.jsx)("h1",{className:"logo",children:"myteam"}),Object(h.jsx)("span",{children:"home"}),Object(h.jsx)("span",{children:"about"})]}),Object(h.jsx)("nav",{className:"right-nav flex align-center ",children:Object(h.jsx)("button",{className:"contact-btn",children:"contuct us"})})]})}}]),n}(a.Component),m=(a.Component,n.p+"static/media/play.ef6fca6f.svg"),x=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.video,n=e.onPlayVideo;return Object(h.jsx)("section",{className:"video-preview",children:Object(h.jsxs)("div",{className:"video-card flex align-center space-between",children:[Object(h.jsx)("img",{src:t.imgUrl}),Object(h.jsxs)("div",{className:"video-details flex col align-center gap",children:[Object(h.jsx)("span",{children:t.title}),Object(h.jsx)("span",{children:t.description}),Object(h.jsxs)("span",{children:["Date: ",t.publishedAt.substring(0,10)]})]}),Object(h.jsxs)("span",{onClick:function(){return n(t)},className:"play-btn flex align-center gap",children:[Object(h.jsx)("img",{src:m,alt:"",height:"16px"}),Object(h.jsx)("span",{children:"Play"})]})]})})}}]),n}(a.Component),O=(a.Component,a.Component,function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("section",{className:"app-footer",children:Object(h.jsx)("h1",{children:"FOOTER"})})}}]),n}(a.Component)),f=n(22),v=n.n(f),g=n(12),y="AIzaSyBxe9n_zywx_EH1njOLVtNXGIlojjcAhbs",N=Object(g.loadFromStorage)("youtubeDB");function w(){return(w=Object(o.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N||(N={}),N[t]){e.next=20;break}return N[t]=[],n="https://www.googleapis.com/youtube/v3/search?part=snippet\n        &videoEmbeddable=true&type=video&key=".concat(y,"&q=").concat(t),e.prev=4,e.next=7,v.a.get(n);case 7:return a=e.sent,s=k(s=a.data.items.splice(0,4)),N[t].push(s),Object(g.saveToStorage)("youtubeDB",N),e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(4),new Error("got this:",e.t0);case 18:e.next=23;break;case 20:if(N[t].length){e.next=22;break}return e.abrupt("return",null);case 22:return e.abrupt("return",N[t][0]);case 23:case"end":return e.stop()}}),e,null,[[4,15]])})))).apply(this,arguments)}function k(e){return e.map((function(e){var t=e.id,n=e.snippet;return{id:t.videoId,description:n.description,publishedAt:n.publishedAt,title:n.title,imgUrl:n.thumbnails.default.url}}))}var S={getVideos:function(e){return w.apply(this,arguments)}},C=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:"app-hero flex col",children:[Object(h.jsx)(b,{}),Object(h.jsxs)("div",{className:"hero-content flex",children:[Object(h.jsx)("div",{className:"left-content flex",children:Object(h.jsxs)("p",{children:["Find the best ",Object(h.jsx)("span",{className:"talent-word",children:"talent"})]})}),Object(h.jsx)("div",{className:"right-content flex",children:Object(h.jsx)("p",{children:"Finding the right people and building high performing teams can be hard. Most companies aren\u2019t tapping into the abundance of global talent. We\u2019re about to change that."})})]})]})}}]),n}(s.a.Component),A=n.p+"static/media/icon-person.266bf76c.svg",V=n.p+"static/media/icon-chart.15156837.svg",E=n.p+"static/media/icon-cog.b5b72a3a.svg",I=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:"app-main flex",children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)("p",{children:"Build & manage distributed teams like no one else."})}),Object(h.jsxs)("div",{className:"right-content flex col",children:[Object(h.jsxs)("div",{className:"title-preview flex",children:[Object(h.jsx)("img",{className:"icon",src:A}),Object(h.jsxs)("div",{className:"text-tile flex col",children:[Object(h.jsx)("span",{className:"pink-title",children:"Experienced Individu"}),Object(h.jsx)("p",{children:"Our network is made up of highly experienced professionals who are passionate about what they do."})]})]}),Object(h.jsxs)("div",{className:"title-preview flex",children:[Object(h.jsx)("img",{className:"icon",src:E}),Object(h.jsxs)("div",{className:"text-tile flex col",children:[Object(h.jsx)("span",{className:"pink-title",children:"Easy to Implement"}),Object(h.jsx)("p",{children:"Our processes have been refined over years of implementation meaning our teams always deliver."})]})]}),Object(h.jsxs)("div",{className:"title-preview flex",children:[Object(h.jsx)("img",{className:"icon",src:V}),Object(h.jsxs)("div",{className:"text-tile flex col",children:[Object(h.jsx)("span",{className:"pink-title",children:"Enhanced Productivit"}),Object(h.jsx)("p",{children:"Our customized platform with in-built analytics helps you manage your distributed teams."})]})]})]})]})}}]),n}(s.a.Component),B=n.p+"static/media/icon-quotes.c5173921.svg",T=n.p+"static/media/avatar-kady.78fc482c.jpg",q=n.p+"static/media/avatar-aiysha.e119a0c1.jpg",P=n.p+"static/media/avatar-arthur.098c2e26.jpg",z=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:"app-card flex col space-between",children:[Object(h.jsxs)("h1",{className:"main-title",children:["Delivering real results for top companies. Some of our ",Object(h.jsx)("span",{className:"muted-text",children:" success stories."})]}),Object(h.jsxs)("div",{className:"cards-container flex",children:[Object(h.jsxs)("div",{className:"card flex col align-center",children:[Object(h.jsx)("img",{className:"quotes-icon",src:B}),Object(h.jsx)("p",{children:" \u201cThe team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.\u201d"}),Object(h.jsxs)("div",{className:"person-details flex col align-center",children:[Object(h.jsx)("h3",{className:"person-name",children:"Kady Baker"}),Object(h.jsx)("span",{className:"person-role",children:"Product Manager at Bookmark"})]}),Object(h.jsx)("img",{className:"person-img",src:T})]}),Object(h.jsxs)("div",{className:"card flex col align-center",children:[Object(h.jsx)("img",{className:"quotes-icon",src:B}),Object(h.jsx)("p",{children:" \u201cWe needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!\u201d"}),Object(h.jsxs)("div",{className:"person-details flex col align-center",children:[Object(h.jsx)("h3",{className:"person-name",children:"Aiysha Reese"}),Object(h.jsx)("span",{className:"person-role",children:"Aiysha Reese"})]}),Object(h.jsx)("img",{className:"person-img",src:q})]}),Object(h.jsxs)("div",{className:"card flex col align-center",children:[Object(h.jsx)("img",{className:"quotes-icon",src:B}),Object(h.jsx)("p",{children:" \u201cAmazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.\u201d"}),Object(h.jsxs)("div",{className:"person-details flex col align-center",children:[Object(h.jsx)("h3",{className:"person-name",children:"Arthur Clarke"}),Object(h.jsx)("span",{className:"person-role",children:"Co-founder of MyPhysio"})]}),Object(h.jsx)("img",{className:"person-img",src:P})]})]})]})}}]),n}(s.a.Component),D=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:"app-start flex align-center space-between",children:[Object(h.jsx)("h1",{children:"Ready to get started?"}),Object(h.jsx)("button",{className:"contact-btn",children:"contact us"})]})}}]),n}(s.a.Component),F=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],playingVideo:null},e.onSearchVideos=function(){var t=Object(o.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.getVideos(n);case 2:a=t.sent,e.setState({videos:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onPlayVideo=function(t){t.id+="?autoplay=1",e.setState({playingVideo:t})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getVideos("Coding Academy");case 2:t=e.sent,this.setState({videos:t,playingVideo:t[0]});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;e.videos,e.playingVideo;return Object(h.jsxs)("section",{className:"app",children:[Object(h.jsx)(C,{}),Object(h.jsx)(I,{}),Object(h.jsx)(z,{}),Object(h.jsx)(D,{}),Object(h.jsx)(O,{})]})}}]),n}(s.a.Component);n(47);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ba7aed17.chunk.js.map