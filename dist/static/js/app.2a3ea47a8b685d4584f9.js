webpackJsonp([0],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"navigation"}},[i("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" "),i("router-link",{attrs:{to:"instructions"}},[e._v("Instructions")]),e._v(" "),i("router-link",{attrs:{to:"contact"}},[e._v("Contact")])],1),e._v(" "),e._m(0),e._v(" "),i("router-view"),e._v(" "),e._m(1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v("Sky pet")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("div",[t("h2",[this._v("Please, if you have any questions please feel free to contact me or visit the community forum!")])])])}]};var o=i("VU/8")({name:"App"},n,!1,function(e){i("bKD6")},null,null).exports,s=i("/ocq");window.onload=function(){var e=document.getElementById("fbutton"),t=document.getElementById("wbutton"),i=document.getElementById("lightOnButton"),a=document.getElementById("lightOffButton");e.addEventListener("click",function(){fetch("http://71.11.135.22:3000/api/servo2/sml",{headers:{"Content-Type":"application/json"},method:"POST",mode:"no-cors"}).then(function(e){return e.ok})}),t.addEventListener("click",function(){fetch("http://71.11.135.22:3000/api/servo/sml",{headers:{"Content-Type":"application/json"},method:"POST",mode:"no-cors"}).then(function(e){return e.ok})}),i.addEventListener("click",function(){fetch("http://71.11.135.22:3000/api/led/on",{headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json}),console.log(Response.json)}),a.addEventListener("click",function(){fetch("http://71.11.135.22:3000/api/led/off",{headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json}),console.log(Response.json)})};var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page",attrs:{id:"home"}},[t("img",{staticStyle:{"-webkit-user-select":"none"},attrs:{src:"http://71.11.135.22:8081/",alt:"Looks like the camera feed did not make it to the website! This is where your webcam footage should be. Make sure to refer to your user manual for proper device setup!"}}),this._v(" "),t("div",{attrs:{id:"forms"}},[t("input",{attrs:{id:"wbutton",type:"button",value:"Water"}}),this._v(" "),t("input",{attrs:{id:"fbutton",type:"button",value:"Feed"}})]),this._v(" "),t("h2",[this._v("Lights control below")]),this._v(" "),t("div",{attrs:{id:"lightbulb"}},[t("input",{attrs:{id:"lightOnButton",type:"submit",value:"On"}}),this._v(" "),t("input",{attrs:{id:"lightOffButton",type:"submit",value:"Off"}})])])}]};var r=i("VU/8")({name:"Home"},u,!1,function(e){i("gznj")},null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page"},[i("h1",[e._v("Instructions")]),e._v(" "),i("div",{attrs:{id:"instructions"}},[i("h2",[e._v("Connect the feed and watering unit to the internet.")]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur enim ea excepturi earum dicta, magni corrupti maiores expedita praesentium fugiat, nam distinctio perspiciatis animi soluta nobis repudiandae. Eum, facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatibus quod. Rerum exercitationem eius tenetur nesciunt iste cum tempore corrupti autem quam alias, reprehenderit quod eum cumque repellendus velit aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illum, quasi dolores fuga explicabo consequatur quidem voluptas et doloremque esse saepe alias, quibusdam repudiandae natus quisquam! Autem neque ratione molestias.")]),e._v(" "),i("h2",[e._v("Congrats! thats all for now.")]),e._v(" "),i("p",[e._v("\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit ullam at repellendus. Amet, molestiae laboriosam. Quam nesciunt non id iste, voluptas dolorum eligendi pariatur natus dolor soluta quia beatae.\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur laborum quos repellendus, quidem, quis, esse ex asperiores earum magni nostrum! Eum, doloremque earum quis cumque explicabo voluptatibus ad adipisci!\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem esse id obcaecati? Qui adipisci vitae molestias necessitatibus. Odio doloribus officia, animi unde laboriosam culpa doloremque laborum cum voluptas tempora?\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa, numquam beatae odit id ipsam, odio tenetur aut labore, nihil officiis optio ad. Laboriosam voluptates veniam totam quas est provident?\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut ut quo distinctio incidunt rem ea saepe quis! Provident quis quas officiis quisquam sunt maxime nisi blanditiis assumenda nesciunt culpa.\r\n        ")])])])}]};var c=i("VU/8")({name:"Instructions"},m,!1,function(e){i("lPbY")},null,null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page"},[i("h1",[e._v("Contact us")]),e._v(" "),i("h2",[e._v("About the community forum...")]),e._v(" "),i("p",[e._v("\n    link:   Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro voluptatem excepturi cumque debitis? Nam ipsa et aperiam, qui officiis, itaque asperiores quia repudiandae earum porro eos minus pariatur placeat.\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod placeat libero et porro distinctio sit itaque minima harum labore deleniti voluptates sunt tempora voluptatibus architecto facilis, quas modi neque qui!\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo quasi voluptatibus consectetur minima cupiditate necessitatibus, animi similique tempora minus. Dolore beatae omnis, nulla molestias possimus provident distinctio numquam aliquid?\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ab libero repellat ducimus facilis accusamus sint. Quis culpa illo voluptas nobis atque quisquam saepe, a dignissimos pariatur quidem dolorum minus!\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam qui, enim tenetur ut inventore aspernatur maxime quidem possimus culpa ad vel nulla laboriosam. Consequuntur consectetur debitis deleniti fuga velit!\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempora distinctio et, ea earum adipisci quisquam quo dolorem ullam ipsa iure odio est, molestias illo vel perferendis mollitia magnam nam!\n\n")]),e._v(" "),i("h2",[e._v("Anything that we missed?")]),e._v(" "),i("p",[e._v("\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur nesciunt ducimus ab animi suscipit! Quam, placeat! Sed blanditiis doloremque eos fuga, hic adipisci quaerat quam dolorem repellat quod voluptas! Beatae.\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus animi cumque ipsam at veritatis reiciendis voluptates accusantium, exercitationem officia facilis delectus incidunt illo eligendi, obcaecati non corrupti modi. Totam, iure.\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem culpa doloremque, beatae sunt quibusdam eveniet! Soluta, assumenda fugiat. Placeat culpa officia facilis beatae explicabo ipsum labore repellendus dolores sapiente temporibus?\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid voluptate ducimus dolorum, harum magni quam reprehenderit voluptatem unde molestiae obcaecati, optio eaque facilis nam! Autem rerum voluptatum deserunt eligendi ipsam!\n    \n")])])}]};var p=i("VU/8")({name:"Contact"},l,!1,function(e){i("ZA7J")},null,null).exports;a.a.use(s.a);var d=new s.a({mode:"history",routes:[{path:"/",name:"Home",component:r},{path:"/contact",name:"Contact",component:p},{path:"/instructions",name:"Instructions",component:c}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:d,components:{App:o},template:"<App/>"})},ZA7J:function(e,t){},bKD6:function(e,t){},gznj:function(e,t){},lPbY:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2a3ea47a8b685d4584f9.js.map