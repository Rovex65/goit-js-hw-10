import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as S}from"./assets/vendor-77e16229.js";function s(){S.error({pauseOnHover:!1,position:"topRight",message:"Please choose a date in the future"})}function h(t){const u=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:l,minutes:f,seconds:p}}function D({days:t,hours:e,minutes:n,seconds:o}){return t=t.toString().padStart(2,"0"),e=e.toString().padStart(2,"0"),n=n.toString().padStart(2,"0"),o=o.toString().padStart(2,"0"),{days:t,hours:e,minutes:n,seconds:o}}function y({days:t,hours:e,minutes:n,seconds:o}){a[0].textContent=t,a[1].textContent=e,a[2].textContent=n,a[3].textContent=o}function c(t){y(D(h(t)))}function b(){i.disabled=!0;const t=r-Date.now();if(t<=0){s();return}d.disabled=!0,c(t);const e=setInterval(()=>{const n=r-Date.now();c(n)},1e3);setTimeout(()=>{clearInterval(e),d.disabled=!1},t)}let r;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<=Date.now()?(s(),i.disabled=!0):i.disabled=!1}};m("#datetime-picker",g);const i=document.querySelector("button[data-start]"),a=document.querySelectorAll(".timer .value"),d=document.getElementById("datetime-picker");i.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
