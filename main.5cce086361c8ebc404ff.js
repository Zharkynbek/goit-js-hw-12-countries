(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,e){},QfWi:function(n,t,e){"use strict";e.r(t);e("8cZI"),e("lmye"),e("D/wG"),e("SgDD"),e("L1EO");var r={input:document.querySelector(".input"),countriesList:document.querySelector(".countriesList"),btnRef:document.querySelector(".btn")};e("JBxO"),e("FdtR"),e("wcNg");function i(n,t,e,r,i,o,u){try{var c=n[o](u),a=c.value}catch(n){return void e(n)}c.done?t(a):Promise.resolve(a).then(r,i)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var u=n.apply(t,e);function c(n){i(u,r,o,c,a,"next",n)}function a(n){i(u,r,o,c,a,"throw",n)}c(void 0)}))}}function u(){return(u=o(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("https://restcountries.eu/rest/v2/name/"+t).then((function(n){return n.json()})).catch((function(){return console.log("error")})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var c=e("QJ3N"),a=(e("bzha"),e("zrP5"),e("jffb")),s=e.n(a);r.input.addEventListener("input",s()((function(n){var t=n.target.value;r.countriesList.innerHTML="",""!==t.trim()&&function(n){return u.apply(this,arguments)}(t.trim()).then((function(n){if(console.log(n),n.length>1&&n.length<=10){var t=n.map((function(n){return"<li>"+n.name+"</li>"})).join("");r.countriesList.innerHTML="",r.countriesList.insertAdjacentHTML("beforeend",t)}else 1===n.length?function(n){var t=n[0].languages.map((function(n){return"<li>"+n.name+"</li>"})).join(""),e=n.map((function(n){var e=n.name,r=n.flag,i=n.population;return"<li>\n                    <h1>"+e+'</h1>\n                    <img src="'+r+'" alt="'+e+'" width="320">\n                    <p>Capital: '+n.capital+"</p>\n                    <p>Population: "+i+"</p>\n                    <ul>"+t+"</ul>\n                    </li>"})).join("");r.countriesList.innerHTML="",r.countriesList.insertAdjacentHTML("beforeend",e)}(n):n.length>10?Object(c.error)({text:"too many matches found",delay:2e3}):(Object(c.error)({text:"not found",delay:2e3}),r.countriesList.innerHTML="")}))}),500))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.5cce086361c8ebc404ff.js.map