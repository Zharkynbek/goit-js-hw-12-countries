(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("8cZI"),t("lmye"),t("D/wG"),t("L1EO"),t("JBxO"),t("FdtR"),t("wcNg");function r(n,e,t,r,i,o,u){try{var a=n[o](u),c=a.value}catch(n){return void t(n)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,o){var u=n.apply(e,t);function a(n){r(u,i,o,a,c,"next",n)}function c(n){r(u,i,o,a,c,"throw",n)}a(void 0)}))}}function o(){return(o=i(regeneratorRuntime.mark((function n(e){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("https://restcountries.eu/rest/v2/name/"+e).then((function(n){return n.json()})).catch((function(){return console.log("error")})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var u=t("QJ3N"),a=(t("bzha"),t("zrP5"),t("jffb")),c=t.n(a),s={input:document.querySelector(".input"),countriesList:document.querySelector(".countriesList"),btnRef:document.querySelector(".btn")};s.input.addEventListener("input",c()((function(n){(function(n){return o.apply(this,arguments)})(n.target.value).then((function(n){if(n.length>1&&n.length<=10){var e=n.map((function(n){return"<li>"+n.name+"</li>"})).join("");s.countriesList.innerHTML="",s.countriesList.insertAdjacentHTML("beforeend",e)}else if(1===n.length){console.log(n);var t=n[0].languages.map((function(n){return"<li>"+n.name+"</li>"})).join(""),r=n.map((function(n){return'<li class="countryList">\n                    <h1 class="countryName">'+n.name+'</h1>\n                    <div class="img"><img src="'+n.flag+'" width="320"></div>\n                    <p class="capitalName">Capital: '+n.capital+'</p>\n                    <p class="populationName">Population: '+n.population+'</p>\n                    <p class="languageName">Languages:</p>\n                    <ul class="languages">'+t+"</ul>\n                    </li>"})).join("");s.countriesList.innerHTML="",s.countriesList.insertAdjacentHTML("beforeend",r)}else n.length>10?(s.countriesList.innerHTML="",Object(u.error)({text:"Too many matches found. Please enter a more specific query!",delay:2e3})):Object(u.error)({text:"Too many matches found!",delay:2e3})}))}),500))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.21cef49e1ad2b33369da.js.map