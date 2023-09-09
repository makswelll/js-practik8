!function(){function t(t){var e={};return new FormData(t.currentTarget).forEach((function(t,r){e[r]=t})),e}({form:document.querySelector("#task-form"),tasksList:document.querySelector("#task-list")}).form.addEventListener("submit",(function(e){e.preventDefault();var r=t(e);console.log(r)}))}();
//# sourceMappingURL=index.ce1d6708.js.map
