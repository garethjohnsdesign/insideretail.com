!function(){function e(t){var n={};3==t.nodeType&&(n=t.nodeValue);var s=[].slice.call(t.childNodes).filter(function(e){return 3===e.nodeType});if(t.hasChildNodes()&&t.childNodes.length===s.length)n=[].slice.call(t.childNodes).reduce(function(e,t){return e+t.nodeValue},"");else if(t.hasChildNodes())for(var i=0;i<t.childNodes.length;i++){var r=t.childNodes.item(i),a=r.nodeName;if("undefined"==typeof n[a])n[a]=e(r);else{if("undefined"==typeof n[a].push){var o=n[a];n[a]=[],n[a].push(o)}n[a].push(e(r))}}return n}function t(t){var n=e(t);return n.entry&&n.entry instanceof Array?n.entry:n.channel.item}function n(){var e,t;if(c=(a.value+"").toLowerCase(),!c||c.length<3)return d="",void o.classList.add("is-hidden");o.style.offsetWidth;var n=l.filter(function(e){if((e.title+"").toLowerCase().indexOf(c)!==-1||((e.description||e.content)+"").toLowerCase().indexOf(c)!==-1)return!0});n.length||o.classList.add("is-hidden"),e=n.reduce(function(e,t){return t.title+e},""),n.length&&e!==d&&(o.classList.remove("is-hidden"),o.innerHTML=n.map(function(e){return t=new Date(e.pubDate),'<li><a href="'+e.link+'">'+e.title+'<span class="super-search__result-date">'+t.toUTCString().replace(/.*(\d{2})\s+(\w{3})\s+(\d{4}).*/,"$2 $1, $3")+"</span></a></li>"}).join("")),d=e}function s(e){i=e.searchFile||i,r=document.querySelector(e.searchSelector||"#js-super-search"),a=document.querySelector(e.inputSelector||"#js-super-search__input"),o=document.querySelector(e.resultsSelector||"#js-super-search__results");var s=new XMLHttpRequest;s.open("GET",i),s.onreadystatechange=function(){if(4==s.readyState&&(200==s.status||304==s.status)){var e=(new DOMParser).parseFromString(s.responseText,"text/xml");e=e.children[0],l=t(e)}},s.send(),window.addEventListener("keyup",function e(t){27===t.which&&toggleSearch()}),window.addEventListener("keypress",function e(t){47!==t.which||r.classList.contains("is-active")||toggleSearch()}),a.addEventListener("input",function e(){n()})}var i="/feed.xml",r,a,o,c="",d,l=[];window.toggleSearch=function e(){r.classList.toggle("is-active"),r.classList.contains("is-active")?a.value="":o.classList.add("is-hidden"),setTimeout(function(){a.focus()},210)},s.toggle=toggleSearch,window.superSearch=s}();