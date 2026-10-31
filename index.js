import{a as m,S as p,i as a}from"./assets/vendor-CqoLp5UU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="58333326-8c8b67f379949b4e0a89068c6",g="https://pixabay.com/api/";function h(s){return m.get(g,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${o}" alt="${e}" />
          </a>
          <ul class="info">
            <li><b>Likes</b><span>${t}</span></li>
            <li><b>Views</b><span>${i}</span></li>
            <li><b>Comments</b><span>${u}</span></li>
            <li><b>Downloads</b><span>${f}</span></li>
          </ul>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query!",position:"topRight"});return}L(),S(),h(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{a.error({message:`Something went wrong: ${o.message}`,position:"topRight"})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
