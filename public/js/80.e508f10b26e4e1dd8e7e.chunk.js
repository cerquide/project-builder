(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{UjCZ:function(t,e,n){"use strict";var r=n("J4zp"),a=n.n(r),s=n("o0o1"),o=n.n(s),c=n("yXPU"),i=n.n(c),u=n("6M8q"),p=n.n(u),m=n("lSNA"),f=n.n(m),d=(n("L2JU"),n("Y+lK")),S=n.n(d),l={namespaced:!0,state:{client:null,host:void 0},getters:{},actions:{setClient:function(t,e){(0,t.commit)("SET_API",e)}},mutations:{SET_API:function(t,e){t.client=e},SET_HOST:function(t,e){t.host=e}}};function v(t,e,n,r,a){return T.apply(this,arguments)}function T(){return(T=i()(o.a.mark(function t(e,n,r,a,s){var c,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e("c3s/settings/SET_LOADING",!0,{root:!0}),c=void 0,void 0!==a&&(c={requestBody:a}),t.next=6,n(r,c);case 6:return i=t.sent,console.dir(i),void 0!==s&&(console.log(n,i.body),e(s,i.body.data,{root:!0})),e("c3s/settings/SET_LOADING",!1,{root:!0}),t.abrupt("return",i);case 13:return t.prev=13,t.t0=t.catch(0),e("c3s/settings/SET_ERROR","Could not complete request",{root:!0}),e("c3s/settings/SET_LOADING",!1,{root:!0}),t.abrupt("return",t.t0);case 18:case"end":return t.stop()}},t,null,[[0,13]])}))).apply(this,arguments)}function _(t,e){for(var n=0,r=(e=e.split(".")).length;n<r;n++)t=t[e[n]];return t}var E=n("lPiR"),h="c3s.client.apis.Users",g={namespaced:!0,state:{user:null,currentUser:null,isAnon:!1},getters:{},actions:{login:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,e.dispatch,a=e.rootState,s=".login",t.abrupt("return",v(r,_(a,h+s),{},n,"c3s/user/SET_CURRENT_USER"));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),checkUsername:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,e.dispatch,a=e.rootState,s=".check_user",t.abrupt("return",v(r,_(a,h+s),{username:n},void 0,void 0));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),checkUseremail:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,e.dispatch,a=e.rootState,s=".check_user",console.log(n),t.abrupt("return",v(r,_(a,h+s),{email:n},void 0,void 0));case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),generateAnon:function(){var t=i()(o.a.mark(function t(e){var n,r,a,s,c,i,u,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,e.dispatch,r=e.rootState,a=".create_user",n("c3s/settings/SET_LOADING",!0,{root:!0}),s=""+Date.now(),c="_anon"+E(s),i=""+E(c),u={username:c,pwd:i,anonymous:!0,info:{}},p=v(n,_(r,h+a),void 0,u,"c3s/user/SET_CURRENT_USER"),n("SET_ANON",!0),t.abrupt("return",p);case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),logout:function(t){t.state;var e=t.commit;e("c3s/user/SET_CURRENT_USER",null,null,{root:!0}),e("SET_ANON",!1)},requestReset:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,e.dispatch,a=e.rootState,s=".reset",t.abrupt("return",v(r,_(a,h+s),{},{email:n},void 0));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),resetPwd:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,s=".verify_rest",t.abrupt("return",v(r,_(a,h+s),{},{reset:n},void 0));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),register:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,s=v(r,_(a,h+".create_user"),{},n,"c3s/user/SET_CURRENT_USER"),r("SET_ANON",!1),t.abrupt("return",s);case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getUser:function(){var t=i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,t.abrupt("return",v(r,a.c3s.client.apis.Users.get_one,{id:n},{},"c3s/user/SET_USER"));case 2:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),updateUser:function(){var t=i()(o.a.mark(function t(e,n){var r,s,c,i,u,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,s=e.rootState,c=a()(n,2),i=c[0],u=c[1],p=".update_user",t.abrupt("return",v(r,_(s,h+p),{id:i},{requestBody:u},"c3s/user/SET_CURRENT_USER"));case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),validate:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state,a=e.commit,s=e.rootState,c=".validate",void 0===r.currentUser.api_key){t.next=4;break}return t.abrupt("return",v(a,_(s,h+c),{key:r.currentUser.api_key},{},"c3s/user/SET_CURRENT_USER"));case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},mutations:{SET_USER:function(t,e){t.user=e},SET_CURRENT_USER:function(t,e){t.currentUser=e},SET_ANON:function(t,e){t.isAnon=e}}},k="c3s.client.apis.Activities",w={namespaced:!0,state:{activities:[],activity:null,tasks:[],stats:null,media:[],comments:[]},getters:{},actions:{getActivities:function(t,e){t.state;var n=t.commit,r=(t.dispatch,t.rootState),s=a()(e,2),o=s[0],c=s[1];o=p.a.encode(o);return v(n,_(r,k+".get_activities"),{search_term:o||void 0,limit:c||100},{},"c3s/activity/SET_ACTIVITIES")},getActivity:function(){var t=i()(o.a.mark(function t(e,n){var r,s,c,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,e.dispatch,s=e.rootState,c=a()(n,2),i=c[0],c[1],u=".get_activity",t.abrupt("return",v(r,_(s,k+u),{aid:i},{},"c3s/activity/SET_ACTIVITY"));case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getActivityTasks:function(){var t=i()(o.a.mark(function t(e,n){var r,s,c,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,e.dispatch,s=e.rootState,c=a()(n,1),i=c[0],u=".get_activity_tasks",t.abrupt("return",v(r,_(s,k+u),{aid:i},{},"c3s/activity/SET_ACTIVITY_TASKS"));case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getActivityCount:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,n=p.a.encode(n),s=".get_activity.count",t.abrupt("return",v(r,_(a,k+s),{search_term:n||void 0},{},void 0));case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getStats:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,s=".get_stats",t.abrupt("return",v(r,_(a,k+s),{aid:n},{},"c3s/activity/SET_STATS"));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),createActivity:function(t,e){t.state;return v(t.commit,_(t.rootState,k+".create_activity"),void 0,e,"c3s/activity/SET_ACTIVITY")},updateActivity:function(t,e){t.state;var n=t.commit,r=t.rootState,s=a()(e,2),o=s[0],c=s[1];return v(n,_(r,k+".update_activity"),{aid:o},c,"c3s/activity/SET_ACTIVITY")},deleteActivity:function(t,e){t.state;var n=t.commit,r=t.rootState,s=a()(e,2),o=s[0];return s[1]&&n("c3s/activity/SET_ACTIVITY",null),v(n,_(r,k+".delete_activity"),{aid:o},{},void 0)}},mutations:{SET_ACTIVITIES:function(t,e){t.activities=e},SET_ACTIVITY:function(t,e){t.activity=e},SET_STATS:function(t,e){t.stats=e},SET_COMMENTS:function(t,e){t.comments=e},SET_ACTIVITY_TASKS:function(t,e){t.tasks=e},SET_MEDIA:function(t,e){t.media=e}}},y="c3s.client.apis.Tasks",A={namespaced:!0,state:{tasks:[],task:null,media:[],comments:[],stats:{}},getters:{},actions:{getTasks:function(){var t=i()(o.a.mark(function t(e,n){var r,s,c,i,u,m;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,s=e.rootState,c=a()(n,2),i=c[0],u=c[1],m=".get_tasks",i=p.a.encode(i),t.abrupt("return",v(r,getNested(s,y+m),{search_term:i||void 0,limit:u||100},{},"c3s/task/SET_TASKS"));case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getTaskCount:function(){var t=i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,n=p.a.encode(n),t.abrupt("return",v(r,a.c3s.client.apis.Tasks.get_task_count,{search_term:n||void 0},{},void 0));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getTaskMedia:function(){var t=i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,n=p.a.encode(n),t.abrupt("return",v(r,a.c3s.client.apis.Media.get_media,{search_term:n||void 0},{},"c3s/task/SET_MEDIA"));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getTask:function(){var t=i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,t.abrupt("return",v(r,a.c3s.client.apis.Tasks.get_task,{id:n},{},"c3s/task/SET_TASK"));case 2:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getTaskComments:function(){var t=i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,t.abrupt("return",v(r,a.c3s.client.apis.Tasks.get_task_comments,{id:n},{},"c3s/task/SET_TASK_COMMENTS"));case 2:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getTaskStats:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,s=".get_stats",t.abrupt("return",v(r,getNested(a,y+s),{id:n},{},"c3s/task/SET_TASK_STATS"));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),createTasks:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.dispatch,s=e.rootState,c=v(r,s.c3s.client.apis.Tasks.create_tasks,{},n,void 0),a("c3s/upload/addID",c[0].id,{root:!0}),t.abrupt("return",c);case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),deleteTasks:function(t,e){t.state;var n=t.commit,r=t.dispatch,a=t.rootState;return r("SET_TASKS",null),v(n,a.c3s.client.apis.Tasks.delete_tasks,{},e,"c3s/task/SET_TASKS")}},mutations:{SET_TASKS:function(t,e){t.tasks=e},SET_TASK:function(t,e){t.task=e},SET_TASK_COMMENTS:function(t,e){t.comments=e},UPDATE_TASK:function(t,e,n){Object.assign(t.tasks[e],f()({},n.field,n.value))},SET_MEDIA:function(t,e){t.media=e},SET_STATS:function(t,e){t.stats=e},SET_COMMENTS:function(t,e){t.comments=e}}},b={namespaced:!0,state:{media:void 0,submission:{},submissions:[]},getters:{},actions:{getSubmissions:function(){var t=i()(o.a.mark(function t(e,n){var r,s,c,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,s=e.rootState,c=a()(n,2),i=c[0],u=c[1],i=p.a.encode(i),t.abrupt("return",v(r,s.c3s.client.apis.Submissions.get_submissions,{search_term:i||void 0,limit:u||100},{},"c3s/submission/SET_SUBMISSIONS"));case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getSubmissionCount:function(){var t=i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,n=p.a.encode(n),t.abrupt("return",v(r,a.c3s.client.apis.Submissions.get_submission_count,{search_term:n||void 0},{},void 0));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getUserSubmissions:function(){var t=i()(o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,n=e.commit,r=e.rootState,t.abrupt("return",v(n,r.c3s.client.apis.Users.get_submissions,{id:r.c3s.client.apis.Users.current_user.id},{},"c3s/submission/SET_SUBMISSIONS"));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),createSubmission:function(){var t=i()(o.a.mark(function t(e){var n,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,a=e.rootState,e.dispatch,t.abrupt("return",v(r,a.c3s.client.apis.Submissions.create_submission,{},n.submission,"c3s/submission/SET_SUBMISSION"));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),updateSubmission:function(){var t=i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,t.abrupt("return",v(r,a.c3s.client.apis.Submissions.update_submission,{id:n.id},n,"submission/c3s/SET_SUBMISSION"));case 2:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},mutations:{SET_MEDIA:function(t,e){t.media=e},SET_SUBMISSION:function(t,e){t.submission=e},SET_SUBMISSIONS:function(t,e){t.submissions=e},SET_SUBMISSION_RESPONSE:function(t,e,n){t.submission.content.responses[n]=e},SET_SUBMISSION_RESPONSES:function(t,e){t.submission.content.responses=e}}},I={namespaced:!0,state:{media:[]},getters:{},actions:{getMedia:function(t,e){t.state;var n=t.commit,r=t.rootState,s=a()(e,3),o=s[0],c=s[1],i=s[2];return o=p.a.encode(o),v(n,r.c3s.client.apis.Media.get_media,{search_term:o||void 0,limit:i||100},c)},deleteMedium:function(t,e){t.state;var n=t.commit;t.dispatch;return v(n,t.rootState.c3s.client.apis.Media.delete_medium,{id:e},void 0)},upload:function(t,e){t.state;return v(t.commit,t.rootState.c3s.client.apis.Media.upload,e,void 0)}},mutations:{SET_MEDIA:function(t,e){t.media=e}}},R={namespaced:!0,state:{id:null,content:[]},getters:{},actions:{addID:function(t,e){var n=t.state,r=t.commit,a=t.rootState;r("SET_ID",e),console.log("updating"),console.log(e);for(var s=function(t){r("c3s/settings/SET_LOADING",!0,{root:!0}),console.log(n.content[t]),a.c3s.client.apis.Media.put_medium({id:n.content[t],media:{id:n.content[t],source_id:e||n.id}}).then(function(e){console.log(e),r("c3s/settings/SET_LOADING",!1,{root:!0}),t===n.content.length-1&&r("CLEAR")}).catch(function(t){r("c3s/settings/SET_LOADING",!1,{root:!0}),console.error(t)})},o=0;o<n.content.length;o++)s(o)}},mutations:{SET_ID:function(t,e){t.id=e},ADD_CONTENT:function(t,e){console.log(e),t.content.push(e),console.log(t.content)},CLEAR:function(t){t.id=null,t.content=[]}}},C="c3s.client.apis.Projects",N={namespaced:!0,state:{projects:[],project:null,activities:[],stats:null,media:[],comments:[]},getters:{},actions:{getProjects:function(t,e){t.state;var n=t.commit,r=(t.dispatch,t.rootState),s=a()(e,2),o=s[0],c=s[1];o=p.a.encode(o);return v(n,_(r,C+".get_projects"),{search_term:o||void 0,limit:c||100},void 0,"c3s/project/SET_PROJECTS")},getProject:function(){var t=i()(o.a.mark(function t(e,n){var r,s,c,i,u,p,m;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,s=e.dispatch,c=e.rootState,i=a()(n,2),u=i[0],p=i[1],m=".get_project",p&&(s("task/getMedia",u,{root:!0}),s("task/getTasks",[u,1,0],{root:!0})),s("getStats",u),t.abrupt("return",v(r,_(c,C+m),{pid:u},{},"c3s/project/SET_PROJECT"));case 6:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getProjectActivities:function(){var t=i()(o.a.mark(function t(e,n){var r,a,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,e.dispatch,a=e.rootState,console.log(n),s=".get_project_activities",t.abrupt("return",v(r,_(a,C+s),{pid:n},void 0,"c3s/activity/SET_ACTIVITIES"));case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),getProjectCount:function(){var t=i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,n=p.a.encode(n),t.abrupt("return",v(r,a.c3s.client.apis.Projects.get_project_count,{search_term:n||void 0},{},void 0));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),createProject:function(t,e){t.state;return v(t.commit,_(t.rootState,C+".create_project"),{},e,"c3s/project/SET_PROJECT")},deleteProject:function(t,e){t.state;var n=t.commit,r=t.rootState,s=a()(e,2),o=s[0];return s[1]&&n("c3s/project/SET_PROJECT",null),v(n,_(r,C+".delete_project"),{id:o},{},void 0)}},mutations:{SET_PROJECTS:function(t,e){t.projects=e},SET_PROJECT:function(t,e){t.project=e},SET_STATS:function(t,e){t.stats=e},SET_COMMENTS:function(t,e){t.comments=e},SET_MEDIA:function(t,e){t.media=e}}},U={namespaced:!0,state:{comments:[],comment:null},getters:{},actions:{getComments:function(){var t=i()(o.a.mark(function t(e,n){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.state,r=e.commit,a=e.rootState,n=p.a.encode(n),t.abrupt("return",v(r,a.c3s.client.apis.Comments.get_all,{search_term:n||void 0},{},"c3s/comments/SET_COMMENTS"));case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),createComment:function(t,e){t.state;return v(t.commit,t.rootState.c3s.client.apis.Comments.create_comment,{},e,"c3s/comments/ADD_COMMENT")}},mutations:{SET_COMMENTS:function(t,e){t.comments=e},ADD_COMMENT:function(t,e){t.comments.push(e)}}},O={namespaced:!0,state:{loading:!1,error:null,errTimeout:5e3},getters:{},actions:{setError:function(t,e){var n=t.state,r=t.commit;t.rootState;console.log(e),r("SET_ERROR",e),setTimeout(function(){r("SET_ERROR",null)},n.errTimeout)}},mutations:{SET_LOADING:function(t,e){t.loading=e},SET_ERROR:function(t,e){t.error=e}}},M=Object.freeze({api:l,user:g,activity:w,task:A,submission:b,media:I,upload:R,project:N,comments:U,settings:O}),x=[{name:"c3s",module:l},{name:["c3s","user"],module:g},{name:["c3s","activity"],module:w},{name:["c3s","task"],module:A},{name:["c3s","media"],module:I},{name:["c3s","submission"],module:b},{name:["c3s","comments"],module:U},{name:["c3s","project"],module:N},{name:["c3s","settings"],module:O}],j={plugin:{install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};S()(e.apiURL,{requestInterceptor:function(t){if(e.server&&-1===t.url.indexOf("openapi.json")&&(t.url=t.url.replace("http://localhost:9000/api/v3/",e.server)),t.headers["content-type"]="application/json",e.store.state.c3s&&e.store.state.c3s.user){var n=e.store.state.c3s.user.currentUser;n&&(t.headers["X-API-KEY"]=n.api_key)}else console.log("c3s: state not loaded or not found");return t}}).then(function(n){var r=e.store,a=e.apiURL;if(r&&a){for(var s in console.log("Loaded from "+e.apiURL),x){var o=x[s],c=o.name,i=!0;Array.isArray(c)?r.state.c3s&&void 0===r.state.c3s[c[1]]&&(i=!1):void 0===r.state[c]&&(i=!1),r.registerModule(c,o.module,{preserveState:i})}r.commit("c3s/SET_API",n);var u=function(){return void 0!==r.c3s&&null!==r.c3s.client};t.prototype.$c3s={store:M,loaded:u},t.c3s={store:M,loaded:u}}else console.error("C3S: Missing store and/or Swagger URL params.")}).catch(function(t){console.error("C3S: URL was not found or an initialisation error occurred"),console.error(t)})}},store:M};e.a=j}}]);