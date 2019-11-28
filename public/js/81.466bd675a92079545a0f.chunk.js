(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{UjCZ:function(t,e,r){"use strict";var n=r("o0o1"),s=r.n(n),a=r("yXPU"),o=r.n(a),i=r("lSNA"),c=r.n(i),u=r("J4zp"),p=r.n(u),m=r("6M8q"),d=r.n(m),f=(r("L2JU"),r("Y+lK")),S=r.n(f),v={namespaced:!0,state:{client:null,host:void 0},getters:{},actions:{setClient:function(t,e){(0,t.commit)("SET_API",e)}},mutations:{SET_API:function(t,e){t.client=e},SET_HOST:function(t,e){t.host=e}}};function l(t,e,r,n,s){return _.apply(this,arguments)}function _(){return(_=o()(s.a.mark(function t(e,r,n,a,o){var i,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e("c3s/settings/SET_LOADING",!0,{root:!0}),i=void 0,void 0!==a&&(i={requestBody:a}),t.next=6,r(n,i);case 6:return c=t.sent,console.log(c),void 0!==o&&e(o,c.body.data,{root:!0}),e("c3s/settings/SET_LOADING",!1,{root:!0}),t.abrupt("return",c);case 13:return t.prev=13,t.t0=t.catch(0),e("c3s/settings/SET_ERROR",t.t0,{root:!0}),e("c3s/settings/SET_LOADING",!1,{root:!0}),t.abrupt("return",t.t0);case 18:case"end":return t.stop()}},t,null,[[0,13]])}))).apply(this,arguments)}function T(t,e){for(var r=0,n=(e=e.split(".")).length;r<n;r++)t=t[e[r]];return t}var E=r("lPiR"),h="c3s.client.apis.Users",g={namespaced:!0,state:{user:null,currentUser:null,projects:[],submissions:[],isAnon:!1},getters:{},actions:{login:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,e.dispatch,a=e.rootState,o=".login",t.abrupt("return",l(n,T(a,h+o),void 0,r,"c3s/user/SET_CURRENT_USER"));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),checkUsername:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,e.dispatch,a=e.rootState,o=".check_user",t.abrupt("return",l(n,T(a,h+o),{username:r},void 0,void 0));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),checkUseremail:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,e.dispatch,a=e.rootState,o=".check_user",t.abrupt("return",l(n,T(a,h+o),{email:r},void 0,void 0));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),generateAnon:function(){var t=o()(s.a.mark(function t(e){var r,n,a,o,i,c,u,p;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,e.dispatch,n=e.rootState,a=".create_user",r("c3s/settings/SET_LOADING",!0,{root:!0}),o=""+Date.now(),i="_anon"+E(o),c=""+E(i),u={username:i,pwd:c,anonymous:!0,info:{}},p=l(r,T(n,h+a),void 0,u,"c3s/user/SET_CURRENT_USER"),r("SET_ANON",!0),t.abrupt("return",p);case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),logout:function(t){t.state;var e=t.commit;e("SET_CURRENT_USER",null),e("SET_ANON",!1)},requestReset:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,e.dispatch,a=e.rootState,o=".reset",t.abrupt("return",l(n,T(a,h+o),void 0,{email:r},void 0));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),resetPwd:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,o=".verify_rest",t.abrupt("return",l(n,T(a,h+o),void 0,{reset:r},void 0));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),register:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,o=l(n,T(a,h+".create_user"),void 0,r,"c3s/user/SET_CURRENT_USER"),n("SET_ANON",!1),t.abrupt("return",o);case 5:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getUser:function(){var t=o()(s.a.mark(function t(e){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,n=e.rootState,t.abrupt("return",l(r,n.c3s.client.apis.Users.get_one,void 0,void 0,"c3s/user/SET_USER"));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),getUserProjects:function(){var t=o()(s.a.mark(function t(e){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,n=e.rootState,t.abrupt("return",l(r,n.c3s.client.apis.Users.get_user_projects,void 0,void 0,"c3s/user/SET_PROJECTS"));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),getUserSubmissions:function(){var t=o()(s.a.mark(function t(e){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,n=e.rootState,t.abrupt("return",l(r,n.c3s.client.apis.Users.get_user_submissions,void 0,void 0,"c3s/user/SET_SUBMISSIONS"));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),updateUser:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,o=".update_user",t.abrupt("return",l(n,T(a,h+o),void 0,{requestBody:r},"c3s/user/SET_CURRENT_USER"));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),validate:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state,a=e.commit,o=e.rootState,i=".validate",void 0===n.currentUser.api_key){t.next=4;break}return t.abrupt("return",l(a,T(o,h+i),{key:n.currentUser.api_key},void 0,"c3s/user/SET_CURRENT_USER"));case 4:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()},mutations:{SET_USER:function(t,e){t.user=e},SET_CURRENT_USER:function(t,e){t.currentUser=e},SET_ANON:function(t,e){t.isAnon=e},SET_PROJECTS:function(t,e){t.projects=e},SET_SUBMISSIONS:function(t,e){t.submissions=e}}},k="c3s.client.apis.Tasks",b={namespaced:!0,state:{tasks:[],task:null,media:[],comments:[],stats:{}},getters:{},actions:{getTasks:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o,i,c,u;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,o=p()(r,2),i=o[0],c=o[1],u=".get_tasks",i=d.a.encode(i),t.abrupt("return",l(n,T(a,k+u),{search_term:i||void 0,limit:c||100},void 0,"c3s/task/SET_TASKS"));case 5:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getTaskCount:function(){var t=o()(s.a.mark(function t(e,r){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,r=d.a.encode(r),t.abrupt("return",l(n,a.c3s.client.apis.Tasks.get_task_count,{search_term:r||void 0},void 0,void 0));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getTaskMedia:function(){var t=o()(s.a.mark(function t(e,r){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,r=d.a.encode(r),t.abrupt("return",l(n,a.c3s.client.apis.Media.get_media,{search_term:r||void 0},void 0,"c3s/task/SET_MEDIA"));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getTask:function(){var t=o()(s.a.mark(function t(e,r){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,t.abrupt("return",l(n,a.c3s.client.apis.Tasks.get_task,{tid:r},void 0,"c3s/task/SET_TASK"));case 2:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getTaskComments:function(){var t=o()(s.a.mark(function t(e,r){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,t.abrupt("return",l(n,a.c3s.client.apis.Tasks.get_task_comments,{tid:r},void 0,"c3s/task/SET_TASK_COMMENTS"));case 2:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getTaskStats:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,o=".get_stats",t.abrupt("return",l(n,T(a,k+o),{tid:r},void 0,"c3s/task/SET_TASK_STATS"));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getProjectTask:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,e.dispatch,a=e.rootState,o=".get_random_project_task",t.abrupt("return",l(n,T(a,k+o),{pid:r},void 0,"c3s/project/SET_PROJECT_TASK"));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),createTasks:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.dispatch,o=e.rootState,i=l(n,o.c3s.client.apis.Tasks.create_tasks,{},r,void 0),a("c3s/upload/addID",i[0].id,{root:!0}),t.abrupt("return",i);case 4:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),deleteTasks:function(t,e){t.state;var r=t.commit,n=t.dispatch,s=t.rootState;return n("SET_TASKS",null),l(r,s.c3s.client.apis.Tasks.delete_tasks,void 0,e,"c3s/task/SET_TASKS")},deleteTask:function(t,e){t.state;var r=t.commit;t.dispatch;return l(r,t.rootState.c3s.client.apis.Tasks.delete_tasks,{tid:e},tasks,"c3s/task/SET_TASKS")}},mutations:{SET_TASKS:function(t,e){t.tasks=e},SET_TASK:function(t,e){t.task=e},SET_TASK_COMMENTS:function(t,e){t.comments=e},UPDATE_TASK:function(t,e,r){Object.assign(t.tasks[e],c()({},r.field,r.value))},SET_MEDIA:function(t,e){t.media=e},SET_STATS:function(t,e){t.stats=e},SET_COMMENTS:function(t,e){t.comments=e}}},w={namespaced:!0,state:{members:[],member:void 0},getters:{},actions:{},mutations:{}},R={namespaced:!0,state:{media:void 0,submission:{},submissions:[]},getters:{},actions:{getSubmissions:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o,i,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,o=p()(r,2),i=o[0],c=o[1],i=d.a.encode(i),t.abrupt("return",l(n,a.c3s.client.apis.Submissions.get_submissions,{search_term:i||void 0,limit:c||100},void 0,"c3s/submission/SET_SUBMISSIONS"));case 4:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getSubmissionCount:function(){var t=o()(s.a.mark(function t(e,r){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,r=d.a.encode(r),t.abrupt("return",l(n,a.c3s.client.apis.Submissions.get_submission_count,{search_term:r||void 0},void 0,void 0));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getUserSubmissions:function(){var t=o()(s.a.mark(function t(e){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,n=e.rootState,t.abrupt("return",l(r,n.c3s.client.apis.Users.get_submissions,{uid:n.c3s.client.apis.Users.current_user.id},void 0,"c3s/submission/SET_SUBMISSIONS"));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),createSubmission:function(){var t=o()(s.a.mark(function t(e){var r,n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state,n=e.commit,a=e.rootState,e.dispatch,t.abrupt("return",l(n,a.c3s.client.apis.Submissions.create_submission,void 0,r.submission,"c3s/submission/SET_SUBMISSION"));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),updateSubmission:function(){var t=o()(s.a.mark(function t(e,r){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,t.abrupt("return",l(n,a.c3s.client.apis.Submissions.update_submission,{sid:r.id},r,"submission/c3s/SET_SUBMISSION"));case 2:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()},mutations:{SET_MEDIA:function(t,e){t.media=e},SET_SUBMISSION:function(t,e){t.submission=e},SET_SUBMISSIONS:function(t,e){t.submissions=e},SET_SUBMISSION_RESPONSE:function(t,e,r){t.submission.content.responses[r]=e},SET_SUBMISSION_RESPONSES:function(t,e){t.submission.content.responses=e}}},O={namespaced:!0,state:{media:[]},getters:{},actions:{getMedia:function(t,e){t.state;var r=t.commit,n=t.rootState,s=p()(e,3),a=s[0],o=s[1],i=s[2];return a=d.a.encode(a),l(r,n.c3s.client.apis.Media.get_media,{search_term:a||void 0,limit:i||100},void 0,o)},deleteMedium:function(t,e){t.state;var r=t.commit;t.dispatch;return l(r,t.rootState.c3s.client.apis.Media.delete_medium,{mid:e},void 0,void 0)},upload:function(t,e){t.state,t.commit,t.rootState;var r=p()(e,2),n=r[0],s=r[1];return window.fetch(n,{method:"PUT",body:s})},createMedium:function(t,e){t.state;return l(t.commit,t.rootState.c3s.client.apis.Media.create_medium,void 0,e,void 0)},getPresigned:function(t,e){t.state;var r=t.commit,n=t.rootState,s=p()(e,2),a=s[0],o=s[1];return l(r,n.c3s.client.apis.Media.get_pre_signed_url,{source_id:a,filename:o},void 0,void 0)},uploadMedia:function(t,e){t.state,t.commit;var r=t.dispatch,n=(t.rootState,p()(e,4)),s=n[0],a=n[1],o=n[2],i=n[3];return r("getPresigned",[s,"builder/"+a]).then(function(t){if(t){var e=t.body.data;return r("upload",[e,o]).then(function(t){if(t){var e={source_id:s,name:a,path:t.url};return i&&(e[i]=s),r("createMedium",e).then(function(t){return t}).catch(function(t){console.error(t)})}})}})}},mutations:{SET_MEDIA:function(t,e){t.media=e}}},U={namespaced:!0,state:{id:null,content:[]},getters:{},actions:{addID:function(t,e){var r=t.state,n=t.commit,s=t.rootState;n("SET_ID",e),console.log("updating"),console.log(e);for(var a=function(t){n("c3s/settings/SET_LOADING",!0,{root:!0}),console.log(r.content[t]),s.c3s.client.apis.Media.put_medium({id:r.content[t],media:{id:r.content[t],source_id:e||r.id}}).then(function(e){console.log(e),n("c3s/settings/SET_LOADING",!1,{root:!0}),t===r.content.length-1&&n("CLEAR")}).catch(function(t){n("c3s/settings/SET_LOADING",!1,{root:!0}),console.error(t)})},o=0;o<r.content.length;o++)a(o)}},mutations:{SET_ID:function(t,e){t.id=e},ADD_CONTENT:function(t,e){console.log(e),t.content.push(e),console.log(t.content)},CLEAR:function(t){t.id=null,t.content=[]}}},A="c3s.client.apis.Projects",y={namespaced:!0,state:{projects:[],project:null,tasks:[],task:null,stats:null,media:[],comments:[]},getters:{},actions:{getProjects:function(t,e){t.state;var r=t.commit,n=(t.dispatch,t.rootState),s=p()(e,2),a=s[0],o=s[1];void 0!==a&&(a=d.a.encode(a));return l(r,T(n,A+".get_projects"),{search_term:a||void 0,limit:o||100},void 0,"c3s/project/SET_PROJECTS")},getProject:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state,a=e.commit,e.dispatch,o=e.rootState,i=".get_project",!n.project||r!==n.project.id){t.next=4;break}return t.abrupt("return",Promise.resolve(n.project));case 4:return t.abrupt("return",l(a,T(o,A+i),{pid:r},void 0,"c3s/project/SET_PROJECT"));case 5:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getProjectTasks:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,e.dispatch,a=e.rootState,o=".get_project_tasks",t.abrupt("return",l(n,T(a,A+o),{pid:r},void 0,"c3s/project/SET_PROJECT_TASKS"));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),getStats:function(){var t=o()(s.a.mark(function t(e,r){var n,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,o=".get_stats",t.abrupt("return",l(n,T(a,A+o),{pid:r},void 0,"c3s/project/SET_STATS"));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),createProject:function(t,e){t.state;return l(t.commit,T(t.rootState,A+".create_project"),void 0,e,"c3s/project/SET_PROJECT")},updateProject:function(t,e){t.state;var r=t.commit,n=t.rootState,s=p()(e,2),a=s[0],o=s[1];return l(r,T(n,A+".update_project"),{pid:a},o,"c3s/project/SET_PROJECT")},deleteProject:function(t,e){t.state;var r=t.commit,n=t.rootState,s=p()(e,2),a=s[0];return s[1]&&r("c3s/project/SET_PROJECT",null),l(r,T(n,A+".delete_project"),{pid:a},void 0,void 0)}},mutations:{SET_PROJECTS:function(t,e){t.projects=e},SET_PROJECT:function(t,e){t.project=e},SET_STATS:function(t,e){t.stats=e},SET_COMMENTS:function(t,e){t.comments=e},SET_PROJECT_TASKS:function(t,e){t.tasks=e},SET_PROJECT_TASK:function(t,e){t.task=e},SET_MEDIA:function(t,e){t.media=e}}},M={namespaced:!0,state:{comments:[],comment:null},getters:{},actions:{getComments:function(){var t=o()(s.a.mark(function t(e,r){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,a=e.rootState,r=d.a.encode(r),t.abrupt("return",l(n,a.c3s.client.apis.Comments.get_all,{search_term:r||void 0},void 0,"c3s/comments/SET_COMMENTS"));case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),createComment:function(t,e){t.state;return l(t.commit,t.rootState.c3s.client.apis.Comments.create_comment,void 0,e,"c3s/comments/ADD_COMMENT")}},mutations:{SET_COMMENTS:function(t,e){t.comments=e},ADD_COMMENT:function(t,e){t.comments.push(e)}}},N={namespaced:!0,state:{loading:!1,error:null,errTimeout:5e3},getters:{},actions:{setError:function(t,e){var r=t.state,n=t.commit;t.rootState;console.log(e),n("SET_ERROR",e),setTimeout(function(){n("SET_ERROR",null)},r.errTimeout)}},mutations:{SET_LOADING:function(t,e){t.loading=e},SET_ERROR:function(t,e){t.error=e}}},C=Object.freeze({api:v,user:g,task:b,member:w,submission:R,media:O,upload:U,project:y,comments:M,settings:N}),I=[{name:"c3s",module:v},{name:["c3s","user"],module:g},{name:["c3s","member"],module:w},{name:["c3s","task"],module:b},{name:["c3s","media"],module:O},{name:["c3s","submission"],module:R},{name:["c3s","comments"],module:M},{name:["c3s","project"],module:y},{name:["c3s","settings"],module:N}],j={plugin:{install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};S()(e.apiURL,{requestInterceptor:function(t){if(e.server&&-1===t.url.indexOf("openapi.json")&&(t.url=t.url.replace("http://localhost:9000/api/v3/",e.server)),t.headers["content-type"]="application/json",e.store.state.c3s&&e.store.state.c3s.user){var r=e.store.state.c3s.user.currentUser;r&&(t.headers["X-API-KEY"]=r.api_key)}else console.log("c3s: state not loaded or not found");return t}}).then(function(r){var n=e.store,s=e.apiURL;if(n&&s){for(var a in console.log("Loaded from "+e.apiURL),I){var o=I[a],i=o.name,c=!0;Array.isArray(i)?n.state.c3s&&void 0===n.state.c3s[i[1]]&&(c=!1):void 0===n.state[i]&&(c=!1),n.registerModule(i,o.module,{preserveState:c})}n.commit("c3s/SET_API",r);var u=function(){return void 0!==n.c3s&&null!==n.c3s.client};t.prototype.$c3s={store:C,loaded:u},t.c3s={store:C,loaded:u}}else console.error("C3S: Missing store and/or Swagger URL params.")}).catch(function(t){console.error("C3S: URL was not found or an initialisation error occurred"),console.error(t)})}},store:C};e.a=j}}]);