(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{106:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(22),o=n.n(a),c=(n(106),n(14)),s=n(82),u=n(208),l=n(74),d=n(2);var p=function(e){var t=Object(c.c)((function(e){return e.options.question_category})),n=Object(c.c)((function(e){return e.options.question_type})),r=Object(c.c)((function(e){return e.options.amount_of_questions})),i=Object(c.c)((function(e){return e.index})),a=Object(c.b)();return Object(d.jsx)("button",{onClick:function(){i>0&&(a({type:"SET_INDEX",index:0}),a({type:"SET_SCORE",score:0}));var e=Object.values(l).filter((function(e,r){return"All"==n&&"All"==t||("All"==n?e.category==t:"All"==t?e.type==n:e.type==n&&e.category==t)})),o=e.map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}));e=o.filter((function(e,t){return t<=r-1})),a({type:"SET_QUESTIONS",questions:e})},children:e.text})};var b=function(){Object(c.c)((function(e){return e.options.question_category})),Object(c.c)((function(e){return e.options.question_type})),Object(c.c)((function(e){return e.options.amount_of_questions}));var e=Object(c.b)();return Object(d.jsxs)("div",{className:"options",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Select Game Type:"}),Object(d.jsxs)("select",{onChange:function(t){e({type:"CHANGE_TYPE",value:t.target.value})},children:[Object(d.jsx)("option",{children:"Multiple Choice"}),Object(d.jsx)("option",{children:"True/False"}),Object(d.jsx)("option",{children:"Guess That Player"}),Object(d.jsx)("option",{children:"All"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Number of Questions:"}),Object(d.jsx)("input",{type:"number",min:"0",onChange:function(t){e({type:"CHANGE_AMOUNT",value:t.target.value})}})]}),Object(d.jsx)(p,{text:"Show Me Your Moves!"})]})},h=n(13),j=n(52),y=n.n(j),f=n(75),O=n(76),g=n.n(O),x=null;function m(){var e=Object(c.c)((function(e){return e.questions})),t=Object(c.c)((function(e){return e.index})),n=Object(c.c)((function(e){return e.isAnswered})),i=Object(c.b)(),a=e[t],o=a.youtube_id,s=a.stop;Object(r.useEffect)((function(){}),[]),Object(r.useEffect)((function(){1==n&&(x.target.seekTo(s+.5),x.target.playVideo())}),[n]);return Object(d.jsx)("div",{className:"video-question",children:Object(d.jsx)(g.a,{videoId:o,opts:{playerVars:{autoplay:0,modestbranding:1,controls:0,disablekb:1}},onReady:function(e){x=e,function(){var e=setInterval(Object(f.a)(y.a.mark((function t(){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.stop,x&&x.target.getCurrentTime()>0&&(n=x.target.getCurrentTime(),r=!1,n>=s+.2&&(2===x.target.playerInfo.playerState&&x.target.playVideo(),r=!0),n>=s&&!r&&(x.target.seekTo(s),x.target.pauseVideo()),r?clearInterval(e):console.log("not done"));case 2:case"end":return t.stop()}}),t)}))),200)}()},onStateChange:function(){0===x.target.playerInfo.playerState&&(i({type:"SET_ANSWERED",answered:!1}),i({type:"SET_INDEX",index:t+1}))}})})}var w=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],i=t[1],a=Object(c.c)((function(e){return e.score})),o=Object(c.c)((function(e){return e.questions})),s=Object(c.c)((function(e){return e.index})),u=Object(c.c)((function(e){return e.isAnswered})),l=Object(c.b)(),p=o[s],b=p.answers,j=p.correct_answer,y=(p.answers.filter((function(e){return e!=j})),function(e){l({type:"SET_ANSWERED",answered:!0}),i(e.target.textContent),e.target.textContent===j&&l({type:"SET_SCORE",score:a+1}),"Guess That Player"!=p.type&&s+1<=o.length&&setTimeout((function(){l({type:"SET_ANSWERED",answered:!1}),i(null),l({type:"SET_INDEX",index:s+1})}),3e3)}),f=function(e){return u?u?e===j?"correct off":e===n?"selected off":"off":void 0:""};return p?Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["Question ",s+1]}),Object(d.jsx)("h3",{children:p.question}),"Guess That Player"==p.type?Object(d.jsx)(m,{}):"",Object(d.jsx)("ul",{className:"answers",children:b.map((function(e,t){return Object(d.jsx)("li",{onClick:y,className:f(e),children:e},t)}))}),Object(d.jsxs)("div",{children:["Score: ",a," / ",o.length]})]}):Object(d.jsx)("div",{children:"Loading"})};var v=function(){var e=Object(c.c)((function(e){return e.score})),t=Object(c.c)((function(e){return e.questions})),n=Math.round(e/t.length*100),r=Object(c.b)();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["Final Score: ",n+"%"]}),Object(d.jsx)("button",{onClick:function(){r({type:"SET_INDEX",index:0}),r({type:"SET_SCORE",score:0})},children:"Try Quiz Again"}),Object(d.jsx)("button",{onClick:function(){r({type:"SET_QUESTIONS",questions:[]}),r({type:"SET_SCORE",score:0})},children:"Back to Home"})]})},S=n(15),_=n(5),T=n(193),q=n(207),E=n(83),C=n(205),M=n(81),A=n.n(M),N=n(80),k=n.n(N),P=n(79),I=n.n(P),R=n(78),W=n.n(R),G=n(4),F=n(202),H=n(210),z=n(213),D=n(211),B=n(212),L=n(200);function J(e){var t=Object(c.c)((function(e){return e.questionTypes})),n=(Object(c.c)((function(e){return e.questionCategories})),i.a.useState(!1)),a=Object(h.a)(n,2),o=a[0],s=a[1],u={type:"Multiple Choice",category:"",difficulty:""},l=Object(r.useState)(u),p=Object(h.a)(l,2),b=p[0],j=p[1],y=function(){s(!1),e.setOpened(!1)},f=function(e){var t=e.target,n=t.name,r=t.value;u=Object(S.a)(Object(S.a)({},u),{},Object(G.a)({},n,r))};return Object(r.useEffect)((function(){s(e.open)}),[e.open]),Object(d.jsx)("div",{children:Object(d.jsxs)(H.a,{open:o,onClose:y,children:[Object(d.jsx)(L.a,{align:"center",sx:{},children:"Suggestions"}),Object(d.jsxs)(D.a,{children:[Object(d.jsx)(B.a,{align:"center",sx:{marginBottom:2},children:"Much like the melee community itself, this site depends upon the contributions of fans to provide challenging questions and keep things interesting. Please submit any questions you can think of and they will be approved and added to the game!"}),Object(d.jsx)(F.a,{onChange:function(e){return f(e)},required:!0,autoFocus:!0,margin:"dense",id:"questionType",name:"type",select:!0,label:"Select Type",value:t[0],helperText:"Please select question type",children:t.map((function(e,t){return Object(d.jsx)(C.a,{value:e,children:e},t)}))}),Object(d.jsx)(F.a,{onChange:function(e){return f(e)},required:!0,margin:"dense",id:"question",name:"question",label:"Question",type:"text",fullWidth:!0,variant:"standard"}),Object(d.jsx)(F.a,{onChange:function(e){return f(e)},required:!0,margin:"dense",id:"correctAnswer",name:"correct_answer",label:"Correct Answer",type:"email",fullWidth:!0,variant:"standard"}),Object(d.jsx)(F.a,{onChange:function(e){return f(e)},required:!0,margin:"dense",id:"answer2",name:"answer2",label:"Answer 2",type:"text",fullWidth:!0,variant:"standard"}),Object(d.jsx)(F.a,{onChange:function(e){return f(e)},required:!0,margin:"dense",id:"answer3",name:"answer3",label:"Answer 3",type:"text",fullWidth:!0,variant:"standard"}),Object(d.jsx)(F.a,{onChange:function(e){return f(e)},required:!0,margin:"dense",id:"answer4",name:"answer4",label:"Answer 4",type:"text",fullWidth:!0,variant:"standard"})]}),Object(d.jsx)(z.a,{children:Object(d.jsx)(q.a,{onClick:function(e){var t=[];for(var n in u)"correct_answer"==n?t.push(u[n]):console.log("continue"),n.match(/^answer/)&&(t.push(u[n]),delete u[n]);u=Object(S.a)(Object(S.a)({},u),{},{answers:t}),console.log(u),j(Object(S.a)({},u)),fetch("https://m2ic13md4d.execute-api.us-east-2.amazonaws.com/Prod/submitForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}).then((function(e){console.log(e),e.ok&&y()})).then((function(e){console.log(e)})).catch((function(e){})),console.log(b)},children:"Submit"})})]})})}var Q=Object(_.a)((function(e){return Object(d.jsx)(E.a,Object(S.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:Object(T.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));function U(){var e=i.a.useState(null),t=Object(h.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(!1),s=Object(h.a)(o,2),u=s[0],l=s[1],p=Boolean(n),b=Object(c.b)(),j=function(e){a(null),"Suggestions"==e.target.innerText?l(!0):l(!1)};return Object(d.jsxs)("div",{className:"options-button",children:[Object(d.jsx)(q.a,{id:"options-button","aria-controls":p?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":p?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){a(e.currentTarget)},endIcon:Object(d.jsx)(W.a,{}),children:"Options"}),Object(d.jsxs)(Q,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:n,open:p,onClose:j,children:[Object(d.jsxs)(C.a,{onClick:function(){b({type:"SET_QUESTIONS",questions:[]}),b({type:"SET_INDEX",index:0}),b({type:"SET_SCORE",score:0})},disableRipple:!0,children:[Object(d.jsx)(I.a,{}),"Home/Reset"]}),Object(d.jsxs)(C.a,{onClick:j,disableRipple:!0,children:[Object(d.jsx)(k.a,{}),"Scores"]}),Object(d.jsxs)(C.a,{onClick:j,disableRipple:!0,children:[Object(d.jsx)(A.a,{}),"Suggestions"]})]}),Object(d.jsx)(J,{setOpened:l,open:u})]})}n(147);var Y=function(){var e,t=Object(s.a)({palette:{mode:"dark"}}),n=Object(c.c)((function(e){return e.questions})),r=Object(c.c)((function(e){return e.index}));return e=n.length&&r+1<=n.length?Object(d.jsx)(w,{}):n.length?Object(d.jsx)(v,{}):Object(d.jsx)(b,{}),Object(d.jsxs)(u.a,{theme:t,children:[Object(d.jsx)("div",{className:"vid-container",children:Object(d.jsx)("iframe",{src:"https://www.youtube.com/embed/06tTwaaxbRc?controls=0&autoplay=1&mute=1&playlist=06tTwaaxbRc&loop=1"})}),Object(d.jsx)(U,{}),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"app-container",children:e})})]})},V=n(50),X={options:{loading:!1,question_category:"All",question_difficulty:"",question_type:"All",amount_of_questions:10},questionTypes:["Multiple Choice","True/False","Guess That Player"],questionCategories:[],questions:[],index:0,score:0,text:"default",isAnswered:!1},K=Object(V.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CATEGORY":return Object(S.a)(Object(S.a)({},e),{},{options:Object(S.a)(Object(S.a)({},e.options),{},{question_category:t.question_category})});case"CHANGE_DIFFICULTY":return Object(S.a)(Object(S.a)({},e),{},{options:Object(S.a)(Object(S.a)({},e.options),{},{question_difficulty:t.question_difficulty})});case"CHANGE_TYPE":return Object(S.a)(Object(S.a)({},e),{},{options:Object(S.a)(Object(S.a)({},e.options),{},{question_type:t.value})});case"CHANGE_AMOUNT":return Object(S.a)(Object(S.a)({},e),{},{options:Object(S.a)(Object(S.a)({},e.options),{},{amount_of_questions:t.value})});case"SET_QUESTIONS":return Object(S.a)(Object(S.a)({},e),{},{questions:t.questions});case"SET_INDEX":return Object(S.a)(Object(S.a)({},e),{},{index:t.index});case"SET_SCORE":return Object(S.a)(Object(S.a)({},e),{},{score:t.score});case"SET_ANSWERED":return Object(S.a)(Object(S.a)({},e),{},{isAnswered:t.answered});default:return e}}));o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(c.a,{store:K,children:Object(d.jsx)(Y,{})})}),document.getElementById("root"))},74:function(e){e.exports=JSON.parse('[{"category":null,"type":"Multiple Choice","difficulty":null,"question":"How many playable characters are there in the game?","correct_answer":"25","answers":["5","12","25","18"]},{"category":null,"type":"Multiple Choice","difficulty":null,"question":"How many characters in total are represented on the Melee roster from the Pok\xe9mon franchise?","correct_answer":"4","answers":["1","2","4","5"]},{"category":null,"type":"Multiple Choice","difficulty":null,"question":"How many total hours of vs battles does a single player need to unlock Mewtwo","correct_answer":"20","answers":["5","10","20","50"]},{"category":null,"type":"Multiple Choice","difficulty":null,"question":"In which stage do you fight the Wire Frames?","correct_answer":"Battlefield","answers":["Great Bay","Final Destination","Battlefield","Fourside"]},{"category":null,"type":"Multiple Choice","difficulty":null,"question":"Which of these stages is not a Past Stage in Super Smash Bros. Melee?","correct_answer":"Hyrule Temple","answers":["Dream Land","Hyrule Temple","Yoshi\'s Island","Kongo Jungle"]},{"category":null,"type":"Multiple Choice","difficulty":null,"question":"Which trophy requires data from another game in order to unlock it?","correct_answer":"Captain Olimar","answers":["Tom Nook","Alpha","Mr. Resetti","Captain Olimar"]},{"category":null,"type":"Multiple Choice","difficulty":null,"question":"Who is the only character from Smash 64 to not show up in the Melee intro video?","correct_answer":"Luigi","answers":["Fox","Luigi","Jigglypuff","Captain Falcon"]},{"category":null,"type":"Multiple Choice","difficulty":null,"question":"Which character cannot charge their down smash when too close to the ledge?","correct_answer":"Ness","answers":["Ness","Samus","Roy","Bowser"]},{"category":null,"type":"Multiple Choice","difficulty":null,"question":"In \'Adventure Mode\' (normal difficulty), who do you have to beat on the level \'Final Destination\'?","correct_answer":"Giga Bowser","answers":["Master Hand","Giga Bowser","Marth","Mewtwo"]},{"category":null,"type":"Multiple Choice","difficulty":null,"question":"How many \'Recover Hearts\' do you get in \'All Star Mode\'?","correct_answer":"3","answers":["1","2","3","6"]},{"category":null,"type":"True/False","difficulty":null,"question":"Prior to the release of Super Smash Bros. Melee, no game in Nintendo\'s Fire Emblem series had ever received an official North American release.","correct_answer":"True","answers":["True","False"]},{"category":null,"type":"True/False","difficulty":null,"question":"Super Smash Bros. Melee is the first game in the Super Smash Bros. series to be rated T (Teen).","correct_answer":"True","answers":["True","False"]},{"category":null,"type":"Guess That Player","difficulty":null,"stop":12,"youtube_id":"-x1xVkWR73U","question":"Which captain Falcon Player is playing?","correct_answer":"Wizzrobe","answers":["S2J","n0ne","Wizzrobe","SquidTheCat"]},{"category":null,"type":"Guess That Player","difficulty":null,"stop":18,"youtube_id":"ctYqblrnylw","question":"Which Falco Player is playing?","correct_answer":"n0ne","answers":["Mang0","Ginger","n0ne","Squid"]},{"category":null,"type":"Guess That Player","difficulty":null,"stop":29,"youtube_id":"aCCf-nDAtJg","question":"Which (grey) Falcon Player is playing?","correct_answer":"Lord","answers":["S2J","Jeapie","Gahtzu","Lord"]},{"category":null,"type":"Guess That Player","difficulty":null,"stop":16,"youtube_id":"vrOdzYh8OL4","question":"Which Marth Player is playing?","correct_answer":"Zain","answers":["KoDoRiN","Zain","Mew2King","Fendrick Lamar"]},{"category":null,"type":"Guess That Player","difficulty":null,"stop":18,"youtube_id":"D60WKVgRb64","question":"Which Luigi Player is playing?","correct_answer":"Eddie Mexico","answers":["Abate","Ilovebagelz","LuigiKid","Eddie Mexico"]},{"category":null,"type":"Guess That Player","difficulty":null,"stop":23,"youtube_id":"EAJU_5QhHrA","question":"Which Fox Player is playing?","correct_answer":"Crush","answers":["Hax$","Mang0","Crush","Moky"]},{"category":null,"type":"Guess That Player","difficulty":null,"stop":16,"youtube_id":"cMYcEIMvEm4","question":"Which Link Player is playing?","correct_answer":"Savestate","answers":["Savestate","Axe","Aether","Tang"]}]')}},[[148,1,2]]]);
//# sourceMappingURL=main.b56b4ee2.chunk.js.map