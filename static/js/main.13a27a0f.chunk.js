(this["webpackJsonpmy-goal-app"]=this["webpackJsonpmy-goal-app"]||[]).push([[0],{77:function(e,t,a){e.exports=a(92)},82:function(e,t,a){},83:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(26),i=(a(82),a(57)),s=a(62),u=a(7),d=(a(83),a(9)),m=a(102),p=a(103),h=a(94),f=a(31);function g(e){return r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(m.a.Brand,null,r.a.createElement("img",{alt:"",src:"wilson.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","Wilson"),r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(f.LinkContainer,{to:"/today"},r.a.createElement(p.a.Link,null,"Home")),r.a.createElement(f.LinkContainer,{to:"/calendar"},r.a.createElement(p.a.Link,null,"Calendar")),r.a.createElement(f.LinkContainer,{to:"/goals"},r.a.createElement(p.a.Link,null,"Completed"))),r.a.createElement(h.a,{variant:"outline-secondary"},e.loggedinUser?e.loggedinUser.username:"Please Login"))}var E=a(100);function b(e){return r.a.createElement(E.a,{show:e.show,onHide:e.onHide},r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,null,"Congrats!! You Completed the ".concat(e.completedGoal.goal_name))),r.a.createElement(E.a.Body,null,"Would you like to mark this goal as complete?"),r.a.createElement(E.a.Footer,null,r.a.createElement(h.a,{variant:"secondary",onClick:function(){return e.completeGoal(e.completedGoal.id)}},"Complete"),r.a.createElement(h.a,{variant:"primary",onClick:e.onHide},"Add Task")))}var k=a(95),w=a(96),v=a(72),O=a(104),y=a(105);function j(e){console.log(e);return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(O.a,{style:{color:"black",width:"254px",height:"260px"},onClick:function(){return e.handleGoalClick(e.id)}},r.a.createElement(O.a.Img,{variant:"top",as:"div",style:{backgroundColor:e.rgb,width:"254px",height:"50px"}}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,e.name),r.a.createElement(O.a.Text,null,r.a.createElement(y.a,{animated:!0,now:function(){if(0!==e.tasks.length){var t=e.tasks.length,a=0;return e.tasks.forEach((function(e){e.is_complete&&a++})),a/t*100}return 0}()})),e.taskModalOpen&&e.resourceModalOpen?r.a.createElement(h.a,{variant:"primary",onClick:e.taskModalOpen},"Add Task"):null,r.a.createElement(f.LinkContainer,{style:{float:"right"},to:"goal_showpage"},r.a.createElement(h.a,{variant:"danger"},"Show"))),r.a.createElement(O.a.Footer,null,e.dateComplete?r.a.createElement("small",null,"Completed on: ",function(e){var t=new Date(e);return t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()}(e.dateComplete)):r.a.createElement("small",{className:"text-muted"},"Due in ",Math.ceil(function(e){var t=new Date;return(new Date(e)-t)/1e3/60/60/24}(e.date)+1)," days"))))}var C=a(106);function S(e){return r.a.createElement(C.a.Item,{style:{borderRadius:"5px",color:"black",textDecoration:e.completeTaskids.includes(e.id)?"line-through":"",backgroundColor:e.rgb,margin:"10px"},onClick:function(){return e.completeTask(e.id)}},r.a.createElement("div",{style:{userSelect:"none",color:"black",backgroundColor:"whitesmoke",padding:"4px",borderRadius:"5px",textAlign:"center"}},e.name))}function T(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)([]),i=Object(u.a)(c,2),s=i[0],d=i[1],m=function(){fetch("https://wilson-backend.herokuapp.com/api/v1/users/".concat(e.loggedinUser.id)).then((function(e){return e.json()})).then((function(e){var t=[];e.goals.forEach((function(e){if(!e.is_complete){var a=e.rgb;e.tasks.forEach((function(e){e.rgb=a,t.push(e)}))}})),l(t)}))},p=function(){fetch("https://wilson-backend.herokuapp.com/api/v1/users/".concat(e.loggedinUser.id)).then((function(e){return e.json()})).then((function(e){return d(e.goals.filter((function(e){return!e.is_complete})))}))};Object(n.useEffect)((function(){m(),p()}),[]),Object(n.useEffect)((function(){p()}),[e.completeTaskids]),Object(n.useEffect)((function(){m(),p()}),[e.confirmedCompletedGoal]),Object(n.useEffect)((function(){m()}),[e.newTaskId]);return r.a.createElement(k.a,{fluid:!0,style:{backgroundColor:"#333",color:"white",padding:"3%",minHeight:"80vh",width:"100%"}},r.a.createElement(f.LinkContainer,{to:"/add_goal"},r.a.createElement(h.a,{variant:"secondary",size:"lg",style:{width:"50%"}},"Add A Goal")),r.a.createElement(w.a,null,r.a.createElement(v.a,{sm:8},r.a.createElement("h2",{style:{textAlign:"center"}},"Goals"),r.a.createElement("hr",{style:{borderTop:"3px solid white"}}),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},function(){if(s.length>0)return s.map((function(t){return r.a.createElement(j,{completeTaskids:e.completeTaskids,tasks:t.tasks,resourceModalOpen:e.resourceModalOpen,taskModalOpen:e.taskModalOpen,rgb:t.rgb,id:t.id,handleGoalClick:e.handleGoalClick,description:t.goal_description,date:t.date,name:t.goal_name,key:t.id})}))}())),r.a.createElement(v.a,{sm:4},r.a.createElement("h2",{style:{textAlign:"center"}},"Tasks"),r.a.createElement("hr",{style:{borderTop:"3px solid white"}}),o.map((function(t){return r.a.createElement(S,{complete:t.is_complete,rgb:t.rgb,id:t.id,completeTask:e.completeTask,completeTaskids:e.completeTaskids,name:t.name,description:t.description,key:t.id})})))))}var G=a(61),x=(a(90),a(53)),M=a.n(x),_=Object(G.b)(M.a);function I(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("https://wilson-backend.herokuapp.com/api/v1/users/".concat(e.loggedinUser.id)).then((function(e){return e.json()})).then((function(e){var t=[];e.goals.forEach((function(e){if(!e.is_complete){var a={start:M()(e.date).toDate(),end:M()(e.date).add(0,"days").toDate(),title:e.goal_name,backgroundColor:e.rgb};t.push(a)}})),l(t)}))}),[]),r.a.createElement(k.a,null,r.a.createElement(w.a,null,r.a.createElement(v.a,null,r.a.createElement(G.a,{localizer:_,defaultDate:new Date,defaultView:"month",events:o,style:{height:"100vh",backgroundColor:"white"},eventPropGetter:function(e){return{style:{backgroundColor:e.backgroundColor}}}}))))}function N(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],l=a[1];Object(n.useEffect)((function(){fetch("https://wilson-backend.herokuapp.com/api/v1/users/".concat(e.loggedinUser.id)).then((function(e){return e.json()})).then((function(e){return l(e.goals)}))}),[]);return r.a.createElement(k.a,{fluid:!0,style:{backgroundColor:"#333",color:"white",padding:"1%",minHeight:"80vh",width:"100%"}},r.a.createElement(w.a,null,r.a.createElement(v.a,null,r.a.createElement("h2",null,"Completed"))),r.a.createElement(w.a,null,r.a.createElement(v.a,{style:{display:"flex",flexWrap:"wrap"}},function(){if(o.length>0)return o.map((function(t){if(t.is_complete)return r.a.createElement(j,{tasks:t.tasks,rgb:t.rgb,description:t.goal_description,dateComplete:t.date_completed,complete:t.is_complete,id:t.id,handleGoalClick:e.handleGoalClick,name:t.goal_name,key:t.id})}))}())))}var L=a(101);function U(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1];return r.a.createElement(E.a,{show:e.show,onHide:e.onHide},r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,null,"New Task")),r.a.createElement(E.a.Body,null,r.a.createElement(L.a,{onSubmit:function(t){t.preventDefault(),""!==o?(fetch("https://wilson-backend.herokuapp.com/api/v1/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({goal_id:e.clickedGoalid,name:o})}).then((function(e){return e.json()})).then((function(t){e.getNewTaskId(t.data.id)})),l("")):alert("Feilds are empty")}},r.a.createElement(L.a.Group,{controlId:"formBasicEmail"},r.a.createElement(L.a.Label,null,"Task:"),r.a.createElement(L.a.Control,{type:"text",placeholder:"Enter Task",name:"task",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement(h.a,{variant:"primary",type:"submit",onClick:e.onHide},"Submit"))))}function H(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),f=p[0],g=p[1];return r.a.createElement(E.a,{show:e.show,onHide:e.onHide},r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,null,"New Resource")),r.a.createElement(E.a.Body,null,r.a.createElement(L.a,{onSubmit:function(t){t.preventDefault(),""!==o&&""!==s?(fetch("https://wilson-backend.herokuapp.com/api/v1/goal_resources",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({goal_id:e.clickedGoalid,name:o,description:s,url:f})}).then((function(e){return e.json()})).then((function(t){e.getNewResourceId(t.data.id)})),l(""),d(""),g("")):alert("Feilds are empty")}},r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Resource Name:"),r.a.createElement(L.a.Control,{type:"text",placeholder:"Required",name:"name",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Description:"),r.a.createElement(L.a.Control,{as:"textarea",rows:"3",placeholder:"Optional",name:"description",value:s,onChange:function(e){return d(e.target.value)}})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"URL:"),r.a.createElement(L.a.Control,{type:"text",placeholder:"Required",name:"url",value:f,onChange:function(e){return g(e.target.value)}})),r.a.createElement(h.a,{variant:"primary",type:"submit",onClick:e.onHide},"Submit"))))}function R(e){return r.a.createElement("div",{className:"main-body"},r.a.createElement(b,{completeGoal:e.completeGoal,completedGoal:e.completedGoal,show:e.deleteModalShow,onHide:e.deleteModalClose}),r.a.createElement(U,{getNewTaskId:e.getNewTaskId,show:e.taskModalShow,onHide:e.taskModalClose,clickedGoalid:e.clickedGoalid}),r.a.createElement(H,{getNewResourceId:e.getNewResourceId,show:e.resourceModalShow,onHide:e.resourceModalClose,clickedGoalid:e.clickedGoalid}),r.a.createElement(d.d,{exact:!0,path:"/today",render:function(){return r.a.createElement(T,{newResourceId:e.newResourceId,newTaskId:e.newTaskId,taskModalShow:e.taskModalShow,confirmedCompletedGoal:e.confirmedCompletedGoal,resourceModalOpen:e.resourceModalOpen,taskModalOpen:e.taskModalOpen,loggedinUser:e.loggedinUser,completeTask:e.completeTask,completeTaskids:e.completeTaskids,handleGoalClick:e.handleGoalClick})}}),r.a.createElement(d.d,{exact:!0,path:"/calendar",render:function(){return r.a.createElement(I,{loggedinUser:e.loggedinUser})}}),r.a.createElement(d.d,{exact:!0,path:"/goals",render:function(){return r.a.createElement(N,{resourceModalOpen:e.resourceModalOpen,taskModalOpen:e.taskModalOpen,loggedinUser:e.loggedinUser,handleGoalClick:e.handleGoalClick})}}))}var D=Object(d.o)((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),f=p[0],g=p[1];return r.a.createElement(k.a,{style:{backgroundColor:"#333",color:"white",padding:"3%"}},r.a.createElement(w.a,null,r.a.createElement(v.a,null,r.a.createElement(L.a,{onSubmit:function(t){t.preventDefault(),s===f&&""!==s?(fetch("https://wilson-backend.herokuapp.com/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,password:s})}),e.history.push("/wilson")):alert("Passwords are empty or do not match!")}},r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Create Username:"),r.a.createElement(L.a.Control,{type:"text",placeholder:"Enter username",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Password:"),r.a.createElement(L.a.Control,{type:"password",placeholder:"Password",value:s,onChange:function(e){return d(e.target.value)}})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Re-enter password:"),r.a.createElement(L.a.Control,{type:"password",placeholder:"Re-enter password",value:f,onChange:function(e){return g(e.target.value)}})),r.a.createElement(h.a,{variant:"primary",type:"submit"},"Submit")))))})),P=a(97),B=a(98);function A(e){return r.a.createElement(k.a,{style:{backgroundColor:"#333",color:"white",padding:"3%"}},r.a.createElement(w.a,{style:{marginBottom:"3%"}},r.a.createElement(v.a,{sm:4,style:{textAlign:"center"}},r.a.createElement(P.a,{style:{height:"200px",width:"200px"},src:"wilson.png",rounded:!0})),r.a.createElement(v.a,{sm:8,style:{margin:"auto 0"}},r.a.createElement("h1",null,"Welcome to ",r.a.createElement("span",{style:{color:"rgb(214, 17, 18)"}},"Wilson")),r.a.createElement("h3",null,"Get Off Your Island!"),r.a.createElement("p",null,"A simple app to keep track of your goals, tasks, and resources... all in one place."))),r.a.createElement(w.a,null,r.a.createElement(v.a,null,r.a.createElement(L.a,{onSubmit:e.handleSubmit},r.a.createElement(L.a.Group,{controlId:"username"},r.a.createElement(L.a.Label,null,"Username:"),r.a.createElement(L.a.Control,{type:"username",placeholder:"Enter username",name:"username",value:e.username,onChange:e.handleUsernameChange})),r.a.createElement(L.a.Group,{controlId:"formBasicPassword"},r.a.createElement(L.a.Label,null,"Password"),r.a.createElement(L.a.Control,{type:"password",placeholder:"Password",name:"password",value:e.password,onChange:e.handlePasswordChange})),r.a.createElement(L.a.Text,{className:"text-muted"},"Not registered? ",r.a.createElement(c.Link,{to:"/signup",href:"#"},"Create an account")),e.loggingIn?r.a.createElement(h.a,{variant:"primary",disabled:!0},r.a.createElement(B.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})," Loading..."):r.a.createElement(h.a,{variant:"primary",type:"submit"},"Submit")))))}var J=a(99);function W(e){return r.a.createElement(O.a,null,r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Text,null,r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("a",null,e.url))),r.a.createElement(O.a.Img,{variant:"bottom",src:e.url}))}function F(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("https://wilson-backend.herokuapp.com/api/v1/goals/".concat(e.clickedGoalid)).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[e.newTaskId]),Object(n.useEffect)((function(){fetch("https://wilson-backend.herokuapp.com/api/v1/goals/".concat(e.clickedGoalid)).then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),r.a.createElement(k.a,{fluid:!0,style:{backgroundColor:"#333",padding:"50px"}},r.a.createElement(w.a,null,r.a.createElement(v.a,null,r.a.createElement(J.a,{style:{border:"solid ".concat(o.rgb," 4px")}},r.a.createElement("h1",null,o.goal_name),r.a.createElement("p",null,o.goal_description),r.a.createElement("p",null,r.a.createElement(h.a,{variant:"secondary",onClick:e.taskModalOpen},"Add Task"),r.a.createElement(h.a,{variant:"secondary",onClick:e.resourceModalOpen},"Add Resource"))))),r.a.createElement(w.a,null,r.a.createElement(v.a,null,function(){if(""!==o){var t=o.rgb;return o.tasks.map((function(a){return r.a.createElement(S,{rgb:t,id:a.id,completeTask:e.completeTask,completeTaskids:e.completeTaskids,name:a.name,description:a.description,key:a.id})}))}}()),r.a.createElement(v.a,null,function(){if(""!==o)return o.goal_resources.map((function(e){return r.a.createElement(W,{url:e.url,key:e.id,name:e.name,description:e.description})}))}())))}var z=Object(d.o)((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),f=p[0],g=p[1];return r.a.createElement(k.a,{style:{backgroundColor:"#333",color:"white",padding:"10px",borderRadius:"5px"}},r.a.createElement(w.a,null,r.a.createElement(v.a,null,r.a.createElement(L.a,{onSubmit:function(t){t.preventDefault(),""!==o&&""!==s&&""!==f?(fetch("https://wilson-backend.herokuapp.com/api/v1/goals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.loggedinUser.id,goal_name:o,goal_description:s,date:f,rgb:"rgb(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),")")})}),e.history.push("/today")):alert("Feilds are empty")}},r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Name"),r.a.createElement(L.a.Control,{type:"text",placeholder:"Enter Goal Name",name:"name",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Goal Description"),r.a.createElement(L.a.Control,{as:"textarea",rows:"3",name:"description",value:s,onChange:function(e){return d(e.target.value)}})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Goal Date"),r.a.createElement("br",null),r.a.createElement("input",{type:"date",name:"date",value:f,onChange:function(e){return g(e.target.value)}})),r.a.createElement(h.a,{variant:"secondary",type:"submit"},"Submit")))))}));var Y=Object(d.o)((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(""),m=Object(u.a)(c,2),p=m[0],h=m[1],f=Object(n.useState)({}),E=Object(u.a)(f,2),b=E[0],k=E[1],w=Object(n.useState)(""),v=Object(u.a)(w,2),O=v[0],y=v[1],j=Object(n.useState)(""),C=Object(u.a)(j,2),S=C[0],T=C[1],G=Object(n.useState)([]),x=Object(u.a)(G,2),M=x[0],_=x[1],I=Object(n.useState)(!1),N=Object(u.a)(I,2),L=N[0],U=N[1],H=Object(n.useState)(!1),P=Object(u.a)(H,2),B=P[0],J=P[1],W=Object(n.useState)(!1),Y=Object(u.a)(W,2),q=Y[0],V=Y[1],$=Object(n.useState)({}),K=Object(u.a)($,2),Q=K[0],X=K[1],Z=Object(n.useState)({}),ee=Object(u.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(u.a)(ne,2),oe=re[0],le=re[1],ce=Object(n.useState)(""),ie=Object(u.a)(ce,2),se=ie[0],ue=ie[1],de=Object(n.useState)(!1),me=Object(u.a)(de,2),pe=me[0],he=me[1],fe=function(e){e.preventDefault(),be()},ge=function(e){return l(e.target.value)},Ee=function(e){return h(e.target.value)},be=function(){fetch("https://wilson-backend.herokuapp.com/api/v1/users").then((function(e){return e.json()})).then((function(t){var a=t.find((function(e){return e.username===o}));a&&a.password===p?(k(a),y(a.id),e.history.push("/today")):(alert("Wrong Username or Password"),he(!1))})),he(!0)};Object(n.useEffect)((function(){b.id&&fetch("https://wilson-backend.herokuapp.com/api/v1/users/".concat(b.id)).then((function(e){return e.json()})).then((function(e){var t=[];e.goals.forEach((function(e){e.is_complete||e.tasks.forEach((function(e){e.is_complete&&t.push(e.id)}))})),_(t)}))}),[O]),Object(n.useEffect)((function(){M.length>0&&fetch("https://wilson-backend.herokuapp.com/api/v1/users/".concat(b.id)).then((function(e){return e.json()})).then((function(e){k(e),we()}))}),[M]);var ke=function(e){M.includes(e)?(fetch("https://wilson-backend.herokuapp.com/api/v1/tasks/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({is_complete:!1})}),_(M.filter((function(t){return t!==e})))):(_([].concat(Object(s.a)(M),[e])),fetch("https://wilson-backend.herokuapp.com/api/v1/tasks/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({is_complete:!0})}))},we=function(){void 0!==b.goals&&0!==M.length&&b.goals.forEach((function(e){var t=[];e.tasks.forEach((function(e){t.push(e.id)})),0!==t.length&&t.every((function(e){return M.includes(e)}))&&(ve(),X(e))}))},ve=function(){return U(!0)},Oe=function(){return U(!1)},ye=function(){return J(!0)},je=function(){return V(!0)};return r.a.createElement("div",null,r.a.createElement(g,{loggedinUser:b}),r.a.createElement(R,{newTaskId:oe,getNewResourceId:function(e){return ue(e)},newResourceId:se,getNewTaskId:function(e){return le(e)},confirmedCompletedGoal:te,resourceModalClose:function(){return V(!1)},resourceModalOpen:je,resourceModalShow:q,taskModalShow:B,taskModalClose:function(){return J(!1)},taskModalOpen:ye,clickedGoalid:S,completeGoal:function(e){var t=b.goals.find((function(t){return t.id===e}));_(Object(s.a)(M).filter((function(e){return t.tasks.forEach((function(e){return e.id}))}))),ae(t.tasks),fetch("https://wilson-backend.herokuapp.com/api/v1/goals/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({is_complete:!0,date_completed:new Date})}),Oe()},completedGoal:Q,deleteModalClose:Oe,deleteModalShow:L,loggedinUser:b,handleGoalClick:function(e){return T(e)},completeTaskids:M,completeTask:ke}),r.a.createElement(d.d,{exact:!0,path:"/signup",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(d.d,{exact:!0,path:"/wilson",render:function(e){var t;return r.a.createElement(A,Object.assign((t={loggingIn:pe,handleSubmit:fe,username:o,password:p,handleUsernameChange:ge,handlePasswordChange:Ee,loggedinUser:b},Object(i.a)(t,"username",o),Object(i.a)(t,"password",p),t),e))}}),r.a.createElement(d.d,{exact:!0,path:"/goal_showpage",render:function(){return r.a.createElement(F,{newTaskId:oe,newResourceId:se,resourceModalOpen:je,taskModalOpen:ye,clickedGoalid:S,completeTaskids:M,completeTask:ke})}}),r.a.createElement(d.d,{exact:!0,path:"/add_goal",render:function(){return r.a.createElement(z,{loggedinUser:b})}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.BrowserRouter,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.13a27a0f.chunk.js.map