(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(92)},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(23),o=n.n(s),i=(n(31),n(5)),c=n(6),l=n(9),u=n(7),h=n(8),m=n(2),d=(n(33),n(35),n(37),n(13)),g=n(16),p=n(14);d.b.add(p.a,p.b);var f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.business;return r.a.createElement("div",{className:"Business"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:e.imageSrc,alt:""}),r.a.createElement("h2",null,e.name),r.a.createElement("div",{className:"Business-information"},r.a.createElement("div",{className:"Business-address"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.google.com/maps/place/"+e.address+" "+e.city,target:"_blank",rel:"noopener noreferrer"},e.address,"  ",r.a.createElement(g.a,{icon:"map-marker-alt"}))),r.a.createElement("p",null,e.city),r.a.createElement("p",null,e.state," ",e.zipCode),r.a.createElement("p",null,e.phone,r.a.createElement(g.a,{icon:"phone"}))),r.a.createElement("div",{className:"Business-reviews"},r.a.createElement("h3",null,e.category),r.a.createElement("h3",null,e.priceRange),r.a.createElement("h3",{className:"rating"},e.rating," star",e.rating>0&&e.rating<=1?"":"s"),r.a.createElement("p",null,e.reviewCount," review",1===e.reviewCount?"":"s"))),r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"Open restaurant's page"),r.a.createElement("div",null)))}}]),t}(r.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BusinessList"},this.props.businesses.map(function(e){return r.a.createElement(f,{key:e.id,business:e})}))}}]),t}(r.a.Component),v=n(17),E=n.n(v),y=n(24),j=['mcdonald"s',"kfc","sushi","subway","pizza","steakhouse","korean","german","french","ethiopian","arab","uzbek","greek","italian","thai","vietnamese","indian","chinese","russian","mexican","american","cuban","ukranian","canadian","japanese","steak","downtown","mediterranean","fast food","bbq","brazilian","vegetarian","punjabi"],O=function(){var e=Object(y.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),k=(n(43),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={suggestionsEnabled:n.props.suggestionsEnabled,suggestions:[],filteredSuggestions:[]},n.handleClick=n.handleClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;O(this.props).then(function(t){e.setState({suggestions:t})})}},{key:"componentWillReceiveProps",value:function(e){var t;if(!1===e.suggestionsEnabled||this.state.filteredSuggestions.includes(e.userInput)||""===e.userInput)return this.setState({suggestionsEnabled:!1}),null;t=this.state.suggestions.filter(function(t){return t.toLowerCase().startsWith(e.userInput.toLowerCase())}),this.setState({filteredSuggestions:t,suggestionsEnabled:!0})}},{key:"handleClick",value:function(e){this.props.setTermValue(e.currentTarget.innerHTML),this.setState({suggestionsEnabled:!1})}},{key:"render",value:function(){var e=this;return this.state.suggestionsEnabled?r.a.createElement("ul",{className:"suggestions"},this.state.filteredSuggestions.map(function(t){return r.a.createElement("li",{className:"suggestionItem",key:t,onClick:e.handleClick,value:t},t)})):null}}]),t}(r.a.Component)),w=(n(45),{"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"}),S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={term:"",location:"",sortBy:"best_match",termError:!1,locationError:!1,termAutocompletionEnabled:!1},n.handleTermChange=n.handleTermChange.bind(Object(m.a)(Object(m.a)(n))),n.handleLocationChange=n.handleLocationChange.bind(Object(m.a)(Object(m.a)(n))),n.handleSearch=n.handleSearch.bind(Object(m.a)(Object(m.a)(n))),n.setTermValue=n.setTermValue.bind(Object(m.a)(Object(m.a)(n))),n.focusOnLocationField=n.focusOnLocationField.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getSortByClass",value:function(e){return e===this.state.sortBy?"active":""}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value,termError:e.target.value.length>0&&!1,termAutocompletionEnabled:!0}),e.preventDefault()}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value,locationError:e.target.value.length>0&&!1})}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e}),""!==this.state.term&&""!==this.state.location&&this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)}},{key:"handleSearch",value:function(e){"click"!==e.type&&13!==e.keyCode||(this.props.clearErrorMessageAndSearchResults(),""===this.state.location&&""===this.state.term?this.setState({termError:!0,locationError:!0}):""===this.state.term?this.setState({termError:!0,locationError:!1}):""===this.state.location?this.setState({termError:!1,locationError:!0}):(this.setState({termError:!1,locationError:!1,loading:!0}),this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)),e.preventDefault())}},{key:"setTermValue",value:function(e){this.setState({term:e}),this.refs.locationField.focus()}},{key:"focusOnLocationField",value:function(e){this.setState({termAutocompletionEnabled:!1}),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(w).map(function(t){var n=w[t];return r.a.createElement("li",{className:e.getSortByClass(n),key:n,onClick:e.handleSortByChange.bind(e,n)},t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("div",{className:"SearchBar-sort-options"},r.a.createElement("ul",null,this.renderSortByOptions())),r.a.createElement("div",{className:"SearchBar-fields"},r.a.createElement("form",{method:"#",onKeyDown:this.handleSearch,autoComplete:"on"},r.a.createElement("div",null,r.a.createElement("div",{className:"inputFieldErrorMessage"},this.state.termError?"The field cannot be empty":void 0),r.a.createElement("input",{onChange:this.handleTermChange,placeholder:"Search Restaurants",value:this.state.term,className:this.state.termError?"inputFieldError":void 0,ref:"restaurantField",id:"restaurantField",autoComplete:"off",autoFocus:!0}),r.a.createElement(k,{userInput:this.state.term,setTermValue:this.setTermValue,suggestionsEnabled:this.state.termAutocompletionEnabled,location:this.state.location})),r.a.createElement("div",null,r.a.createElement("div",{className:"inputFieldErrorMessage"},this.state.locationError?"The field cannot be empty":void 0),r.a.createElement("input",{onChange:this.handleLocationChange,onFocus:this.focusOnLocationField,placeholder:"Where?",className:this.state.locationError?"inputFieldError":void 0,ref:"locationField",id:"locationField",autoComplete:"off"})))),r.a.createElement("div",{className:"SearchBar-submit"},r.a.createElement("button",{onClick:this.handleSearch},"Let's Go")))}}]),t}(r.a.Component),C=function(e,t,n){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(n),{headers:{Authorization:"Bearer ".concat("AtXwTkXAS_KRjWQfaQqZby_CgxqfySQsmzZwqXZjglLvYi29i69_ToIcvXeGPYMG75gqVTQz9o-U-kxr8FKrt-vIdsCNpweeNnf3NVuYlInAm2MrHqeb5DhmamhGXHYx")}}).then(function(e){return e.json()}).then(function(e){return e.businesses.map(function(t){if(e.businesses)return{id:t.id,imageSrc:t.image_url,name:t.name,address:t.location.address1,city:t.location.city,state:t.location.state,zipCode:t.location.zip_code,category:t.categories[0].title,rating:t.rating,reviewCount:t.review_count,url:t.url,phone:t.phone,priceRange:t.price};throw Error("Nothing was returned")})}).catch(function(){return[]})},N=n(25),B=(n(73),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement(N.FadeLoader,{css:"\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 10rem auto;\n    width: 100%;\n    height: 100%;\n",sizeUnit:"rem",size:6,color:"black",loading:this.props.loading,margin:"10%"}))}}]),t}(r.a.Component)),M=(n(75),function(e){return r.a.createElement("h3",{className:"error"},e.errorMessage)}),L=(n(77),n(15)),A={height:"2.3rem",margin:".1rem .3rem"},T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={showMenu:!1},n.toggleButton=n.toggleButton.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"toggleButton",value:function(){this.setState({showMenu:!this.state.showMenu})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login",onMouseEnter:this.toggleButton,onMouseLeave:this.toggleButton},r.a.createElement("button",{className:this.state.showMenu?"Button-Active":""},"Log In With"),r.a.createElement("div",{className:this.state.showMenu?"Login-Menu":"Login-Menu hidden"},r.a.createElement(L.FacebookLoginButton,{style:A},r.a.createElement("span",null,"Facebook")),r.a.createElement(L.GoogleLoginButton,{style:A},r.a.createElement("span",null,"Google")),r.a.createElement(L.TwitterLoginButton,{style:A},r.a.createElement("span",null,"Twitter"))))}}]),t}(r.a.Component),F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={businesses:[],loading:!1,errorMessage:""},n.searchYelp=n.searchYelp.bind(Object(m.a)(Object(m.a)(n))),n.clearErrorMessageAndSearchResults=n.clearErrorMessageAndSearchResults.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"searchYelp",value:function(e,t,n){var a=this;this.setState({businesses:[],loading:!0}),C(e,t,n).then(function(e){e.length>0?a.setState({loading:!1,businesses:e,errorMessage:""}):a.setState({loading:!1,businesses:[],errorMessage:"Your search hasn't returned any results. Please check your input or Internet connection"})})}},{key:"clearErrorMessageAndSearchResults",value:function(){this.setState({businesses:[],errorMessage:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"NavMenu"},r.a.createElement("div",{className:"Logo"},r.a.createElement("h1",null,"Ravenous")),r.a.createElement("div",{className:"LoginMenu"},r.a.createElement(T,null))),r.a.createElement(S,{searchYelp:this.searchYelp,clearErrorMessageAndSearchResults:this.clearErrorMessageAndSearchResults}),r.a.createElement(B,{loading:this.state.loading}),r.a.createElement(b,{businesses:this.state.businesses}),r.a.createElement(M,{errorMessage:this.state.errorMessage}))}}]),t}(r.a.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(F,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/search-restaurants",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/search-restaurants","/service-worker.js");R?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):W(t,e)})}}()}},[[26,2,1]]]);
//# sourceMappingURL=main.dd3865a9.chunk.js.map