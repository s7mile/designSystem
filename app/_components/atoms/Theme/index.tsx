/* eslint-disable */
export default function Theme() {
  const script =
    '(function(){function e(d){window.__theme=d,window.__onThemeChange(d),c=d,b(d),f(d)}function f(c){const a=document.querySelector("body");a.setAttribute("data-theme",c)}function b(c){let d=`${encodeURIComponent("theme")}=${encodeURIComponent(c)}`;Object.entries({path:"/",domain:".mrblue.com","Max-Age":"31536000"}).forEach(([b,a])=>{d+=`; ${b}`,!0!==a&&(d+=`=${a}`)}),document.cookie=d}window.__onThemeChange=function(){},window.__setPreferredTheme=function(a){e(a)},function(){const a=window.matchMedia("(prefers-color-scheme: dark)");a?.addEventListener("change",a=>{e(a.matches?"dark":"light")})}();let c=function(){const e="theme"; const a=document.cookie.split(";");for(let b=0;b<a.length;b++){const c=a[b].trim();if(c.startsWith(`${e}=`))return decodeURIComponent(c.substring(e.length+1))}return null}()||function(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}();e(c)})();';
  return <script id="dark-mode" dangerouslySetInnerHTML={{ __html: script }} />;
}
