(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),i=a(2),u=a.n(i),s=a(6),r=a(3),c=a(4),o=a(7),p=a(5),m=a(8),h=(a(15),function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(p.a)(e).call(this,t))).handleInputUrlChange=function(t){a.setState({input_url:t.target.value})},a.handleInputTitleChange=function(t){a.setState({input_title:t.target.value})},a.handleSubmit=function(t){if(t.preventDefault(),""!==a.state.input_title||""!==a.state.input_url){var e={id:a.state.list.length,url:a.state.input_url,title:a.state.input_title};a.setState({list:[].concat(Object(s.a)(a.state.list),[e])})}},a.state={input_url:"",input_title:"",list:[{id:0,url:"https://santabarbaraca.com/content/uploads/2015/08/hiking-in-santa-barbara.jpg",title:"hiking"}]},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){console.log(this.state.list)}},{key:"render",value:function(){return l.a.createElement("div",{className:"outer"},l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("input",{className:"url_input",type:"text",placeholder:"Enter URL",value:this.state.input_url,onChange:this.handleInputUrlChange})),l.a.createElement("div",null,l.a.createElement("input",{className:"inputtitle",type:"text",placeholder:"Title",value:this.state.input_title,onChange:this.handleInputTitleChange}),l.a.createElement("button",{type:"submit",className:"button"},"New Post"))),l.a.createElement("div",null,this.state.list.map(function(t){return l.a.createElement("div",{className:"picture",key:t.id},l.a.createElement("div",{className:"picTitle"},t.title),l.a.createElement("img",{className:"image",src:t.url,alt:t.url}))})))}}]),e}(n.Component));u.a.render(l.a.createElement(h,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bddcfc9f.chunk.js.map