function t(t){const e={};return new FormData(t.currentTarget).forEach(((t,o)=>{e[o]=t})),e}({form:document.querySelector("#task-form"),tasksList:document.querySelector("#task-list")}).form.addEventListener("submit",(function(e){e.preventDefault();const o=t(e);console.log(o)}));
//# sourceMappingURL=index.740de927.js.map
