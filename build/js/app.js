(()=>{var e={543:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=543,e.exports=t}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){return e instanceof Function}var t,n;((t=function(){var e;e=document.querySelector("header.headerActions"),document.addEventListener("click",(function(t){var s=t.target;s.classList.contains("tags_header__label")&&window.innerWidth<=991.98?e.classList.toggle("tags_open"):e.classList.contains("tags_open")&&!s.closest(".tags_header__list")&&e.classList.remove("tags_open"),s.classList.contains("links_aside__title")&&window.innerWidth<=991.98?s.parentElement.classList.contains("list_open")?s.parentElement.classList.remove("list_open"):document.querySelector(".list_open")?(document.querySelector(".list_open").classList.remove("list_open"),s.parentElement.classList.add("list_open")):s.parentElement.classList.add("list_open"):document.querySelector(".list_open")&&!s.closest(".links_aside__list")&&document.querySelector(".list_open").classList.remove("list_open")}))})||e(t))&&window.addEventListener("load",t),(n=s(543)).keys().forEach(n)})()})();