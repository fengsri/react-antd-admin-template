(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[21],{1350:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=(n(483),n(482)),o=(n(1263),n(1264),n(1265)),s=n(477),u=function(){return i.a.createElement("div",{className:"app-container"},i.a.createElement(s.a,{title:"Markdown\u7f16\u8f91\u5668",source:'\u6b64\u9875\u9762\u7528\u5230\u7684Markdown\u7f16\u8f91\u5668\u662f<a href="https://github.com/nhn/tui.editor/tree/master/apps/react-editor" target="_blank">tui.editor(React\u7248)</a>'}),i.a.createElement("br",null),i.a.createElement(r.a,{bordered:!1},i.a.createElement(o.Editor,{initialValue:"hello \u96be\u51c9\u70ed\u8840!",previewStyle:"vertical",height:"600px",initialEditType:"markdown",useCommandShortcut:!0})))};e.default=function(){return i.a.createElement(u,null)}},477:function(t,e,n){"use strict";n(483);var a=n(482),i=n(39),r=n(40),o=n(42),s=n(41),u=n(0),c=n.n(u),l=function(){function t(e){Object(i.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(r.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var n=Array.from(t.childNodes),a=0;a<n.length;a++){var i=n[a];if(3===i.nodeType)e=e.concat(i.nodeValue.split(""));else if(1===i.nodeType){var r=[];r=this.convert(i,r),e.push({dom:i,val:r})}}return e}},{key:"print",value:function(t,e,n){setTimeout((function(){t.appendChild(document.createTextNode(e)),n()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var n=t.val.shift();if("string"===typeof n)this.print(t.dom,n,(function(){e.play(t)}));else{var a=n.dom.cloneNode();t.dom.appendChild(a),this.play({parent:t,dom:a,val:n.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}(),h=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){new l({source:this.source,output:this.output,delay:30}).start()}},{key:"render",value:function(){var t=this;return c.a.createElement(a.a,{bordered:!1,className:"card-item",title:this.props.title,style:{minHeight:this.props.height},id:this.props.id},c.a.createElement("div",{style:{display:"none"},ref:function(e){return t.source=e},dangerouslySetInnerHTML:{__html:this.props.source}}),c.a.createElement("div",{ref:function(e){return t.output=e}}))}}]),n}(c.a.Component);h.defaultProps={title:"\u4f55\u65f6\u4f7f\u7528",source:"",height:136};e.a=h}}]);