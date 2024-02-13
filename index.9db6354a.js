function n(n,e){// write your code here
return new Promise(function(t){n.addEventListener(e,function(){// eslint-disable-next-line
t("It was ".concat(e," on the element: ").concat(n.nodeName,", id: ").concat(n.id,"."))})})}var e=function(n){// write your code here
document.body.insertAdjacentHTML("beforeend",'<div class="message">\n      '.concat(n,"\n    </div>"))},t=document.getElementById("login"),c=document.getElementById("password"),o=document.getElementById("submit");n(t,"click").then(e),n(c,"click").then(e),n(o,"click").then(e),n(t,"input").then(e),n(c,"input").then(e),n(t,"blur").then(e),n(c,"blur").then(e),n(o,"blur").then(e);//# sourceMappingURL=index.9db6354a.js.map

//# sourceMappingURL=index.9db6354a.js.map
