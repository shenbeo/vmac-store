"use strict";(self.webpackChunkweb_vmac=self.webpackChunkweb_vmac||[]).push([[5],{3005:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var r=n(2791),a=n(1695),i=n(184),o=r.lazy((function(){return n.e(724).then(n.bind(n,4724))}));function u(){return(0,i.jsx)("div",{children:(0,i.jsx)(a.Zl,{children:(0,i.jsx)(o,{})})})}},1695:function(t,e,n){n.d(e,{Zl:function(){return E},jD:function(){return c}});var r=n(2791);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){var n=(0,r.useState)((function(){try{var n="undefined"!==typeof window&&window.localStorage.getItem(t);return n||e}catch(r){return e}})),a=n[0],i=n[1];return[a,function(e){try{var n=e instanceof Function?e(a):e;i(n),window.localStorage.setItem(t,n)}catch(r){console.log(r)}}]}var o={items:[],isEmpty:!0,totalItems:0,totalUniqueItems:0,cartTotal:0,metadata:{}},u=(0,r.createContext)(o),c=function(){var t=(0,r.useContext)(u);if(!t)throw new Error("Expected to be wrapped in a CartProvider");return t};function d(t,e){switch(e.type){case"SET_ITEMS":return f(t,e.payload);case"ADD_ITEM":var n=[].concat(t.items,[e.payload]);return f(t,n);case"UPDATE_ITEM":var r=t.items.map((function(t){return t.id!==e.id?t:a({},t,e.payload)}));return f(t,r);case"REMOVE_ITEM":var i=t.items.filter((function(t){return t.id!==e.id}));return f(t,i);case"EMPTY_CART":return o;case"CLEAR_CART_META":return a({},t,{metadata:{}});case"SET_CART_META":return a({},t,{metadata:a({},e.payload)});case"UPDATE_CART_META":return a({},t,{metadata:a({},t.metadata,e.payload)});default:throw new Error("No action specified")}}var f=function(t,e){void 0===t&&(t=o);var n=y(e),r=0===n;return a({},o,t,{items:s(e),totalItems:m(e),totalUniqueItems:n,cartTotal:p(e),isEmpty:r})},s=function(t){return t.map((function(t){return a({},t,{itemTotal:t.price*t.quantity})}))},p=function(t){return t.reduce((function(t,e){return t+e.quantity*e.price}),0)},m=function(t){return t.reduce((function(t,e){return t+e.quantity}),0)},y=function(t){return t.length},E=function(t){var e,n=t.children,c=t.id,f=t.defaultItems,s=void 0===f?[]:f,p=t.onSetItems,m=t.onItemAdd,y=t.onItemUpdate,E=t.onItemRemove,l=t.storage,T=void 0===l?i:l,v=t.metadata,I=c||(void 0===e&&(e=12),[].concat(Array(e)).map((function(){return(~~(36*Math.random())).toString(36)})).join("")),_=T(c?"react-use-cart-"+I:"react-use-cart",JSON.stringify(a({id:I},o,{items:s,metadata:v}))),A=_[0],M=_[1],w=(0,r.useReducer)(d,JSON.parse(A)),h=w[0],C=w[1];(0,r.useEffect)((function(){M(JSON.stringify(h))}),[h,M]);return(0,r.createElement)(u.Provider,{value:a({},h,{getItem:function(t){return h.items.find((function(e){return e.id===t}))},inCart:function(t){return h.items.some((function(e){return e.id===t}))},setItems:function(t){C({type:"SET_ITEMS",payload:t.map((function(t){return a({},t,{quantity:t.quantity||1})}))}),p&&p(t)},addItem:function(t,e){if(void 0===e&&(e=1),!t.id)throw new Error("You must provide an `id` for items");if(!(e<=0)){var n=h.items.find((function(e){return e.id===t.id}));if(!n&&!t.hasOwnProperty("price"))throw new Error("You must pass a `price` for new items");if(!n){var r=a({},t,{quantity:e});return C({type:"ADD_ITEM",payload:r}),void(m&&m(r))}var i=a({},t,{quantity:n.quantity+e});C({type:"UPDATE_ITEM",id:t.id,payload:i}),y&&y(i)}},updateItem:function(t,e){t&&e&&(C({type:"UPDATE_ITEM",id:t,payload:e}),y&&y(e))},updateItemQuantity:function(t,e){if(e<=0)return E&&E(t),void C({type:"REMOVE_ITEM",id:t});var n=h.items.find((function(e){return e.id===t}));if(!n)throw new Error("No such item to update");var r=a({},n,{quantity:e});C({type:"UPDATE_ITEM",id:t,payload:r}),y&&y(r)},removeItem:function(t){t&&(C({type:"REMOVE_ITEM",id:t}),E&&E(t))},emptyCart:function(){return C({type:"EMPTY_CART"})},clearCartMetadata:function(){C({type:"CLEAR_CART_META"})},setCartMetadata:function(t){t&&C({type:"SET_CART_META",payload:t})},updateCartMetadata:function(t){t&&C({type:"UPDATE_CART_META",payload:t})}})},n)}}}]);
//# sourceMappingURL=5.ac0c3147.chunk.js.map