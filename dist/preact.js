(()=>{"use strict";var t,e,n,r,_,o={},l=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(t,e){for(var n in e)t[n]=e[n];return t}function c(t){var e=t.parentNode;e&&e.removeChild(t)}function a(t,e,n){var r,_,o,l=arguments,i={};for(o in e)"key"==o?r=e[o]:"ref"==o?_=e[o]:i[o]=e[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===i[o]&&(i[o]=t.defaultProps[o]);return s(t,i,r,_,null)}function s(e,n,r,_,o){var l={type:e,props:n,key:r,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++t.__v:o};return null!=t.vnode&&t.vnode(l),l}function f(t){return t.children}function p(t,e){this.props=t,this.context=e}function d(t,e){if(null==e)return t.__?d(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?d(t):null}function h(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return h(t)}}function v(_){(!_.__d&&(_.__d=!0)&&e.push(_)&&!y.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||n)(y)}function y(){for(var t;y.__r=e.length;)t=e.sort((function(t,e){return t.__v.__b-e.__v.__b})),e=[],t.some((function(t){var e,n,r,_,o,l,i;t.__d&&(l=(o=(e=t).__v).__e,(i=e.__P)&&(n=[],(r=u({},o)).__v=o.__v+1,_=x(i,o,r,e.__n,void 0!==i.ownerSVGElement,null!=o.__h?[l]:null,n,null==l?d(o):l,o.__h),T(n,o),_!=l&&h(o)))}))}function m(t,e,n,r,_,i,u,a,p,h){var v,y,m,b,k,w,S,A=r&&r.__k||l,T=A.length;for(p==o&&(p=null!=u?u[0]:T?d(r,0):null),n.__k=[],v=0;v<e.length;v++)if(null!=(b=n.__k[v]=null==(b=e[v])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?s(null,b,null,null,b):Array.isArray(b)?s(f,{children:b},null,null,null):null!=b.__e||null!=b.__c?s(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(m=A[v])||m&&b.key==m.key&&b.type===m.type)A[v]=void 0;else for(y=0;y<T;y++){if((m=A[y])&&b.key==m.key&&b.type===m.type){A[y]=void 0;break}m=null}k=x(t,b,m=m||o,_,i,u,a,p,h),(y=b.ref)&&m.ref!=y&&(S||(S=[]),m.ref&&S.push(m.ref,null,b),S.push(y,b.__c||k,b)),null!=k?(null==w&&(w=k),p=g(t,b,m,A,u,k,p),h||"option"!=n.type?"function"==typeof n.type&&(n.__d=p):t.value=""):p&&m.__e==p&&p.parentNode!=t&&(p=d(m))}if(n.__e=w,null!=u&&"function"!=typeof n.type)for(v=u.length;v--;)null!=u[v]&&c(u[v]);for(v=T;v--;)null!=A[v]&&H(A[v],A[v]);if(S)for(v=0;v<S.length;v++)E(S[v],S[++v],S[++v])}function g(t,e,n,r,_,o,l){var i,u,c;if(void 0!==e.__d)i=e.__d,e.__d=void 0;else if(_==n||o!=l||null==o.parentNode)t:if(null==l||l.parentNode!==t)t.appendChild(o),i=null;else{for(u=l,c=0;(u=u.nextSibling)&&c<r.length;c+=2)if(u==o)break t;t.insertBefore(o,l),i=l}return void 0!==i?i:o.nextSibling}function b(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||i.test(e)?n:n+"px"}function k(t,e,n,r,_){var o,l,i;if(_&&"className"==e&&(e="class"),"style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||b(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||b(t.style,e,n[e])}else"o"===e[0]&&"n"===e[1]?(o=e!==(e=e.replace(/Capture$/,"")),(l=e.toLowerCase())in t&&(e=l),e=e.slice(2),t.l||(t.l={}),t.l[e+o]=n,i=o?S:w,n?r||t.addEventListener(e,i,o):t.removeEventListener(e,i,o)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&"href"!==e&&!_&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function w(e){this.l[e.type+!1](t.event?t.event(e):e)}function S(e){this.l[e.type+!0](t.event?t.event(e):e)}function A(t,e,n){var r,_;for(r=0;r<t.__k.length;r++)(_=t.__k[r])&&(_.__=t,_.__e&&("function"==typeof _.type&&_.__k.length>1&&A(_,e,n),e=g(n,_,_,t.__k,null,_.__e,e),"function"==typeof t.type&&(t.__d=e)))}function x(e,n,r,_,o,l,i,c,a){var s,d,h,v,y,g,b,k,w,S,x,T=n.type;if(void 0!==n.constructor)return null;null!=r.__h&&(a=r.__h,c=n.__e=r.__e,n.__h=null,l=[c]),(s=t.__b)&&s(n);try{t:if("function"==typeof T){if(k=n.props,w=(s=T.contextType)&&_[s.__c],S=s?w?w.props.value:s.__:_,r.__c?b=(d=n.__c=r.__c).__=d.__E:("prototype"in T&&T.prototype.render?n.__c=d=new T(k,S):(n.__c=d=new p(k,S),d.constructor=T,d.render=P),w&&w.sub(d),d.props=k,d.state||(d.state={}),d.context=S,d.__n=_,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=T.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=u({},d.__s)),u(d.__s,T.getDerivedStateFromProps(k,d.__s))),v=d.props,y=d.state,h)null==T.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==T.getDerivedStateFromProps&&k!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,S),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,S)||n.__v===r.__v){d.props=k,d.state=d.__s,n.__v!==r.__v&&(d.__d=!1),d.__v=n,n.__e=r.__e,n.__k=r.__k,d.__h.length&&i.push(d),A(n,c,e);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,S),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,y,g)}))}d.context=S,d.props=k,d.state=d.__s,(s=t.__r)&&s(n),d.__d=!1,d.__v=n,d.__P=e,s=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(_=u(u({},_),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(v,y)),x=null!=s&&s.type==f&&null==s.key?s.props.children:s,m(e,Array.isArray(x)?x:[x],n,r,_,o,l,i,c,a),d.base=n.__e,n.__h=null,d.__h.length&&i.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==l&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=C(r.__e,n,r,_,o,l,i,a);(s=t.diffed)&&s(n)}catch(e){n.__v=null,(a||null!=l)&&(n.__e=c,n.__h=!!a,l[l.indexOf(c)]=null),t.__e(e,n,r)}return n.__e}function T(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function C(t,e,n,r,_,i,u,c){var a,s,f,p,d,h=n.props,v=e.props;if(_="svg"===e.type||_,null!=i)for(a=0;a<i.length;a++)if(null!=(s=i[a])&&((null===e.type?3===s.nodeType:s.localName===e.type)||t==s)){t=s,i[a]=null;break}if(null==t){if(null===e.type)return document.createTextNode(v);t=_?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,v.is&&{is:v.is}),i=null,c=!1}if(null===e.type)h===v||c&&t.data===v||(t.data=v);else{if(null!=i&&(i=l.slice.call(t.childNodes)),f=(h=n.props||o).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=i)for(h={},d=0;d<t.attributes.length;d++)h[t.attributes[d].name]=t.attributes[d].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}(function(t,e,n,r,_){var o;for(o in n)"children"===o||"key"===o||o in e||k(t,o,null,n[o],r);for(o in e)_&&"function"!=typeof e[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===e[o]||k(t,o,e[o],n[o],r)})(t,v,h,_,c),p?e.__k=[]:(a=e.props.children,m(t,Array.isArray(a)?a:[a],e,n,r,"foreignObject"!==e.type&&_,i,u,o,c)),c||("value"in v&&void 0!==(a=v.value)&&(a!==t.value||"progress"===e.type&&!a)&&k(t,"value",a,h.value,!1),"checked"in v&&void 0!==(a=v.checked)&&a!==t.checked&&k(t,"checked",a,h.checked,!1))}return t}function E(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function H(e,n,r){var _,o,l;if(t.unmount&&t.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||E(_,null,n)),r||"function"==typeof e.type||(r=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(_=e.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(e){t.__e(e,n)}_.base=_.__P=null}if(_=e.__k)for(l=0;l<_.length;l++)_[l]&&H(_[l],n,r);null!=o&&c(o)}function P(t,e,n){return this.constructor(t,n)}t={__e:function(t,e){for(var n,r,_,o=e.__h;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),_=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),_=n.__d),_)return e.__h=o,n.__E=n}catch(e){t=e}throw t},__v:0},p.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof t&&(t=t(u({},n),this.props)),t&&u(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),v(this))},p.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),v(this))},p.prototype.render=f,e=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0,_=o;var D,N,U,O=0,j=[],F=t.__b,I=t.__r,M=t.diffed,L=t.__c,W=t.unmount;function q(e,n){t.__h&&t.__h(N,e,O||n),O=0;var r=N.__H||(N.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function B(t){return O=1,function(t,e,n){var r=q(D++,2);return r.t=t,r.__c||(r.__=[J(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=N),r.__}(J,t)}function R(e,n){var r=q(D++,3);!t.__s&&K(r.__H,n)&&(r.__=e,r.__H=n,N.__H.__h.push(r))}function $(){j.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(G),e.__H.__h.forEach(V),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}})),j=[]}t.__b=function(t){N=null,F&&F(t)},t.__r=function(t){I&&I(t),D=0;var e=(N=t.__c).__H;e&&(e.__h.forEach(G),e.__h.forEach(V),e.__h=[])},t.diffed=function(e){M&&M(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==j.push(n)&&U===t.requestAnimationFrame||((U=t.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),z&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);z&&(e=requestAnimationFrame(n))})($)),N=void 0},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(G),e.__h=e.__h.filter((function(t){return!t.__||V(t)}))}catch(r){n.some((function(t){t.__h&&(t.__h=[])})),n=[],t.__e(r,e.__v)}})),L&&L(e,n)},t.unmount=function(e){W&&W(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(G)}catch(e){t.__e(e,n.__v)}};var z="function"==typeof requestAnimationFrame;function G(t){var e=N;"function"==typeof t.__c&&t.__c(),N=e}function V(t){var e=N;t.__c=t.__(),N=e}function K(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function J(t,e){return"function"==typeof e?e(t):e}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const X=function(t){var e=t.id,n=t.title,r=t.isCompleted,_=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,_=!1,o=void 0;try{for(var l,i=t[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){_=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(_)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(B(!1),2),o=_[0],l=_[1],i=(O=5,function(t,e){var n=q(D++,7);return K(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}((function(){return{current:null}}),[]));return R((function(){o&&i.current&&(i.current.focus(),i.current.value=n)}),[o]),a("div",{class:"todo-item"},o?a("form",{class:"todo-form",onSubmit:function(t){t.preventDefault(),store.editTodo(e,t.target.elements.title.value),l(!1)}},a("input",{ref:i,type:"text",name:"title",placeholder:"Todo title"}),a("button",{class:"material-icons"},"check"),a("i",{class:"material-icons",onClick:function(){return l(!1)}},"close")):a("div",{class:"todo-view"},a("label",null,a("input",{type:"checkbox",checked:r,onInput:function(){return store.toggleCompleted(e)}}),a("span",null,n)),a("i",{class:"material-icons",onClick:function(){return l(!0)}},"edit"),a("i",{class:"material-icons",onClick:function(){return store.removeTodo(e)}},"delete")))};function Y(){return(Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(e,n,r){var i,u,c;t.__&&t.__(e,n),u=(i=r===_)?null:r&&r.__k||n.__k,e=a(f,null,[e]),c=[],x(n,(i?n:r||n).__k=e,u||o,o,void 0!==n.ownerSVGElement,r&&!i?[r]:u?null:n.childNodes.length?l.slice.call(n.childNodes):null,c,r||o,i),T(c,e)}(a((function(){var t=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,_=!1,o=void 0;try{for(var l,i=t[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){_=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(_)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(B(store.getTodos()),2),e=t[0],n=t[1];return R((function(){store.subscribeTodos((function(t){return n(t)}))}),[]),a("div",{class:"card"},a("h5",{class:"section center-align white-text"},"Preact"),a("div",{class:"card-content"},a("form",{class:"add-form row valign-wrapper",onSubmit:function(t){t.preventDefault(),store.addTodo(t.target.elements.title.value),t.currentTarget.reset()}},a("div",{class:"input-field col s9"},a("input",{type:"text",name:"title",placeholder:"Add todo"})),a("button",{class:"col s3 btn"},"Add")),a("div",{class:"todo-items"},e.map((function(t){return a(X,Y({key:store.getTodoKey(t)},t))})))))}),null),document.getElementById("preact"))})();