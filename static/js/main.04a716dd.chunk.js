(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(2),o=n.n(i),s=(n(13),n(3)),l=n(4),c=n(6),u=n(5),f=n(7),d=(n(15),["Michal","Kasia","Jacek","Marta","Tomek","Ania"]),h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={filteredUsers:d},e}return Object(f.a)(t,e),Object(l.a)(t,[{key:"filterUsers",value:function(e){var t=e.currentTarget.value,n=this.getFilteredUsersForText(t);this.setState({filteredUsers:n})}},{key:"getFilteredUsersForText",value:function(e){return d.filter(function(t){return t.toLowerCase().includes(e.toLowerCase())})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{onInput:this.filterUsers.bind(this)}),a.a.createElement(m,{users:this.state.filteredUsers}))}}]),t}(r.Component),m=function(e){var t=e.users;return t.length>0?a.a.createElement("ul",null,t.map(function(e){return a.a.createElement("li",{key:e},e)})):a.a.createElement("p",null,"No results!")},w=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.04a716dd.chunk.js.map