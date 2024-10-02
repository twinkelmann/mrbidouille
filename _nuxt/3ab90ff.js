(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{277:function(e,t,n){"use strict";var r=n(2),o=n(278);r({target:"String",proto:!0,forced:n(279)("link")},{link:function(e){return o(this,"a","href",e)}})},278:function(e,t,n){"use strict";var r=n(4),o=n(22),l=n(14),c=/"/g,d=r("".replace);e.exports=function(e,t,n,r){var m=l(o(e)),v="<"+t;return""!==n&&(v+=" "+n+'="'+d(l(r),c,"&quot;")+'"'),v+">"+m+"</"+t+">"}},279:function(e,t,n){"use strict";var r=n(3);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},280:function(e,t,n){"use strict";n(281);var r={en:{"2020-04-01-introduction":{date:"2020-04-01",tags:["en","opinions"],img:"/images/articles/2020-04-01-introduction/is200.jpg",title:"Who are you and what am I doing here",summary:'This article has for goal to introduce who "Mr. Bidouille" is, and why you might want to bookmark this blog...',link:"/en/2020-04-01-introduction",hyvorId:2},"2020-05-01-is200-service-manual":{date:"2020-05-01",tags:["en","is200","service"],img:"/images/articles/2020-05-01-is200-service-manual/manual.jpg",title:"The Lexus IS200’s service manual",summary:"The service manual is an essential tool to service your car. But the problem is that it can be hard to find. But I finally got my hands on it....",link:"/en/2020-05-01-is200-service-manual",hyvorId:3},"2020-05-06-is200-timing-belt":{date:"2020-05-06",tags:["en","is200","service","timing belt"],img:"/images/articles/2020-05-06-is200-timing-belt/timing.jpg",title:"Changing the timing belt on the IS200",summary:"Complete guide on how to change the timing belt and the auxiliaries on the Lexus IS200 in your driveway on a budget...",link:"/en/2020-05-06-is200-timing-belt",hyvorId:4}},fr:{"2020-04-01-introduction":{date:"2020-04-01",tags:["fr","opinions"],img:"/images/articles/2020-04-01-introduction/is200.jpg",title:"Qui êtes-vous et qu'est-ce que je fais ici",summary:'Cet article a pour but de présenter qui est "Mr. Bidouille", et pourquoi vous voudriez garder un oeil sur ce blog...',link:"/fr/2020-04-01-introduction",hyvorId:2},"2020-05-01-is200-manuel-de-service":{date:"2020-05-01",tags:["fr","is200","service"],img:"/images/articles/2020-05-01-is200-service-manual/manual.jpg",title:"Manuel de service de la Lexus IS200",summary:"Le manuel de service est indispensable pour entretenir la voiture. Seulement voilà, il est compliqué à trouver. J’ai cependant finalement réussi à mettre la main dessus...",link:"/fr/2020-05-01-is200-manuel-de-service",hyvorId:3},"2020-05-06-is200-courroie-de-distribution":{date:"2020-05-06",tags:["fr","is200","service","distribution"],img:"/images/articles/2020-05-06-is200-timing-belt/timing.jpg",title:"Service de la courroie de distribution sur l'IS200",summary:"Guide complet pour changer la courroie de distribution et les auxiliaires sur la Lexus IS200 sur son parking à moindre coûts...",link:"/fr/2020-05-06-is200-courroie-de-distribution",hyvorId:4}},list:{en:[],fr:[]}};r.list.en=Object.values(r.en),r.list.fr=Object.values(r.fr),t.a=r},281:function(e,t,n){"use strict";var r=n(2),o=n(199).values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return d}));n(37),n(63),n(65),n(62),n(66),n(85),n(141),n(64),n(283),n(201),n(31),n(23),n(30),n(45),n(86),n(46),n(39),n(47);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,a){if(e){if("string"==typeof e)return o(e,a);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,a):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw c}}}}function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=Array(a);t<a;t++)n[t]=e[t];return n}function l(e,t){if(""===t)return e;var s=t.toLowerCase(),n=s.split(" "),o=[],l=[];return e.forEach((function(article){var e=[article.title.toLowerCase(),article.summary.toLowerCase(),article.date,article.tags.join(" ")].join(" ");if(e.includes(s))return o.push(article);var t,c=r(n);try{for(c.s();!(t=c.n()).done;){var d=t.value;if(!e.includes(d))return!1}}catch(e){c.e(e)}finally{c.f()}return l.push(article)})),o.concat(l)}function c(e){return e.sort((function(a,b){return b.date.localeCompare(a.date)}))}function d(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return e.splice.apply(e,[t,0].concat(r)),e}},283:function(e,t,n){"use strict";var r=n(2),o=n(4),l=n(34),c=n(26),d=n(38),m=n(202),v=n(14),f=n(3),h=n(203),_=n(143),y=n(284),j=n(285),x=n(84),w=n(286),C=[],S=o(C.sort),k=o(C.push),I=f((function(){C.sort(void 0)})),A=f((function(){C.sort(null)})),J=_("sort"),O=!f((function(){if(x)return x<70;if(!(y&&y>3)){if(j)return!0;if(w)return w<603;var code,e,t,n,r="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)C.push({k:e+n,v:t})}for(C.sort((function(a,b){return b.v-a.v})),n=0;n<C.length;n++)e=C[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:I||!A||!J||!O},{sort:function(e){void 0!==e&&l(e);var t=c(this);if(O)return void 0===e?S(t):S(t,e);var n,r,o=[],f=d(t);for(r=0;r<f;r++)r in t&&k(o,t[r]);for(h(o,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:v(t)>v(n)?1:-1}}(e)),n=d(o),r=0;r<n;)t[r]=o[r++];for(;r<f;)m(t,r++);return t}})},284:function(e,t,n){"use strict";var r=n(44).match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},285:function(e,t,n){"use strict";var r=n(44);e.exports=/MSIE|Trident/.test(r)},286:function(e,t,n){"use strict";var r=n(44).match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},287:function(e,t,n){"use strict";n(62),n(277);var r=n(110);var o=n(144),l=n(87);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(o.a)(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(141),n(200);var d=n(142),m={head:function(){return{title:"".concat(this.title," - Mr. Bidouille"),htmlAttrs:{lang:"en"},meta:[{hid:"description",name:"description",content:this.summary},{hid:"keywords",name:"keywords",content:[].concat(c(this.tags),["tech","cars","bidouille"]).join(",")}]}},props:{date:String,tags:{type:Array,default:function(){return[]}},img:String,title:String,summary:String,link:String,hyvorId:Number},computed:{random:function(){return d.a.MATOMO_SEED},HYVOR_TALK_WEBSITE:function(){return d.a.HYVOR_TALK_WEBSITE}}},v=n(18),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"flex-grow text-gray-100"},[t("article",[t("section",[t("div",{staticClass:"bg-cover bg-center bg-no-repeat w-full h-50 md:h-76 lg:h-100",style:"background-image: url(".concat(e.img,");")}),e._v(" "),t("h2",{staticClass:"text-center text-2xl lg:text-3xl font-bold mt-4 lg:mt-8 px-8",domProps:{textContent:e._s(e.title)}}),e._v(" "),t("ul",{staticClass:"flashy-pills-list flex flex-wrap items-center justify-center"},e._l(e.tags,(function(n,i){return t("li",{key:i,staticClass:"flashy-pill uppercase text-sm font-bold border-solid border-gray-800 border-2 rounded-full px-4 py-1 m-1",domProps:{textContent:e._s(n)}})})),0),e._v(" "),t("p",{staticClass:"text-center text-gray-400 my-2 px-8"},[e._v("\n        Mr. Bidouille - "+e._s(e.date)+"\n      ")])]),e._v(" "),t("section",{staticClass:"marked px-6 md:px-16 lg:px-32 xl:px-0 xl:mx-auto xl:w-300"},[e._t("default"),e._v(" "),t("script",{attrs:{async:"",src:"https://talk.hyvor.com/embed/embed.js",type:"module"}}),e._v(" "),t("hyvor-talk-comments",{attrs:{"website-id":e.HYVOR_TALK_WEBSITE,"page-id":e.hyvorId,"page-url":"https://mrbidouille.ch"+this.link,loading:"lazy"}})],2)]),e._v(" "),e._m(0),e._v(" "),t("img",{staticStyle:{width:"1px",height:"1px",border:"0"},attrs:{src:"https://analytics.naito.one/matomo.php?idsite=2&rec=1&action_name=".concat(e.title,"&url=https://mrbidouille.ch").concat(e.link,"&rand=").concat(e.random),alt:""}})])}),[function(){var e=this._self._c;return e("a",{staticClass:"back-to-top transition-opacity-200 opacity-1 pointer-events-auto fixed bottom-0 right-0 mb-12 mr-4 md:mr-8 p-6 rounded-full shadow-lg bg-gray-900 border-solid border-2 border-gray-800 flex items-center",attrs:{href:"#top"}},[e("i",{staticClass:"material-icons text-xl"},[this._v("arrow_upward")])])}],!1,null,null,null);t.a=component.exports},288:function(e,t,n){"use strict";n(37),n(63),n(141),n(30),n(68),n(67);var r=n(282),o={props:{src:String,alt:String,description:String},data:function(){return{finalSrc:Object(r.b)(this.src.replace(/\.(\w){3,4}$/g,".png").split("/").reverse(),1,"placeholder").reverse().join("/")}},mounted:function(){var e=this;setTimeout((function(){e.finalSrc=e.src}),0)}},l=n(18),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("figure",{staticClass:"w-full",attrs:{title:e.alt}},[t("a",{staticClass:"w-full h-full",attrs:{href:e.src}},[t("img",{staticClass:"w-full",attrs:{src:e.finalSrc,alt:e.alt}})]),e._v(" "),t("span",{domProps:{textContent:e._s(e.description)}})])}),[],!1,null,null,null);t.a=component.exports},297:function(e,t,n){"use strict";n.r(t);n(277);var r=n(287),o=n(288),l=n(280),c={components:{ArticleShell:r.a,ClickableImage:o.a},data:function(){return{article:l.a.fr["2020-04-01-introduction"]}}},d=n(18),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("article-shell",{attrs:{date:e.article.date,tags:e.article.tags,img:e.article.img,title:e.article.title,summary:e.article.summary,link:e.article.link,hyvorId:e.article.hyvorId}},[t("p",[e._v("\n    Ou bien est-ce l'inverse ? Je ne sais plus. Mais le développement de\n    ce blog est enfin fini et je peux commencer à écrire des choses. Donc pour\n    commencer, quelques informations à propos de moi, comme ça on se sentira\n    plus à l'aise pour les autres articles.\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    Je n'ai toujours pas décidé comment j'allais adresser l'audience.\n    « Toi », ou « vous » ? En tout cas, si vous lisez\n    les articles en anglais, il n'y aura pas ce problème. Pas de\n    « toi » en anglais ! Je pense que « vous » me\n    viendra plus naturellement en français.\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    Car oui, si vous ne l'avez pas encore remarqué ce blog est plus ou moins\n    bilingue. C'est-à-dire que l'interface est en anglais, car c'est une\n    langue que je considère internationale, et les articles sont dans les deux\n    langues que je connais, c'est-à-dire le français et l'anglais.\n  ")]),e._v(" "),t("p",[e._v("\n    Et quand je dis « connais », ne vous méprenez pas ! Je ne\n    prétends pas savoir écrire l'une ou l'autre de ces langues ! Je ferai\n    probablement pleins de fautes plus ou moins marrantes.\n  ")]),e._v(" "),t("p",[e._v("\n    Car oui, je suis suisse. C'est ça mon excuse ? Un peu quand\n    même ! On parle français comme c'est qu'on veut bien, ou bien\n    "),t("i",[e._v("(là vous vous demandez ce que j'ai écrit dans\n      "),t("nuxt-link",{attrs:{to:"/en/2020-04-01-introduction"}},[e._v("\n        la version anglaise")]),e._v("\n      de cet article)")],1),e._v(".\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    Ah oui, à propos de moi, du coup. Je suis un suisse de 20 ans passionné\n    par la technologie. Plus récemment, c'est-à-dire depuis que j'ai eu mon\n    permis il y a bientôt 2 ans (et oui frère, directement à mes 18 ans, toi\n    même tu sais). Je sais que je viens de mettre fin à une phrase alors que\n    je n'avais pas fini de m'exprimer, mais c'est pour faire une giga\n    parenthèse.\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    Je m'exprime (et m'exprimerai) toujours de manière très légère, limite\n    second degré, avec des références démodées et stupides, ou des parodies de\n    façons de parler. C'est juste comme ça que j'aime parler. Il faudra vous y\n    faire. Peut-être même que vous apprécierez me lire (je l'espère) (j'en\n    doute). Il paraît aussi que je fais plein de petites phrases au lieu de\n    lier mes mots ensemble. En relisant ce paragraphe je crois que c'est assez\n    véridique. Mais ça veut dire que je vais droit à l'essentiel (lol).\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    Ok donc maintenant que ma manière d'écrire a été décrite, je peux\n    continuer mes écrits. Depuis bientôt 2 ans, je m'intéresse aux voitures.\n    La moitié du déclic a été la série japonaise Initial D et l'autre moitié\n    le fait d'avoir mon permis et une petite voiture « rien qu'à\n    moi » (pas à moi en fait).\n  ")]),e._v(" "),t("p",[e._v("\n    Cette petite voiture, justement, était une Audi A3 de 1997. Je ne saurais\n    pas dire grand-chose de ses caractéristiques si ce n'est qu'elle était\n    ultra rabaissée, car lorsque je la conduisais, je ne connaissais\n    absolument rien en mécanique (oui, depuis, je me suis renseigné dessus, et\n    on va dire que c'est une bonne première voiture).\n  ")]),e._v(" "),t("clickable-image",{attrs:{src:"/images/articles/2020-04-01-introduction/audi.jpg",alt:"Photo de l'Audi A3",description:"L'une des rares photo de l'Audi A3. RIP (oui elle est partie à la casse)"}}),e._v(" "),t("p",[e._v("\n    Je me suis tout d'abord intéressé à la conduite automobile. Puis,\n    (ironiquement, comme Takumi dans Initial D) j'ai remarqué que connaître ce\n    qu'il se passait sous le capot était une bonne idée pour aller de l'avant\n    dans ce domaine.\n  ")]),e._v(" "),t("p",[e._v("\n    J'ai bien vite remarqué que l'Audi était une traction (duuh), et du coup,\n    j'ai bien sûr voulu une propulsion. Les drifts ça avait l'air quand même\n    cool. Après avoir (un peu) saigné l'Audi, qui en fait appartenait à mes\n    parents (haha), j'ai décidé d'acheter ma propre voiture.\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    J'ai mis quelques mois et j'ai décidé d'acquérir une Lexus IS200 de 2000.\n  ")]),e._v(" "),t("p",[e._v("\n    Cette voiture est incroyable. On en trouve d'occasion en Suisse en très\n    bon état pour entre 1'000 et 5'000 francs suisses, et elle avait tous mes\n    critères :\n  ")]),e._v(" "),t("ul",[t("li",[e._v("Propulsion")]),e._v(" "),t("li",[e._v("Japonaise")]),e._v(" "),t("li",[e._v("Années 90 (design de 1998)")]),e._v(" "),t("li",[e._v("Au moins 4 places (elle en a 5)")])]),e._v(" "),t("p",[e._v("\n    C'est une voiture incroyable, et vous la découvrirez avec moi sur ce blog.\n    Car oui, même si j'essaie de la connaître par cœur, il y a encore beaucoup\n    à apprendre.\n  ")]),e._v(" "),t("clickable-image",{attrs:{src:"/images/articles/2020-04-01-introduction/is200.jpg",alt:"Photo de la Lexus IS200",description:"La Lexus aux abords de son habitat naturel: le Touge Suisse"}}),e._v(" "),t("p",[e._v("\n    Je l'ai maintenant depuis quelques mois. J'ai déjà vu pas mal de\n    situations avec. Elle a surtout besoin d'une bonne grosse maintenance,\n    maintenant. Et j'ai décidé de faire toute la maintenance moi-même, malgré\n    mes connaissances limitées. Cela va me forcer à apprendre. Donc j'espère\n    que vous me pardonnerez quand je ferai n'importe quoi, et quand je\n    n'utiliserai pas le bon jargon technique. Pour tout dire, je connais plus\n    de jargon de voiture en anglais qu'en français, car la plupart des\n    ressources que j'utilise pour m'instruire sont en anglais.\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    Donc voilà. Ce blog contiendra mes avantages à faire le service de ma\n    voiture, changer des pièces (bien sûr j'ai planifié des mods. J'en\n    parlerai dans un futur post), comment je me les procure ici en Suisse,\n    etc.\n  ")]),e._v(" "),t("p",[e._v("\n    Mais aussi, je vais parler de différents projets en rapport avec les jeux\n    de simulation de voiture, et autres mods et addons de voiture que je\n    compte développer.\n  ")]),e._v(" "),t("p",[e._v("\n    Je vais aussi vendre des trucs. Alors attention ! Pour l'instant pas\n    des conneries, je vais juste développer des kits ou autres trucs super\n    utiles comme ça pour ma voiture et peut-être d'autres dans le futur. Vous\n    en saurez plus dans les mois à venir. Je suis en phase de tests finaux\n    pour mon premier kit, qui j'espère sera utile à plein de gens. Teaser, je\n    me suis penché sur le problème de la lenteur du papillon électronique de\n    l'IS200. Je n'en dirai pas plus pour le moment !\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    C'est aussi ma première expérience de blogging. J'espère que ça sera\n    intéressant.\n  ")]),e._v(" "),t("p",[e._v("\n    N'hésitez pas à utiliser les commentaires ci-dessous pour me faire des\n    retours. Vous pouvez même commenter sans créer de compte !\n  ")]),e._v(" "),t("p",[e._v("Sinon, mon adresse email est en fond de page pour un contact privé.")]),e._v(" "),t("p",[e._v("\n    Je créerai aussi une\n    "),t("a",{attrs:{href:"https://www.youtube.com/channel/UC2qxzQXsi8Yyl04uKxnKE6g"}},[e._v("chaîne Youtube")]),e._v("\n    sous peu (update: c'est fait), mais elle contiendra principalement des\n    clips pour mes articles. Je ne compte pas faire régulièrement des\n    « vidéos » à proprement parler.\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    Sur ces mots, je vais conclure ce premier post. À tout bientôt pour\n    plus !\n  ")]),e._v(" "),t("p",[t("br")]),e._v(" "),t("p",[e._v("\n    - Bidouille\n    "),t("span",{staticClass:"text-sm text-gray-300"},[e._v("(c'est pas un ordre, c'est mon pseudo. Mais quand même, vas-y,\n      bidouille !)")])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);