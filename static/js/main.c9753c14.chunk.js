(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a(261)},260:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),c=a.n(i),o=a(35),l=a(34),s=a(20),u=a(21),m=a(23),d=a(22),h=a(24),g=a(39),y=a(38),b=a.n(y),p=a(5),E=a.n(p),v=a(112),f=a.n(v),w=a(16),x=a.n(w),j=a(65),O=a.n(j),k=a(15),L=a(6),A=a.n(L),F=new Uint16Array(1),S=new Uint8Array(F.buffer);S[0]=255,S[1]=0;var B=255===F[0],C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getFloatArray=a.getFloatArray.bind(Object(k.a)(Object(k.a)(a))),a.readFloatForwards=a.readFloatForwards.bind(Object(k.a)(Object(k.a)(a))),a.readFloatBackwards=a.readFloatBackwards.bind(Object(k.a)(Object(k.a)(a))),a.readFloat=a.readFloat.bind(Object(k.a)(Object(k.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getFloatArray",value:function(){return 4===this.props.byteLength?new Float32Array(1):new Float64Array(1)}},{key:"readFloatForwards",value:function(){for(var e=this.props,t=e.array,a=e.byteLength,n=this.getFloatArray(),r=new Uint8Array(n.buffer),i=0;i<a;i++)r[i]=t[i];return n[0]}},{key:"readFloatBackwards",value:function(){for(var e=this.props,t=e.array,a=e.byteLength,n=this.getFloatArray(),r=new Uint8Array(n.buffer),i=0;i<a;i++)r[a-i-1]=t[i];return n[0]}},{key:"readFloat",value:function(){return B?this.readFloatBackwards():this.readFloatForwards()}},{key:"render",value:function(){return r.a.createElement(A.a,{variant:"body1"},this.readFloat())}}]),t}(r.a.Component);function U(e){return e.toString(16).toUpperCase().padStart(2,"0")}var I=function(e){var t=e.array;return r.a.createElement(A.a,{variant:"subtitle1"},t.map(U).join(" "))};var N=function(e){var t=e.array,a=e.byteLength;return r.a.createElement(x.a,{spacing:16,container:!0},r.a.createElement(x.a,{xs:12,item:!0},r.a.createElement(I,{array:t})),r.a.createElement(x.a,{xs:12,item:!0},r.a.createElement(C,{array:t,byteLength:a})))};var P=E()(function(e){return{root:{padding:4*e.spacing.unit},typography:{fontFamily:'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}})(function(e){var t=e.classes,a=e.version;return r.a.createElement("footer",{className:t.root},r.a.createElement(A.a,{className:t.typography,align:"center",color:"textPrimary",variant:"subtitle1"},a),r.a.createElement(A.a,{className:t.typography,align:"center",color:"textPrimary",variant:"subtitle1"},"Made by Gihwan Kim, Powered by GitHub Pages"))}),G=a(102),D=a.n(G);var M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(k.a)(Object(k.a)(a))),a.state={error:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=this.state.error,a=e.target.value;if(/^[a-fA-F0-9\s]*$/.test(a)){var n=a;n=(n=n.replace(/\s/g,"")).toUpperCase();for(var r=[],i=0;i<n.length;i+=2){var c=n.slice(i,i+2),o=parseInt(c,16);r.push(o)}!0===t&&this.setState({error:!1}),this.props.change(r)}else!1===t&&this.setState({error:!0})}},{key:"render",value:function(){var e=this.state.error;return r.a.createElement(D.a,{error:e,helperText:e&&"please enter the correct hex string.",placeholder:"please enter the hex string.",variant:"outlined",fullWidth:!0,multiline:!0,onChange:this.handleChange})}}]),t}(r.a.Component),R=Object(o.b)(null,function(e){return{change:function(t){return e(function(e){return{type:"CHANGE_INPUT",input:e}}(t))}}})(M),H=a(18),T=a.n(H),W={0:new T.a(2).pow(0),1:new T.a(2).pow(8),2:new T.a(2).pow(16),3:new T.a(2).pow(24),4:new T.a(2).pow(32),5:new T.a(2).pow(40),6:new T.a(2).pow(48),7:new T.a(2).pow(56),8:new T.a(2).pow(64)},J={2:new T.a(2).pow(15),4:new T.a(2).pow(31),8:new T.a(2).pow(63)},$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).readUnsignedInteger=a.readUnsignedInteger.bind(Object(k.a)(Object(k.a)(a))),a.readSignedInteger=a.readSignedInteger.bind(Object(k.a)(Object(k.a)(a))),a.renderInteger=a.renderInteger.bind(Object(k.a)(Object(k.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"readUnsignedInteger",value:function(){var e=this.props,t=e.array,a=e.byteLength;return t.reduce(function(e,t,n){return e.plus(new T.a(t).times(W[a-n-1]))},new T.a(0))}},{key:"readSignedInteger",value:function(){var e=this.props.byteLength,t=this.readUnsignedInteger();return t.gte(J[e])?t.minus(W[e]):t}},{key:"renderInteger",value:function(){return this.props.signed?r.a.createElement(A.a,{variant:"body1"},this.readSignedInteger().toString()):r.a.createElement(A.a,{variant:"body1"},this.readUnsignedInteger().toString())}},{key:"render",value:function(){var e=this.props.signed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{variant:"overline"},e?"Signed":"Unsigned"),this.renderInteger())}}]),t}(r.a.Component);var _=function(e){var t=e.array,a=e.byteLength,n=8===a;return r.a.createElement(x.a,{spacing:16,container:!0},r.a.createElement(x.a,{xs:12,item:!0},r.a.createElement(I,{array:t})),r.a.createElement(x.a,{xs:n?12:6,sm:!!n&&6,item:!0},r.a.createElement($,{array:t,byteLength:a,signed:!0})),r.a.createElement(x.a,{xs:n?12:6,sm:!!n&&6,item:!0},r.a.createElement($,{array:t,byteLength:a,signed:!1})))},K=a(105),V=a.n(K),q=a(67),z=a.n(q),Q=a(106),X=a.n(Q),Y=a(49),Z=a.n(Y);var ee=function(e){return r.a.createElement(Z.a,e,r.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}))},te=a(103),ae=a.n(te),ne=a(104),re=a.n(ne);var ie=E()(function(e){return{root:{textTransform:"lowercase"},icon:{marginRight:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(ae.a,{className:t.root,color:"inherit",component:"a",href:"/"},r.a.createElement(re.a,{className:t.icon,color:"inherit"}),r.a.createElement(A.a,{color:"inherit",component:"h1",variant:"h6"},"chendian"))});var ce=E()(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},icon:{marginRight:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(V.a,{position:"static"},r.a.createElement(X.a,null,r.a.createElement(ie,null),r.a.createElement("div",{className:t.grow}),r.a.createElement(z.a,{color:"inherit",component:"a",href:"https://github.com/ghkim3221/chendian"},r.a.createElement(ee,null)))))}),oe=a(108),le=a.n(oe),se=a(111),ue=a.n(se),me=a(109),de=a.n(me),he=a(110),ge=a.n(he),ye=a(66),be=a.n(ye),pe=a(107),Ee=a.n(pe);var ve=function(e){var t=e.byteLength;switch(e.endianness){case"big":return function(e){switch(e){case 2:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"A B");case 4:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"A B C D");case 8:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"A B C D E F G H");default:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"Unknown")}}(t);case"middleBig":return function(e){switch(e){case 2:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"A B");case 4:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"B A D C");case 8:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"B A D C F E H G");default:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"Unknown")}}(t);case"middleLittle":return function(e){switch(e){case 2:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"A B");case 4:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"C D A B");case 8:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"G H E F C D A B");default:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"Unknown")}}(t);case"little":return function(e){switch(e){case 2:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"B A");case 4:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"D C B A");case 8:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"H G F E D C B A");default:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"Unknown")}}(t);default:return r.a.createElement(A.a,{color:"textSecondary",variant:"h6"},"Unknown")}};var fe=function(e){switch(e.endianness){case"big":return r.a.createElement(A.a,{color:"textPrimary",variant:"h5"},"Big Endian");case"middleBig":return r.a.createElement(A.a,{color:"textPrimary",variant:"h5"},"Middle Big Endian");case"middleLittle":return r.a.createElement(A.a,{color:"textPrimary",variant:"h5"},"Middle Little Endian");case"little":return r.a.createElement(A.a,{color:"textPrimary",variant:"h5"},"Little Endian");default:return r.a.createElement(A.a,{color:"textPrimary",variant:"h5"},"Unknown")}};var we=function(e){return function(t){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,t),Object(u.a)(a,[{key:"render",value:function(){for(var t=this.props,a=t.array,n=t.byteLength,i=t.endianness,c=[],o=function(e){var t=new Array(n);switch(t.fill(0),a.slice(e,e+n).forEach(function(e,a){t[a]=e}),i){case"big":c.push(function(e,t){var a=new Array(e);switch(a.fill(0),e){case 2:a[0]=t[0],a[1]=t[1];break;case 4:a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3];break;case 8:a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7]}return a}(n,t));break;case"middleBig":c.push(function(e,t){var a=new Array(e);switch(a.fill(0),e){case 2:a[0]=t[0],a[1]=t[1];break;case 4:a[0]=t[1],a[1]=t[0],a[2]=t[3],a[3]=t[2];break;case 8:a[0]=t[1],a[1]=t[0],a[2]=t[3],a[3]=t[2],a[4]=t[5],a[5]=t[4],a[6]=t[7],a[7]=t[6]}return a}(n,t));break;case"middleLittle":c.push(function(e,t){var a=new Array(e);switch(a.fill(0),e){case 2:a[0]=t[0],a[1]=t[1];break;case 4:a[0]=t[2],a[1]=t[3],a[2]=t[0],a[3]=t[1];break;case 8:a[0]=t[6],a[1]=t[7],a[2]=t[4],a[3]=t[5],a[4]=t[2],a[5]=t[3],a[6]=t[1],a[7]=t[0]}return a}(n,t));break;case"little":c.push(function(e,t){var a=new Array(e);switch(a.fill(0),e){case 2:a[0]=t[1],a[1]=t[0];break;case 4:a[0]=t[3],a[1]=t[2],a[2]=t[1],a[3]=t[0];break;case 8:a[0]=t[7],a[1]=t[6],a[2]=t[5],a[3]=t[4],a[4]=t[3],a[5]=t[2],a[6]=t[1],a[7]=t[0]}return a}(n,t))}},l=0;l<a.length;l+=n)o(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{endianness:i}),r.a.createElement(ve,{byteLength:n,endianness:i}),r.a.createElement(be.a,null,c.map(function(t,a){return r.a.createElement(Ee.a,{key:a,divider:!0},r.a.createElement(e,{array:t,byteLength:n}))})))}}]),a}(r.a.Component)},xe=function(e){return function(t){var a=t.array,n=t.byteLength,i=t.title,c=we(e);return r.a.createElement(le.a,{defaultExpanded:!0},r.a.createElement(de.a,{expandIcon:r.a.createElement(ge.a,null)},r.a.createElement(A.a,null,i)),r.a.createElement(ue.a,null,r.a.createElement(x.a,{spacing:16,container:!0},r.a.createElement(x.a,{xs:12,lg:6,item:!0},r.a.createElement(c,{array:a,byteLength:n,endianness:"big"})),r.a.createElement(x.a,{xs:12,lg:6,item:!0},r.a.createElement(c,{array:a,byteLength:n,endianness:"little"})),n>2&&r.a.createElement(x.a,{xs:12,lg:6,item:!0},r.a.createElement(c,{array:a,byteLength:n,endianness:"middleBig"})),n>2&&r.a.createElement(x.a,{xs:12,lg:6,item:!0},r.a.createElement(c,{array:a,byteLength:n,endianness:"middleLittle"})))))}},je=b()({palette:{primary:{main:"#263238",dark:"#000A12",light:"#4F5B62"}},typography:{useNextVariants:!0}}),Oe=xe(_),ke=xe(N),Le=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.version,n=e.input;return r.a.createElement(O.a,{theme:je},r.a.createElement(f.a,null),r.a.createElement(ce,null),r.a.createElement(x.a,{className:t.layout,spacing:16,container:!0},r.a.createElement(x.a,{xs:12,item:!0},r.a.createElement(R,null)),r.a.createElement(x.a,{xs:12,item:!0},r.a.createElement(Oe,{array:n,byteLength:8,title:"64 bit integer"})),r.a.createElement(x.a,{xs:12,item:!0},r.a.createElement(Oe,{array:n,byteLength:4,title:"32 bit integer"})),r.a.createElement(x.a,{xs:12,item:!0},r.a.createElement(Oe,{array:n,byteLength:2,title:"16 bit integer"})),r.a.createElement(x.a,{xs:12,item:!0},r.a.createElement(ke,{array:n,byteLength:8,title:"double"})),r.a.createElement(x.a,{xs:12,item:!0},r.a.createElement(ke,{array:n,byteLength:4,title:"float"}))),r.a.createElement(P,{version:a}))}}]),t}(r.a.Component),Ae=Object(o.b)(function(e){return{input:e.input}})(E()(function(e){var t;return{layout:(t={width:"auto",paddingTop:4*e.spacing.unit,paddingBottom:2*e.spacing.unit,marginLeft:e.spacing.unit,marginRight:e.spacing.unit},Object(g.a)(t,e.breakpoints.up("sm"),{width:"540px",marginLeft:"auto",marginRight:"auto"}),Object(g.a)(t,e.breakpoints.up("md"),{width:"720px",marginLeft:"auto",marginRight:"auto"}),Object(g.a)(t,e.breakpoints.up("lg"),{width:"960px",marginLeft:"auto",marginRight:"auto"}),Object(g.a)(t,e.breakpoints.up("lg"),{width:"1140px",marginLeft:"auto",marginRight:"auto"}),t)}})(Le)),Fe=(a(260),Object(l.b)({input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_INPUT":return t.input;default:return e}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=Object(l.c)(Fe);c.a.render(r.a.createElement(o.a,{store:Se},r.a.createElement(Ae,{version:"chendian 1.1.0"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.c9753c14.chunk.js.map